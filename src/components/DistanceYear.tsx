import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { BestEfforts } from "../types/Types";

const getTotalDistance = (data: BestEfforts[], km: boolean, year: string): string => {
  const dataThisYear = data.filter((run) => String(run.start_date).slice(0, 4) == year);
  const distances = dataThisYear.map((data) => data.distance);
  const meters = Math.round(distances.reduce((a, b) => a + b, 0));
  const divisor = km ? 1000 : 1609.34;
  const dist = (meters / divisor).toFixed(2);

  return dist;
};

interface YearProps {
  data: BestEfforts[];
  year: string;
}

export default function DistanceYear({ data, year }: YearProps) {
  const { toggle, unitsKey } = useContext(DataContext);
  const [kmToggle] = toggle;
  const units = unitsKey;

  return (
    <div className="widget widget--square">
      <div className="small--widget">
        <div className="small--widget--title ">Distance this year ({units})</div>
        <div className="small--widget--number distance--year--number">
          <div className="large--number">{getTotalDistance(data, kmToggle, year)}</div>
        </div>
      </div>
    </div>
  );
}
