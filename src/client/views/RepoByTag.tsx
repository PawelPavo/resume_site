import * as React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from '../utils/global-style';
import { urlRegex } from '../utils/url-regex';
import { useEffect } from 'react';
import { IRepos } from '../utils/interfaces';
import RepoCard from '../components/RepoCard';
import styled from 'styled-components';


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
            <div className="container">
                <Border className="">
                    {tag}
                </Border>
                <BackButton>
                    <Link to="/projects">
                        <div className=" mb-5 btn btn-outline-secondary">BACK</div>
                    </Link>
                </BackButton>
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

const BackButton = styled.div`
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

export interface IrepoByTag {
}

export default repoByTag;