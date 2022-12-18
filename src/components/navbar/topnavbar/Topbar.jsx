import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css';
import logo from '../../../assets/logo/logo.png'
const TopBar = () => {
    const width = window.innerWidth;
    const breakpoint = 960;
    return (
        <div className="top-bar">
            <div className="top-content">
                <div className="container ">
                    <div className="row">
                        <div className="col-4 d-flex language">
                            <p>English</p>
                            {
                                width > breakpoint ?
                                    <>
                                        <p>Skip to content</p>
                                        <p>A</p>
                                        <p>A</p>
                                        <p>A</p>
                                        <p>A</p>
                                    </> : ""
                            }

                        </div>
                        <div className="col-2"></div>
                        <div className="col-3">
                            {width < breakpoint ? "" : <>
                                <p className="access">i am now accessing as a:</p>
                            </>}
                        </div>
                        <div className="col-3 ">
                            {
                                width > breakpoint ?
                                    <> <div className="citizen">
                                        <Link className="link">Citizen</Link>
                                        <Link className="link">Government</Link>
                                    </div></>
                                    : ""
                            }

                        </div>
                    </div>
                </div>
            </div>

            <div className="container bottom-bar pt-2">
                <div className=" d-flex justify-content-between align-items-center flex-wrap">
                    <div className="left">
                        <Link className="link">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="titles">
                                <h3>Government of assam</h3>
                                <h3>Sports & youth welfare</h3>
                                <h3>directorate of sport & youth welfare</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        {
                            width > breakpoint ? <><div className="r-content">
                                <input type="text" placeholder="Search" />
                                <button><i className='bx bx-search-alt'></i></button>
                            </div></> : ""

                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopBar