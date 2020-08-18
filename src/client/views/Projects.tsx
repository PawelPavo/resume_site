import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import { useState, useEffect } from 'react'
import { IRepos } from '../utils/interfaces'
import RepoCard from '../components/RepoCard'
import styled from 'styled-components'


const Projects: React.FC<IProjects> = () => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)
    const [repos, setRepos] = useState<IRepos[]>([])

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch('/api/repos');
                let repos = await res.json();
                setRepos(repos)

            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

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

                <Border className="my-5">
                    {PathText}
                </Border>
                <div className="row justify-content-center pl-md-5">
                    {repos.map(repo => (
                            <RepoCard key={repo.id} repo={repo} />

                    ))}
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



export interface IProjects { }
export default Projects;