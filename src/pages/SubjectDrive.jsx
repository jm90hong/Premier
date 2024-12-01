import React, { useState } from "react";

import { driveLink } from "../utils/f_config";

const SubjectDrive = ({subject}) => {

    const [localSubject, setLocalSubject] = useState(localStorage.getItem('subject'));
    

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%'
        }}>
            <h1 style={{
                marginBottom: '20px',
                fontSize: '24px',
                fontWeight: 'bold'
            }}>{localSubject} Drive</h1>
            <button 
                onClick={()=>{
                    window.open(driveLink[localSubject], '_blank');
                    return;
                }}
                style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#8B00FF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                }}
            >
                Open {localSubject} drive
            </button>
        </div>
    )
}

export default SubjectDrive;
