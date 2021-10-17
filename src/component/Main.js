import React from 'react'
import Project from './Project'
import Contact from './Contact'
export default function Main() {
    return (
        <>
            {/* <!-- End: Header Blue -->
    <!-- Start: Highlight Phone --> */}
    <section data-aos="fade-up-right" data-aos-duration="700" data-aos-delay="300" class="highlight-phone">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    {/* <!-- Start: Intro --> */}
                    <div class="intro">
                        <h2>Highlight</h2>
                        <p>Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat,
                            pellentesque ut laoreet vitae. Aliqua sed justo ligula.</p>
                        <a class="btn btn-primary" role="button" href="#">Action Button</a>
                    </div>
                    {/* <!-- End: Intro --> */}
                </div>
                <div class="col-sm-4">
                    {/* <!-- Start: Smartphone --> */}
                    <div  class="portfolio-laptop-mockup">
                        <div class="screen">
                          <div class="screen-content">
                            </div>
                        </div>
                        <div class="keyboard"></div>
                    </div>
                    {/* <!-- End: Smartphone --> */}
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End: Highlight Phone -->
    <!-- Start: Projects Horizontal --> */}
   <Project />
    {/* <!-- End: Projects Horizontal -->
    <!-- Start: Contact Form Clean --> */}
    <Contact />
    {/* <!-- End: Contact Form Clean -->
    <!-- Start: Footer Basic --> */}
        </>
    )
}
