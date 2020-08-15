import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import { useState, useEffect } from 'react'
import { IRepos } from '../utils/interfaces'
import RepoCard from '../components/RepoCard'

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
                <div className="row justify-content-center display-4 my-5">{PathText}</div>
                <div className="row justify-content-center">
                    {repos.map(repo => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>
            </div>

        </>
    )
}

export interface IProjects { }
export default Projects;