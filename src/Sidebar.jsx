import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import "./Sidebar.css"

import {Button} from "@material-ui/core"




const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Twitter className='sidebar_twitterIcon'/>
    <SidebarOption active Icon={Home} text={"Home"}/>
    <SidebarOption Icon={Search} text={"Explore"}/>
    <SidebarOption Icon={NotificationsNone} text={"Notifications"}/>
    <SidebarOption Icon={MailOutline} text={"Mail"}/>
    <SidebarOption Icon={BookmarkBorder} text={"Bookmark"}/>
    <SidebarOption Icon={ListAlt} text={"Lists"}/>
    <SidebarOption Icon={PermIdentity} text={"Profile"}/>
    <SidebarOption Icon={MoreHoriz} text={"More"}/>
    <Button variant="outlined" className='sidebar_tweet' fullWidth>Tweet</Button>

    


    
    </div>
  )
}

export default Sidebar