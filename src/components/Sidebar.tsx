import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

// style={{position: "absolute", left: "20%"}}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--top">
        <h2 className="sidebar--title">Dash</h2>
        <div className="sidebar--name">Matt Woods</div>
      <hr className="sidebar--hr" />
      </div> 
      <div className="sidebar--middle">
        <div className="middle--text">Home</div>
        <div className="middle--text">Upload</div>
        <div className="middle--text">Contact</div>
      </div>
      <div className="sidebar--bottom">
        <div className="sidebar--link">
          <TableChartOutlinedIcon className='icon' />
          <div className='link'>Tables</div>
        </div>
        <div className="sidebar--link">
          <CalendarViewMonthOutlinedIcon className='icon' />
        <div className="link">Heatmaps</div>
        </div>
        <div className="sidebar--link">
          <MapOutlinedIcon className='icon' />
        <div className="link">Maps</div>
        </div>
        <div className="sidebar--link">
          <TimelineOutlinedIcon className='icon' />
        <div className="link">Graphs</div>
        </div>
      </div>
    </div>
  )
}
