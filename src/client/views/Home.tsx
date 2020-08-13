import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import { useState, useEffect } from 'react'


const Home: React.FC<IHome> = (props) => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)
    const [checked, setChecked] = useState<boolean>()

    useEffect(() => {
        (async () => {
            try {
                setChecked(props.theme);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [event]);

    return (
        <>
            <Helmet >
                <title>
                    {PathText}
                </title>
            </Helmet>
            <GlobalStyles>
                <Helmet >
                    <title>
                        {PathText}
                    </title>
                </Helmet>
            </GlobalStyles>
            <div className="row justify-content-center display-4">{PathText}</div>
            <img
                src={!checked ? `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"}` : `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}`}
                className="rounded mx-auto d-block" 
                style={{width: "200px", height: "auto "}}
                alt="Pawel Eyes Open">
            </img>
        </>
    )
}



export interface IHome {
    theme?: boolean
}
export default Home;