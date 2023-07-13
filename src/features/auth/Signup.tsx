
export default function Signup() {

    return (
      <div className="is-header-blur is-sidebar-open">
      <div
        id="root"
        className="min-h-100vh cloak flex grow bg-slate-50 dark:bg-navy-900"
      >
        <main className="grid w-full grow grid-cols-1 place-items-center">
          <div className="w-full max-w-[26rem] p-4 sm:px-5">
            <div className="text-center">
              <img
                className="mx-auto h-16 w-16"
                src="./vite.svg"
                alt="logo"
              />
              <div className="mt-4">
                <h2
                  className="text-2xl font-semibold text-slate-600 dark:text-navy-100"
                >
                  Welcome To Lineone
                </h2>
                <p className="text-slate-400 dark:text-navy-300">
                  Please sign up to continue
                </p>
              </div>
            </div>
            <div className="card mt-5 rounded-lg p-5 lg:p-7">
              <label className="relative flex">
                <input
                  className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Username"
                  type="text"
                />
                <span
                  className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
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
              </label>
              <label className="relative mt-4 flex">
                <input
                  className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Password"
                  type="password"
                />
                <span
                  className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
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
              </label>
              <label className="relative mt-4 flex">
                <input
                  className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Repeat Password"
                  type="password"
                />
                <span
                  className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
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
              </label>
              <div className="mt-4 flex items-center space-x-2">
                <input
                  className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  type="checkbox"
                />
                <p className="line-clamp-1">
                  I agree with
                  <a
                    href="#"
                    className="text-slate-400 hover:underline dark:text-navy-300"
                  >
                    privacy policy
                  </a>
                </p>
              </div>
              <button
                className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              >
                Sign Up
              </button>
              <div className="mt-4 text-center text-xs+">
                <p className="line-clamp-1">
                  <span>Already have an account? </span>
                  <a
                    className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                    href="pages-login-1.html"
                    >Sign In</a
                  >
                </p>
              </div>
              <div className="my-7 flex items-center space-x-3">
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                <p className="text-tiny+ uppercase">or sign up with email</p>
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    )
  }