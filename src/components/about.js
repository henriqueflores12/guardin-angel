import React, { Component } from "react";
import Router from "../router";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default class about extends Component {
  render() {
    return (
      <div>
        <h1 className="about">about</h1>
        <p>
          this app
          uses a new and unique way of matching people with the best
          neighborhoods for them and their families. This approach uses the
          largest database of neighborhood statistics and characteristics ever
          created, and converts it into accurate neighborhood profile matches
          customized to the needs of any individual. The user can choose exactly
          what they want in a neighborhood by selecting lifestyle searches and
          key words linked to this massive database. The best matching
          neighborhood profiles are mapped instantly, described in rich detail,
          and linked to the local information that newcomers and prospective
          movers want most, like home listings in most cases, school profiles
          and exclusive ratings, exclusive crime statistics for each
          neighborhood, and much more.
          app not fully completed yet
        </p>
      </div>
    );
  }
}
