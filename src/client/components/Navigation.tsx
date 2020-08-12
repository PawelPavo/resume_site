import * as React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar: React.FC<INavigationBar> = () => {
    return (
        <>
            <div className="row no-gutters shadow-sm p-3 border text-center" >
                <NavLink
                    className="col text-decoration-none nav-bar-text"
                    exact to="/"
                    activeClassName="nav-bar-active "
                >Home</NavLink>
                <NavLink
                    className="col text-decoration-none nav-bar-text"
                    exact to="/projects"
                    activeClassName="nav-bar-active "
                >Projects</NavLink>
                <NavLink
                    className="col text-decoration-none nav-bar-text"
                    exact to="/contact"
                    activeClassName="nav-bar-active "
                >Contact Me</NavLink>
            </div>
        </>
    )
}

export interface INavigationBar {

}
export default NavigationBar;