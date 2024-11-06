import React, { StrictMode } from "react";
import styles from "./App.module.css";
import { Directory } from "../features/Directory";

export const App = () => (
  <StrictMode>
    <div className={styles.container}>
      <Directory />
    </div>
  </StrictMode>
);
