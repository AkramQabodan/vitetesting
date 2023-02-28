import axios from "axios";
import { useAppDispatch } from "../state/hooks";
import { sliceActions } from "../state/state";

const baseUrl = "https://dummyjson.com/";

const AxiosWrapper = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  axios.interceptors.request.use(
    (request) => {
      request.baseURL = baseUrl;
      dispatch(sliceActions.increment());
      return request;
    },
    (error) => {
      console.log(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      dispatch(sliceActions.decrement());
      return response;
    },
    (error) => {
      console.log(error);
    }
  );
  return <>{children}</>;
};

export default AxiosWrapper;
