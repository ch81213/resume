import React from 'react';
import { Link } from "react-router";

class SideBar extends React.Component {
    
    render() {
      const { num } = this.props;

      return (
          <div className="profile-sidebar">
                <div className="profile-userpic">
                    <div className="card hovercard">
                        <div className="cardheader">
                            
                        </div>
                        <div className="avatar">
                            <img alt="" src="http://lorempixel.com/100/100/people/9/">
                            </img>
                        </div>
                        <div className="info">
                            <div className="title">
                                <a target="_blank" href="http://scripteden.com/">張智勇</a>
                            </div>
                             <div>
                         
                        </div>
                            <div className="desc"><h5>Java Programer</h5></div>
                            <div className="desc"><h5>Web developer</h5></div>
                        </div>
                        <div className="bottom">
                            
                        </div>
                    </div>
               </div>
               <UserMenu/>
        </div>
      )
    }
}

class UserMenu extends React.Component {
   render(){
       const  menuLists =   [ 
                            {name:"簡介",className:"glyphicon glyphicon-home",link:"introduction"},
                            {name:"技能",className:"glyphicon glyphicon-user",link:"skill"},
                            {name:"聯華神通",className:"glyphicon glyphicon-ok",link:"mitac"},
                            {name:"鴻海",className:"glyphicon glyphicon-flag",link:"foxconn"}];
       return (
           <div className="profile-usermenu">
                    <ul className="nav">
                         {menuLists.map(function(object, i){
                            return <li key={i}>
                               <Link to= {menuLists[i].link}>
                                <i className={menuLists[i].className}></i> 
                                    
                                        {menuLists[i].name}
                                 </Link>
                            </li>;
                         })}
                    </ul>
                </div>
       )
   }
}

export default SideBar;