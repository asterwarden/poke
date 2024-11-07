import React, { useEffect, useState } from "react";
import { List } from "../../common/componets/List";
import { Layout } from "../../common/componets/Layout";
import { CardList } from "../../common/componets/CardList";
import { Drawer } from "../../common/componets/Drawer";
import { useFetch } from "../../common/hooks/useFetch";

export const Directory = () => {
  const [albumsListData, setAlbumsListData] = useState([]);
  const [photosByAlbum, setPhotosByAlbum] = useState([]);
  const [albumData, setAlbumData] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { getData } = useFetch();
  const onCloseDrawer = () => setIsDrawerOpen(false);
  const onOpenDrawer = () => setIsDrawerOpen(true);

  const getAlbumsData = async () => {
    const data = await getData("https://jsonplaceholder.typicode.com/albums");
    setAlbumsListData(data);
  };

  const getPhotosByAlbumsIdData = async (itemId) => {
    const data = await getData(
      `https://jsonplaceholder.typicode.com/photos?albumId=${itemId}`,
    );
    setPhotosByAlbum(data);
  };

  const getCardDetailsData = async (itemId) => {
    const data = await getData(
      `https://jsonplaceholder.typicode.com/albums/${itemId}`,
    );
    setAlbumData(data);
    onOpenDrawer();
  };

  const onClickCardDetails = (id) => {
    getCardDetailsData(id);
  };

  useEffect(() => {
    getAlbumsData();
  }, []);

  return (
    <Layout>
      <List data={albumsListData} onClickItem={getPhotosByAlbumsIdData} />
      <CardList data={photosByAlbum} onClick={onClickCardDetails} />
      {albumData && isDrawerOpen && (
        <Drawer
          isOpen={isDrawerOpen}
          onClose={onCloseDrawer}
          title={albumData.title}
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
