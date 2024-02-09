import React from 'react';
import './Form.css';

const Form = () => {

  const handleButton = (e) => {
    e.preventDefault();
    console.log('Hello World')
  }

  return (
    <div className="form-container">
      <h2>Simple Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">Your Name</label>
          <input type="text" id="firstName" name="firstName" placeholder='John Doe.' />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder='johnDoe@gmail.com' />
        </div>
        <button onClick={handleButton}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
