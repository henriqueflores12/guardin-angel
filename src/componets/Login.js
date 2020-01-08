import React, { Component } from 'react'
import NavBar from './NavBar'
import Login from './typelog'
import SignIn from './newlog'

export default class enter extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                {/* <Login/> */}
                <SignIn/>
                
            </div>
        )
    }
}
