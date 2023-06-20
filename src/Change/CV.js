import React, { useState } from 'react';
import axios from 'axios';
import { Api } from "../Backened/Api";

const User = () => {
  const [textInput, setTextInput] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = () => {
    console.log(textInput, image)
    const formdata = new FormData()

    formdata.append('textInput', textInput)
    formdata.append('image', image)

    axios.post(`${Api}/change`,
      formdata,)
      .then((res) => {
        console.log(res.data)
        alert("Added")
      })
    }


  return (
    <div className="App">
      <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])} />
      <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default User;