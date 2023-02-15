import data from "../assets/data.json"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Evening', col2: '5.25', col3: "27:32" },
  { id: 2, col1: 'Easy Run', col2: '8.41', col3: "41:32" },
  { id: 3, col1: 'With Kira', col2: '12.32', col3: "59:32" },
  { id: 4, col1: 'Evening', col2: '5.25', col3: "27:32" },
  { id: 5, col1: 'Easy Run', col2: '8.41', col3: "41:32" },
  { id: 6, col1: 'With Kira', col2: '12.32', col3: "59:32" },
  { id: 7, col1: 'Evening', col2: '5.25', col3: "27:32" },
  { id: 8, col1: 'Easy Run', col2: '8.41', col3: "41:32" },
  { id: 9, col1: 'With Kira', col2: '12.32', col3: "59:32" },
  { id: 10, col1: 'With Pedro', col2: '12.32', col3: "59:32" },
  { id: 11, col1: 'Evening', col2: '5.25', col3: "27:32" },
  { id: 12, col1: 'Easy Run', col2: '8.41', col3: "41:32" },
  { id: 13, col1: 'With Kira', col2: '12.32', col3: "59:32" },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Run', width: 150, headerAlign: "center", align: "center", cellClassName: "columnRun"  },
  { field: 'col2', headerName: 'Distance (km)', width: 150, headerAlign: "center", align: "center", cellClassName: "columnDist" },
  { field: 'col3', headerName: 'Time', width: 100, headerAlign: "center", align: "center", cellClassName: "columnTime" },
];


export default function DataTable() {
  return (
    <div>
        <div style={{ height: "600px", width: '100%', padding: "20px" }}>
        <DataGrid rows={rows} columns={columns} sx={{color: "lightblue", backgroundColor:"#0d0c23", border: "none"}} />
        </div>
    </div>
  )
}
