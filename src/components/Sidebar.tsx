import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import { Link } from 'react-router-dom';

// style={{position: "absolute", left: "20%"}}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--top">
        <Link to={"/dash"} className="router--link">
          <h2 className="sidebar--title">Dash</h2>
        </Link>
        <div className="sidebar--name">Matt Woods</div>
      <hr className="sidebar--hr" />
      </div> 
      <div className="sidebar--middle">
        <div className="middle--text">Home</div>
        <Link to={"/dash"} className="router--link">
          <div className="middle--text">Dashboard</div>
        </Link>
        <div className="middle--text">Upload</div>
        <div className="middle--text">Contact</div>
      </div>
      <div className="sidebar--bottom">
        <Link to={"/tables"} className="router--link">
          <div className="sidebar--link">
            <TableChartOutlinedIcon className='icon' />
            <div className='link'>Tables</div>
          </div>
        </Link>
        <Link to={"/grid"} className="router--link">
          <div className="sidebar--link">
            <CalendarViewMonthOutlinedIcon className='icon' />
            <div className="link">Grid</div>
          </div>
        </Link>
        <Link to={"/maps"} className="router--link">
          <div className="sidebar--link">
            <MapOutlinedIcon className='icon' />
            <div className="link">Maps</div>
          </div>
        </Link>
        <Link to={"/graphs"} className="router--link">
          <div className="sidebar--link">
            <TimelineOutlinedIcon className='icon' />
            <div className="link">Graphs</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
