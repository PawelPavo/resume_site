import * as React from 'react'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PercetageBar from '../components/PercetageBar';
import { useState, useEffect } from 'react';
import { ILanguages } from '../utils/interfaces';
import { useLocation } from 'react-router-dom';
import { getPathText } from '../utils/pathing';
import { Helmet } from 'react-helmet';

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
                    Home
                </title>
            </Helmet>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="display-4 ">{PathText}</div>
                </div>
                <div className="row">
                    <div className="col-md-8 my-auto">
                        <div className="row">
                            <div className="col-4">
                                <OverlayTrigger
                                    placement="right"
                                    overlay={renderTooltipPic}>
                                    <img src="https://news-api.s3.us-east-2.amazonaws.com/profile.jpg" alt="My Photo" className="img-thumbnail" />
                                </OverlayTrigger>
                            </div>
                            <div
                                className="col-md-6 my-auto"
                                style={{ textAlign: "justify" }}>
                                Self-motivated Junior Full-Stack Developer with a demonstrated history of working in the digital marketing and advertising industry. Skilled in full-stack application development using ReactJS, JavaScript, TypeScript, NodeJS, Tailwind, CSS and more. Creative and dependable team player with a passion for new technologies and software innovation.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 border p-5 shadow-sm">
                        {languages.map(language => (
                            <PercetageBar key={language.id} language={language} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export interface IHome {

}
export default Home;