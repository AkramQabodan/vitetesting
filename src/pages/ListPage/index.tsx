import axios from "axios";
import { useLoaderData } from "react-router-dom";

const ListPage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <h1>List Component</h1>
    </>
  );
};
export default ListPage;

export const listPageLoader = async () => {
  const response = await axios.get("products");
  return response;
};
