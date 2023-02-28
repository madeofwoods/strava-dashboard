import { createContext, useState } from "react"


interface ContextProps {
    children: React.ReactNode
}


export const DataContext = createContext<any | null>(null)

export default function DataContextProvider({children}:ContextProps) {
    const [name, setName] = useState<any>("")
    const [stravaData, setStravaData] = useState<any>([])
    const [kmToggle, setKmToggle] = useState<Boolean>(true)
    const [redirect, setRedirect] = useState<string>("")
    let units = kmToggle ? "km" : "miles"
    const store = {
        nameKey: [name, setName],
        stravaDataKey: [stravaData, setStravaData],
        toggle: [kmToggle, setKmToggle],
        unitsKey: units,
    }
    return (
        <DataContext.Provider value={store}>
        {children}
        </DataContext.Provider>

    )
}