import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const KEY = RAPID_API_KEY;
const useFetch = ({ endPoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, SetisLodading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
};
