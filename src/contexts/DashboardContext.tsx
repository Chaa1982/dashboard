import React, {createContext, PropsWithChildren, FC, useState, Dispatch} from "react";
import {IUser} from "../types";


interface IDashboardContext {
    user: IUser | null;
    setUser: Dispatch<IUser>;
}

export const DashboardContext = createContext<IDashboardContext | null>(null);


export const DashboardContextProvider: FC<PropsWithChildren> = (props) => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <DashboardContext.Provider value={{user, setUser}}>
            {props.children}
        </DashboardContext.Provider>
    );
}




