import React, { useState } from 'react';
import './Form.css';

const Form = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleButton = (e) => {
    e.preventDefault();
    console.log('Hello World')
  }

  console.log(name)
  console.log(password)
  console.log(email)

  return (
    <div className="form-container">
      <h2>Register Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">Your Name</label>
          <input type="text" id="firstName" name="firstName" placeholder='John Doe.'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder='johnDoe@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="email" id="email" name="email" placeholder='1234******'
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>


        <button onClick={handleButton}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
