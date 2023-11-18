import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#d3d3d3]">
      <div className="flex bg-red-500 rounded-[0.625rem]">
        <div className="bg-[url('/images/auth.jpg')] bg-no-repeat bg-center bg-cover w-[20.0625rem] h-full rounded-l-[0.625rem]"></div>
        <div className="px-[4.03rem] py-[0.63rem] bg-white rounded-r-[0.625rem]">
          <h2 className="text-center text-xl font-medium">Log in</h2>
          <form className="mt-6 mb-4 pb-4 border-b border-solid border-b-[#e4e4e4]">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Email"
                className="w-full py-2 px-[1.25rem] bg-[#e4e4e4] rounded-[0.625rem] text-[#4d4d4d] font-light outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 px-[1.25rem] bg-[#e4e4e4] rounded-[0.625rem] text-[#4d4d4d] font-light outline-none"
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

export default SignUp;
