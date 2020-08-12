import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { useState } from 'react';
import Switch from "react-switch";
import styled, { ThemeProvider } from 'styled-components';
import NavigationBar from '../components/Navigation';

const Projects: React.FC<IProjects> = () => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)
    const [checked, setChecked] = useState<boolean>(false)

    const handleChange = async (checked: any) => {
        setChecked(checked)
    }

    return (
        <>
            <ThemeProvider theme={!checked ? lightTheme : darkTheme}>
                <BodyWrapper>
                    <div className="row justify-content-center p-2">
                        <Switch onChange={handleChange} checked={checked} />
                    </div>
                    <NavigationBar />
                    <Helmet >
                        <title>
                            {PathText}
                        </title>
                    </Helmet>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className={!checked ? `${"display-4 text-dark"}` : "display-4 text-light"}>{PathText}</div>
                        </div>
                    </div>
                </BodyWrapper>
            </ThemeProvider>
        </>
    )
}


const BodyWrapper = styled.div`
    background: ${({ theme }) => theme.body};
    position: ${({ theme }) => theme.position};
    width: ${({ theme }) => theme.width};
    height: ${({ theme }) => theme.height};
`;

const darkTheme = {
    body: "#718096",
    position: "fixed",
    width: "100%",
    height: "100vh",
    transition: "all 500ms ease",
    color: "white"
}

const lightTheme = {
    body: "#FFFFFF",
    position: "fixed",
    width: "100%",
    height: "100vh",
    transition: "all 500ms ease",
}

export interface IProjects { }
export default Projects;