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
    const [hi, setHi] = useState<string>('Hello!')
    const [repoCount, setRepoCount] = useState<number>(0)

    //Gets the count of repos from the db
    useEffect(() => {
        (async () => {
            try {
                let res = await fetch('/api/repos/count')
                let repoCount = await res.json();
                setRepoCount(repoCount.count)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

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
                    <small className="text-monospace py-2 px-5 border border-left-0 border-right-0" >Pawel Jaskolski - Software Developer</small>
                </div>
                {/* <div className="row justify-content-center mt-1">
                    <CurrentProjects>
                        <div className="text-monospace" >Current Projects: {repoCount}</div>
                    </CurrentProjects>
                </div> */}
                <LogoText>
                    <div className="text-monospace border border-left-0 border-right-0 border-left-0 border-top-0 py-5">{hi}</div>
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

const CurrentProjects = styled.div`
    opacity: 0.75;
    font-size: 10px;
`;

export interface IHome {
    theme?: boolean,
}
export default Home;