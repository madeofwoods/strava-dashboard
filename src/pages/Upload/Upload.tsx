import axios, { AxiosError } from "axios";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { useNavigate } from "react-router-dom";
import { errorHandler } from "./utils";
import { toast } from "react-toastify";
import "./Upload.css";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

interface Errors {
  error: boolean;
  errorMessage: string;
}

export default function Upload() {
  const { stravaDataKey, nameKey, axiosError } = useContext(DataContext);
  const [stravaData, setStravaData] = stravaDataKey;
  const [, setName] = nameKey;
  const numberOfRuns = 15;
  const navigate = useNavigate();
  const [, setErrorStatus] = axiosError;

  const toastErrorHandler = (errorStatus: number) => {
    const errorMessage = errorHandler(errorStatus);
    toast.error(errorMessage, {
      className: "toast--error",
      progressClassName: "toast--error--progress",
    });
    navigate("/site/dash")
  };

  const getAuthToken = (windowLocation: string): string => {
    return windowLocation.split("&")[1].slice(5);
  };

  const getAccessTokens = async (authToken: string) => {
    try {
      const response = await axios.post(
        `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authToken}&grant_type=authorization_code`
      );

      return response.data;
    } catch (error: any) {
      console.log("error getAccessTokens", error);
      console.log("error getAccessTokens status", error.response.status);
      // toastErrorHandler(error.response.status)
      // setErrorStatus(error.response.status)
      //this post request is triggered twice in React.StrictMode -- an error always occurs the second time
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
      return response.data;
    } catch (error: any) {
      console.log("error getUserData", error);
      console.log("status", error.response.status);
      setErrorStatus(error.response.status);
      toastErrorHandler(error.response.status);
    }
  };

  interface DataProps {
    data: any;
  }

  const getBestEffortsAll = async (userData: any[], accessToken: string) => {
    const endpoints = [];
    for (let i = 0; i < numberOfRuns; i++) {
      endpoints.push(
        `https://www.strava.com/api/v3/activities/${userData[i].id}?include_all_efforts=true`
      );
    }
    try {
      const response: DataProps[] = await axios.all(
        endpoints.map((endpoint) =>
          axios.get(endpoint, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
        )
      );

      const getTheData = response.map((data) => data.data);
      return getTheData;
    } catch (error: any) {
      console.log("error getbestefforts", error);
      console.log("status", error.response.status);
      setErrorStatus(error.response.status);
      toastErrorHandler(error.response.status);
    }
  };

  const activate = async () => {
    try {
      const stravaAuthToken: string = getAuthToken(location.search);
      const tokens: any = await getAccessTokens(stravaAuthToken);

      const accessToken: string = await tokens.access_token;
      setName(`${tokens?.athlete.firstname} ${tokens?.athlete.lastname}`);

      const user = await getUserData(accessToken);
      if ((user.length == 0)) {
        toast("You have no data to load yet", {
          className: "toast--error",
          autoClose: 3000,
          progressClassName: "toast--loading--progress",
        });
        navigate("/site/dash")
      }
      console.log(user);
      const bestEfforts = await getBestEffortsAll(user, accessToken);
      setStravaData(bestEfforts);
    } catch (error: any) {
      console.log("err activate", error);
    }
  };
  useEffect(() => {
    toast("Loading Data", {
      className: "toast--loading",
      autoClose: 3000,
      progressClassName: "toast--loading--progress",
    });
    activate();
  }, []);

  useEffect(() => {
    if (stravaData.length > 0)  {navigate("/site/dash");
    }
    
  }, [stravaData]);

  useEffect(() => {
    setTimeout(() => {
        if (window.location.href.includes("upload")){
          navigate("/site/dash");
          toast("Please try again.", {
            className: "toast--error",
            autoClose: 3000,
            progressClassName: "toast--loading--progress",
          });
        console.log(window.location.href)}
      }, 5000)
  },[])

  

  return (
    <div className="Upload">
      <div className="svg">
        <svg
          className="svg--upload"
          width="576"
          height="466"
          viewBox="0 0 276 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="mountain--svg"
            d="M96 154H14L101 45L116 65L151 19L164 40L184 13L263 154H96Z"
            stroke="#91DDD8"
            strokeWidth="3"
          />
          <g filter="url(#filter0_f_1_5)">
            <path
              className="blur--svg"
              d="M96 154H14L101 45L116 65L151 19L164 40L184 13L263 154H96Z"
              stroke="#91DDD8"
              strokeWidth="3"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_5"
              x="0.883545"
              y="0.243637"
              width="274.676"
              height="165.256"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="5"
                result="effect1_foregroundBlur_1_5"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="loading--text">LOADING</div>
    </div>
  );
}
