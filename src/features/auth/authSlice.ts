import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    role: string;
    id: string;
  };
}

const accessToken = sessionStorage.getItem("accessToken") || null;
const refreshToken = sessionStorage.getItem("refreshToken") || null;

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    name: "",
    email: "",
    role: "",
    id: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
      state.user = {
        name: "",
        email: "",
        role: "",
        id: "",
      };
    },
  },
});

export const { setAuth, setLogout } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;

const handleRefreshToken = async (refreshToken: string) => {
  const response = await fetch("http://localhost:8000/api/v1/auth/refresh-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });
  const data = await response.json();
  return data;
};

const getAuthUser = async () => {
  const response = await fetch("http://localhost:8000/api/v1/auth/single", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  return data;
};

const logoutUser = async () => {
  const response = await fetch("http://localhost:8000/api/v1/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
  return data;
};

export const handleInitialState = async () => {
  try {
    if(!refreshToken) return;
    const authUser = await getAuthUser();
    if (authUser) {
      return authUser;
    } else {
      const refreshResponse = await handleRefreshToken(refreshToken);
      if (refreshResponse.accessToken) {
        sessionStorage.setItem("accessToken", refreshResponse.accessToken);
        sessionStorage.setItem("refreshToken", refreshResponse.refreshToken);
        const refreshedAuthUser = await getAuthUser();
        if (refreshedAuthUser) {
          return refreshedAuthUser;
        } else {
          await logoutUser();
        }
      } else {
        await logoutUser();
      }
    }
  } catch (error) {
    console.log(error);
    await logoutUser();
  }
};
