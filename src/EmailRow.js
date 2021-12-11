import { IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { useNavigate } from "react-router-dom"


function EmailRow({ id, title, subject, description, time}) {
 const navigate = useNavigate()

    return (
    <div onClick={() => navigate("/mail")} className='emailRow'>

        <div className='emailRow__options'>
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
        </div>
        
        <h3 className='emailRow__title'>
                {title}
        </h3>

        <div className='emailRow__message'>
                <h4>{subject} {" "}
                
        <span className='emailRow__description'>
                - {description}
        </span>
                </h4>
        </div>

        <div className='emailRow__time'>
                {time}
        </div>

    </div>
    )  
}

export default EmailRow
