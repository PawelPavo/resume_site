import * as React from 'react';
import { IRepos } from '../utils/interfaces';
import { FaGithub } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { urlRegex } from '../utils/url-regex';
import styled from 'styled-components';


const RepoCard: React.FC<IRepoCard> = (props) => {
    const history = useHistory()


    const handleClick = async (e:any) => {
        try {
            history.push(`/${urlRegex(e.target.innerHTML)}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <Card>
                <div className="my-3">
                    {props.repo.repo_tags.split(',').map(tag => (
                        <span
                            onClick={handleClick}
                            className="btn-sm btn-outline-secondary border mx-1"
                            key={tag}>{tag}</span>
                    ))}
                </div>
                <div className="text-center">
                    <img src={props.repo.repo_image_url} className="card-img-top mt-2" style={{ width: "100px", height: "auto" }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.repo.repo_name}</h5>
                    <p className="card-text">{props.repo.repo_description}</p>

                </div>

                <RepoLink >
                    <a className="border px-5 py-1 border-left-0 border-right-0" href={props.repo.repo_url}> <FaGithub /></a>
                </RepoLink>
            </Card>

        </>
    )

}

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    min-width: 300px;
    max-height: 400px;
    min-height: 400px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const RepoLink = styled.div`
    text-decoration: none;
    font-size: 30px;
`;


export interface IRepoCard {
    repo: IRepos;
}

export default RepoCard;