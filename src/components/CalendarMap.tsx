import CalendarHeatmap from 'react-calendar-heatmap'
import data from "../assets/data.json"
 

export default function CalendarMap() {
  return (
    <div>
        <CalendarHeatmap startDate={new Date('2023-01-01')} endDate={new Date('2023-12-31')}/>
    </div>
  )
}
