import React, { useState, useEffect } from "react";
import classes from "./LoginForm.module.scss";

// Image Imports //
import ProfileImage from "../images/profile-image.svg";
import Arrow from "../images/arrow.svg";
import ThumbsUp from "../images/thumbs_up.svg";

export default function LoginForm() {
  /*##########################################
    # State For Username And Password Inputs #
    ##########################################*/
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  /*####################################
    # State for input field validation #
    ####################################*/
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  /*############################
    # State for Form validation #
    #############################*/
  const [formIsValid, setFormIsValid] = useState(false);

  /*##################################################################
    # State to store whether or not an input has been touched or not #
    ##################################################################*/
  const [usernameIsTouched, setUsernameIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  /*########################################################
    # If all inputs are valid we set formIsValid to "true" #
    ########################################################*/
  useEffect(() => {
    if (usernameIsValid && passwordIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [usernameIsValid, passwordIsValid]);

  /*################################
    # Logic To Collect User Input #
    ###############################*/

  const handleInputValue = (e) => {
    if (e.target.id === "username") {
      setEnteredUsername(e.target.value);
      //
      if (e.target.value.trim() !== "") {
        setUsernameIsValid(true);
      }
    }

    if (e.target.id === "password") {
      setEnteredPassword(e.target.value);
      //
      if (e.target.value !== "") {
        setPasswordIsValid(true);
      }
    }
  };

  /*################
  # Blur Handler #
  ################*/
  const blurHandler = (e) => {
    if (e.target.id === "username") {
      setUsernameIsTouched(true);
      if (enteredUsername.trim() === "") {
        setUsernameIsValid(false);
      }
    }
    if (e.target.id === "password") {
      setPasswordIsTouched(true);
      if (enteredPassword === "") {
        setPasswordIsValid(false);
      }
    }
  };

  /*#########################
   # Form Submission Logic #
   #########################*/
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setUsernameIsTouched(true);
    setPasswordIsTouched(true);

    // Exit function if either input field is empty
    if (enteredUsername.trim() === "" || enteredPassword === "") {
      setUsernameIsValid(false);
      setPasswordIsValid(false);
      console.log("Errors on Form");
      return;
    }

    setUsernameIsValid(true);
    setPasswordIsValid(true);
    setEnteredUsername("");
    setEnteredPassword("");
    setUsernameIsTouched(false);
    setPasswordIsTouched(false);
    console.log("form Submitted");
  };

  return (
    <div className={classes.form_wrapper}>
      {/* Profile Image */}
      <div
        className={classes.profile_img}
        style={{ backgroundImage: `url(${ProfileImage})` }}
      ></div>

      {/* Form */}
      <form onSubmit={formSubmitHandler}>
        <div className={classes.input_wrapper}>
          {/* Username Input */}
          <input
            onChange={handleInputValue}
            onBlur={blurHandler}
            type="text"
            id="username"
            placeholder="username"
            value={enteredUsername}
          />

          {/* Horizontal Rule */}
          <hr></hr>

          {/* Password Input */}
          <input
            onChange={handleInputValue}
            onBlur={blurHandler}
            type="password"
            id="password"
            placeholder="password"
            value={enteredPassword}
          />
          {/* Username error symbol */}
          {usernameIsTouched && !usernameIsValid && (
            <img className={classes.usernameInputArrow} src={Arrow} alt="" />
          )}
          {/* Password error symbol */}
          {passwordIsTouched && !passwordIsValid && (
            <img className={classes.passwordInputArrow} src={Arrow} alt="" />
          )}
          {/* Thumbs up Image */}
          {formIsValid && <img className={classes.thumbsUp} src={ThumbsUp} alt="" /> }
        </div>

        {/* Login Button */}
        <button disabled={!formIsValid} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
