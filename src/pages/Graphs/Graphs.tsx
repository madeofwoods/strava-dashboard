import data from "../../assets/data.json"
import LineGraph from '../../components/LineGraph'
import "./Graphs.css"

export default function Graphs() {
  return (
    <div className="Graphs">
      <div className='five--graph'>
          <LineGraph data={data} distance="five" position={5} minmax={100} label={"5km"}/>
      </div>
      <div className='five--graph'>
          <LineGraph data={data} distance="one" position={2} minmax={20} label={"1km"}/>
      </div>
      <div className='five--graph'>
          <LineGraph data={data} distance="ten" position={6} minmax={100} label={"10km"} width={"100%"}/>
      </div>
    </div>
  )
}
