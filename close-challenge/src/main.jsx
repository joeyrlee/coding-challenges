import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './normalize.css'

const { memo, useCallback, useState } = React;

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const ignoreEnterKey = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
}

const ListItem = memo(({ color, isSelected, name, selectItem }) => (
  <button
    aria-checked={isSelected}
    className={`List__item List__item--${color}` + (isSelected ? ' List__item--selected' : '')}
    onClick={() => selectItem(name)}
    // more accurately emulate checkbox keyboard controls by NOT checking checkboxes on enter key press
    onKeyDown={ignoreEnterKey}
    role="checkbox"
  >
    {name}
  </button>
))

const List = ({ items }) => {
  const [selectedItemNames, setSelectedItemNames] = useState(new Set()); // Set<string>
  
  // (itemName: string): Set<string>
  const selectItem = useCallback(itemName => {
    return setSelectedItemNames(prevItemNames => {
      const newItemNames = new Set(prevItemNames);
      if (newItemNames.has(itemName)) {
        newItemNames.delete(itemName)
      } else {
        newItemNames.add(itemName);
      }
      return newItemNames;
    })
  }, [])

  return (
    <>
      <h1>Selected items:</h1>
      <ul aria-live="polite">
        {[...selectedItemNames].map(selectedItemName => 
        	<li key={selectedItemName}>{selectedItemName}</li>
        )}
      </ul>
      <ul className="List" role="listbox" aria-label="Selection List">
        {items.map(item => (
          <ListItem
            color={item.color}
            isSelected={selectedItemNames.has(item.name)}
            key={item.name}
            name={item.name}
            selectItem={selectItem}
          />
        ))}
      </ul>
    </>
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
