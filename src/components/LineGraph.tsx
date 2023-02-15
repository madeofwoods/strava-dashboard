import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import jsonData from "../assets/data.json"

import { secondsToMins } from './LatestActivity';


const runData = jsonData.filter(data => data.data.best_efforts.length > 5).map((data) => ({ name: new Date(data.data.start_date), five: data.data.best_efforts[5]?.elapsed_time }))
console.log(runData)
// const runData2 = runData.map(data => ({...data, five: secondsToMins(data.five)}))
// console.log(runData2)
const runData3 = runData.reverse()

console.log(runData3)

const runDate = runData[0].name
console.log(runDate.getTime())

console.log(moment(runDate.getTime()).format("DD MMM"))



const test = [
  {
      "name": "2023-02-03T14:36:59Z",
      "five": "27.23"
  },
  {
      "name": "2023-02-02T15:31:43Z",
      "five": "23.29"
  },
  {
      "name": "2023-01-29T14:28:39Z",
      "five": "25.48"
  },
  {
      "name": "2023-01-25T10:59:45Z",
      "five": "23.01"
  },
  {
      "name": "2023-01-24T15:06:21Z",
      "five": "22.16"
  },

]

export default function LineGraph() {
  return (
    <div style={{width:"120%", height: "100%"}}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          // title='Fastest 5km time each run'
          width={500}
          height={300}
          data={runData3}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='black' />
          <XAxis  dataKey="name" tickFormatter={time => moment(time).format("DD MMM")} />
          <YAxis domain={['dataMin - 100', 'dataMax + 100']}
              tickCount={8}
              tickFormatter={time => {
                  const duration = moment.duration(time, "seconds")
                return `${duration.minutes()}:${String(duration.seconds()).padStart(2, "0")}`}} 
          />
          <Tooltip 
              contentStyle={{backgroundColor: "black", border: "none"}}
              labelFormatter={value => moment(value).format("DD MMM")} 
              formatter={value => {
                const duration = moment.duration(Number(value), "seconds")
                return [`${duration.minutes()}:${String(duration.seconds()).padStart(2, "0")}`, "5k"]
              }} 
          />
          <Legend />
          <Line name='Fastest 5km time' type="monotone" dataKey="five" stroke="#8884d8" activeDot={{ r: 5 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
