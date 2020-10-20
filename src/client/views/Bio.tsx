import * as React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import styled from 'styled-components'

const AboutMe: React.FC<IAboutMe> = () => {

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
                <Border className="mb-2">
                    {PathText}
                </Border>
                <Link to="/resume" download>My Resume</Link>

                <div className="row justify-content-center">
                    <div className="col-md-8 mt-3" style={{ textAlign: "justify" }}>
                        <p>Hello, My name is Pawel and I am a software developer with a background in healthcare administration. I am originally from Poland but immigrated to the US when I was 10 years old and lived in cities such as New York, West Palm Beach and Fort Lauderdale.</p>
                        <p>Even when working in the healthcare industry, I was always interested in how the software works and the code behind it. I decided that I wanted to shift my focus onto a new career path and dedicated my time to becoming a software developer.</p>
                        <p>I am an avid problem solver. I won’t give up until the problem in front of me is solved. I believe this quality is what makes me an excellent software developer. Not only do I want to find answers, but it’s important to me that I get a full understanding of what I am trying to solve. Along with my dedicated work ethic, I am a hardworking individual who brings passion and insight into everything I do. I have proven experience in leading a team and working with them towards finding the best solutions. I am hungry for building and fine-tuning more applications and learning new technologies along the way.</p>
                        <p>Tech I am currently using includes:</p>
                        <ul>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>MySQL</li>
                            <li>HTML/CSS/SASS</li>
                        </ul>
                        <p>Tech I am interested in learning:</p>
                        <ul>
                            <li>Go</li>
                            <li>Python</li>
                            <li>JS Testing frameworks such as Mocha / Jest</li>
                            <li>Node with Chai </li>
                            <li>React utility Enzyme</li>
                        </ul>
                        <p>In my free time, I enjoy researching and investing in the stock market, while maybe sipping on a Jai Alai, my favorite beer. And in the background, I’ll have a soccer match playing. I also enjoy going out to different restaurants trying to find the best fried calamari with my girlfriend, who created my awesome avatar … by the way!</p>
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



export interface IAboutMe {

}
export default AboutMe;