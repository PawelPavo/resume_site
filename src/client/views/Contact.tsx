import * as React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { getPathText } from '../utils/pathing'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../utils/global-style'
import styled from 'styled-components'


const Contact: React.FC<IContact> = () => {

    const { pathname } = useLocation()
    const PathText = getPathText(pathname)

    let history = useHistory();

    const [email, setEmail] = React.useState<string>('')
    const [subject, setSubject] = React.useState<string>('')
    const [content, setContent] = React.useState<string>('')

    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    subject,
                    content
                }),
            })
            setEmail(''),
                setSubject(''),
                setContent('')
            history.push('/');
        } catch (error) {
            console.log(error)
        }
    }

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

                <Border className="mb-5">
                    {PathText}
                </Border>
                <div className="row justify-content-center">
                    <div className="col-md-8 border shadow">
                        <form className="form-group mt-5 p-3"
                            onSubmit={onSubmit}>
                            <input
                                type="email"
                                className="input-group mb-1 mt-3 p-1 border border-right-0 border-left-0 border-top-0 w-75 mx-auto "
                                placeholder="Email"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                style={{ opacity: 0.7 }}
                            />
                            <input
                                type="text"
                                className="input-group my-1 p-1 border border-top-0 border-left-0 border-right-0 my-5 w-75 mx-auto"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                                style={{ opacity: 0.7 }}
                            />
                            <input
                                type="text"
                                className="input-group my-1 p-1 border border-top-0 border-left-0 border-right-0 my-5 w-75 mx-auto"
                                placeholder="Content"
                                value={content}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}
                                style={{ opacity: 0.7 }}
                            />
                            <div className="row justify-content-center">
                                <button
                                    style={{ opacity: 0.5 }}
                                    className="btn btn-block btn-outline-secondary mt-2 shoadow w-50">
                                    Email Me!</button>
                            </div>
                        </form>
                    </div>

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

export interface IContact {

}
export default Contact;