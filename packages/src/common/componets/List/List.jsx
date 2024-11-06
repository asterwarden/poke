import React from "react";
import { List as ListAntd } from "antd";
import styles from "./List.module.css";

export const List = ({ data, onClickItem }) => {
  return (
    <ListAntd
      className={styles.list}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <ListAntd.Item
          actions={[
            <a key="list-loadmore-more" onClick={() => onClickItem(item?.id)}>
              Info
            </a>,
          ]}
        >
          <ListAntd.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </ListAntd.Item>
      )}
    />
  );
};
