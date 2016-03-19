import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
   {/* NavbarActions.getCharacterCount();*/}

    let socket = io.connect();
{/*
    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
*/}
  }
  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
{/*
    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
*/}
  }

  render() {
    return (
      <nav className='navbar navbar-sexy'>
        <div className='navbar-left'>
	    <div className='navbar-item home_bee'><Link to='/'>
                <img src='https://s3-us-west-2.amazonaws.com/buzzm/imgs/buzz_logo/main.png' />
            </Link></div>
	    <div className='navbar-item'><Link to='/about'>About</Link></div>
	    <div className='navbar-item'><Link to='/blog'>Blog</Link></div>
	    <div className='navbar-item'><Link to='/faq'>FAQ</Link></div>
	</div>
	<div classname='navbar-right'>
            <div className='navbar-item'>
		<Link to='/add'><a className='button is-success'>Sign Up</a></Link>
	    </div>
	</div>	    
      </nav>
    );
  }
}

export default Navbar;
