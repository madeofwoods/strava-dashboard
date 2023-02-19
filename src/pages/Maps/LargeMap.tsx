import Maps from "../../components/Maps"
import "./LargeMap.css"
import data from "../../assets/data.json"

export default function LargeMap() {
  return (
    <div className="large--map widget">
        <Maps zoom={13} data={data} />
    </div>
  )
}
