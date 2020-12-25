import { Component } from "react";

export interface IMenu {
  id: number;
  label: string;
  path: string;
  parentLabel?: string;
}

export interface IRoute {
  path: string;
  name: string;
  component: any;
  exact?: boolean;
  children?: IRoute[];
  redirect?: boolean;
}