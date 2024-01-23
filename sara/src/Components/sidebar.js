import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { Link } from "react-router-dom";
import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }


  render() {
    return (
      <>
      <SideNav expanded={!this.state.isVisible} style={{'background-color':'rgba(42, 59, 174, 0.952)'}} >
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav  >
          <NavItem >
            <NavIcon>
            </NavIcon>
             <NavText style={{'color':'white' , 'font-family': 'Source Sans Pro' ,'font-size':'2.3rem'}}><Link to='/home'>Home</Link></NavText>
          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
            </NavIcon>
            <NavText  style={{'color':'white', 'font-family': 'Source Sans Pro' ,'font-size':'2.3rem'}}><Link to='/books'>Media</Link></NavText>
          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
            </NavIcon>
            <NavText  style={{'color':'white', 'font-family': 'Source Sans Pro' ,'font-size':'2.3rem'}}><Link to='/Contact'>Contact US</Link></NavText>
          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
            </NavIcon>
            <NavText  style={{'color':'white', 'font-family': 'Source Sans Pro' ,'font-size':'2.3rem'}}><Link to='/'>Login</Link></NavText>
          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
            </NavIcon>
            <NavText  style={{'color':'white', 'font-family': 'Source Sans Pro' ,'font-size':'2.3rem'}}><Link to='/signup'>SignUp</Link></NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
   
      </>
    );
  }
}

export default SideNavBar;
