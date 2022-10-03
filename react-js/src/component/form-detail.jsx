import React, { useState } from "react";
import { FaSquareFull } from "react-icons/fa";

import "./form-detail.css";

const FormDetail = (props) => {
  return (
    <div className="form-detail">
      <p>
        {props.name}
        {props.asterisk}
      </p>
      <label className="input-container flex items-center justify-center">
        <FaSquareFull className="input-icon" />
        <input
          className="input"
          type="text"
          placeholder={props.name}
          value={props.value}
          onChange={props.handleChange}
          id={props.id}
        />
      </label>
    </div>
  );
};

export default FormDetail;
