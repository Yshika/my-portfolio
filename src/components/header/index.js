import React from 'react'
import './style.scss';
import avatar from '../../assets/Photograph.jpg';
import { Link, useLocation } from 'react-router-dom';
import { RouteName } from '../../routes/_base';

const Header = () => {
    const list = [
        {
            title: 'CV',
            to: RouteName.CV
        },
        {
            title: 'RESEARCH PAPERS',
            to: RouteName.RP
        },
        {
            title: 'CONTACT INFO',
            to: RouteName.contact
        },
    ]
    const { pathname = '/' } = useLocation() || {};
    return (
        <div className='sidebar-container'>
            <div className="sidebar">
                <Link to={RouteName.Home} className="avatar">
                    <div className="avatar-image">
                        <img src={avatar} alt="Yshika's Avatar" className="avatar-pic" />
                    </div>
                    <div className="avatar-content mt-3">

                        <h2 className="avatar-name heading">Yshika Agarwal</h2>
                        <h4 className="avatar-post text">Front-End Developer</h4>
                    </div>
                </Link>
                <div className="lists mt-5">
                    <ul>
                        {
                            list?.map(({ title, to }, index) => {
                                return (
                                    <li key={index} className="nav-list">
                                        <Link to={to} className={`text${pathname === to ? ' active' : ''}`}>{title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Header
