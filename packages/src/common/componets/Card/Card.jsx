import React from "react";
import styles from "./Card.module.css";
import { Button, Card as CardAntd, Image } from "antd";
import Meta from "antd/es/card/Meta";

export const Card = ({ data, onClick }) => (
  <CardAntd
    hoverable
    bordered={true}
    className={styles.card}
    title={data.title}
    extra={
      <Button
        color="primary"
        variant="outlined"
        onClick={() => onClick(data.id)}
      >
        More
      </Button>
    }
    cover={<Image alt={data.title} src={data.thumbnailUrl} />}
  >
    <Meta description={data.thumbnailUrl} />
  </CardAntd>
);
