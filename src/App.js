import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'
import logo from './logo.svg';
import './App.scss';
import data from './rocks.json'

import weightIcon from './icons/weight.svg';
import densitytIcon from './icons/density.svg';
import meltingIcon from './icons/melting.svg';
import boilingIcon from './icons/boiling.svg';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      disableHover: false,
      element: {
        name: null,
        abbr: null,
        number: null,
        weight: null,
        type: null,
        stats: {
          melting: null,
          boiling: null,
          density: null
        },
        electron: {
          config: null,
          perShell: null,
          states: null,
          ionisations: {
            first: null,
            second: null,
            third: null
          }
        },
        history: {
          year: null,
          founder: null,
          brief: null
        }
      }
    }

    this.hoverEnter = this.hoverEnter.bind(this);
    this.hoverLeave = this.hoverLeave.bind(this);
    this.clickElement = this.clickElement.bind(this);
    this.clearClick = this.clearClick.bind(this);
    this.activeElement = this.activeElement.bind(this);

  }

  //Sets the active element as a state.
  activeElement(selected) {

    let meltingTemp = selected.stats.melting;
    let boilTemp = selected.stats.boiling;

    if (selected.stats.melting !== "Unknown") {
      meltingTemp = selected.stats["melting"] + " K"
    }

    if (selected.stats.boiling !== "Unknown") {
      boilTemp = selected.stats["boiling"] + " K"
    }

    this.setState({
      element: {
        name: selected["name"],
        abbr: selected["abbr"],
        number: selected["atomic-number"],
        weight: selected["atomic-weight"],
        type: selected["type"],
        stats: {
          melting: meltingTemp,
          boiling: boilTemp,
          density: selected.stats["density"]
        },
        electron: {
          config: selected["electron-ionisations"]["configuration"],
          perShell: selected["electron-ionisations"]["per-shell"],
          states: selected["electron-ionisations"]["oxidation-states"],
          ionisations: {
            first: selected["electron-ionisations"].ionisations.first,
            second: selected["electron-ionisations"].ionisations.second,
            third: selected["electron-ionisations"].ionisations.third
          }
        },
        history: {
          year: selected.history.year,
          founder: selected.history.person,
          brief: selected.history.brief
        }
      }
    });
  }

  //Handles when an element is hovered
  hoverEnter(e) {
    if (!this.state.disableHover) {
      const details = document.getElementsByClassName('details')[0];
      const settings = document.getElementsByClassName('settings')[0];
      const bgColor = getComputedStyle(e.target).backgroundColor;

      let hoveredElement = e.target.innerText.split("\n")[0];
      let selected = data[hoveredElement];

      this.activeElement(selected);

      details.style.backgroundColor = bgColor;
      details.style.display = "inline-flex";
      settings.style.display = "none";
    }
  }

  //Handles when a hover exits
  hoverLeave(e) {
    // if (!this.state.disableHover) {
    //   const details = document.getElementsByClassName('details')[0];
    //   const settings = document.getElementsByClassName('settings')[0];
    //
    //   details.style.display = "none";
    //   settings.style.display = "block";
    // }
  }

  //Handles when an element is clicked on
  clickElement(e) {
    this.setState({disableHover: true});

    const details = document.getElementsByClassName('details')[0];
    const settings = document.getElementsByClassName('settings')[0];
    const bgColor = getComputedStyle(e.target).backgroundColor;

    let clickedElement = e.target.innerText.split("\n")[0];
    let selected = data[clickedElement];
    console.log(selected);
    this.activeElement(selected);

    details.style.backgroundColor = bgColor;
    details.style.display = "inline-flex";
    settings.style.display = "none";

  }

  //Click anywhere outside of an element to clear the onclick lock.
  clearClick(e) {
    let className = e.target.className;
    className = className.toString();

    if (className === "App" || className === "table" || className === "element blank") {
      this.setState({disableHover: false});

      const details = document.getElementsByClassName('details')[0];
      const settings = document.getElementsByClassName('settings')[0];

      details.style.display = "none";
      settings.style.display = "block";
    }
  }

  showToolTip(){

  }

  render() {
    return (
      <div onClick={this.clearClick} className="App">
        <ReactTooltip offset={{top: 25}}  className="tooltip"/>
        <div className="table">
          {/* Row 1 */}
          <div className="row">
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
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
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element noble-gas">
              <div className="atomic-number">2</div>
              <abbr>He</abbr>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row">
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkali-metal">
              <div className="atomic-number">3</div>
              <abbr>Li</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkaline-earth">
              <div className="atomic-number">4</div>
              <abbr>Be</abbr>
            </div>
            <div className="element blank top">
              {/* Info box */}
              <div className="info-box details">

                <div className="element-badge">
                  <div className="atomic-display">
                    {this.state.element.number}</div>
                  <div className="name-display">{this.state.element.name}</div>
                  <div className="type-display">{this.state.element.type}</div>
                </div>

                <div className="info-badge">

                  <div className="menu">
                    <span className="selected">Basic stats</span>
                    <span>Electrons and Ionisation</span>
                    <span>History</span>
                  </div>

                  <div className="stats">
                    <div data-tip="Atomic weight" className="atomic-weight">
                      <img alt="weight" src={weightIcon}/>
                      <div>{this.state.element.weight}</div>
                    </div>
                    <div data-tip="Density" className="density">
                      <img alt="weight" src={densitytIcon}/>
                      <div>{this.state.element.stats.density}
                        &nbsp;g/cm<sup>3</sup>
                      </div>

                    </div>
                    <div data-tip="Melting point" className="melting-point">
                      <img alt="weight" src={meltingIcon}/>
                      <div>{this.state.element.stats.melting}</div>
                    </div>
                    <div data-tip="Boiling point" className="boiling-point">
                      <img alt="weight" src={boilingIcon}/>
                      <div>{this.state.element.stats.boiling}</div>
                    </div>
                  </div>
                </div>

              </div>
              {/* Settings */}
              <div className="info-box settings">Hover over element for quick details, click element to interact with details.</div>
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
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">5</div>
              <abbr>B</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">6</div>
              <abbr>C</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">7</div>
              <abbr>N</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">8</div>
              <abbr>O</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">9</div>
              <abbr>F</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element noble-gas">
              <div className="atomic-number">10</div>
              <abbr>Ne</abbr>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row">
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkali-metal">
              <div className="atomic-number">11</div>
              <abbr>Na</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkaline-earth">
              <div className="atomic-number">12</div>
              <abbr>Mg</abbr>
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
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">13</div>
              <abbr>Al</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">14</div>
              <abbr>Si</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">15</div>
              <abbr>P</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">16</div>
              <abbr>S</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">17</div>
              <abbr>Cl</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element noble-gas">
              <div className="atomic-number">18</div>
              <abbr>Ar</abbr>
            </div>
          </div>

          {/* Row 4 */}
          <div className="row">
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkali-metal">
              <div className="atomic-number">19</div>
              <abbr>K</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkaline-earth">
              <div className="atomic-number">20</div>
              <abbr>Ca</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">21</div>
              <abbr>Sc</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">22</div>
              <abbr>Ti</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">23</div>
              <abbr>V</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">24</div>
              <abbr>Cr</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">25</div>
              <abbr>Mn</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">26</div>
              <abbr>Fe</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">27</div>
              <abbr>Co</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">28</div>
              <abbr>Ni</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">29</div>
              <abbr>Cu</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">30</div>
              <abbr>Zn</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">31</div>
              <abbr>Ga</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">32</div>
              <abbr>Ge</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">33</div>
              <abbr>As</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">34</div>
              <abbr>Se</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">35</div>
              <abbr>Br</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element noble-gas">
              <div className="atomic-number">36</div>
              <abbr>Kr</abbr>
            </div>
          </div>

          {/* Row 5 */}
          <div className="row">
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkali-metal">
              <div className="atomic-number">37</div>
              <abbr>Rb</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkaline-earth">
              <div className="atomic-number">38</div>
              <abbr>Sr</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">39</div>
              <abbr>Y</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">40</div>
              <abbr>Zr</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">41</div>
              <abbr>Nb</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">42</div>
              <abbr>Mo</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">43</div>
              <abbr>Tc</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">44</div>
              <abbr>Ru</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">45</div>
              <abbr>Rh</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">46</div>
              <abbr>Pd</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">47</div>
              <abbr>Ag</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">48</div>
              <abbr>Cd</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">49</div>
              <abbr>In</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">50</div>
              <abbr>Sn</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">51</div>
              <abbr>Sb</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">52</div>
              <abbr>Te</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">53</div>
              <abbr>I</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element noble-gas">
              <div className="atomic-number">54</div>
              <abbr>Xe</abbr>
            </div>
          </div>

          {/* Row 6 */}
          <div className="row">
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkali-metal">
              <div className="atomic-number">55</div>
              <abbr>CS</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkaline-earth">
              <div className="atomic-number">56</div>
              <abbr>Ba</abbr>
            </div>
            <div className="element blank"></div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">72</div>
              <abbr>Hf</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">73</div>
              <abbr>Ta</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">74</div>
              <abbr>W</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">75</div>
              <abbr>Re</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">76</div>
              <abbr>Os</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">77</div>
              <abbr>Ir</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">78</div>
              <abbr>Pt</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">79</div>
              <abbr>Au</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">80</div>
              <abbr>Hg</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">81</div>
              <abbr>Tl</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">82</div>
              <abbr>Pb</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">83</div>
              <abbr>Bi</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">84</div>
              <abbr>Po</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element nonmetal">
              <div className="atomic-number">85</div>
              <abbr>At</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element noble-gas">
              <div className="atomic-number">86</div>
              <abbr>Rn</abbr>
            </div>
          </div>

          {/* Row 7 */}
          <div className="row">
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkali-metal">
              <div className="atomic-number">87</div>
              <abbr>Fr</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element alkaline-earth">
              <div className="atomic-number">88</div>
              <abbr>Ra</abbr>
            </div>
            <div className="element blank"></div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">104</div>
              <abbr>Rf</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">105</div>
              <abbr>Db</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">106</div>
              <abbr>Sg</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">107</div>
              <abbr>Bh</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">108</div>
              <abbr>Hs</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">109</div>
              <abbr>Mt</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">110</div>
              <abbr>Ds</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">111</div>
              <abbr>Rg</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element transition-metal">
              <div className="atomic-number">112</div>
              <abbr>Cn</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">113</div>
              <abbr>Nh</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">114</div>
              <abbr>Fl</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">115</div>
              <abbr>Mc</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">116</div>
              <abbr>Lv</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element post-transition-metal">
              <div className="atomic-number">117</div>
              <abbr>Ts</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element noble-gas">
              <div className="atomic-number">118</div>
              <abbr>Og</abbr>
            </div>
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
            <div className="element blank">
              <img className="logo" alt="" src={logo}/></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">57</div>
              <abbr>La</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">58</div>
              <abbr>Ce</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">59</div>
              <abbr>Pr</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">60</div>
              <abbr>Nd</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">61</div>
              <abbr>Pm</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">62</div>
              <abbr>Sm</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">63</div>
              <abbr>Eu</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">64</div>
              <abbr>Gd</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">65</div>
              <abbr>Tb</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">66</div>
              <abbr>Dy</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">67</div>
              <abbr>Ho</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">68</div>
              <abbr>Er</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">69</div>
              <abbr>Tm</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">70</div>
              <abbr>Yb</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element lanthanide">
              <div className="atomic-number">71</div>
              <abbr>Lu</abbr>
            </div>
          </div>

          {/* Row 9 */}
          <div className="row">
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div className="element blank"></div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">89</div>
              <abbr>Ac</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">90</div>
              <abbr>Th</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">91</div>
              <abbr>Pa</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">92</div>
              <abbr>U</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">93</div>
              <abbr>Np</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">94</div>
              <abbr>Pu</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">95</div>
              <abbr>Am</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">96</div>
              <abbr>Cm</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">97</div>
              <abbr>Bk</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">98</div>
              <abbr>Cf</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">99</div>
              <abbr>Es</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">100</div>
              <abbr>Fm</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">101</div>
              <abbr>Md</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">102</div>
              <abbr>No</abbr>
            </div>
            <div onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} onClick={this.clickElement} className="element actinide">
              <div className="atomic-number">103</div>
              <abbr>Lr</abbr>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
