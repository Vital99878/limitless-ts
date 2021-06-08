import React from "react";

export interface MenuItemProps {
  path: string;
  title: string;
  active: boolean | boolean[],
  icon: React.ReactElement
}

export interface SunmenuItem {
  title: string;
  active: boolean,
}

export interface MenuItemDropdownProps {
  title: string;
  innerList: SunmenuItem[][],
  icon: React.ReactElement
}