

interface RunProps {
  data: any[]
}

export default function NumberRunsYear({data}: RunProps) {
  const dataThisYear = data.filter(run => run.start_date.slice(0, 4) == "2023")
  const totalRuns = dataThisYear.length

  return (
    <div className="widget widget--square">
        <div className="small--widget">
            <div className="small--widget--title">Runs</div>
            <div className="small--widget--number number--runs--number">
                <div className="large--number">{totalRuns}</div>
            </div>
        </div>
    </div>
  )
}
