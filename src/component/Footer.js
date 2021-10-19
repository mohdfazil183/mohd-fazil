import React from 'react';

export default function Footer() {
    return (
    <footer data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" class="footer-basic">
        {/* <!-- Start: Social Icons --> */}
        <div class="social">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-facebook "></i></a>
        </div>
        {/* <!-- End: Social Icons -->
        <!-- Start: Links --> */}
        <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Home</a></li>
            <li class="list-inline-item"><a href="#">Services</a></li>
            <li class="list-inline-item"><a href="#">About</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        {/* <!-- End: Links -->
        <!-- Start: Copyright --> */}
        <p class="copyright">MFKBlog © 2021</p>
        {/* <!-- End: Copyright --> */}
    </footer>
    )
}
