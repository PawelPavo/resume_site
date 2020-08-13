import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import styled from 'styled-components'
import Footer from '../components/Footer'


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
                <Footer />
            </div>

        </>
    )
}

export interface IProjects { }
export default Projects;