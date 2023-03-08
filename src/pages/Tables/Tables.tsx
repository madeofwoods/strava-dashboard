import "./Tables.css"
import { useContext, useEffect } from "react"
import { DataContext } from "../../context/DataContextProvider"
import DataTable from "../../components/DataTable"
import demoData from "../../assets/data.json"

export default function Tables() {
  const { stravaDataKey, activeKey } = useContext(DataContext)
  const [data] = stravaDataKey
  const [, setActive] = activeKey

  useEffect(() => {
    setActive("Tables")
  }, [])

  return (
    <div className="data--table widget">
        <DataTable height={"100%"} width={"95%"} data={data.length > 0 ? data : demoData}/>
    </div>
  )
}
