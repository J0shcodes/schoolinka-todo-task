"use client";

import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Eye from "@/public/icons/Eye";
import Hide from "@/public/icons/Hide";

const SignUp = () => {
  const [firstNameInputClicked, setFirstNameInputClicked] = useState(false);
  const [lastNameInputClicked, setLastNameInputClicked] = useState(false);
  const [emailInputClicked, setEmailInputClicked] = useState(false);
  const [passwordInputClicked, setPasswordInputClicked] = useState(false);
  const [confirmPasswordInputClicked, setConfirmPasswordInputClicked] =
    useState(false);
  const [showHideIcon, setShowHideIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleFirstNameInputClickedState = () => {
    if (!firstNameInputClicked) {
      setFirstNameInputClicked(true);
    }
  };

  const toggleLastNameInputClickedState = () => {
    if (!lastNameInputClicked) {
      setLastNameInputClicked(true);
    }
  };

  const toggleEmailInputClickedState = () => {
    if (!emailInputClicked) {
      setEmailInputClicked(true);
    }
  };

  const togglePasswordInputClickedState = () => {
    if (!passwordInputClicked) {
      setPasswordInputClicked(true);
    }
  };

  const toggleConfirmPasswordInputClickedState = () => {
    if (!confirmPasswordInputClicked) {
      setConfirmPasswordInputClicked(true);
    }
  };

  const toggleShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowHideIcon(true);
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowHideIcon(true);
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if (firstName && lastName && email && password && confirmPassword) {
      setDisableButton(false);
    }
  }, [firstName, lastName, password, email, confirmPassword]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#d3d3d3]">
      <div className="flex rounded-[0.625rem]">
        <div className="bg-[url('/images/auth.jpg')] bg-no-repeat bg-center bg-cover w-[20.0625rem] h-full rounded-l-[0.625rem] md:hidden"></div>
        <div className="px-[4.03rem] md:px-[1.5rem] py-[0.63rem] bg-white rounded-r-[0.625rem] md:rounded-[0.625rem]">
          <h2 className="text-center text-xl font-medium">Log in</h2>
          <form className="mt-6 mb-4 pb-4">
            <div className="grid grid-cols-2 gap-8">
              <div className="mb-8 relative">
                <div
                  className={
                    firstNameInputClicked
                      ? "absolute text-xs text-[#717171] top-1 left-[1.125rem]"
                      : "text-[#4d4d4d] font-light absolute left-[1.125rem] top-2"
                  }
                  onClick={toggleFirstNameInputClickedState}
                >
                  First Name
                </div>
                <input
                  type="text"
                  className={`w-full ${
                    firstNameInputClicked
                      ? "pt-[1.125rem] pb-2 bg-transparent border border-solid border-schoolinka-primary"
                      : "py-2 bg-[#e4e4e4] "
                  } px-[1.25rem] rounded-[0.625rem] md:rounded-[0.25rem] text-[#212121] font-light outline-none`}
                  onClick={toggleFirstNameInputClickedState}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="relative">
                <div
                  className={
                    lastNameInputClicked
                      ? "absolute text-xs text-[#717171] top-1 left-[1.125rem]"
                      : "text-[#4d4d4d] font-light absolute left-[1.125rem] top-2"
                  }
                  onClick={toggleLastNameInputClickedState}
                >
                  Last Name
                </div>
                <input
                  type="text"
                  className={`w-full ${
                    lastNameInputClicked
                      ? "pt-[1.125rem] pb-2 bg-transparent border border-solid border-schoolinka-primary"
                      : "py-2 bg-[#e4e4e4] "
                  } px-[1.25rem] rounded-[0.625rem] md:rounded-[0.25rem] text-[#212121] font-light outline-none`}
                  onClick={toggleLastNameInputClickedState}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-8">
              <div className="relative">
                <div
                  className={
                    emailInputClicked
                      ? "absolute text-xs text-[#717171] top-1 left-[1.125rem]"
                      : "text-[#4d4d4d] font-light absolute left-[1.125rem] top-2"
                  }
                  onClick={toggleLastNameInputClickedState}
                >
                  Email
                </div>
                <input
                  type="text"
                  className={`w-full ${
                    emailInputClicked
                      ? "pt-[1.125rem] pb-2 bg-transparent border border-solid border-schoolinka-primary"
                      : "py-2 bg-[#e4e4e4] "
                  } px-[1.25rem] rounded-[0.625rem] md:rounded-[0.25rem] text-[#212121] font-light outline-none`}
                  onClick={toggleEmailInputClickedState}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-8 md:gap-y-8">
              <div className="relative">
                <div
                  className={
                    passwordInputClicked
                      ? "absolute text-xs text-[#717171] top-1 left-[1.125rem]"
                      : "text-[#4d4d4d] font-light absolute left-[1.125rem] top-2"
                  }
                  onClick={togglePasswordInputClickedState}
                >
                  Password
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full ${
                    passwordInputClicked
                      ? "pt-[1.125rem] pb-2 pl-5 pr-7 bg-transparent border border-solid border-schoolinka-primary"
                      : "py-2 bg-[#e4e4e4] px-5"
                  }  rounded-[0.625rem] md:rounded-[0.25rem] text-[#212121] font-light outline-none`}
                  onClick={togglePasswordInputClickedState}
                  onChange={handlePasswordChange}
                />
                {showHideIcon && passwordInputClicked ? (
                  <div
                    className="absolute right-2 bottom-2 hover:cursor-pointer"
                    onClick={toggleShowPassword}
                  >
                    {showPassword && passwordInputClicked ? <Eye /> : <Hide />}
                  </div>
                ) : null}
              </div>
              <div className=" relative">
                <div
                  className={
                    confirmPasswordInputClicked
                      ? "absolute text-xs text-[#717171] top-1 left-[1.125rem]"
                      : "text-[#4d4d4d] font-light absolute left-[1.125rem] top-2"
                  }
                  onClick={toggleConfirmPasswordInputClickedState}
                >
                  Re-Enter Password
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full ${
                    confirmPasswordInputClicked
                      ? "pt-[1.125rem] pb-2 pl-5 pr-7 bg-transparent border border-solid border-schoolinka-primary"
                      : "py-2 bg-[#e4e4e4] px-5"
                  }  rounded-[0.625rem] md:rounded-[0.25rem] text-[#212121] font-light outline-none`}
                  onClick={toggleConfirmPasswordInputClickedState}
                  onChange={handleConfirmPasswordChange}
                />
                {showHideIcon && confirmPasswordInputClicked ? (
                  <div
                    className="absolute right-2 bottom-2 hover:cursor-pointer"
                    onClick={toggleShowPassword}
                  >
                    {showPassword && confirmPasswordInputClicked ? (
                      <Eye />
                    ) : (
                      <Hide />
                    )}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              className={`mt-4 bg-[#eef5fc] text-[#abbed1] ${
                !disableButton && "bg-schoolinka-primary text-white"
              } text-lg w-full py-2 rounded-[0.625rem]`}
              disabled={disableButton}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
