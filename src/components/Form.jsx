/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import MyContext from '../Context';

export default function Form({ handleFormCredentials }) {
  const { credentials } = useContext(MyContext);

  return (
    <div className="modal-overlay">
      <form
        className="container"
        onSubmit={(e) => {
          e.preventDefault();
          handleFormCredentials(
            e.target.elements.Name.value,
            +e.target.elements.Amount.value
          );
        }}
      >
        <button className="app-done-btn" type="submit">
          Done
        </button>

        <p>Confirm Credentials</p>
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          id="Name"
          placeholder="Enter UserName"
          defaultValue={
            credentials.name === 'userName' ? undefined : credentials.name
          }
          required
        />

        <label htmlFor="Amount">
          Enter amount to topUP In {credentials.baseSign}:
        </label>
        <input
          type="number"
          step="any"
          id="Amount"
          placeholder={`EnterAmount to topUP in ${credentials.baseSign}`}
        />
      </form>
    </div>
  );
}
