import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import { BestEfforts } from "../types/Types";
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
  data: BestEfforts[];
}

export default function DataTable({ height, width, data }: Props) {
  const [tableData, setTableData] = useState<BestEfforts[] | []>([]);
  const {toggle, unitsKey} = useContext(DataContext)
  const [kmToggle] = toggle
  const units = unitsKey
  const divisor = kmToggle ? 1000 : 1609.34

  useEffect(() => {
    setTableData(data);
    console.log(data)
  }, [data]);

  const tableRows: GridRowsProp = tableData?.map((data: BestEfforts, index) => ({
    id: index,
    name: data?.name,
    distance: (data.distance / divisor).toFixed(2),
    time: secsToMins(data.moving_time),
    speed: secsToMins((data.moving_time * divisor) / data.distance),
    oneKm: data.best_efforts[2]
    ? secsToMins(data.best_efforts[2].moving_time)
    : null,
    oneMile: data.best_efforts[3]
      ? secsToMins(data.best_efforts[3].moving_time)
      : null,
    fiveKm: data.best_efforts[5]
      ? secsToMins(data.best_efforts[5].moving_time)
      : null,
    tenKm: data.best_efforts[6]
      ? secsToMins(data.best_efforts[6].moving_time)
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
      headerName: `Distance (${units})`,
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
      headerName: `Av. Speed (min/${units})`,
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
      field: "oneMile",
      headerName: "Fastest 1 mile",
      width: 150,
      headerAlign: "center",
      align: "center",
      cellClassName: "columnOneMile",
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
