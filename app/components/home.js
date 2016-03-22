import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className='main_block background-image'>
        <div className='nav_bar_pad'>
	 <div className='columns'>
	  <div className='column is-12'>
	  <div className='white_background_box flipInX animated'>	
	   <div className="title is-2 main_title">“Revolutionizing the way we connect”</div>
	   <img className='main_center_image' src='https://s3-us-west-2.amazonaws.com/buzzm/imgs/buzz_logo/img_full_down.png' />
		<p className="title is-2 sub_question">So what is Buzz?</p>
	    <p className="title is-4 sub_title">Buzz is a multi-platform social media created to bring groups of people together. It was created to build and develop relationships of all forms.</p>
	    <div className='main_button_group'>
		<Link to='/about' className='button is-primary is-medium'>Learn More</Link>
		<Link to='/FAQ' className='button is-info is-medium'>How it Works</Link>
	    </div>
	  </div>
	  </div>
	 </div>
	</div> 
      </div>
    );
  }
}

export default Home;
