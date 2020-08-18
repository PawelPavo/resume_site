import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'


const Home: React.FC<IHome> = (props) => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)
    const [checked, setChecked] = useState<boolean>()
    const [hi, setHi] = useState<string>('llo!')

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
            <div className="container">
                <Logo>
                    <div className="border border-left-0 border-right-0 border-bottom-0 p-5">
                        <img
                            src={!checked ? `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"}` : `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}`}
                            className=""
                            style={{ width: "100px", height: "auto " }}
                            alt="Pawel Eyes Open">
                        </img>
                    </div>
                </Logo>
                <div className="row justify-content-center">
                    <small className="text-monospace py-2 px-5 border border-left-0 border-right-0" >Pawel Jaskolski - Software Developer </small>
                </div>
                <LogoText>
                    <div className="text-monospace border border-left-0 border-right-0 border-left-0 border-top-0 py-5"><span className="">He</span>{hi}</div>
                </LogoText>
                <Footer />
            </div>

        </>
    )
}


const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    opacity: 0.75;
`;

const LogoText = styled.div`
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
`;

export interface IHome {
    theme?: boolean,
}
export default Home;