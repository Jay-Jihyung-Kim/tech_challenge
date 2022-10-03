import React, { useState, useEffect } from "react";
import FormDetail from "./form-detail";
import { ButtonLeft, ButtonRight, ButtonSubmit } from "./button.jsx";
import { FaSquareFull } from "react-icons/fa";
import "./form.css";

const Form = () => {
  const [pageTitle, setPageTitle] = useState("Account");
  const [currentPage, setCurrentPage] = useState(1);
  const [disable, setDisable] = useState(true);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    apartment: "",
    country: "",
    city: "",
    zipcode: "",
    company: "",
    phone: "",
  });

  useEffect(() => {
    if (currentPage === 1) {
      setPageTitle("Account");
    }
    if (currentPage === 2) {
      setPageTitle("Address");
    }
    if (currentPage === 3) {
      setPageTitle("Preferences");
    }

    if (
      (user.username !== "",
      user.email !== "",
      user.password !== "",
      user.password === user.confirmPassword)
    ) {
      setDisable(false);
    }
  }, [user, handleButton]);

  function handleButton(btn) {
    if (btn === "next") {
      setCurrentPage(currentPage + 1);
    } else {
      setDisable(false);
      setCurrentPage(currentPage - 1);
    }
  }

  function handleSubmit(e) {
    console.log(user);
  }

  function handleChange(e) {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.id]: value,
    });
  }

  return (
    <div className="form flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-5">{pageTitle}</h1>
      <div className="bg-white mt-5 p-5 rounded-md max-w-screen-sm">
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
        <form
          className={
            "flex flex-col gap-8 mt-5 " + (currentPage === 1 ? "" : "hidden")
          }
        >
          <div className="flex gap-3">
            <FormDetail
              name={"First Name"}
              value={user.firstName}
              id={"firstName"}
              handleChange={handleChange}
            />
            <FormDetail
              name={"Last Name"}
              value={user.lastName}
              id={"lastName"}
              handleChange={handleChange}
            />
          </div>
          <div className="">
            <FormDetail
              name={"Username"}
              asterisk={" *"}
              value={user.username}
              id={"username"}
              handleChange={handleChange}
            />
          </div>
          <div className="">
            <FormDetail
              name={"Email Address"}
              asterisk={" *"}
              value={user.email}
              id={"email"}
              handleChange={handleChange}
            />
          </div>
          <div className="flex gap-3">
            <FormDetail
              name={"Password"}
              asterisk={" *"}
              value={user.password}
              id={"password"}
              handleChange={handleChange}
            />
            <FormDetail
              name={"Confirm Password"}
              asterisk={" *"}
              value={user.confirmPassword}
              id={"confirmPassword"}
              handleChange={handleChange}
            />
          </div>
        </form>
        <form
          className={
            "flex flex-col gap-8 mt-5 " + (currentPage === 2 ? "" : "hidden")
          }
        >
          <div className="flex gap-3">
            <FormDetail
              name={"Address"}
              asterisk={" *"}
              value={user.address}
              id={"address"}
              handleChange={handleChange}
            />
            <FormDetail
              name={"Apartment, Suite, etc"}
              value={user.apartment}
              id={"apartment"}
              handleChange={handleChange}
            />
          </div>
          <div className="flex gap-3">
            <FormDetail
              name={"Country"}
              asterisk={" *"}
              value={user.country}
              id={"country"}
              handleChange={handleChange}
            />
            <FormDetail
              name={"City"}
              asterisk={" *"}
              value={user.city}
              id={"city"}
              handleChange={handleChange}
            />
            <FormDetail
              name={"Zipcode"}
              asterisk={" *"}
              value={user.zipcode}
              id={"zipcode"}
              handleChange={handleChange}
            />
          </div>
          <div className="">
            <FormDetail
              name={"Company"}
              value={user.company}
              id={"company"}
              handleChange={handleChange}
            />
          </div>
          <div className="">
            <FormDetail
              name={"Phone Number"}
              value={user.phone}
              id={"phone"}
              handleChange={handleChange}
            />
          </div>
        </form>
        <form
          className={
            "flex flex-col gap-8 mt-5 " + (currentPage === 3 ? "" : "hidden")
          }
        >
          <div>
            <div className="notification flex items-center">
              <FaSquareFull className="input-icon" />
              <p>Send notifcations</p>
            </div>
            <div className="notification flex items-center">
              <FaSquareFull className="input-icon" />
              <p>Share information with related marketer</p>
            </div>
          </div>
          <div className="">
            <FormDetail
              name={"Notification Preferences"}
              handleChange={handleChange}
            />
          </div>
        </form>
        <div className="flex justify-between mt-10">
          <ButtonLeft
            text={"Back"}
            currentPage={currentPage}
            handleButton={handleButton}
          />
          <ButtonRight
            text={"Next"}
            handleButton={handleButton}
            currentPage={currentPage}
            disabled={disable}
          />
          <ButtonSubmit handleSubmit={handleSubmit} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};

export default Form;
