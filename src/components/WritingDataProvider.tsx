import { ReactNode, createContext, useContext, useState } from "react";

export type WritingDataType = {
    data:string,
    name:string
}
export type EditDataType = {
    data:string,
    name:string,
    id:number
}

export const WritingDataContext = createContext()

const WritingDataProvider = ({children}:{children:ReactNode}) => {
    const [data,setData] = useState<WritingDataType[]>([])
    const [editData,setEditData] = useState({})
    const [textVisibility,setTextVisibility] = useState(false)
    const [imgVisibility,setImgVisibility] = useState(false)
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

   

    return <WritingDataContext.Provider value={{data,setData,editData,setEditData,textVisibility,setTextVisibility,imgVisibility,setImgVisibility,user, setUser 
     ,   profile, setProfile}} >
    {children}
    </WritingDataContext.Provider>
}

// const useWritingContext = () => {
//     const context = useContext(WritingDataContext);
//     if (!context) {
//       throw new Error('useCounter must be used within a CounterProvider');
//     }
//     return context;
// }
export {WritingDataProvider}