import React, { useState } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  const onSubmit = () => {
    if(message === '' || tech === ''){
      M.toast({ html: 'Please enter a message and tech' });
    }
    else{
      console.log(message, tech, attention);

      //Clear Fields
      setMessage('');
      setTech('');
      setAttention('');
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
    <div className="modal-content">
      <h4>Enter System Log</h4>
      <div className="row">
        <div className="input-field">
          <input
            type="text"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <label htmlFor="message" className="active">message</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <select
            name="tech"
            value={tech}
            className="browser-default"
            onChange={e => setTech(e.target.value)}
          >
            <option value="" disabled>
              Select Technitian
            </option>
            <option value="Rana Akash">Rana Akash</option>
            <option value="Ariful Islam">Ariful Islam</option>
            <option value="Rakib Hasan">Rakib Hasan</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={(e => setAttention(!attention))}
              />
              <span> Needs Attention</span>
            </label>
          </p>
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

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default EditLogModal;
