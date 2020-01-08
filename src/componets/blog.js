import React, { Component } from 'react'
import Router from '../router'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

export default class blog extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Link to ="/home"><button className="logi">blog</button></Link>
                <h1>blog post</h1>
            </div>
        )
    }
}
