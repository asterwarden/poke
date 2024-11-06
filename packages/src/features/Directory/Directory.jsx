import React, { useEffect, useState } from "react";
import { List } from "../../common/componets/List";
import { Layout } from "../../common/componets/Layout";
import { CardList } from "../../common/componets/CardList";
import { Spin } from "../../common/componets/Spin";
import { Drawer } from "../../common/componets/Drawer";

export const Directory = () => {
  const [listData, setListData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [cardDetailsData, setCardDetailsData] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoadingCardData, setIsLoadingCardData] = useState(false);

  const onCloseDrawer = () => setIsDrawerOpen(false);
  const onOpenDrawer = () => setIsDrawerOpen(true);

  const getListData = async () => {
    const url = "https://jsonplaceholder.typicode.com/albums";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setListData(json);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getCardData = async (itemId) => {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${itemId}`;
    try {
      setIsLoadingCardData(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setCardData(json);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoadingCardData(false);
    }
  };

  const getCardDetailsData = async (itemId) => {
    const url = `https://jsonplaceholder.typicode.com/albums/${itemId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setCardDetailsData(json);
      onOpenDrawer();
    } catch (error) {
      console.error(error.message);
    }
  };

  const onClickItem = (id) => {
    getCardData(id);
  };

  const onClickCardDetails = (id) => {
    getCardDetailsData(id);
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <Layout>
      <List data={listData} onClickItem={onClickItem} />
      {isLoadingCardData ? (
        <Spin />
      ) : (
        <CardList data={cardData} onClick={onClickCardDetails} />
      )}
      {cardDetailsData && isDrawerOpen && (
        <Drawer
          isOpen={isDrawerOpen}
          onClose={onCloseDrawer}
          title={cardDetailsData.title}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet
          asperiores distinctio dolor dolore dolorem doloremque eligendi ex
          ipsam numquam odit officiis, pariatur possimus quas reprehenderit
          soluta veniam. Dicta, error.
        </Drawer>
      )}
    </Layout>
  );
};
