import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import {NavLink, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

const Sidebar=()=>{
    return (
        <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
            
            <CDBSidebar style={{height:'92vh'}} textColer="#fff" backgroundColor="rgb(0, 135, 137)">
                <CDBSidebarHeader style={{color:'fff'}}  prefix={<i className="fa fa-bars fa-large"></i>}>
                    <Link to="/dashboard">User Name</Link>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="archive">
                                My Items
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/drafts" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="brush">
                                Drafts
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/templates" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="store-alt">
                                Templates
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/mytemplates" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="store">
                                My Templates
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/folders" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="folder">
                                Folders
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/brandkit" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="th-large">
                                Brand Kit
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/trash" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="trash-alt">
                                Trash
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/workspaces" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="clone">
                                Workspaces
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/settings" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="cog">
                                Settings
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{textAlign:'center'}}>
                    <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>

                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
            
        </div>
    )
}

export default Sidebar;