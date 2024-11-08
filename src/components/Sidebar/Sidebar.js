import React from 'react'
import './Sidebar.css';

const Sidebar = ({ isExpanded }) => {
  return (
        <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>     
            <div className="sidebar-item active">
                <span className="material-symbols-outlined sidebar-icon">lightbulb</span>
                <span className="sidebar-text">Notes</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined sidebar-icon">notifications</span>
                <span className="sidebar-text">Reminders</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined sidebar-icon">edit</span>
                <span className="sidebar-text">Edit Labels</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined sidebar-icon">archive</span>
                <span className="sidebar-text">Archive</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined sidebar-icon">delete</span>
                <span className="sidebar-text">Bin</span>
            </div>


        </div>
  )
}

export default Sidebar