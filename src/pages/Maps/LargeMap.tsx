import Maps from "../../components/Maps/Maps"
import "./LargeMap.css"
import { useContext, useEffect } from "react"
import { DataContext } from "../../context/DataContextProvider"
import demoData from "../../assets/data.json"

export default function LargeMap() {
  const { stravaDataKey, activeKey, dataIsLoadedKey } = useContext(DataContext)
  const [data] = stravaDataKey
  const [, setActive] = activeKey
  const [dataIsLoaded] = dataIsLoadedKey

  useEffect(() => {
    setActive("Maps")
  }, [])

  return (
    <div className="large--map widget">
        <Maps zoom={13} data={dataIsLoaded ? data : demoData} />
    </div>
  )
}
