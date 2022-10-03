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
      className="button__grey flex items-center rounded-md"
      onClick={() => props.handleButton("next")}
    >
      {props.text} <AiOutlineArrowRight />
    </button>
  );
};
