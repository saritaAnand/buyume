import classes from "./App.css";
import { useEffect, useState } from "react";
import TitleTable from "./component/TitleTable";
import Search from "./component/Search";

function App() {
  const [titleArr, setTitleArr] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json().then((data) => {
        setTitleArr(data);
        // console.log(titleArr);
      })
    );
  }, []);
  return (
    <main className={classes.App}>
      <Search titleArr={titleArr} />
      <TitleTable titleArr={titleArr} />
    </main>
  );
}

export default App;
