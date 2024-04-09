import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square({ handleClick, value }) {
  return (
    <div
      className="square"
      onClick={() => {
        if (value == null) handleClick();
      }}
      style={squareStyle}
    >
      { value }
    </div>
  );
}

function checkForWinner(board) {
  const validLines = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6]
  ];

  const winningLines = validLines.find(([sq1, sq2, sq3]) => {
    return board[sq1] !== null && board[sq1] === board[sq2] && board[sq1] === board[sq3];
  });
  if (winningLines !== undefined) {
    return board[winningLines[0]];
  }
}

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [numTurn, setNumTurn] = useState(0);

  const isTurnX = numTurn % 2 === 0;
  const nextVal = isTurnX ? 'X' : 'O';

  function handleClick(squareNum) {
    setBoard(prevBoard => prevBoard.toSpliced(squareNum, 1, nextVal));
    setNumTurn(prevTurn => prevTurn + 1);
  }

  function handleReset() {
    setBoard(Array(9).fill(null));
    setNumTurn(0);
  }

  const winner = checkForWinner(board);

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{nextVal}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{ winner != null ? winner : 'None' }</span></div>
      <button onClick={handleReset} style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square handleClick={() => handleClick(0)} value={board[0]} />
          <Square handleClick={() => handleClick(1)} value={board[1]} />
          <Square handleClick={() => handleClick(2)} value={board[2]} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square handleClick={() => handleClick(3)} value={board[3]} />
          <Square handleClick={() => handleClick(4)} value={board[4]} />
          <Square handleClick={() => handleClick(5)} value={board[5]} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square handleClick={() => handleClick(6)} value={board[6]} />
          <Square handleClick={() => handleClick(7)} value={board[7]} />
          <Square handleClick={() => handleClick(8)} value={board[8]} />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);
