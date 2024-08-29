import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-10">
      <div className="flex w-full max-w-[325px] flex-col gap-6">
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="block">
            <span className="block">Email</span>
            <input
              type="email"
              name="email"
              className="placeholder-slate-400focus:outline-none w-full rounded p-1 text-black shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
            ></input>
          </label>
          <label htmlFor="password" className="block">
            <span className="block">Password</span>
            <input
              type="password"
              name="password"
              className="w-full rounded p-1 text-black"
            ></input>
          </label>
          <button
            type="submit"
            onClick={() => console.log("login")}
            className="btn btn-primary mt-4 block"
          >
            Login
          </button>
        </form>
        <div className="link block cursor-default no-underline">
          <Link onClick={() => console.log("forgot password")} className="text">
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="divider">OR</div>
      <div className="flex w-full flex-col items-center gap-2">
        <button className="btn btn-secondary block w-full max-w-[325px]">
          <Link to="/signup">Create Account</Link>
        </button>
      </div>
    </div>
  );
};

export default login;
