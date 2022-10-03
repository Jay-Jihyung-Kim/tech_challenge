import React from "react";
import FormDetail from "./form-detail";
import "./form.css";

const Form = () => {
  return (
    <div>
      <h1>Title</h1>
      <div className="form">
        <div className="flex">
          <p className="page-number flex justify-center">1</p>
          <p className="page-number flex justify-center">2</p>
          <p className="page-number flex justify-center">3</p>
        </div>
        <div>
          <FormDetail />
        </div>
      </div>
    </div>
  );
};

export default Form;
