"use client";

import { useState } from "react";
import Link from "next/link";

const SignIn = () => {
  const [emailInputClicked, setEmailInputClicked] = useState(false);
  const [passwordInputClicked, setPasswordInputClicked] = useState(false);

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

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#d3d3d3]">
      <div className="flex rounded-[0.625rem]">
        <div className="bg-[url('/images/auth.jpg')] bg-no-repeat bg-center bg-cover w-[20.0625rem] h-full rounded-l-[0.625rem]"></div>
        <div className="px-[4.03rem] py-[0.63rem] bg-white rounded-r-[0.625rem]">
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
                type="password"
                className={`w-full ${
                  passwordInputClicked
                    ? "pt-[1.125rem] pb-2 bg-transparent border border-solid border-schoolinka-primary"
                    : "py-2 bg-[#e4e4e4] "
                } px-[1.25rem] rounded-[0.625rem] text-[#212121] font-light outline-none`}
                onClick={togglePasswordInputClickedState}
              />
            </div>
            <button className="mt-4 bg-[#eef5fc] text-[#abbed1] text-lg w-full py-2 rounded-[0.625rem]">
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
