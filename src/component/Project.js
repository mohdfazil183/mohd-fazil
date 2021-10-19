import React from 'react'

export default function Project() {
    return (
        <section id="project" style={{width:'100%'}} class="projects-horizontal">
        <div class="container" data-aos="fade-up-left" data-aos-duration="800" data-aos-delay="300">
            {/* <!-- Start: Intro --> */}
            <div class="intro">
                <h2 class="text-center">Projects</h2>
                <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh
                    erat, pellentesque ut laoreet vitae.</p>
            </div>
            {/* <!-- End: Intro -->
            <!-- Start: Projects --> */}
            <div class="row projects">
                <div class="col-sm-6 item" data-aos="fade-right" data-aos-duration="500">
                    <div class="row">
                        <div class="col-md-12 col-lg-5">
                            <a href="#"><img class="img-fluid"
                                    src="./assets/img/ecart.png" /></a>
                        </div>
                        <div class="col">
                            <h3 class="name">E-Commerce</h3>
                            <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu gravida.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item" data-aos="fade-left" data-aos-duration="500">
                    <div class="row">
                        <div class="col-md-12 col-lg-5">
                            <a href="#"><img class="img-fluid"
                                    src="./assets/img/school.png" /></a>
                        </div>
                        <div class="col">
                            <h3 class="name">School fee Management</h3>
                            <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu gravida.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item" data-aos="fade-right" data-aos-duration="500">
                    <div class="row">
                        <div class="col-md-12 col-lg-5">
                            <a href="#"><img class="img-fluid"
                                    src="./assets/img/loft.jpg" /></a>
                        </div>
                        <div class="col">
                            <h3 class="name">Blog Website</h3>
                            <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu gravida.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item" data-aos="fade-left" data-aos-duration="500">
                    <div class="row">
                        <div class="col-md-12 col-lg-5">
                            <a href="#"><img class="img-fluid"
                                    src="./assets/img/robot.png" /></a>
                        </div>
                        <div class="col">
                            <h3 class="name">RoboFriends</h3>
                            <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu gravida.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End: Projects --> */}
        </div>
    </section>
    )
}
