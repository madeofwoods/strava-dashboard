
import data from "../assets/data.json"

console.log(data)
console.log(data[0].data.distance)

const dataThisYear = data.filter(run => run.data.start_date.slice(0, 4) == "2023")

const distances = dataThisYear.map((data) => data.data.distance)

const getTotalDistance = ():string => {
    const distances = dataThisYear.map((data) => data.data.distance)
    const meters = Math.round(distances.reduce((a,b) => a + b, 0))
    const km = (meters / 1000).toFixed(2)

    return km
}

export default function DistanceYear() {
  return (
    <div className="widget widget--square">
        <div className="small--widget">
            <div className="small--widget--title">Distance this year (km)</div>
            <div className="small--widget--number">
                <div className="large--number">{getTotalDistance()}</div>
            </div>
        </div>
    </div>
  )
}
