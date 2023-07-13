import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ILogin } from "../../types";
import { useLoginMutation } from "./authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "../app/store";
import { selectIsAuthenticated, setAuth } from "./authSlice";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate()
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const [login, { isLoading }] = useLoginMutation();
  const submitHandler = async (data: ILogin) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setAuth(
        {
          isAuthenticated: true,
          user: result.user
        }
      ));
        sessionStorage.setItem("accessToken", result.data.accessToken);
        sessionStorage.setItem("refreshToken", result.data.refreshToken);
        toast.success("Login success");
        navigate("/", { replace: true });
    } catch (error) {
     toast.error("error")
    }
  };

  return (
    <div className="is-header-blur is-sidebar-open">
      <ToastContainer />
      {/* <div
    className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900"
  >
    <div className="app-preloader-inner relative inline-block h-48 w-48"></div>
  </div> */}

      <div
        id="root"
        className="min-h-100vh cloak flex grow bg-slate-50 dark:bg-navy-900"
      >
        <main className="grid w-full grow grid-cols-1 place-items-center">
          <div className="w-full max-w-[26rem] p-4 sm:px-5">
            <div className="text-center">
              <img className="mx-auto h-16 w-50" src="./SignagePlus.png" alt="logo" />
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                  Welcome Back
                </h2>
                <p className="text-slate-400 dark:text-navy-300">
                  Please sign in to continue
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="card mt-5 rounded-lg p-5 lg:p-7">
                <label className="block">
                  <span>Email:</span>
                  <span className="relative mt-1.5 flex">
                    <input
                      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Enter email"
                      type="text"
                      {...register("email", { required: true })}
                    />

                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-colors duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                  </span>
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </label>
                <label className="mt-4 block">
                  <span>Password:</span>
                  <span className="relative mt-1.5 flex">
                    <input
                      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Enter Password"
                      type="password"
                      {...register("password", { required: true })}
                    />

                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-colors duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </span>
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                </label>
                <div className="mt-4 flex items-center justify-between space-x-2">
                  <label className="inline-flex items-center space-x-2">
                    <input
                      className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                      type="checkbox"
                    />
                    <span className="line-clamp-1">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                  type="submit"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="1.5
                        "
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6z
                        "
                        />
                      </svg>
                      <span>Signing in...</span>
                    </span>
                  ) : (
                    <span>Sign in</span>
                  )}
                </button>
                <div className="mt-4 text-center text-xs+">
                  <p className="line-clamp-1">
                    <span>Dont have Account?</span>

                    <a
                      className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                      href="pages-singup-1.html"
                    >
                      Create account
                    </a>
                  </p>
                </div>
              </div>
            </form>
            <div className="mt-8 flex justify-center text-xs text-slate-400 dark:text-navy-300">
              <a href="#">Privacy Notice</a>
              <div className="mx-3 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
              <a href="#">Term of service</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
