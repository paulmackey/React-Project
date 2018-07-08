import React, {
  Component
} from 'react';
import background from './backgroundImage.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id = "app">
        <header>
          <div className = "welcome">
            <div className = "wrap">
              <div className = "wrapper">
                <h1 className = "App-title"> Paul Mackey </h1>
                <h3> Web Developer </h3>
                <h4> Irish Web Headquarters </h4>
              </div>
            </div>
          </div>
        </header>
        <main>
        <div className="container">
<div className="row">
<div className="col-4">
</div>

<div className="col-4">
</div>

<div className="col-4">
</div>
</div>
</div>
        </main>
      </div>



    );
  }
}

export default App;
