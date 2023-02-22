const getTotalDistance = (data: any[]): string => {
  const dataThisYear = data.filter(
    (run) => run.start_date.slice(0, 4) == "2023"
  );
  const distances = dataThisYear.map((data) => data.distance);
  const meters = Math.round(distances.reduce((a, b) => a + b, 0));
  const km = (meters / 1000).toFixed(2);

  return km;
};

interface YearProps {
  data: any[];
}

export default function DistanceYear({ data }: YearProps) {
  return (
    <div className="widget widget--square">
      <div className="small--widget">
        <div className="small--widget--title">Distance this year (km)</div>
        <div className="small--widget--number">
          <div className="large--number">{getTotalDistance(data)}</div>
        </div>
      </div>
    </div>
  );
}
