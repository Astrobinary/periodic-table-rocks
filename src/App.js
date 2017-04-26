import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="table">

          {/* Row 1 */}
          <div className="row">
            <div className="element nonmetal">
              <div className="atomic-number">1</div>
              <abbr>H</abbr>
            </div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element noble-gas">
              <div className="atomic-number">2</div>
              <abbr>He</abbr>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row">
            <div className="element alkali-metal">
              <div className="atomic-number">3</div>
              <abbr>Li</abbr>
            </div>
            <div className="element alkaline-earth">
              <div className="atomic-number">4</div>
              <abbr>Be</abbr>
            </div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element nonmetal">
              <div className="atomic-number">5</div>
              <abbr>B</abbr>
            </div>
            <div className="element nonmetal">
              <div className="atomic-number">6</div>
              <abbr>C</abbr>
            </div>
            <div className="element nonmetal">
              <div className="atomic-number">7</div>
              <abbr>N</abbr>
            </div>
            <div className="element nonmetal">
              <div className="atomic-number">8</div>
              <abbr>O</abbr>
            </div>
            <div className="element nonmetal">
              <div className="atomic-number">9</div>
              <abbr>F</abbr>
            </div>
            <div className="element noble-gas">
              <div className="atomic-number">10</div>
              <abbr>Ne</abbr>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row">
            <div className="element alkali-metal">
              <div className="atomic-number">11</div>
              <abbr>Na</abbr>
            </div>
            <div className="element alkaline-earth"> <div className="atomic-number">12</div>
            <abbr>Mg</abbr></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element post-transition-metal"> <div className="atomic-number">13</div>
            <abbr>Al</abbr></div>
            <div className="element nonmetal"> <div className="atomic-number">14</div>
            <abbr>Si</abbr></div>
            <div className="element nonmetal"><div className="atomic-number">15</div>
            <abbr>P</abbr></div>
            <div className="element nonmetal"> <div className="atomic-number">16</div>
            <abbr>S</abbr></div>
            <div className="element nonmetal"> <div className="atomic-number">17</div>
            <abbr>Cl</abbr></div>
            <div className="element noble-gas"> <div className="atomic-number">18</div>
            <abbr>Ar</abbr></div>
          </div>

          {/* Row 4 */}
          <div className="row">
            <div className="element alkali-metal"> <div className="atomic-number">19</div>
            <abbr>K</abbr></div>
            <div className="element alkaline-earth"> <div className="atomic-number">20</div>
            <abbr>Ca</abbr></div>
            <div className="element transition-metal"> <div className="atomic-number">21</div>
            <abbr>Sc</abbr></div>
            <div className="element transition-metal"><div className="atomic-number">22</div>
            <abbr>Ti</abbr></div>
            <div className="element transition-metal"><div className="atomic-number">23</div>
            <abbr>V</abbr></div>
            <div className="element transition-metal"><div className="atomic-number">24</div>
            <abbr>Cr</abbr></div>
            <div className="element transition-metal"><div className="atomic-number">25</div>
            <abbr>Mn</abbr></div>
            <div className="element transition-metal"><div className="atomic-number">26</div>
            <abbr>Fe</abbr></div>
            <div className="element transition-metal"><div className="atomic-number">27</div>
            <abbr>Co</abbr></div>
            <div className="element transition-metal"><div className="atomic-number">28</div>
            <abbr>Ni</abbr></div>
            <div className="element transition-metal"><div className="atomic-number">29</div>
            <abbr>Cu</abbr></div>
            <div className="element transition-metal"> <div className="atomic-number">30</div>
            <abbr>Zn</abbr></div>
            <div className="element post-transition-metal"><div className="atomic-number">31</div>
            <abbr>Ga</abbr></div>
            <div className="element nonmetal"><div className="atomic-number">32</div>
            <abbr>Ge</abbr></div>
            <div className="element nonmetal"> <div className="atomic-number">33</div>
            <abbr>As</abbr></div>
            <div className="element nonmetal"><div className="atomic-number">34</div>
            <abbr>Se</abbr></div>
            <div className="element nonmetal"> <div className="atomic-number">35</div>
            <abbr>Br</abbr></div>
            <div className="element noble-gas"><div className="atomic-number">36</div>
            <abbr>Kr</abbr></div>
          </div>

          {/* Row 5 */}
          <div className="row">
            <div className="element alkali-metal"></div>
            <div className="element alkaline-earth"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element nonmetal"></div>
            <div className="element nonmetal"></div>
            <div className="element noble-gas"></div>
          </div>

          {/* Row 6 */}
          <div className="row">
            <div className="element alkali-metal"></div>
            <div className="element alkaline-earth"></div>
            <div className="element blank"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element nonmetal"></div>
            <div className="element noble-gas"></div>
          </div>

          {/* Row 7 */}
          <div className="row">
            <div className="element alkali-metal"></div>
            <div className="element alkaline-earth"></div>
            <div className="element blank"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element post-transition-metal"></div>
            <div className="element noble-gas"></div>
          </div>

          {/* Buffer*/}

          <div className="row">
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
            <div className="element blank-half"></div>
          </div>

          {/* Row 8 */}
          <div className="row">
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
            <div className="element lanthanide"></div>
          </div>

          {/* Row 9 */}
          <div className="row">
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
            <div className="element actinide"></div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
