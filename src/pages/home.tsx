import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging'

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [])
    return <p>This is the Home page!</p>
}

export default HomePage;