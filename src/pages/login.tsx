import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import IPage from '../interfaces/page';
import logging from '../config/logging'

const LoginPage: React.FunctionComponent<IPage> = props => {
    const history = useNavigate()
    const handleLogin = () => {
        props.setIsAuth(true)
        history('/dashboard')
    }

    useEffect(() => {
        logging.info(`Loading ${props.name} with authentication = ${props.setIsAuth}`)
    }, [])

    return (
        <div>
            <p>This is the Login page!</p>
            <p/>
            <div>
                <button onClick={()=>handleLogin()}>Login</button>
            </div>
        </div>
    )
}

export default LoginPage;