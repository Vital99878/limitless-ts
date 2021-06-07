import React from "react";

export interface MenuItemProps {
  path: string;
  title: string;
  active: boolean,
  icon: React.ReactElement
}

export interface MenuItemDropdownProps {
  title: string;
  innerList: string[],
  icon: React.ReactElement
}