import { TStore } from "../utils/types";

export const selectData = (store: TStore) => store.data;
export const selectStatus = (store: TStore) => store.status;
