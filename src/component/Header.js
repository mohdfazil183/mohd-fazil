import React from 'react'
import Navigation from './Navigation'

export default function Header() {
    
    return (
        <header class="header-blue">
        <Navigation />
        <div class="container hero">
            <div class="row">
                {/* <!-- Start: Text --> */}
                <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                    <h1 style={{paddingBottom:'5px'}} class="text-center border-primary shadow">Mohd Fazil.</h1>
                    <p>Hello! I am Mohd&nbsp; Fazil. I am a MERN Developer, and PHP as well. I have been working in this
                        field for last 2 years.&nbsp;</p>
                    <a id='btn' class="btn btn-light btn-lg font-monospace text-truncate action-button" href="./assets/img/resume.pdf">Resume</a>
                </div>
                {/* <!-- End: Text --> */}
                <div class="col-md-5 col-lg-5 offset-lg-1 align-self-center offset-xl-0 d-none d-lg-block bounce animated phone-holder">
                    {/* <!-- Start: iPhone --> */}
                    <div class="phone-mockup">
                        <img class="device" src="./assets/img/phone.svg" />
                        <div class="screen"></div>
                    </div>
                    
                    {/* <!-- End: iPhone --> */}
                </div>
            </div>
        </div>
    </header>
    )
}
