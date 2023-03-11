import "./Tables.css"
import { useContext, useEffect } from "react"
import { DataContext } from "../../context/DataContextProvider"
import DataTable from "../../components/DataTable"
import demoData from "../../assets/data.json"

export default function Tables() {
  const { stravaDataKey, activeKey, dataIsLoadedKey } = useContext(DataContext)
  const [data] = stravaDataKey
  const [, setActive] = activeKey
  const [dataIsLoaded] = dataIsLoadedKey

  useEffect(() => {
    setActive("Tables")
  }, [])

  return (
    <div className="data--table widget">
        <DataTable height={"100%"} width={"95%"} data={dataIsLoaded ? data : demoData}/>
    </div>
  )
}
