import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";
import { set } from "react-native-reanimated";
import { useReducer } from "react/cjs/react.production.min";

const KEY = RAPID_API_KEY;

const useFetch = ({ endPoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, SetIsloading] = useState(false);
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

  const fetchData = async () => {
    setIsloading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      SetIsloading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
      setIsloading(false);
    }
  };
  useEffect(() => fetchData(), []);

  const refetch = () => {
    setIsloading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
