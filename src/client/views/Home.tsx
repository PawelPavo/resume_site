import * as React from 'react'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PercetageBar from '../components/PercetageBar';
import { useState, useEffect } from 'react';
import { ILanguages } from '../utils/interfaces';
import { useLocation } from 'react-router-dom';
import { getPathText } from '../utils/pathing';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Switch from "react-switch";
import { MdSwapHoriz } from "react-icons/md";
import NavigationBar from '../components/Navigation';

const Home: React.FC<IHome> = () => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)
    const [checked, setChecked] = useState<boolean>(false)
    const [languages, setLanguages] = useState<ILanguages[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch('/api/languages');
                let languages = await res.json();
                setLanguages(languages);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const renderTooltipPic = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            110%
        </Tooltip>
    );


    const handleChange = async (checked: boolean) => {
        setChecked(checked)
    }

    return (

        <ThemeProvider theme={!checked ? lightTheme : darkTheme}>
            <BodyWrapper>
                <div className="row justify-content-center p-2">
                    <Switch onChange={handleChange} checked={checked} />
                </div>
                <NavigationBar />
                <Helmet>
                    <title>
                        {PathText}
                    </title>
                </Helmet>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={!checked ? `${"display-4 text-dark"}` : "display-4 text-light"}>{PathText}</div>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="col-md-8 my-auto">
                            <div className="row">
                                <div className="col-4">
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={renderTooltipPic}>
                                        <img src="https://news-api.s3.us-east-2.amazonaws.com/profile.jpg" alt="My Photo" className="img-thumbnail" />
                                    </OverlayTrigger>
                                </div>
                                <div className="col-8 my-auto text-center">
                                    <div className="display-1 d-none d-lg-block d-print-block">
                                        <MdSwapHoriz />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 border p-5 shadow-sm">
                            <h4 className={!checked ? `${"text-dark font-weight-light"}` : "text-light font-weight-light"}>My Skills:</h4>
                            {languages.map(language => (
                                <PercetageBar key={language.id} language={language} />
                            ))}
                        </div>
                    </div>
                </div>
            </BodyWrapper>
        </ThemeProvider>
    )
}


const BodyWrapper = styled.div`
    background: ${({ theme }) => theme.body};
    position: ${({ theme }) => theme.position};
    width: ${({ theme }) => theme.width};
    height: ${({ theme }) => theme.height};
`;

const darkTheme = {
    body: "#718096",
    position: "fixed",
    width: "100%",
    height: "100vh",
    transition: "all 500ms ease",
    color: "white"
}

const lightTheme = {
    body: "#FFFFFF",
    position: "fixed",
    width: "100%",
    height: "100vh",
    transition: "all 500ms ease",
}

export interface IHome { }
export default Home;