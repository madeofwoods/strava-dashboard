import { createContext, useEffect, useMemo, useState } from "react";
import { BestEfforts } from "../types/Types";

interface ContextProps {
  children: React.ReactNode;
}

interface MediaQueryType {
  matches: boolean;
}

//Need to fix the context type if possible

export const DataContext = createContext<any | null>(null);

export default function DataContextProvider({ children }: ContextProps) {
  const [name, setName] = useState<string>("");
  const [stravaData, setStravaData] = useState<BestEfforts[] | []>([]);
  const [kmToggle, setKmToggle] = useState<boolean>(true);
  const [errorStatus, setErrorStatus] = useState<number>(444);
  const [mQuery, setMQuery] = useState<MediaQueryType>({
    matches: window.innerWidth < 860 ? true : false,
  });
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  let units = kmToggle ? "km" : "miles";
  const [active, setActive] = useState("Demo")
  const [dataIsLoaded, setDataIsLoaded] = useState<boolean>(stravaData.length > 0)

  useEffect(() => {
    setDataIsLoaded(stravaData.length > 0)
  }, [stravaData])
  const store = useMemo(() => (
    {
        nameKey: [name, setName],
        stravaDataKey: [stravaData, setStravaData],
        toggle: [kmToggle, setKmToggle],
        unitsKey: units,
        axiosError: [errorStatus, setErrorStatus],
        mediaKey: [mQuery, setMQuery],
        menuKey: [menuOpen, setMenuOpen],
        activeKey: [active, setActive],
        dataIsLoadedKey: [dataIsLoaded, setDataIsLoaded]
       })
  , [name, stravaData, kmToggle, units, errorStatus, mQuery, menuOpen, active])

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
}
