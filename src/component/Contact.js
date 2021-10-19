import React from 'react'

export default function Contact() {
    return (
        <section id="contact" class="contact-clean">
        <form data-aos="fade-right" data-aos-duration="800" data-aos-delay="300" method="post">
            <h2 class="text-center">Contact us</h2>
            {/* <!-- Start: Success Example --> */}
            <div class="mb-3"><input class="form-control" type="text" name="name" placeholder="Name" /></div>
            {/* <!-- End: Success Example -->
            <!-- Start: Error Example --> */}
            <div class="mb-3">
                <input class="form-control" type="email" name="email" placeholder="Email" />
            </div>
            {/* <!-- End: Error Example --> */}
            <div class="mb-3"><textarea class="form-control" name="message" placeholder="Message" rows="14"></textarea>
            </div>
            <div class="mb-3"><button class="btn btn-primary" type="submit">send</button></div>
        </form>
    </section>
    )
}
