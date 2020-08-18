import * as React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMail} from 'react-icons/fi';
import { AiOutlineProfile } from 'react-icons/ai'
import styled from 'styled-components';

const Footer: React.FC<IFooter> = () => {

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
                    <a href="/contact"><FiMail /></a>
                </Icon>
                <Icon>
                    <a target="_blank" href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/"><FaLinkedin /></a>
                </Icon>
                <Icon>
                    <a href="/resume"><AiOutlineProfile /></a>
                </Icon>
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