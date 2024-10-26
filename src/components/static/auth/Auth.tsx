import {FlexColumn} from "../../shared/Flex";
import './auth.css';
import {useState} from "react";
import {IUser} from "../../../types";

export const Auth = () => {
    const [formData, setFormData] = useState<IUser>({email: "", password: ""});

    return (
        <FlexColumn className={'auth'} width="100%" height={'100vh'} justifyContent={'center'} alignItems="center" background={'silver'}>
            <h2>Auth</h2>
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
            <button>Submit</button>
        </FlexColumn>
    );
}