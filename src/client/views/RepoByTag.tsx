import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from '../utils/global-style';
import { urlRegex } from '../utils/url-regex';
import { useEffect } from 'react';
import { IRepos } from '../utils/interfaces';
import RepoCard from '../components/RepoCard';


const repoByTag: React.FC<IrepoByTag> = (props) => {
    const { pathname } = useLocation()
    let tag = `${urlRegex(pathname)}`

    const [repos, setRepos] = React.useState<IRepos[]>([])

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch(`/api/repos/${tag}`);
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
                    {tag}
                </title>
            </Helmet>
            <GlobalStyles>
                <Helmet >
                    <title>
                        {tag}
                    </title>
                </Helmet>
            </GlobalStyles>
            <div className="row justify-content-center display-4">{tag}</div>
            <div className="row justify-content-center">
                {repos.map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        </>
    )
}


export interface IrepoByTag {
}

export default repoByTag;