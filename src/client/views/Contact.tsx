import * as React from 'react';
import { getPathText } from '../utils/pathing';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";


const Contact: React.FC<IContact> = () => {

    const { pathname } = useLocation()
    const PathText = getPathText(pathname)

    return (
        <>

            <Helmet>
                <title>
                    {PathText}
                </title>
            </Helmet>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="display-4">{PathText}</div>
                </div>
            </div>
        </>
    )
}

export interface IContact {

}
export default Contact;