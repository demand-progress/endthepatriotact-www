import React, {Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor';

class Signup extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            
        <div id="app" className="sign-up-page">
            <div className="unit">
                <div className="hero" id="signup-action-form">
                    <div>
                        <div id="signThePetition">
                            <div className="bftn-form call-action-form">
                                <div>
                                    <h3>
                                      Thanks For Signing!
                                    </h3>
                                </div>
    
                            </div>
                        </div>
                    </div>
                    <div className="unit" >
                        <div id="congress-alert">
                            <div>
                                
                                <p>Thank you so much for writing to your members of Congress urging them to shut down Section 215 of the Patriot Act. Now, can you help keep up our momentum by giving them a call?</p>
								<h4>
                                CALL: <a href="tel://2017316757">201-731-6757</a>
								</h4>
								<p>We'll connect you to your lawmakers. You can use this script — just introduce yourself, be polite, and say:</p>

								<p><em><i>"I'm calling to tell my lawmakers I want them to stop unethical and unjust government spying by shutting down Section 215 of the Patriot Act for good. Thank you."</i></em></p>


                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </div>)
    }
   ;
}

export default Signup;
