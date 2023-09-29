import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'Menu-item-1',
    labels: {
      en: "Products list",
      fr: "Liste de produits"
    },
    link: 'products'

  },
  {
    id: 'Menu-item-2',
    labels: {
      en: "Products Admin",
      fr: "Administration de produits"
    },
    link: 'admin/products'

  }

];