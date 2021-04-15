import React from 'react';

function Home(){
    return(
        <div className="hero-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="register-form p-3 text-center">
                        <h3 className="my-1">Fill up the form</h3>
                        <p className="mb-4 px-md-5">Once you fill all those fields and submit it. You'll get and brochure of House and Lots details</p>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" class="form-control" id="first_name"  placeholder="First Name"/>
                                </div> 
                                <div className="form-group col-md-6">
                                    <input type="text" class="form-control" id="last_name" placeholder="Last Name"/>
                                </div> 
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" class="form-control" id="phone" placeholder="Phone"/>
                                </div> 
                                <div className="form-group col-6">
                                <select class="form-control" id="age">
                                    <option className="fs-placeholder" value="Age">Age</option>
                                </select>
                                </div> 
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input type="email" class="form-control" id="email" placeholder="Email"/>
                                </div> 
                            </div>
                            <input id="referrer" type="hidden"/>
                            <input id="ip_country" type="hidden"/>
                            <input id="ip_states" type="hidden"/>
                            <input id="ip_postcode" type="hidden"/>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;
