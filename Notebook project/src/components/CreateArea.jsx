import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [notEkle, setNotEkle] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNotEkle((prevEkle) => {
      return {
        ...prevEkle,
        [name]: value
      };
    });
  }
  function submitNot(event) {
    props.onAdd(notEkle);
    setNotEkle({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={notEkle.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={notEkle.content}
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom in={true}>
          <Fab onClick={submitNot}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
