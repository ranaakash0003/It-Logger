import React, { useState } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 
  const onSubmit = () => {
    if( firstName === '' || firstName === '' ){
      M.toast({ html: 'Please enter firstName lastName' });
    }
    else{
      console.log(firstName, lastName);

      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
    <div className="modal-content">
      <h4>Enter System Log</h4>
      <div className="row">
        <div className="input-field">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName" className="active">First Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <label htmlFor="lastName" className="active">Last Name</label>
        </div>
      </div>

      <footer className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-green btn"
        >
          Enter
        </a>
      </footer>
    </div>
</div>
  );
};

export default AddTechModal;
