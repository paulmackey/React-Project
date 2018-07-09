import React, { Component } from 'react';
import logo from '../profiler.jpg';

import SimpleSlider from '../headerComponent/slider.js';

class HomePage extends Component {
  render() {
    return (
<div className="home">
        <SimpleSlider/>
      </div>
    )
  }
}

export default HomePage;
