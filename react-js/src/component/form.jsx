import React, { useState, useEffect } from "react";
import FormDetail from "./form-detail";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ButtonLeft, ButtonRight } from "./button.jsx";
import "./form.css";

const Form = () => {
  const [pageTitle, setPageTitle] = useState("Account");
  const [currentPage, setCurrentPage] = useState(1);

  function handleButton(btn) {
    btn === "next"
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className="form flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-5">{pageTitle}</h1>
      <div className="bg-white mt-5 p-5 rounded-md">
        <div className="page-number-container flex flex-row justify-between p-5 rounded-md">
          <p
            className={
              "page-number flex justify-center " +
              (currentPage === 1 ? "highlighted" : "")
            }
          >
            1
          </p>
          <p
            className={
              "page-number flex justify-center " +
              (currentPage === 2 ? "highlighted" : "")
            }
          >
            2
          </p>
          <p
            className={
              "page-number flex justify-center " +
              (currentPage === 3 ? "highlighted" : "")
            }
          >
            3
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-5">
          <div className="flex gap-3">
            <FormDetail name={"First Name"} />
            <FormDetail name={"Last Name"} />
          </div>
          <div className="">
            <FormDetail name={"Username"} asterisk={" *"} />
          </div>
          <div className="">
            <FormDetail name={"Email Address"} asterisk={" *"} />
          </div>
          <div className="flex gap-3">
            <FormDetail name={"Password"} asterisk={" *"} />
            <FormDetail name={"Confirm Password"} asterisk={" *"} />
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <ButtonLeft
            text={"Back"}
            currentPage={currentPage}
            handleButton={handleButton}
          />
          <ButtonRight
            text={"Next"}
            className="button__grey"
            handleButton={handleButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
