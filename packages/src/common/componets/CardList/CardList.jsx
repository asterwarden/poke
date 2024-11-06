import React from "react";
import styles from "./CardList.module.css";
import { Card } from "../Card";

export const CardList = ({ data, onClick }) => (
  <div className={styles["card-list"]}>
    {data?.map((cardItem) => (
      <Card data={cardItem} onClick={onClick} />
    ))}
  </div>
);
