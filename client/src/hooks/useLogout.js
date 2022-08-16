import { useAuthContext } from "./useAuthContext";
import { useTripsContext } from "./useTripsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: tripsDispatch } = useTripsContext();
  const logout = () => {
    //remove user from storage

    localStorage.removeItem("user");

    //dispatch logout action

    dispatch({ type: "LOGOUT" });
    tripsDispatch({ type: "SET_TRIPS", payload: null });
  };

  return { logout };
};
