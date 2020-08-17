import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import styled from 'styled-components'

// const inclusiveRange = (start, end, step) => {
//     return Array.from(Array.from(Array(Math.ceil((end - start + 1) / step)).keys()), x => start + x * step);
// }

// let a = (inclusiveRange(1, 10, 1))
// let b = (inclusiveRange(11, 20, 1))
// console.log('Original Array')
// console.log(a)
// console.log(b)

// const array = (num, x, y) => {
//     let c = []
//     for (let i = 0; i < num; i++) {
//         (c.push(x[0]++, y[0]++))
//     }
//     console.log('Shuffle ' + 1)
//     console.log(c)
//     console.log(c.splice(0, 10))
//     console.log(c.splice(0, num * 2))
// }
// array(10, b, a)

const AboutMe: React.FC<IAboutMe> = () => {

    const { pathname } = useLocation()
    const PathText = getPathText(pathname)

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

                <div className="row justify-content-center">
                    <div className="col-8 mt-5" style={{ textAlign: "justify" }}>
                        <p>Self-motivated Junior Full-Stack Developer with a demonstrated history of working in the digital marketing and advertising industry. Skilled in full-stack application development using ReactJS, JavaScript, TypeScript, NodeJS, Tailwind, CSS and more. Creative and dependable team player with a passion for new technologies and software innovation.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

const Border = styled.div`
    border-top: 2px solid;
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


export interface IAboutMe {

}
export default AboutMe;