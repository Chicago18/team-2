import React, { Component } from 'react';
import './Resources.css';

const data = {
    'File 1': [
        'title1',
        'author1',
        'tag1'
    ],
    'File 2': [
        'title2',
        'author2',
        'tag2'
    ],
    'File 3': [
        'title3',
        'author3',
        'tag3'
    ]
}

class Resources extends Component {
	render() {
    return (
      <div class="container">
        	<div class="card">
			  <div class="card-body">
			    <h5 class="card-title">Card title</h5>
			    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <a href="#" class="btn btn-primary">Go somewhere</a>
			  </div>
			</div>
      </div>
    );
  }
}

export default Resources;
