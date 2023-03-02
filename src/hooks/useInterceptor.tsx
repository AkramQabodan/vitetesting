import axios from "axios";
import { useAppDispatch } from "./reduxHook";
import { sliceActions } from "../state/state";

const baseUrl = "https://dummyjson.com/";
const useInterceptor = () => {
  const dispatch = useAppDispatch();
  axios.interceptors.request.use(
    (request) => {
      request.baseURL = baseUrl;
      dispatch(sliceActions.increment());

      if (request.method === "post") {
        request.baseURL = baseUrl;
        request.headers["Content-Type"] = "application/json";
        return request;
      }

      return request;
    },
    (error) => {
      console.log(error);
      dispatch(sliceActions.decrement());
    }
  );

  axios.interceptors.response.use(
    (response) => {
      dispatch(sliceActions.decrement());
      return response;
    },
    (error) => {
      console.log(error);
      dispatch(sliceActions.decrement());
    }
  );
};
export default useInterceptor;
