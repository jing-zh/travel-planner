import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post("/user/login", { email, password });
      //save the user to local storage
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res));

      //update the auth context

      dispatch({ type: "LOGIN", payload: res });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.error);
    }
  };

  return { login, isLoading, error };
};
