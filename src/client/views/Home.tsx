import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { GlobalStyles } from '../utils/global-style'


const Home: React.FC<IHome> = () => {
    const { pathname } = useLocation()
    const PathText = getPathText(pathname)


    return (
        <>
            <GlobalStyles>
                <Helmet >
                    <title>
                        {PathText}
                    </title>
                </Helmet>
            </GlobalStyles>
            <div className="row justify-content-center display-4">{PathText}</div>
        </>
    )
}



export interface IHome { }
export default Home;