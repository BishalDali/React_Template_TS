import React from 'react'

export default function ViewUser() {
  return (
    <div className="card pb-4">
    <div
      className="my-3 flex h-8 items-center justify-between px-4 sm:px-5"
    >
      <h2
        className="line-clamp-1 font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-base"
      >
        View User
      </h2>
      <div id="dropdown-wrapper4" className="inline-flex">
        <button
          className="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>

        <div className="popper-root">
          <div
            className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
          >
            <ul>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  >Action</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  >Another Action</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  >Something else</a
                >
              </li>
            </ul>
            <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  >Separated Link</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
         <div>
              <div id="grid-table-1">
                <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
                  <table data-grid-ref className="w-full text-left">
                    <thead>
                      <tr>
                        <th
                          className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                        >
                          #
                        </th>
                        <th
                          className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                        >
                          Name
                        </th>
                        <th
                          className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                        >
                          Job
                        </th>
                        <th
                          className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                        >
                          Favorite Color
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          ID 1
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Cy Ganderton
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Quality Control Specialist
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Blue
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          ID 2
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Hart Hagerty
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Desktop Support Technician
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Purple
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          ID 3
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Brice Swyre
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Tax Accountant
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">Red</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          ID 4
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Marjy Ferencz
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Office Assistant I
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                          Crimson
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div><div data-grid-wrapper></div></div>
              </div>
            </div>
    </div>
  </div>
  )
}
