import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";
import { set } from "react-native-reanimated";
import { useReducer } from "react/cjs/react.production.min";

const KEY = "673f251c96msh3a35e0a75b06279p1f8466jsn2f9cd918ea86";

const useFetch = ({ endPoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://901522ec-fa4d-4b63-aecc-a237dc24ac90.mock.pstmn.io/jobs/`,
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
