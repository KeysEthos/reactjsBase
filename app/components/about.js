import React from 'react';
import {Link} from 'react-router';

class about extends React.Component {
  render() {
	return (
<div className="about">	
	<section className="hero is-small is-primary is-bold">
        	<div className="about_title hero-content">
    		<div className="container">
      			<h1 className="title">
        			What does it do?
      			</h1>
    		</div>
  		</div>
	</section>
	<div className="container about_text_structure">
  		<div className="notification">
    		Buzz utilizes an innovative group-matching program in order to combat the social anxieties of one-on-one interaction.  We present each group with another groups in their area.  Each member of the group votes on whether or not to match.  If a majority of both groups decide to match then you are given the option to message your new match and meet up.
  		</div>
	</div>
	<section className="hero is-small is-primary is-bold">
                <div className="about_title_two hero-content">
                <div className="container">
                        <h1 className="title">
                                How does it work?
                        </h1>
                </div>
                </div>
        </section>
	<div className="iphone_about">
		<div className="columns">
  		  <div className="column is-4">
			<img className="female_group" src="https://s3-us-west-2.amazonaws.com/buzzm/imgs/about/female_group_created_03.png" />
			<p className="warning_sub_text">~We dont actually use avatars for profile pictures</p>
		  </div>
		  <div className="column is-4">
			<div className="container about_text_sub_two">
			  <div className="notification_two">
			  Buzz utilizes an innovative group-matching program in order to combat the social anxieties of one-on-one interaction.  We present each group with another groups in their area.  Each member of the group votes on whether or not to match.  If a majority of both groups decide to match then you are given the option to message your new match and meet up.
			  </div>
			</div>
			<div className="checkIt_out">
				<div className="button is-medium is-warning is-outlined">
					Check it out
				</div>
				<div className="arrow_down">
					<i className="fa fa-angle-double-down"></i>
				</div>
			</div>
			<div className="get_started">
				<div className="arrow_left">
					<i className=" fa fa-long-arrow-left"></i>
				</div>
				<div className="get_started_text button is-medium is-info is-outlined">
				Create Your Group
				</div>
				<div className="arrow_right">
                                        <i className="fa fa-long-arrow-right"></i>
                                </div>
			</div>
			<div className="get_match">
                                <div className="arrow_down_r">
                                        <i className=" fa fa-angle-double-down"></i>
                                </div>
                                <div className="matched_button  button is-medium is-success is-outlined">
                                Match With Other Groups
                                </div>
                                <div className="arrow_down_r push_fix">
                                        <i className="fa fa-angle-double-down"></i>
                                </div>
                        </div>
                  </div>
		  <div className="column is-4">
                        <img className="male_group" src="https://s3-us-west-2.amazonaws.com/buzzm/imgs/about/male_group_created_03.png" />
			<p className="warning_sub_text">~We dont actually use avatars for profile pictures</p>
                  </div>
		</div>
		<div className="columns finish_group">
                  <div className="column is-6">
		     <div className="message_left">
                    	<img className="message_group" src="https://s3-us-west-2.amazonaws.com/buzzm/imgs/about/group_matched_03.png" />
			<div className="message_button button is-success">
			Messasge
				<i className="fa fa-angle-right"></i>
			</div>
		     </div>
                  </div>
                  <div className="column is-6">
		     <div className="message_right">
			<img className="message_group" src="https://s3-us-west-2.amazonaws.com/buzzm/imgs/about/message_group_03.png" />
		     </div>
                  </div>
                </div>
	</div>
	<Link to='/FAQ'>
	<section className="hero is-info">
  	   <div className="hero-content base_links">
    	      <div className="container">
      		<h1 className="title">
        		Check out how to make a profile!
      		</h1>
      		<h2 className="subtitle">
        		(and find friends) <br /><br /><br /> click anywhere in the blue
      		</h2>
    	      </div>
  	   </div>
	</section>
	</Link>
	<Link to='/add'>
        <section className="hero is-success">
           <div className="hero-content base_links_signUp">
              <div className="container">
                <h1 className="title">
                        Sign Up for the V2 Beta!
                </h1>
                <h2 className="subtitle">
                       The first 1000 users get to input there input and we will be developing our feature list around what you want to see. 
                </h2>
              </div>
           </div>
        </section>
        </Link>
</div>
	);
   }
}

export default about;
