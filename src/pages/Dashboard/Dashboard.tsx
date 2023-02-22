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

export default function Dashboard() {
  const { stravaDataKey } = useContext(DataContext)
  const [data, setData] = stravaDataKey

  if (data?.length > 0) {
    return (
      <div className="dashboard--wrapper">
        <div className="dashboard">
          <NumberRunsYear data={data} />
          <DistanceYear data={data} />
          <DistanceMonth data={data} />
          <LatestActivity data={data} />
          <div className="widget widget--heatmap">
            <Maps zoom={12} data={data} />
          </div>
          <div className="widget widget--graph">
            <LineGraph
              data={data}
              distance="five"
              position={5}
              minmax={100}
              label={"5km"}
            />
          </div>
          <div className="widget widget--table">
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
