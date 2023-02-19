import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const clientId  = import.meta.env.VITE_CLIENT_ID;
const clientSecret  = import.meta.env.VITE_CLIENT_SECRET;

const getAuthToken = (str: string): string => {
  return str.split("&")[1].slice(5);};

  const getRefreshTokens = async (authTok: string) => {
    try {
        const response = await axios.post(
            `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authTok}&grant_type=authorization_code`
        );
        return response.data;
    } catch (error) {
        console.log("error getRefreshTokens",error);
    }
}

const getUserData = async (accessToken:string) => {

  const timeNow = new Date().valueOf() 
  const before = Number(String(timeNow).substring(0,10))

  console.log("numberstringnumber", before)

  try {
      const response = await axios.get(
          `https://www.strava.com/api/v3/athlete/activities?before=${before}&after=1514764800&page=1&per_page=30`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      return response;
  } catch (error) {
      console.log("error getUserData", error);
  }
};




export default function Upload() {
    const [data, setData] = useState<any>([])
    const [loaded, setLoaded] = useState<boolean>(false)

    const activate = async () => {
        try{
            const stravaAuthToken: string = getAuthToken(location.search)
            const tokens: any = await getRefreshTokens(stravaAuthToken)
            const accessToken: string = await tokens.access_token
            const user = await getUserData(accessToken)
            setData(user)

            return user
        } catch(err) {
            console.log("err activate", err)
        }
        
    };
    useEffect(() => {
        activate();
    },[])

    useEffect(() => {
        data && setLoaded(true)
    }, [data])

    console.log("Strava Data", data)
  return (
    <div>
        <div>{loaded ? "Loaded" : "Loading..."}</div>
    </div>
  )
}
