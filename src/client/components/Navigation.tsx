import * as React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationDark: React.FC<INavigationDark> = () => {
    return (
        <>
            <div className="row shadow p-3 border text-center" >
                <NavLink
                    className="col text-decoration-none nav-bar-text "
                    exact to="/"
                    activeClassName="nav-bar-active"
                >Home</NavLink>
                <NavLink
                    className="col text-decoration-none nav-bar-text "
                    exact to="/about"
                    activeClassName="nav-bar-active"
                >Bio</NavLink>
                <NavLink
                    className="col text-decoration-none nav-bar-text "
                    exact to="/projects"
                    activeClassName="nav-bar-active"
                >Projects</NavLink>
                <NavLink
                    className="col text-decoration-none nav-bar-text "
                    exact to="/contact"
                    activeClassName="nav-bar-active"
                >Contact</NavLink>
            </div>
        </>
    )
}

export interface INavigationDark { }
export default NavigationDark;