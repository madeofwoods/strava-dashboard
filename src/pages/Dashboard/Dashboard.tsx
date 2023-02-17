// import CalendarMap from "../../components/CalendarMap"
import DataTable from "../../components/DataTable"
import DistanceMonth from "../../components/DistanceMonth"
import DistanceYear from "../../components/DistanceYear"
import LatestActivity from "../../components/LatestActivity"
import LineGraph from "../../components/LineGraph"
import Maps from "../../components/Maps"
import NumberRunsYear from "../../components/NumberRunsYear"
import "./Dashboard.css"

export default function Dashboard() {
  return (
    <div className="dashboard--wrapper">
      <div className="dashboard">
          <NumberRunsYear />
          <DistanceYear />
          <DistanceMonth />
          <LatestActivity />
        <div className="widget widget--heatmap">
          <Maps />
        </div>
        <div className="widget widget--graph">
          <LineGraph />
        </div>
        <div className="widget widget--table">
          <DataTable height={"100%"} width={"100%"}/>
        </div>
        <div className="bottom--padding--grid"></div>
      </div>
    </div>
  )
}
