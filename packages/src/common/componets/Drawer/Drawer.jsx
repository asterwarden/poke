import React from "react";
import { Drawer as DrawerAntd } from "antd";

export const Drawer = ({ children, onClose, isOpen, title }) => {
  return (
    <DrawerAntd title={title} onClose={onClose} open={isOpen}>
      {children}
    </DrawerAntd>
  );
};
