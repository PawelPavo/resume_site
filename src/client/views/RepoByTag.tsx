import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getPathText } from '../utils/pathing';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from '../utils/global-style';
import { urlRegex } from '../utils/url-regex';
import e from 'express';


const repoByTag: React.FC<IrepoByTag> = (props) => {
    const history = useHistory()

    const { pathname } = useLocation()
    const PathText = getPathText(pathname)
    console.log(pathname)
    let tag = `${urlRegex(pathname)}`
    console.log(tag)
    console.log(PathText)

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
    <div className="row justify-content-center display-4">{PathText} {tag}</div>
        </>
    )
}


export interface IrepoByTag {
}

export default repoByTag;