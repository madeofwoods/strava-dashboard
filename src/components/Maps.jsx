
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet'
import polyline from '@mapbox/polyline'
import { useEffect } from 'react'


const getPolylines = (data) => {
  const polylines = data.map(data => data.map.polyline)
  const polys = polylines.map(poly => polyline.decode(poly))
  return polys
}


export default function Maps({data, zoom}) {
  const mapPolylines = getPolylines(data)




  return (
    <div id="map" style={{width:"100%", height:"100%"}} >
        <MapContainer center={mapPolylines[0][0]} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
            // attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      />
        <Polyline positions={mapPolylines} color="#a4a4e3" opacity="0.8" />
        </MapContainer>
    </div>
  )
}
