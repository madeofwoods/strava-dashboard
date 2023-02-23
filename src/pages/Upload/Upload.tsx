import axios, { AxiosError } from "axios";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import jsonData from "../../assets/data.json"
import { useNavigate } from "react-router-dom";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

interface Errors {
  error: boolean;
  errorMessage: string;
}



export default function Upload() {
  const [loaded, setLoaded] = useState<boolean>(false);

  const { stravaDataKey, nameKey } = useContext(DataContext)
  const [stravaData, setStravaData] = stravaDataKey
  const [name, setName] = nameKey
  const numberOfRuns = 15
  const navigate = useNavigate()



  const getAuthToken = (str: string): string => {
    return str.split("&")[1].slice(5);
  };

  const getRefreshTokens = async (authTok: string) => {
    try {
      const response = await axios.post(
        `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authTok}&grant_type=authorization_code`
      );
      console.log("auth response", response)
      
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

    try {
      const response = await axios.get(
        `https://www.strava.com/api/v3/athlete/activities?before=${before}&after=1514764800&page=1&per_page=${numberOfRuns}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      // console.log(response);
      return response.data;
    } catch (error: any) {
      // const message = error.message;
    //   setError({ error: true, errorMessage: message });
      console.log("error getUserData", error);
    }
  };

  interface DataProps {
    data: any,

  }

  const getBestEffortsAll = async (userData: any[], accessToken: string) => {
    // const array = []
    const endpoints = []
    for (let i = 0; i<numberOfRuns; i++) {
        endpoints.push(`https://www.strava.com/api/v3/activities/${userData[i].id}?include_all_efforts=true`)
        }
        try {
            // console.log(endpoints)
            const response: DataProps[] = await axios.all(endpoints.map((endpoint) => axios.get(
                endpoint,
                { headers: { Authorization: `Bearer ${accessToken}` } }
            )));

            const getTheData = response.map(data => data.data)
  
            // console.log("getTheData", getTheData)
            return getTheData
        } catch (error) {
            console.log("error getbestefforts", error);
        }
   
}

  const activate = async () => {
    try {
      const stravaAuthToken: string = getAuthToken(location.search);
      const tokens: any = await getRefreshTokens(stravaAuthToken);

      const accessToken: string = await tokens.access_token;
      setName(`${tokens?.athlete.firstname} ${tokens?.athlete.lastname}`)
      // console.log("accessToken", accessToken);
      const user = await getUserData(accessToken);
      const bestEfforts = await getBestEffortsAll(user, accessToken)
      setStravaData(bestEfforts);
      return user;
    } catch (err) {
      console.log("err activate", err);
    }
  };
  useEffect(() => {
    activate();
  }, []);

  useEffect(() => {
    stravaData.length > 0 && setLoaded(true);
    stravaData.length > 0 && navigate("/dash");
  }, [stravaData]);

  return (
    <div>
      <div>
        {loaded ? "Loaded" : "Loading..."}
      </div>
    </div>
  );
}
