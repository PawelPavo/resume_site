import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'


const Projects: React.FC<IProjects> = () => {
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
                <div className="row justify-content-center display-4">{PathText}</div>
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
    margin-top: 25%;
    opacity: 0.8;
`;

const Icon = styled.div`
    font-size: 25px;
    margin-left: 25px;
    margin-right: 25px;

`;

export interface IProjects { }
export default Projects;