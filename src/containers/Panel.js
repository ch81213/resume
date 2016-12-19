import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Show from '../components/Show';
import Btn from '../components/Btn';
import SideBar from '../components/SideBar';

import { Button,ButtonToolbar, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import * as counterAction from '../actions/counterAction';

import Foxconn from '../pages/Foxconn';
import Skill from '../pages/Skill';
import Mitac from '../pages/Mitac';
import Introduction from '../pages/Introduction';
import { Link } from "react-router";

class Panel extends React.Component {
    constructor() {
        super();
    }

    handleSelect(selectedKey){
        alert('alerted'+selectedKey);
    }

    render() {

        const {number, actions} = this.props;

        return (
            <div>
                <div className="container">
                    <div className="row profile">
                        <div className="col-md-3">
                            <SideBar></SideBar>
                            {/*<Show num={number}/>
                            <Btn increment={actions.incrementAction} decrement={actions.decrementAction} decrement2={actions.decrementAction2}/>*/}
                        </div>
                        <div className="col-md-9">
                            <div className="profile-content">
                                <div className="article">
                                    <div className="article-content">
                                        {this.props.children}
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {number: state.counterReducer.number}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(counterAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);