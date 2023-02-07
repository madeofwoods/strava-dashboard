
import data from "../assets/data.json"


const date = new Date()

const monthNumeric = String(date.getMonth()+1).padStart(2, "0")
const month = date.toLocaleString('default', { month: 'long' })

const dataThisMonth = data.filter(run => run.data.start_date.slice(0, 7) == `2023-${monthNumeric}`)

const getTotalDistance = ():string => {
    const distances = dataThisMonth.map((data) => data.data.distance)
    const meters = Math.round(distances.reduce((a,b) => a + b, 0))
    const km = (meters / 1000).toFixed(2)

    return km
}

export default function DistanceMonth() {
  return (
    <div className="widget widget--square">
        <div className="small--widget">
            <div className="small--widget--title">Distance in {month} (km)</div>
            <div className="small--widget--number">
                <div className="large--number">{getTotalDistance()}</div>
            </div>
        </div>
    </div>
  )
}
