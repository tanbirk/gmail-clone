import { Button } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import SidebarOption from './SidebarOption'
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import  AccessTimeIcon  from '@material-ui/icons/AccessTime'
import  LabelImportantIcon  from '@material-ui/icons/LabelImportant'
import  NearMeIcon  from '@material-ui/icons/NearMe'
import  NoteIcon  from '@material-ui/icons/Note'
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore'


function Sidebar() {
    return <div className='sidebar'>
            <Button 
            startIcon={< AddIcon fontSize='large'/>}
            className='sidebar__compose'
            >Compose</Button>

            <SidebarOption 
            Icon ={InboxIcon} 
            title="Inbox" 
            number={54}
            selected ={true}
             />
            <SidebarOption Icon ={StarIcon} title="Starred" number={69} />
            <SidebarOption Icon ={AccessTimeIcon} title="Snooze" number={69} />
            <SidebarOption Icon ={LabelImportantIcon} title="Important" number={29} />
            <SidebarOption Icon ={NearMeIcon} title="Sent" number={64} />
            <SidebarOption Icon ={NoteIcon} title="Drafts" number={69} />
            <SidebarOption Icon ={ExpandMoreIcon} title="More" number={420} />
             </div>
    
}

export default Sidebar
 