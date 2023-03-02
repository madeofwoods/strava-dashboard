import { createContext, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

interface mQueryType {
  matches: Boolean;
}

export const DataContext = createContext<any | null>(null);

export default function DataContextProvider({ children }: ContextProps) {
  const [name, setName] = useState<any>("");
  const [stravaData, setStravaData] = useState<any>([]);
  const [kmToggle, setKmToggle] = useState<Boolean>(true);
  const [errorStatus, setErrorStatus] = useState<number>(444);
  const [mQuery, setMQuery] = useState<mQueryType>({
    matches: window.innerWidth < 700 ? true : false,
  });
  const [menuOpen, setMenuOpen] = useState<Boolean>(false)
  let units = kmToggle ? "km" : "miles";
  const store = {
    nameKey: [name, setName],
    stravaDataKey: [stravaData, setStravaData],
    toggle: [kmToggle, setKmToggle],
    unitsKey: units,
    axiosError: [errorStatus, setErrorStatus],
    mediaKey: [mQuery, setMQuery],
    menuKey: [menuOpen, setMenuOpen]
  };
  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
}
