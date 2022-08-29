import React from "react";
import classes from "./TitleTable.module.css";

const TitleTable = (props) => {
  return (
    <table className={classes.tile}>
      <tr>
        <th style={{ border: "1px solid #ddd" }}>Title</th>
        <th style={{ border: "1px solid #ddd" }}>Description</th>
      </tr>
      {props.titleArr.map((t) => (
        <tr key={t.id}>
          <td style={{ border: "1px solid #ddd", padding: "10px" }}>
            {t.title}
          </td>
          <td style={{ border: "1px solid #ddd", padding: "10px" }}>
            {t.body}
          </td>
        </tr>
      ))}
    </table>
  );
};
export default TitleTable;
