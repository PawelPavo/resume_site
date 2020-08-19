import * as React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineProfile } from 'react-icons/ai'
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';


const Footer: React.FC<IFooter> = () => {

    let history = useHistory();

    // handles re-routing to a resume
    const handleClick = async (e: any) => {
        try {
            history.push(`/resume`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="row justify-content-center fixed-bottom pb-5">
                <Icon>
                    <a target="_blank" href="https://github.com/PawelPavo?tab=repositories"><FaGithub /></a>
                </Icon>
                <Icon>
                    <a href=""><FaInstagram /></a>
                </Icon>
                <Icon>
                    <a target="_blank" href="mailto:pjpavo@gmail.com"><FiMail /></a>
                </Icon>
                <Icon>
                    <a target="_blank" href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/"><FaLinkedin /></a>
                </Icon>
                <Link to="/resume">
                    <Icon>
                        <span><AiOutlineProfile /></span>
                    </Icon>
                </Link>
            </div>
        </>
    )
}

const Icon = styled.div`
    font-size: 25px;
    margin-left: 25px;
    margin-right: 25px;

`;

export interface IFooter {
}
export default Footer;