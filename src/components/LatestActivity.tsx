import data from "../assets/data.json"

const latestRun = data[0]

const time = latestRun.data.moving_time
const distance = latestRun.data.distance 

const distanceInKm = (distance / 1000).toFixed(2)
const speed = time * 1000 / (distance)

export const secondsToMins = (time:number):string => {
    const timeRounded = Math.round(time)
    const mins = String(Math.floor(time / 60))
    const seconds = String(timeRounded % 60).padStart(2, "0")
    const minsAndSeconds = mins + ":" + seconds

    return minsAndSeconds
}

console.log(speed)
console.log(secondsToMins(speed))
console.log(secondsToMins(time))

console.log(distanceInKm)
export default function LatestActivity() {
  return (    
    <div className="widget widget--square">
        <div className="latest--widget">
            <div className="latest--title">Latest Run</div>
            <div className="latest--boxes">
                <div className="latest--box box1"> 
                    <div className="latest--text">Distance (km)</div>
                    <div className="latest--number">{distanceInKm}</div>
                </div>
                <div className="latest--box--2 box2"> 
                    <div className="latest--text">Time</div>
                    <div className="latest--number">{secondsToMins(time)}</div>
                </div>
                <div className="latest--box box3"> 
                    <div className="latest--text">Speed (min/km)</div>
                    <div className="latest--number">{secondsToMins(speed)}</div>
                </div>
            </div>
        </div>
    </div>
  )
}
