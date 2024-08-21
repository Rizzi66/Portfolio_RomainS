import { useState, createContext } from "react"

export const BackgroundContext = createContext()

export const BackgroundProvider = ({ children }) => {
    const [pathName, SetPathName] = useState("/Projet8_Portfolio/")
    const [oldPathName, SetOldPathName] = useState("/Projet8_Portfolio/")

    const toggleBackground = () => {
        SetOldPathName(window.location.pathname)
        setTimeout(() => {
            SetPathName(window.location.pathname)
        }, 100)
    }

 
    return (
        <BackgroundContext.Provider value={{ pathName, oldPathName, toggleBackground }}>
            {children}
        </BackgroundContext.Provider>
    )
}