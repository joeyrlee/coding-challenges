import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './normalize.css'

const { Fragment, useState } = React;

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const List = ({ items }) => {
  // track selected items using an object for efficient reads, updates, and deletes of items
  // key-value store structured {[itemName: string]: {name: string; color: string}}
  const [selectedItemsByName, setSelectedItems] = useState({});
  
  const handleSelectItem = item => {
  	setSelectedItems(prevItems => {
    	const updatedItems = {...prevItems};
    	if (item.name in updatedItems) {
      	delete updatedItems[item.name];
      } else {
	      updatedItems[item.name] = item;
      }
      return updatedItems;
    });
  }
  
  return (
    <Fragment>
      <h1>Items</h1>
      <h2>Selected Items:</h2>
      <ul>
        {Object.values(selectedItemsByName).map(item => (
        <li key={item.name} className={`List__selected-item`}>
          <span className={`List__item--${item.color}`}>{item.name}</span>
        </li>
        ))}
      </ul>
      <h2>Items available to select:</h2>
      <ul className="List">
        {items.map(item => (
          <li
            key={item.name}
            className={`List__item ${item.name in selectedItemsByName ? 'List__item__selected' : ''} List__item--${item.color}`}
            onClick={() => handleSelectItem(item)}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <List items={items}/>,
);