import * as React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FiMail} from 'react-icons/fi';
import styled from 'styled-components';

const Footer: React.FC<IFooter> = () => {

    return (
        <>
            <div className="row justify-content-center fixed-bottom pb-3">
                <Icon>
                    <a target="_blank" href="https://github.com/PawelPavo"><FaGithub /></a>
                </Icon>
                <Icon>
                    <a href=""><FaInstagram /></a>
                </Icon>
                <Icon>
                    <a href="/contact"><FiMail /></a>
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