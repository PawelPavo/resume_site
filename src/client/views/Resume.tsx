import * as React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import styled from 'styled-components'

const Resume: React.FC<IResume> = () => {

    const { pathname } = useLocation()
    const PathText = getPathText(pathname)

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
                <Border className="">
                    {PathText}
                </Border>
                <BackButton>
                    <Link to="/projects">
                        <div className=" mb-5 btn btn-outline-secondary">BACK</div>
                    </Link>
                </BackButton>
                <div className="row justify-content-center">
                    <div className="col-8 mt-5" style={{ textAlign: "justify" }}>
                        <p>Self-motivated Junior Full-Stack Developer with a demonstrated history of working in the digital marketing and advertising industry. Skilled in full-stack application development using ReactJS, JavaScript, TypeScript, NodeJS, Tailwind, CSS and more. Creative and dependable team player with a passion for new technologies and software innovation.</p>
                    </div>
                </div>
                <Link to="https://news-api.s3.us-east-2.amazonaws.com/Pawel+SoftDev+Resume+August.pdf" target="_blank" download>Download Resume</Link>
            </div>
        </>
    )
}

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

const BackButton = styled.div`
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


export interface IResume { }
export default Resume;