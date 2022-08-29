import React from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const res = () => {
    const regex = "molestias";
    console.log(props.titleArr.join(""));
    // const f = props.titleArr.join("").match(regex);
    // console.log(f);
    // return props.titleArr.join("").match(regex);
  };
  return (
    <section className={classes.search}>
      <input className={classes.se} type="search" placeholder="Search" />
      <button className={classes.btn} onClick={res}>
        Search
      </button>
    </section>
  );
};

export default Search;
