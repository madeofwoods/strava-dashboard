import Maps from "../../components/Maps/Maps"
import "./LargeMap.css"
import { useContext } from "react"
import { DataContext } from "../../context/DataContextProvider"
import demoData from "../../assets/data.json"

export default function LargeMap() {
  const { stravaDataKey } = useContext(DataContext)
  const [data, setData] = stravaDataKey
  return (
    <div className="large--map widget">
        <Maps zoom={13} data={data.length > 0 ? data : demoData} />
    </div>
  )
}
