import React, { useState } from "react";

function CreateArea(props) {
  const [listItem, itemInput] = useState({
    title: "",
    content: ""
  });

  //const [list, listInput] = useState([]);

  function handleChange(event) {
    //console.log(listItem);
    const { name, value } = event.target;
    itemInput(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function sendItem(event) {
    props.click(listItem);
    itemInput({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={listItem.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={listItem.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit" onClick={sendItem}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
