export default function AddUser() {
  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8 pt-4">
      {/* <div className="flex items-center space-x-4 py-5 lg:py-6">
          <h2
            className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
          >
            Add New User
          </h2>
        </div> */}

      <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
        <div className="sm:order-last sm:col-span-4"></div>
        <div className="col-span-12 sm:col-span-8">
          <div className="card p-4 sm:p-5">
            <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
              Add New user
            </p>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span>Username</span>
                <span className="relative mt-1.5 flex">
                  <input
                    className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    placeholder="Username"
                    type="text"
                  />
                  <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="far fa-building text-base"></i>
                  </span>
                </span>
              </label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span>Password</span>
                  <span className="relative mt-1.5 flex">
                    <input
                      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Your City/Town"
                      type="password"
                    />
                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                      <i className="fa-solid fa-city text-base"></i>
                    </span>
                  </span>
                </label>
                <label className="block">
                  <span>Confirm password</span>
                  <span className="relative mt-1.5 flex">
                    <input
                      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Confirm password"
                      type="password"
                    />
                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                      <i className="fa-solid fa-flag"></i>
                    </span>
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                <label className="block sm:col-span-8">
                  <span>Email Address</span>
                  <div className="relative mt-1.5 flex">
                    <input
                      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Email address"
                      type="text"
                    />
                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                      <i className="fa-regular fa-envelope text-base"></i>
                    </span>
                  </div>
                </label>
              </div>

                    <div className="my-3 flex h-8 items-center justify-between">
                      <h2 className="line-clamp-1 font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-base">
                        Permissions
                      </h2>
                    </div>
                    <div className="max-w-2xl">
                      <div className=" grid grid-cols-2 place-items-start gap-6 sm:grid-cols-4">
                        <label className="inline-flex items-center space-x-2">
                          <input
                            checked
                            className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 bg-slate-100 checked:border-slate-500 checked:bg-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-500 dark:bg-navy-900 dark:checked:border-navy-400 dark:checked:bg-navy-400"
                          />
                          <span>Image</span>
                        </label>
                        <label className="inline-flex items-center space-x-2">
                          <input
                            className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 bg-slate-100 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                            type="checkbox"
                          />
                          <span>Video</span>
                        </label>
                        <label className="inline-flex items-center space-x-2">
                          <input
                            className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 bg-slate-100 checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-secondary-light dark:checked:bg-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                            type="checkbox"
                          />
                          <span>Scroll Text</span>
                        </label>
                        <label className="inline-flex items-center space-x-2">
                            <input
                                className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 bg-slate-100 checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary dark:border-navy-500 dark:bg-navy-900 dark:checked:border-secondary-light dark:checked:bg-secondary-light dark:hover:border-secondary-light dark:focus:border-secondary-light"
                                type="checkbox"
                            />
                            <span>News </span>
                        </label>
                        
                    
                       
                  
                      </div>
                    </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                <label className="block sm:col-span-8">
                  <span>Expiry Date</span>
                  <div className="relative mt-1.5 flex">
                    <input
                      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                      placeholder="Date"
                      type="date"
                    />
                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                    </span>
                  </div>
                 
                </label>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <button
                  className="btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-accent dark:text-accent-light dark:hover:bg-accent dark:hover:text-white dark:focus:bg-accent dark:focus:text-white dark:active:bg-accent/90"
                >
                  Submit
                </button>
                <button
                  className="btn border border-error font-medium text-error hover:bg-error hover:text-white focus:bg-error focus:text-white active:bg-error/90"
                >
                  Cancel
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
