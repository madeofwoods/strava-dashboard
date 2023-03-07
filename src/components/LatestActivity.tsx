import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { secsToMins } from "../utils/TimeFunctions";

interface LatestProps {
  data: any[];
}
export default function LatestActivity({ data }: LatestProps) {
  const {toggle, unitsKey} = useContext(DataContext)
  const [kmToggle] = toggle
  const units = unitsKey
  const latestRun = data[0];

  const time = latestRun.moving_time;
  const distance = latestRun.distance;
  const divisor = kmToggle ? 1000 : 1609.34

  const distanceInKm = (distance / divisor).toFixed(2);
  const speed = (time * divisor) / distance;

  return (
    <div className="widget widget--square">
      <div className="latest--widget">
        <div className="latest--title">Latest Run</div>
        <div className="latest--boxes">
          <div className="latest--box box1">
            <div className="latest--text">Distance ({units})</div>
            <div className="latest--number">{distanceInKm}</div>
          </div>
          <div className="latest--box--2 box2">
            <div className="latest--text">Time</div>
            <div className="latest--number">{secsToMins(time)}</div>
          </div>
          <div className="latest--box box3">
            <div className="latest--text">Speed (min/{units})</div>
            <div className="latest--number">{secsToMins(speed)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
