import React from "react";

function CustomFileInput(props) {
  return (
    <div className="file-upload">
      <label htmlFor={props.id}>
        <span>Upload item images</span>
      </label>
      <input id={props.id} type="file" onChange={props.onChange} multiple />
    </div>
  );
}

export default CustomFileInput;
