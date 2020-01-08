import React, { Component } from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'


export default class Page1 extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1 className="title">welcome page1</h1>
                
            </div>
        )
    }
}
