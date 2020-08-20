import * as React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import { useState } from 'react'
import styled from 'styled-components'
import { GoTriangleRight } from 'react-icons/go';

let languageArray = ["JavaScript", "TypeScript", "Node.js", "React.js", "Tailwind", "MySQL", "jQuery", "JSON", "Express", "React-Native", "Bootstrap", "Git", "HTML", "CSS", "...and more"]

//splits the languageArray into 2 equal pars and created 2 new arrays for mapping in 2 diffrent columns
const half = Math.ceil(languageArray.length / 2);
const firstHalf = languageArray.splice(0, half)
const secondHalf = languageArray.splice(-half)

const Resume: React.FC<IResume> = () => {

    const { pathname } = useLocation()
    const PathText = getPathText(pathname)
    const [show, setShow] = useState<boolean>(false)

    //function which creatse a bacjground effect when you click "Download Resume"
    function play() {
        document.querySelector(".box").className = "box";
        window.requestAnimationFrame(function (time) {
            window.requestAnimationFrame(function (time) {
                document.querySelector(".box").className = "box changing";
            });
        });
    }

    // Chanages state of show (job experiance) to true
    const handlePlawireClick = () => {
        setShow(true)
    }

    //changes state of show (job experiance) to false
    const handleStangerClick = () => {
        setShow(false)
    }

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
                    <div className="row justify-content-center">
                        <div >
                            <a
                                className="box" onClick={play}
                                href="https://news-api.s3.us-east-2.amazonaws.com/Pawel+SoftDev+Resume+August+20+AWS.pdf"
                                target="_blank">
                                Download Resume
                        </a>
                        </div>
                    </div>
                    <div className="col-md-12 mt-3 border border-left-0 border-right-0 border-top-0 text-center">
                        <h1 className="font-weight-bold">Pawel Jaskolski</h1>
                        <p>pjpavo@gmail.com - Lynbrook, NY</p>
                    </div>
                    <div className="row mt-2 justify-content-center">
                        <div className="col-md-7">
                            <p style={{ textAlign: "justify" }}>
                                Self-motivated Junior Full-Stack Developer with a demonstrated history of working in the digital marketing and advertising industry. Skilled in full-stack application development using ReactJS, JavaScript, TypeScript, NodeJS, Tailwind, CSS and more. Creative and dependable team player with a passion for new technologies and software innovation.
                            </p>
                            <p className="text-primary font-weight-bold">
                                EXPERIENCE
                            </p>
                            <div className="row mt-2 justify-content-center">

                                <ul className="list-group list-group-horizontal-md">
                                    <li
                                        onClick={handlePlawireClick}
                                        className={show ? "list-group-item rounded-0 btn btn-outline-secondary active" : "list-group-item rounded-0 btn btn-outline-secondary "}>Playwire</li>
                                    <li
                                        onClick={handleStangerClick}
                                        className={!show ? "list-group-item rounded-0 btn btn-outline-secondary active" : "list-group-item rounded-0 btn btn-outline-secondary "}>Stanger Injury Treatment Centers</li>
                                </ul>
                            </div>
                            <div className="col-md-10 mt-5 mb-5">
                                {show ?
                                    <div>
                                        <h4 className="text-center">Playwire</h4>
                                        <h6>Client Relations Executive</h6>
                                        <p>DeerfieldBeac​h, FL</p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Assisted key publishers with questions and concerns regarding their accounts</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Created and maintained new partnership accounts in the internal client
                                            interface system which included advertising HTML tag creation, assigning correct advertising target audience, allocating the client to the proper advertising campaign schedule as well as assessing the tier of advertising partnership with the company</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Reviewed HTML for proper processing and implementation of JSON files , placement of JS Scripts, sizing of advertising banners and takeovers for optimal element placements to maximize revenue</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Collected and analyzed data such as hit rates, impressions per pageview, publisher revenue share, percentage increase or decrease time</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Collaborated with the Creative and Director of Ad Ops team in the creation and approval process of custom executions</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Responded to any type of support tickets that come through the publisher interface</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Conducted outreach for more inventory from publisher network partners when demand is high</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Kept up to date on all new products and process management releases relevant to publisher onboarding and maintenance</small>
                                        </p>
                                    </div>
                                    :
                                    <div>
                                        <h4 className="text-center">Stanger Injury Treatment Centers</h4>
                                        <h6>Operations Manager </h6>
                                        <p>Delray Beach, FL</p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Established the company’s technical vision and major aspects of the company’s technological development</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Charted and shaped the company’s strategic direction, development, and future growth</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Provided support to department heads in a fashion that embraced the company’s culture, mission and values</small>
                                        </p>
                                        <p>
                                            <small className="text-muted"><GoTriangleRight />Conducted research on leading-edge technologies and made determinations on the probability of implementation</small>
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-md-3 ml-2">
                            <div className="text-primary font-weight-bold">
                                EDUCATION
                                </div>
                            <div className="font-weight-bold text-muted">
                                    Covalence Code Academy
                            </div>
                            <small>
                                Covalence's Anti-degree certificate, Computer Software Developer 2019 - 2020
                                    </small>
                            <div className="font-weight-bold text-muted mt-2">
                                    Florida Atlantic University
                            </div>
                                <small>
                                    Bachelor's Degree, Health/Health Care Administration/Management Graduated 2017
                                </small>
                            <div className="text-primary font-weight-bold mt-3">
                                TECHNICAL SKILLS
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <div>
                                        {firstHalf.map((language, i) => (
                                            
                                            <div key={i}>
                                                <small>
                                                    {language}
                                                </small>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div>
                                        {secondHalf.map(language => (
                                            <div key={language}>
                                                <small>
                                                    {language}
                                                </small>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="text-primary font-weight-bold mt-3">
                                QUALIFICATIONS
                            </div>
                            <ul>
                                <li><small>Adaptable to learning and understanding new technologies</small></li>
                                <li><small>Superb work ethic</small></li>
                                <li><small>Focused and dedicated problem solver</small></li>
                                <li><small>Committed and driven professional</small></li>
                            </ul>
                        </div>
                    </div>
                </div>
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