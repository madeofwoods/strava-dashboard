import { getMonth } from "../utils/TimeFunctions";

const [month, monthNumeric] = getMonth();

const getTotalMonthlyDistance = (data: any[]): string => {
  const distances = data.map((data) => data.distance);
  const meters = Math.round(distances.reduce((a, b) => a + b, 0));
  const km = (meters / 1000).toFixed(2);

  return km;
};

interface MonthProps {
  data: any[];
}

export default function DistanceMonth({ data }: MonthProps) {
  const dataThisMonth = data.filter(
    (run) => run.start_date.slice(0, 7) == `2023-${monthNumeric}`
  );

  return (
    <div className="widget widget--square">
      <div className="small--widget">
        <div className="small--widget--title">Distance in {month} (km)</div>
        <div className="small--widget--number">
          <div className="large--number">
            {getTotalMonthlyDistance(dataThisMonth)}
          </div>
        </div>
      </div>
    </div>
  );
}
