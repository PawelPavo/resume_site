import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavigationDark: React.FC<INavigationDark> = () => {
    return (
        <>
            <div className="container">
                <NavigationStyle>
                    <div className="row py-3 text-center" >
                        <NavLink
                            className="col text-decoration-none"
                            exact to="/"
                            activeClassName="border border-top-0 border-bottom-0 text-monospace"
                        >Home</NavLink>
                        <NavLink
                            className="col text-decoration-none"
                            exact to="/about"
                            activeClassName="border border-top-0 border-bottom-0 text-monospace"
                        >Bio</NavLink>
                        <NavLink
                            className="col text-decoration-none"
                            exact to="/projects"
                            activeClassName="border border-top-0 border-bottom-0 text-monospace"
                        >Projects</NavLink>
                        <NavLink
                            className="col text-decoration-none"
                            exact to="/contact"
                            activeClassName="border border-top-0 border-bottom-0 text-monospace"
                        >Contact</NavLink>
                    </div>
                </NavigationStyle>

            </div>
        </>
    )
}

const NavigationStyle = styled.div`
    color: red;
    font-family: monospace;
`;

export interface INavigationDark { }
export default NavigationDark;