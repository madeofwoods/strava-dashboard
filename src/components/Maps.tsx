
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet'
import polyline from '@mapbox/polyline'
import data from "../assets/data.json"

const polylines = data.map(data => data.data.map.polyline)


const poly = polyline.decode(polylines[0])
console.log(poly)

export default function Maps() {
  return (
    <div style={{width:"100%", height:"100%"}}>
        <MapContainer >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        </MapContainer>
    </div>
  )
}
