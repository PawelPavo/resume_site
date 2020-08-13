import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'


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
            <div className="row justify-content-center display-4">{PathText}</div>
            <div className="row justify-content-center">
                <div className="col-8 mt-5" style={{textAlign: "justify"}}>
                    <p>Self-motivated Junior Full-Stack Developer with a demonstrated history of working in the digital marketing and advertising industry. Skilled in full-stack application development using ReactJS, JavaScript, TypeScript, NodeJS, Tailwind, CSS and more. Creative and dependable team player with a passion for new technologies and software innovation.</p>
                </div>
            </div>

        </>
    )
}

export interface IAboutMe {

}
export default AboutMe;