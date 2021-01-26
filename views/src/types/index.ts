export type MenuConfig = {
  path: string;
  name: string;
  component: string | Function;
  meta: {
    title: string;
    icon: string;
    show: boolean;
    permission: Array<number>;
  };
  children?: Array<MenuConfig>;
};
