import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ListPage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("products").then((data) => setList(data.data.products));
  }, []);

  return (
    <>
      <h1>List Component</h1>
      {list?.map((item: any, index) => (
        <span key={index}>{item.title}</span>
      ))}
    </>
  );
};
export default ListPage;
