import { useState } from "react";
import { useLogoutMutation } from "../../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../features/app/store";
import { setLogout } from "../../features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const handleLogout = async () => {
    try{
      await logout({}).unwrap();
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      dispatch(
        setLogout()
      )
      toast.success("Logout success");
      navigate ("/signin", {replace: true})

    }catch(error){
      toast.error("Logout failed")

    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <nav className="header print:hidden">
   
      <div className="header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden">
        <div className="flex w-full items-center justify-between">
          <div className="h-7 w-7"
            onClick={toggleSidebar}

          >
            <button className="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ToastContainer />

          <div className="-mr-1.5 flex items-center space-x-2">
            <button className="mobile-searchbar-show btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div id="searchbar-wrapper" className="hidden sm:flex">
              <div className="relative mr-4 flex h-8">
                <input
                  id="searchbar-ref"
                  placeholder="Search here..."
                  className="form-input peer h-full w-60 rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                  type="text"
                />
                <div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4.5 w-4.5 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
                  </svg>
                </div>
              </div>
            </div>

            <button className="btn border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
              onClick={handleLogout}
            >
             {isLoading ? 
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping"></div>
                <span>Logout</span>
              </div>
              : "Logout"

            }
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
