import Maps from "../../components/Maps"
import "./LargeMap.css"

export default function LargeMap() {
  return (
    <div className="large--map widget">
        <Maps zoom={13} />
    </div>
  )
}
