
'use client'
import { createContext, FC, ReactNode, Ref, useContext, useRef } from "react";

interface AppProviderI {
    children: ReactNode
}

type AppContextType = {
    sidebarRef: Ref<unknown> | null
}

const AppContext = createContext<AppContextType>({
    sidebarRef:null
})


export const AppProvider: FC<AppProviderI> = ({ children }) => {

    const sidebarRef = useRef(null)


    return <AppContext.Provider value={{ sidebarRef }}>
        {children}
    </AppContext.Provider>
}

export const useAppProvider = () => {
    return useContext(AppContext)
}