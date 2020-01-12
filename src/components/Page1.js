import React, { Component } from 'react'
import NavBar from './NavBar'
import Router from 'react-router-dom'
import ButtonBases from './homedetail'

export default class Page1 extends Component {
    render() {
        return (
            <div>
                <h1 className="title">"welcome to Guardian Angel
                you can see if is safe to be here or not and also report"</h1>
                <ButtonBases/>

            </div>
        )
    }
}
