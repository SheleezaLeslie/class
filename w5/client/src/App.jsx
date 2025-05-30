import { useState, useEffect } from 'react';

const App = () => {

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/data`);
      const data = await response.json();
      setMessage(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const loginForm = async (e) => {
    e.preventDefault();
    const submission = { email, password };
    try {
      const response = await fetch(`http://localhost:8000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      const data = await response.json();
      setMessage(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  // for for file upload

  const fileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData;
    formData.append("file", file);
    try {
      const response = await fetch("https://localhost/8000/fileform", {
        mething: "POST",
        body: formData, 
      });
      const data = await response.json();
      setMessage(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {message};
      <button
        onClick={fetchData}>Click me for data</button>
      <form onSubmit={loginForm}>
        
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button
          type="submit">Login</button>
      </form>

      <form onSubmit={fileUpload}
      multiple>
        <input type="file"
        onChange = {(e) => {setFile(e.target.value)}}/>
        <button type="submit">Submit</button>
      </form>
    </div >
  )
}

export default App;