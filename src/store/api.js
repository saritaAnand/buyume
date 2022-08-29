import { useEffect, useState } from "react";

const Api = (props) => {
  const [titleArr, setTitleArr] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json().then((data) => {
        setTitleArr(data.title);
        console.log(data);
      })
    );
  });
};

export default Api;
