import React, {PropsWithChildren, useContext, useEffect, FC} from "react";
import {DashboardContext} from "../../contexts/DashboardContext";
import {useNavigate} from "react-router-dom";


interface IProps  {
    fallback: string;
}

export const PrivateRouter: FC<PropsWithChildren & IProps> = (props) => {
    const {user} = useContext(DashboardContext)!;
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {

            navigate(props.fallback);
        }
    }, [navigate, props.fallback, user]);



    return (
        <>{props.children}</>
    )
}