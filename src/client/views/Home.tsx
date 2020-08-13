import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import { useState, useEffect } from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'



const Home: React.FC<IHome> = (props) => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)
    const [checked, setChecked] = useState<boolean>()
    const [hi, setHi] = useState<string>('Hi')

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
                {/* <div className="row justify-content-center display-4">{PathText}</div> */}

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
                    <small className="text-monospace p-2 border border-left-0 border-right-0" >Pawel Jaskolski - Software Developer </small>
                </div>
                <LogoText>
    <div className="text-monospace border border-left-0 border-right-0 border-left-0 border-top-0 px-4">{hi}</div>
                </LogoText>
                <div className="row justify-content-center fixed-bottom pb-3">
                    <Icon>
                        <a target="_blank" href="https://github.com/PawelPavo"><FaGithub /></a>
                    </Icon>
                    <Icon>
                        <a href=""><FaInstagram /></a>
                    </Icon>
                </div>
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

const Icon = styled.div`
    font-size: 25px;
    margin-left: 25px;
    margin-right: 25px;
`;

const LogoText = styled.div`
    font-size: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
`;

export interface IHome {
    theme?: boolean,
}
export default Home;