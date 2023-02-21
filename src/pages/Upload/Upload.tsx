import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { useState } from "react";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

interface Errors {
  error: boolean;
  errorMessage: string;
}

export default function Upload() {
  const [data, setData] = useState<any>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
//   const [error, setError] = useState<Errors>({
//     error: false,
//     errorMessage: "",
//   });

  const getAuthToken = (str: string): string => {
    return str.split("&")[1].slice(5);
  };

  const getRefreshTokens = async (authTok: string) => {
    try {
      const response = await axios.post(
        `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authTok}&grant_type=authorization_code`
      );
      return response.data;
    } catch (error: any) {
      const message = error.message;
    //   setError({ error: true, errorMessage: message });
      console.log("error getRefreshTokens", error);
    }
  };

  const getUserData = async (accessToken: string) => {
    const timeNow = new Date().valueOf();
    const before = Number(String(timeNow).substring(0, 10));

    //   console.log("numberstringnumber", before);

    try {
      const response = await axios.get(
        `https://www.strava.com/api/v3/athlete/activities?before=${before}&after=1514764800&page=1&per_page=100`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log(response);
      return response;
    } catch (error: any) {
      const message = error.message;
    //   setError({ error: true, errorMessage: message });
      console.log("error getUserData", error);
    }
  };

  const activate = async () => {
    try {
      const stravaAuthToken: string = getAuthToken(location.search);
      const tokens: any = await getRefreshTokens(stravaAuthToken);
      const accessToken: string = await tokens.access_token;
      console.log("accessToken", accessToken);
      const user = await getUserData(accessToken);
      setData(user);
      return user;
    } catch (err) {
    //   setError({
    //     error: true,
    //     errorMessage: "Problem Loading Data. Please Retry",
    //   });
      console.log("err activate", err);
    }
  };
  useEffect(() => {
    activate();
  }, []);

  useEffect(() => {
    data && setLoaded(true);
  }, [data]);

  console.log("Strava Data", data);
  return (
    <div>
      <div>
        {loaded ? "Loaded" : "Loading..."}
      </div>
    </div>
  );
}
