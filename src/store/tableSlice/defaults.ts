  // /items?search=apple&searchSelection=name,description&sort=-price,rating&limit=20&currentPage=3&columns=name,price,description

import { DataTableQueryProps } from "./types";

export const tableDefaults: DataTableQueryProps = {
  searchSelection: "",
  query: "",
  limit: 50,
  offset: 0,
  currentPage: 1,
  sort: [],
  column: [],
};