import "./Tables.css"
import { useContext } from "react"
import { DataContext } from "../../context/DataContextProvider"
import DataTable from "../../components/DataTable"
import demoData from "../../assets/data.json"

export default function Tables() {
  const { stravaDataKey } = useContext(DataContext)
  const [data, setData] = stravaDataKey
  return (
    <div className="data--table widget">
        <DataTable height={"100%"} width={"95%"} data={data.length > 0 ? data : demoData}/>
    </div>
  )
}
