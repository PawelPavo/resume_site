import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'

const Projects: React.FC<IProjects> = () => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)


    return (
        <>
            <Helmet>
                <title>
                    {PathText}
                </title>
            </Helmet>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="display-4">{PathText}</div>
                </div>
            </div>
        </>
    )
}

export interface IProjects {

}
export default Projects;