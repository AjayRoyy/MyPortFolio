import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const baseUrl = "https://dummyjson.com/products";

export const fetchData = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};
