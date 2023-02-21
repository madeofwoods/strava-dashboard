import { createContext, useState } from "react"


interface ContextProps {
    children: React.ReactNode
}


export const DataContext = createContext<any | null>(null)

export default function DataContextProvider({children}:ContextProps) {
    const [data, setData] = useState<any>("Matt")
    return (
        <DataContext.Provider value={[data, setData]}>
        {children}
        </DataContext.Provider>

    )
}