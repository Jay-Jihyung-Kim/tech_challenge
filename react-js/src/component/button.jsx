import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./button.css";

export const ButtonLeft = (props) => {
  return (
    <button
      className={
        "button__transparent flex items-center rounded-md " +
        (props.currentPage === 1 ? "button__hidden" : "")
      }
      onClick={() => props.handleButton("back")}
    >
      <AiOutlineArrowLeft />
      {props.text}
    </button>
  );
};

export const ButtonRight = (props) => {
  return (
    <button
      className={
        "button__grey flex items-center rounded-md " +
        (props.currentPage === 3 ? "button__hidden" : "")
      }
      onClick={() => props.handleButton("next")}
      disabled={props.disabled}
    >
      {props.text} <AiOutlineArrowRight />
    </button>
  );
};

export const ButtonSubmit = (props) => {
  return (
    <button
      className={
        "button__grey flex items-center rounded-md button__none " +
        (props.currentPage === 3 ? "" : "hidden")
      }
      onClick={() => props.handleSubmit("next")}
    >
      Register!
    </button>
  );
};
