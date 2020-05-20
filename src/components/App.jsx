import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, inputList] = useState([]);

  function addItem(note) {
    console.log(note);
    inputList(preList => {
      return [...preList, note];
    });
    console.log(list);
  }

  function deleteItem(id) {
    inputList(preList => {
      return preList.filter((listItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea click={addItem} />
      {list.map((listItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={listItems.title}
            content={listItems.content}
            delete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
