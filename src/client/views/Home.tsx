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

    // runs a check on which theme is curently active
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
                <Border className="mb-5">
                    {PathText}
                </Border>
                <Logo>
                    <div className="border border-left-0 border-right-0 border-bottom-0 p-5">
                        <img
                            src={!checked ? `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"}` : `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}`}
                            className=""
                            style={{ width: "160px", height: "auto " }}
                            alt="Pawel Eyes Open">
                        </img>

                    </div>
                </Logo>
                <div className="row justify-content-center">
                    <small className="text-monospace py-2 px-5 border border-left-0 border-right-0" >Pawel Jaskolski - Software Developer</small>
                </div>
                <div className="row justify-content-center mt-1">
                </div>
                <LogoText>
                    <div className="text-monospace border border-left-0 border-right-0 border-left-0 border-top-0 py-5">{!checked ? `${'Hello...'}` : `${'Boo!'}`}</div>
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

const Border = styled.div`
    border-top: 1px solid;
    border-radius: 40px 0px 0px 40px;
    padding-left: 15px;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    font-family: "Courier New", Courier, monospace;
    font-size: 25px;
    letter-spacing: 2px;
    word-spacing: 2px;
    font-weight: 400;
    text-decoration: none;
    font-style: italic;
    font-variant: small-caps;
    text-transform: lowercase;
`;

export interface IHome {
    theme?: boolean,
}
export default Home;