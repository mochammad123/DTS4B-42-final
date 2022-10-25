import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com/news/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("X-BingApis-SDK", "true");
      headers.set("X-RapidAPI-Key", API_TOKEN);
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLastestNews: builder.query({
      query: ({ category }) => ({
        url: "/",
        params: {
          count: "12",
          category: category,
          mkt: "en-GB",
          safeSearch: "Off",
          textFormat: "Raw",
        },
      }),
    }),
    getSearchNews: builder.query({
      query: ({ keyword, single = false }) => ({
        url: "search",
        params: {
          q: keyword,
          count: single ? 1 : 50,
          freshness: "Day",
          textFormat: "Raw",
          safeSearch: "Off",
        },
      }),
    }),
  }),
});

export const {
  useGetTopNewsQuery,
  useGetLastestNewsQuery,
  useGetSearchNewsQuery,
} = newsApi;
