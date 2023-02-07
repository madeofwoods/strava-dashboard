
import data from "../assets/data.json"

const dataThisYear = data.filter(run => run.data.start_date.slice(0, 4) == "2023")

const totalRuns = dataThisYear.length
console.log(totalRuns)

export default function NumberRunsYear() {
  return (
    <div className="widget widget--square">
        <div className="small--widget">
            <div className="small--widget--title">Runs</div>
            <div className="small--widget--number">
                <div className="large--number">{totalRuns}</div>
            </div>
        </div>
    </div>
  )
}
