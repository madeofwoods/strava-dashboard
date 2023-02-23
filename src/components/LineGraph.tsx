import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import { useEffect, useState } from 'react';


const getRunData = (data: any[], distance: string, position: number) => {

  const runData = data.filter(data => data.best_efforts.length > position).map((data) => ({ name: new Date(data.start_date), [distance]: data.best_efforts[position]?.moving_time })).reverse()
  return runData
}



interface PropTypes {
  data: any[],
  distance: string, 
  position: number,
  minmax: number,
  label: string,
  width?: string
}

export default function LineGraph({data, distance, position, minmax, label, width="120%"}: PropTypes) {
  
  const [graphData, setGraphData] = useState<any[]>(getRunData(data, distance, 2))

  

  useEffect(() => {
    setGraphData(getRunData(data, distance, position))
  }, [data])

  return (
    <div style={{width:width, height: "100%"}}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          // title='Fastest 5km time each run'
          width={500}
          height={300}
          data={graphData}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#323236' />
          <XAxis  dataKey="name" tickFormatter={time => moment(time).format("DD MMM")} />
          <YAxis domain={[`dataMin - ${minmax}`, `dataMax + ${minmax}`]}
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
                return [`${duration.minutes()}:${String(duration.seconds()).padStart(2, "0")}`, label]
              }} 
          />
          <Legend />
          <Line name={`Fastest ${label} time`} type="monotone" dataKey={distance} stroke="#8884d8" activeDot={{ r: 5 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
