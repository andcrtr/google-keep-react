import React from 'react';
import './Navbar.css';


const Navbar = ({onMenuClick}) => {
  return (
    <div className="nav">
        <div className="nav-left">
            <div className="logo-menu">
                <div className="tooltip" onClick={onMenuClick}>
                    <span className="material-symbols-outlined nav-icon menu-icon">menu</span>
                    <span className="tooltip-text">Main menu</span>
                </div>
                
                <img className="logo" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt=""/>
                <p className="logo-text">Keep</p>
            </div>

            <div className="search-area">
                <form>
                    <button>
                        <div className="tooltip">
                            <span className="material-symbols-outlined search-icon">search</span>
                            <span className="tooltip-text">Search</span>
                        </div>
                    </button>
                    <input type="text" placeholder="Search"/>
                    <button>
                        <span className="material-symbols-outlined search-icon">close</span>
                    </button>
                </form>
            </div>
        </div>

        <div className="nav-right">
            <div className="icons">
                <div className="tooltip">
                    <span className="material-symbols-outlined nav-icon">refresh</span>
                    <span className="tooltip-text">Refresh</span>
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined nav-icon">view_agenda</span>
                    <span className="tooltip-text">List view</span>
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined nav-icon">settings</span>
                    <span className="tooltip-text">Settings</span>
                </div>
            </div>
        
            <div className="apps-profile">
                <div className="tooltip">
                    <span className="material-symbols-outlined nav-icon">apps</span>
                    <span className="tooltip-text">Google apps</span>
                </div>
                <div className="tooltip">
                    <img className="nav-icon" src="https://lh3.google.com/u/0/ogw/AF2bZygMvy_a6SP1PrgEoZbqpzC5yLdOjJNMtXkK2DqwNbl6AA=s32-c-mo" alt="" />
                    <span className="tooltip-text">Google Account</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar