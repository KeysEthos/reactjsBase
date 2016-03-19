import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='main_block background-image'>
        <div className='nav_bar_pad'>
	 <div className='columns'>
	  <div className='column is-12'>
	  <div className='white_background_box flipInX animated'>
	   <img className='main_center_image' src='https://s3-us-west-2.amazonaws.com/buzzm/imgs/buzz_logo/img_full_down.png' />
	    <div className="title is-1 main_title">“Revolutionizing the way we connect”</div>


	  </div>
	  </div>
	 </div>
	</div> 
      </div>
    );
  }
}

export default Home;
