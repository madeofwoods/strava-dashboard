// import CalendarMap from "../../components/CalendarMap"
import DataTable from "../../components/DataTable";
import DistanceMonth from "../../components/DistanceMonth";
import DistanceYear from "../../components/DistanceYear";
import LatestActivity from "../../components/LatestActivity";
import LineGraph from "../../components/LineGraph";
import Maps from "../../components/Maps/Maps";
import NumberRunsYear from "../../components/NumberRunsYear";
import data from "../../assets/data.json";
import "./Dashboard.css";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { useNavigate } from "react-router-dom";

export default function DemoDash() {
  const navigate = useNavigate();
  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <div className="dashboard--wrapper">
      <div className="dashboard">
        <div className="widget--small">
          <NumberRunsYear data={data} year={"2023"} />
        </div>
        <div className="widget--small">
          <DistanceYear data={data} year={"2023"} />
        </div>
        <div className="widget--small">
          <DistanceMonth data={data} year={"2023"} />
        </div>
        <div className="widget--small">
          <LatestActivity data={data} />
        </div>
        <div className="widget widget--heatmap icon--relative">
          <div className="open--icon" onClick={(e) => handleClick("/site/maps")}>
            <OpenInFullIcon className="open--icon--button" />
          </div>
          <Maps zoom={12} data={data} />
        </div>
        <div className="widget widget--graph icon--relative">
          <div className="open--icon" onClick={(e) => handleClick("/site/graphs")}>
            <OpenInFullIcon className="open--icon--button" />
          </div>
          <div className="graph--container">
            <LineGraph data={data} distance="five" position={5} minmax={100} label={"5km"} />
          </div>
        </div>
        <div className="widget widget--table icon--relative">
          <div className="open--icon" onClick={(e) => handleClick("/site/tables")}>
            <OpenInFullIcon className="open--icon--button" />
          </div>
          <DataTable height={"100%"} width={"100%"} data={data} />
        </div>
        <div className="bottom--padding--grid"></div>
      </div>
    </div>
  );
}
