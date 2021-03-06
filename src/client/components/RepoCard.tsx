import * as React from 'react';
import { IRepos } from '../utils/interfaces';
import { useHistory } from 'react-router-dom';
import { urlRegex } from '../utils/url-regex';
import styled from 'styled-components';
import Swal from 'sweetalert2'
// import Fade from 'react-reveal/Fade';

// if its import, it throws types error - could not find declaration file.
const Fade = require('react-reveal/Fade')

const RepoCard: React.FC<IRepoCard> = (props) => {
    const history = useHistory()

    // SweetAlert2 enalges the image on click/ not mobile friendly - need a better solution
    const imageClick = () => {
        Swal.fire({
            imageUrl: props.repo.repo_image_url,
            imageWidth: 400,
            imageHeight: 200,
            background: `
            rgba(47,54,64,0.7)
            left top
            no-repeat
          `,
            backdrop: `
            rgba(47,54,64,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
        })
    }

    // handles re-routing to a page with the list of repos whith clicked tag
    const handleClick = async (e: any) => {
        try {
            history.push(`/${urlRegex(e.target.innerHTML)}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Fade bottom>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-4 border border-left-0 border-right-0 border-top-0 mb-2">
                            <h4 className="text-muted">
                                {props.repo.repo_name}
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center mt-3">
                            <img
                                onClick={imageClick}
                                src={props.repo.repo_image_url}
                                style={{ width: "150px", height: "auto" }} />
                        </div>

                        <div className="col-md-8 my-auto pt-3">
                            <div className="" style={{ textAlign: "justify" }}><small>{props.repo.repo_description}</small></div>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-1 pr-md-3">
                        <div className="col-md-3 text-right ">
                            <RepoLink >
                                <a className="pr-md-5" target="_blank" href={props.repo.repo_url}>View Source Code</a>
                            </RepoLink>
                        </div>
                    </div>

                    <div className="row justify-content-center my-3">
                        {props.repo.repo_tags.split(',').map(tag => (
                            <span
                                onClick={handleClick}
                                className="btn-sm btn-outline-secondary border mx-1"
                                key={tag}>{tag}</span>
                        ))}
                    </div>
                    <hr className="my-4"></hr>
                </div>
            </Fade>
        </>
    )

}

const RepoLink = styled.div`
    text-decoration: none;
    font-size: 12px;
`;

export interface IRepoCard {
    repo: IRepos;
}

export default RepoCard;