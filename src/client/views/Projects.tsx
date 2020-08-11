import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { useState } from 'react';
import Switch from "react-switch";

const Projects: React.FC<IProjects> = () => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)
    const [checked, setChecked] = useState<boolean>(false)

    const handleChange = async (checked: any) => {
        setChecked(checked)
    }

    return (
        <>
            <Helmet>
                <title>
                    {PathText}
                </title>
            </Helmet>
            <div className="container">
                <div className="row justify-content-center">
                    <div className={checked ? `${"display-4 text-primary"}` : "display-4"}>{PathText}</div>
                </div>
            </div>
            <div className="row justify-content-center">
                <Switch onChange={handleChange} checked={checked} />
            </div>
        </>
    )
}

export interface IProjects {

}
export default Projects;