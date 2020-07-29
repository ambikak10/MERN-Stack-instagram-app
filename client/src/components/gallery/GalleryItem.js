import React, { Component } from 'react';
import { render } from "react-dom";
import { Link } from "react-router-dom";
import './gallery.css'

export class GalleryItem extends Component {
  render() {
    const {image, id} = this.props;
    return (
   <Link to={`post/${id}`}>
    <img id="layoutMasonry"src= {image} alt="posts"/>
   </Link>
    );
  }
}

export default GalleryItem;
