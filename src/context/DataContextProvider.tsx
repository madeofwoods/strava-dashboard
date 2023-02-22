import { createContext, useState } from "react"


interface ContextProps {
    children: React.ReactNode
}


export const DataContext = createContext<any | null>(null)

export default function DataContextProvider({children}:ContextProps) {
    const [name, setName] = useState<any>("Matt")
    const [stravaData, setStravaData] = useState<any>([])
    const store = {
        nameKey: [name, setName],
        stravaDataKey: [stravaData, setStravaData]
    }
    return (
        <DataContext.Provider value={store}>
        {children}
        </DataContext.Provider>

    )
}