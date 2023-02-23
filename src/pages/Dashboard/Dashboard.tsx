// import CalendarMap from "../../components/CalendarMap"
import DataTable from "../../components/DataTable";
import DistanceMonth from "../../components/DistanceMonth";
import DistanceYear from "../../components/DistanceYear";
import LatestActivity from "../../components/LatestActivity";
import LineGraph from "../../components/LineGraph";
import Maps from "../../components/Maps";
import NumberRunsYear from "../../components/NumberRunsYear";
import jsonData from "../../assets/data.json";
import "./Dashboard.css";
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { stravaDataKey } = useContext(DataContext)
  const [data, setData] = stravaDataKey
  const navigate = useNavigate();
  const handleClick = (url: string) => {
    navigate(url);
  };

  if (data?.length > 0) {
    return (
      <div className="dashboard--wrapper">
        <div className="dashboard">
          <NumberRunsYear data={data} />
          <DistanceYear data={data} />
          <DistanceMonth data={data} />
          <LatestActivity data={data} />
          <div className="widget widget--heatmap icon--relative">
          <div className="open--icon" onClick={(e) => handleClick("/maps")}>
            <OpenInFullIcon className="open--icon--button" />
          </div>
          <Maps zoom={12} data={data} />
        </div>
        <div className="widget widget--graph icon--relative">
          <div className="open--icon" onClick={(e) => handleClick("/graphs")}>
            <OpenInFullIcon className="open--icon--button" />
          </div>
          <div className="graph--container">
            <LineGraph
              data={data}
              distance="five"
              position={5}
              minmax={100}
              label={"5km"}
            />
          </div>
        </div>
        <div className="widget widget--table icon--relative">
          <div className="open--icon" onClick={(e) => handleClick("/tables")}>
            <OpenInFullIcon className="open--icon--button" />
          </div>
          <DataTable height={"100%"} width={"100%"} data={data} />
        </div>
          <div className="bottom--padding--grid"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>No data</div>
    )
  }
  
}
