import LineGraph from '../../components/LineGraph'
import "./Graphs.css"
import { useContext } from "react"
import { DataContext } from "../../context/DataContextProvider"
import demoData from "../../assets/data.json"

export default function Graphs() {
  const { stravaDataKey } = useContext(DataContext)
  const [data, setData] = stravaDataKey
  return (
    <div className="Graphs">
      <div className='five--graph'>
          <LineGraph data={data.length > 0 ? data : demoData} distance="five" position={5} minmax={100} label={"5km"}/>
      </div>
      <div className='five--graph'>
          <LineGraph data={data.length > 0 ? data : demoData} distance="one" position={2} minmax={20} label={"1km"}/>
      </div>
      <div className='five--graph'>
          <LineGraph data={data.length > 0 ? data : demoData} distance="ten" position={6} minmax={100} label={"10km"} width={"100%"}/>
      </div>
    </div>
  )
}
