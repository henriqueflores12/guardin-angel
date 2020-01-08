import React, { Component } from 'react'
import Router from '../router'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

export default class about extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>about page</h1>
            </div>
        )
    }
}
