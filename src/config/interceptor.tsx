import axios from "axios";
import { useState } from "react";

const baseUrl = "https://dummyjson.com/";

const useAxios = () => {
  const [requests, setRequests] = useState(0);

  axios.interceptors.request.use(
    (request) => {
      setRequests((prev) => prev + 1);
      request.baseURL = baseUrl;
      return request;
    },
    (error) => {
      console.log(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      setRequests((prev) => prev - 1);
      return response;
    },
    (error) => {
      setRequests((prev) => prev - 1);
      console.log(error);
    }
  );
  
  return requests;
};

export default useAxios;
