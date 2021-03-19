import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Form'; 

const SignIn = () => {

    return ( 

        <div className="SignIn">

            <div className="container-fluid">

                <div className="row align-items-center flex-container">

                    <div className="col section1">

                        <div className="SignInImg">

                            <img src="images/sign-in-pic.jpg" alt="img missing" width="575" height="400"/>

                        </div>

                    </div>

                    <div className="col section2">

                        <h1>SIGN IN</h1>

                        <div className="SignInForm">

                            <form> 
                                <input type="text" placeholder="User Id" />

                                <input type="password" placeholder="Password" />
                                <br/>

                                <Link className="SignInlink" to="/" >Forgot password</Link>
                                <br/>

                                
                                <input type="radio" id="RadioBtn" name="RadioBtn" value="unchecked"/>
                                <label className="SignInRadioBtnLabel"> Remember Me</label>

                                <br/> <br/>

                                <input type="button" className="button" value="SUBMIT"></input>

                                <br/>
                                
                            </form> 

                        </div>


                    </div>

                </div>

            </div>

        </div>

    );
}
 
export default SignIn;