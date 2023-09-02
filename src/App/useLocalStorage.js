import react from "react";

function useLocalStorage(itemName, initianValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItems;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initianValue));
    parsedItems = initianValue;
  } else {
    parsedItems = JSON.parse(localStorageItem);
  }
  const [item, setItem] = react.useState(parsedItems);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
