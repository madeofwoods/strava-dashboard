
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet'
import polyline from '@mapbox/polyline'
import data from "../assets/data.json"
// import "leaflet/dist/leaflet.css";

const polylines = data.map(data => data.data.map.polyline)

const polys = polylines.map(poly => polyline.decode(poly))
console.log(polys)

const poly = polyline.decode(polylines[0])
// const poly2 = polyline
console.log(poly)

export default function Maps({zoom}) {
  return (
    <div id="map" style={{width:"100%", height:"100%"}} >
        <MapContainer center={[52.51745, 13.43845]} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
            // attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      />
        <Polyline positions={polys} color="#a4a4e3" opacity="0.8" />
        </MapContainer>
    </div>
  )
}
