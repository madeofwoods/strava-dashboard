import { BestEfforts } from "../types/Types";

interface RunProps {
  data: BestEfforts[];
  year: string;
}

export default function NumberRunsYear({ data, year }: RunProps) {
  const dataThisYear = data.filter((run) => String(run.start_date).slice(0, 4) == year);
  const totalRuns = dataThisYear.length;

  return (
    <div className="widget widget--square">
      <div className="small--widget">
        <div className="small--widget--title">Runs</div>
        <div className="small--widget--number number--runs--number">
          <div className="large--number">{totalRuns}</div>
        </div>
      </div>
    </div>
  );
}
