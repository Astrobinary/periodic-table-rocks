import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">

              <div className="table">

                {/* Row 1||| $235 */}
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
                        <div className="element blank">
                            <div className="top-info-box"></div>
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
                        <div className="element alkaline-earth">
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
                        <div className="element post-transition-metal">
                            <div className="atomic-number">13</div>
                            <abbr>Al</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">14</div>
                            <abbr>Si</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">15</div>
                            <abbr>P</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">16</div>
                            <abbr>S</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">17</div>
                            <abbr>Cl</abbr>
                        </div>
                        <div className="element noble-gas">
                            <div className="atomic-number">18</div>
                            <abbr>Ar</abbr>
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="row">
                        <div className="element alkali-metal">
                            <div className="atomic-number">19</div>
                            <abbr>K</abbr>
                        </div>
                        <div className="element alkaline-earth">
                            <div className="atomic-number">20</div>
                            <abbr>Ca</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">21</div>
                            <abbr>Sc</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">22</div>
                            <abbr>Ti</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">23</div>
                            <abbr>V</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">24</div>
                            <abbr>Cr</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">25</div>
                            <abbr>Mn</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">26</div>
                            <abbr>Fe</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">27</div>
                            <abbr>Co</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">28</div>
                            <abbr>Ni</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">29</div>
                            <abbr>Cu</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">30</div>
                            <abbr>Zn</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">31</div>
                            <abbr>Ga</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">32</div>
                            <abbr>Ge</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">33</div>
                            <abbr>As</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">34</div>
                            <abbr>Se</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">35</div>
                            <abbr>Br</abbr>
                        </div>
                        <div className="element noble-gas">
                            <div className="atomic-number">36</div>
                            <abbr>Kr</abbr>
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="row">
                        <div className="element alkali-metal">
                            <div className="atomic-number">37</div>
                            <abbr>Rb</abbr>
                        </div>
                        <div className="element alkaline-earth">
                            <div className="atomic-number">38</div>
                            <abbr>Sr</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">39</div>
                            <abbr>Y</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">40</div>
                            <abbr>Zr</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">41</div>
                            <abbr>Nb</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">42</div>
                            <abbr>Mo</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">43</div>
                            <abbr>Tc</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">44</div>
                            <abbr>Ru</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">45</div>
                            <abbr>Rh</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">46</div>
                            <abbr>Pd</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">47</div>
                            <abbr>Ag</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">48</div>
                            <abbr>Cd</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">49</div>
                            <abbr>In</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">50</div>
                            <abbr>Sn</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">51</div>
                            <abbr>Sb</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">52</div>
                            <abbr>Te</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">53</div>
                            <abbr>I</abbr>
                        </div>
                        <div className="element noble-gas">
                            <div className="atomic-number">54</div>
                            <abbr>Xe</abbr>
                        </div>
                    </div>

                    {/* Row 6 */}
                    <div className="row">
                        <div className="element alkali-metal">
                            <div className="atomic-number">55</div>
                            <abbr>CS</abbr>
                        </div>
                        <div className="element alkaline-earth">
                            <div className="atomic-number">56</div>
                            <abbr>Ba</abbr>
                        </div>
                        <div className="element blank"></div>
                        <div className="element transition-metal">
                            <div className="atomic-number">72</div>
                            <abbr>Hf</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">73</div>
                            <abbr>Ta</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">74</div>
                            <abbr>W</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">75</div>
                            <abbr>Re</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">76</div>
                            <abbr>Os</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">77</div>
                            <abbr>Ir</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">78</div>
                            <abbr>Pt</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">79</div>
                            <abbr>Au</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">80</div>
                            <abbr>Hg</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">81</div>
                            <abbr>Tl</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">82</div>
                            <abbr>Pb</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">83</div>
                            <abbr>Bi</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">84</div>
                            <abbr>Po</abbr>
                        </div>
                        <div className="element nonmetal">
                            <div className="atomic-number">85</div>
                            <abbr>At</abbr>
                        </div>
                        <div className="element noble-gas">
                            <div className="atomic-number">86</div>
                            <abbr>Rn</abbr>
                        </div>
                    </div>

                    {/* Row 7 */}
                    <div className="row">
                        <div className="element alkali-metal">
                            <div className="atomic-number">87</div>
                            <abbr>Fr</abbr>
                        </div>
                        <div className="element alkaline-earth">
                            <div className="atomic-number">88</div>
                            <abbr>Ra</abbr>
                        </div>
                        <div className="element blank"></div>
                        <div className="element transition-metal">
                            <div className="atomic-number">104</div>
                            <abbr>Rf</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">105</div>
                            <abbr>Db</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">106</div>
                            <abbr>Sg</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">107</div>
                            <abbr>Bh</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">108</div>
                            <abbr>Hs</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">109</div>
                            <abbr>Mt</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">110</div>
                            <abbr>Ds</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">111</div>
                            <abbr>Rg</abbr>
                        </div>
                        <div className="element transition-metal">
                            <div className="atomic-number">112</div>
                            <abbr>Cn</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">113</div>
                            <abbr>Nh</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">114</div>
                            <abbr>Fl</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">115</div>
                            <abbr>Mc</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">116</div>
                            <abbr>Lv</abbr>
                        </div>
                        <div className="element post-transition-metal">
                            <div className="atomic-number">117</div>
                            <abbr>Ts</abbr>
                        </div>
                        <div className="element noble-gas">
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
                        <div className="element blank"></div>
                        <div className="element blank"></div>
                        <div className="element blank"></div>
                        <div className="element lanthanide">
                            <div className="atomic-number">57</div>
                            <abbr>La</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">58</div>
                            <abbr>Ce</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">59</div>
                            <abbr>Pr</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">60</div>
                            <abbr>Nd</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">61</div>
                            <abbr>Pm</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">62</div>
                            <abbr>Sm</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">63</div>
                            <abbr>Eu</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">64</div>
                            <abbr>Gd</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">65</div>
                            <abbr>Tb</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">66</div>
                            <abbr>Dy</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">67</div>
                            <abbr>Ho</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">68</div>
                            <abbr>Er</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">69</div>
                            <abbr>Tm</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">70</div>
                            <abbr>Yb</abbr>
                        </div>
                        <div className="element lanthanide">
                            <div className="atomic-number">71</div>
                            <abbr>Lu</abbr>
                        </div>
                    </div>

                    {/* Row 9 */}
                    <div className="row">
                        <div className="element blank"></div>
                        <div className="element blank"></div>
                        <div className="element blank"></div>
                        <div className="element actinide">
                            <div className="atomic-number">89</div>
                            <abbr>Ac</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">90</div>
                            <abbr>Th</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">91</div>
                            <abbr>Pa</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">92</div>
                            <abbr>U</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">93</div>
                            <abbr>Np</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">94</div>
                            <abbr>Pu</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">95</div>
                            <abbr>Am</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">96</div>
                            <abbr>Cm</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">97</div>
                            <abbr>Bk</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">98</div>
                            <abbr>Cf</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">99</div>
                            <abbr>Es</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">100</div>
                            <abbr>Fm</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">101</div>
                            <abbr>Md</abbr>
                        </div>
                        <div className="element actinide">
                            <div className="atomic-number">102</div>
                            <abbr>No</abbr>
                        </div>
                        <div className="element actinide">
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
