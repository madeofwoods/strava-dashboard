import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { secsToMins } from "../utils/TimeFunctions";

// Remember to memoise -- DataGrid is rendering 4 times on first load (8 with strict)

interface DataProps {
    name: string,
    distance: number,
    moving_time: number,
    best_efforts: { elapsed_time: number }[],
  
}

interface Props {
  height: string;
  width: string;
  data: any[];
}

export default function DataTable({ height, width, data }: Props) {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const tableRows: GridRowsProp = tableData?.map((data, index) => ({
    id: index,
    name: data?.name,
    distance: (data.distance / 1000).toFixed(2),
    time: secsToMins(data.moving_time),
    speed: secsToMins((data.moving_time * 1000) / data.distance),
    oneKm: secsToMins(data.best_efforts[2].elapsed_time),
    fiveKm: data.best_efforts[5]
      ? secsToMins(data.best_efforts[5].elapsed_time)
      : null,
    tenKm: data.best_efforts[6]
      ? secsToMins(data.best_efforts[6].elapsed_time)
      : null,
  }));

  const tableCols: GridColDef[] = [
    {
      field: "name",
      headerName: "Run",
      width: 150,
      headerAlign: "center",
      align: "center",
      cellClassName: "columnRun",
    },
    {
      field: "distance",
      headerName: "Distance (km)",
      width: 150,
      headerAlign: "center",
      align: "center",
      cellClassName: "columnDist",
    },
    {
      field: "time",
      headerName: "Time",
      width: 100,
      headerAlign: "center",
      align: "center",
      cellClassName: "columnTime",
    },
    {
      field: "speed",
      headerName: "Av. Speed (min/km)",
      width: 150,
      headerAlign: "center",
      align: "center",
      cellClassName: "columnTime",
    },
    {
      field: "oneKm",
      headerName: "Fastest 1km",
      width: 150,
      headerAlign: "center",
      align: "center",
      cellClassName: "columnOneKm",
    },
    {
      field: "fiveKm",
      headerName: "Fastest 5km",
      width: 150,
      headerAlign: "center",
      align: "center",
      cellClassName: "columnFiveKm",
    },
    {
      field: "tenKm",
      headerName: "Fastest 10km",
      width: 150,
      headerAlign: "center",
      align: "center",
      cellClassName: "columnFiveKm",
    },
  ];

  return (
    <div style={{ height: height, width: width, padding: "20px" }}>
      <DataGrid
        rows={tableRows}
        columns={tableCols}
        sx={{ color: "lightblue", backgroundColor: "#0d0c23", border: "none" }}
      />
    </div>
  );
}
