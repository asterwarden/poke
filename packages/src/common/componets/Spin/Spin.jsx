import React from "react";
import styles from "./Spin.module.css";
import { Spin as SpinAntd } from "antd";

export const Spin = () => (
  <div className={styles.spin}>
    <SpinAntd />
  </div>
);
