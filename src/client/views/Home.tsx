import * as React from 'react'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PercetageBar from '../components/PercetageBar';
import { useState, useEffect } from 'react';
import { ILanguages } from '../utils/interfaces';
import { useLocation } from 'react-router-dom';
import { getPathText } from '../utils/pathing';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe';
import { MdSwapHoriz } from "react-icons/md";

const Home: React.FC<IHome> = () => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)

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

    return (
        <>
            <Helmet>
                <title>
                    {PathText}
                </title>
            </Helmet>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="display-4 ">{PathText}</div>
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
                                {/* <AboutMe /> */}
                                <div className="display-1 d-none d-lg-block d-print-block">
                                    <MdSwapHoriz />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 border p-5 shadow-sm">
                        <Title>My Skills:</Title>
                        {languages.map(language => (
                            <PercetageBar key={language.id} language={language} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #2F4E6F;
  font-family: "Courier New", Courier, monospace
`;

export interface IHome { }
export default Home;