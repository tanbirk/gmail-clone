import {IconButton} from "@material-ui/core"
// import {  CheckBoxOutlineBlankOutlined } from '@material-ui/icons'
import React from 'react'
import './EmailList.css'
import  ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown'
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"



function EmailList() {
    return ( 
    <div className='emailList'>
         <div className='emailList__settings'>
                
                    <div className='emailList__settingsLeft'>
                  
                        <IconButton>
                            <ArrowDropDownIcon />
                        </IconButton>
                        <IconButton>
                            <RedoIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
            </div>
        </div>
    )
}

export default EmailList
