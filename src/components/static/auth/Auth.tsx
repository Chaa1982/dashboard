import {FlexColumn} from "../../shared/Flex";
import './auth.css';
import {useContext, useState} from "react";
import {IUser} from "../../../types";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useNavigate} from "react-router-dom";
import {DashboardContext, DashboardContextProvider} from "../../../contexts/DashboardContext";

export const Auth = () => {
    const [formData, setFormData] = useState<IUser>({email: "", password: ""});
    const [_, setLocalStorageFormData] = useLocalStorage('userData');
    const navigate = useNavigate();
    const {setUser} = useContext(DashboardContext)!;


    const onSubmit = () => {
        if(formData.email.trim() !== "" && formData.password.trim() !== "") {
            setLocalStorageFormData(formData);

        } else {
            navigate("/");
            return;
        }

        //it's test because I don't have DB
        if (formData.email === "ch@i.ua" && formData.password === "admin") {
            setUser(formData);
            navigate("/dashboard");
        } else {
            alert('WRONG DATA');
        }

        setFormData( {email: '', password: ''} );
    }


    return (
        <FlexColumn className={'auth'} width="100%" height={'100vh'} justifyContent={'center'} alignItems="center" background={'silver'} gap={'5px'}>
            <h2>Login</h2>
            <input
                type={"email"}
                placeholder={'Enter your email address'}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
                type={"password"}
                placeholder={'Enter your password'}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <button onClick={onSubmit}>Submit</button>
        </FlexColumn>
    );
}