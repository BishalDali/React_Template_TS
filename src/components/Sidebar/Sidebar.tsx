import React, { useState } from 'react';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMenuClick = (menu: any) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? '' : 'hidden'} sidebar-panel print:hidden`}>
        <div className="flex h-full grow flex-col border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-750">
          <div className="flex items-center justify-between px-3 pt-4">
            <div className="flex">
              <a href="/">
                <img
                  className="h-11 w-30 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
                  src="./SignagePlus.png"
                  alt="logo"
                />
              </a>
            </div>
            <button
              className="sidebar-close btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="nav-wrapper mt-5 h-[calc(100%-4.5rem)] overflow-x-hidden pb-6" data-simplebar>
            <ul className="flex flex-1 flex-col px-4 font-inter">
              <li className={`ac nav-parent ${activeMenu === 'onboarding' ? 'is-active' : ''}`}>
                <button
                  className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                  onClick={() => handleMenuClick('onboarding')}
                >
                  <span>Onboarding</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 text-slate-400 transition-transform ease-in-out ${
                      activeMenu === 'onboarding' ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <ul className={`ac-panel ${activeMenu === 'onboarding' ? 'open' : ''}`}>
                  <li>
                    <a
                      href="pages-onboarding-1.html"
                      className={`nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 ${
                        activeMenu === 'onboarding-1' ? 'active' : ''
                      }`}
                      data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                      data-active-class="text-slate-800 dark:text-navy-50"
                      onClick={() => handleMenuClick('onboarding-1')}
                    >
                      <span>Onboarding 1</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="pages-onboarding-2.html"
                      className={`nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 ${
                        activeMenu === 'onboarding-2' ? 'active' : ''
                      }`}
                      data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                      data-active-class="text-slate-800 dark:text-navy-50"
                      onClick={() => handleMenuClick('onboarding-2')}
                    >
                      <span>Onboarding 2</span>
                      <span className="badge badge-accent">New</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
