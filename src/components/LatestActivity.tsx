import { secsToMins } from "../utils/TimeFunctions";

interface LatestProps {
  data: any[];
}
export default function LatestActivity({ data }: LatestProps) {
  const latestRun = data[0];

  const time = latestRun.data.moving_time;
  const distance = latestRun.data.distance;

  const distanceInKm = (distance / 1000).toFixed(2);
  const speed = (time * 1000) / distance;

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
            <div className="latest--number">{secsToMins(time)}</div>
          </div>
          <div className="latest--box box3">
            <div className="latest--text">Speed (min/km)</div>
            <div className="latest--number">{secsToMins(speed)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
