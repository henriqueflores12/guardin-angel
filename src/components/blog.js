import React, { Component } from 'react'
import Router from '../router'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

export default class blog extends Component {
    render() {
        return (
            <div>
               
                <Link to ="/home"><button className="logi">report</button></Link>
                <h1>unsafe location post</h1>
            </div>
        )
    }
}
