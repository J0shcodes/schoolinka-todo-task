"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";

import Eye from "@/public/icons/Eye";
import Hide from "@/public/icons/Hide";

const SignIn = () => {
  const [emailInputClicked, setEmailInputClicked] = useState(false);
  const [passwordInputClicked, setPasswordInputClicked] = useState(false);
  const [showHideIcon, setShowHideIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);

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

  const toggleShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowHideIcon(true);
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email && password) {
      setDisableButton(false);
    }
  }, [email, password]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#d3d3d3]">
      <div className="flex rounded-[0.625rem]">
        <div className="bg-[url('/images/auth.jpg')] bg-no-repeat bg-center bg-cover w-[20.0625rem] h-full rounded-l-[0.625rem] md:hidden"></div>
        <div className="px-[4.03rem] py-[0.63rem] bg-white rounded-r-[0.625rem] md:rounded-[0.625rem]">
          <h2 className="text-center text-xl font-medium">Log in</h2>
          <form className="mt-6 mb-4 pb-4 border-b border-solid border-b-[#e4e4e4]">
            <div className="mb-8 relative">
              <div
                className={
                  emailInputClicked
                    ? "absolute text-xs text-[#717171] top-1 left-[1.125rem]"
                    : "text-[#4d4d4d] font-light absolute left-[1.125rem] top-2"
                }
                onClick={toggleEmailInputClickedState}
              >
                Email
              </div>
              <input
                type="text"
                className={`w-full ${
                  emailInputClicked
                    ? "pt-[1.125rem] pb-2 bg-transparent border border-solid border-schoolinka-primary"
                    : "py-2 bg-[#e4e4e4] "
                } px-[1.25rem] rounded-[0.625rem] text-[#212121] font-light outline-none`}
                onClick={toggleEmailInputClickedState}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
                }  rounded-[0.625rem] text-[#212121] font-light outline-none`}
                onClick={togglePasswordInputClickedState}
                onChange={handlePasswordChange}
              />
              {showHideIcon && (
                <div
                  className="absolute right-2 bottom-2 hover:cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <Eye /> : <Hide />}
                </div>
              )}
            </div>
            <button
              className={`mt-4 ${
                !disableButton
                  ? "bg-schoolinka-primary text-white"
                  : "bg-[#eef5fc] text-[#abbed1]"
              } text-lg w-full py-2 rounded-[0.625rem]`}
              disabled={disableButton}
            >
              Sign In
            </button>
          </form>
          <div>
            {/* <h2 className="text-center text-xl font-medium">Log In via</h2> */}
            <div className="text-sm">
              Don&apos;t have an account?
              <span className="font-medium underline ml-1">
                <Link href="/auth/signup">Create Account</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
