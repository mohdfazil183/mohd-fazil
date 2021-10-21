import React from 'react'
import Navigation from './Navigation'
import '../css/bootstrap.min.css'

export default function CV() {
    return (
		<div>
			<Navigation data="cv" />
            <main class="page cv-page">
		   <section class="portfolio-block block-intro border-bottom">
			<div class="container">
						<div class="avatar"
							style={{ backgroundImage: "url('./assets/img/avatars/avatar.jpg') "}}>
				</div>
				<div class="about-me">
					<p>
						Hello! I am <strong>Mohd Fazil.</strong> I am a MERN Developer, and PHP as well. I have been working in this
                        field for last 2 years.&nbsp;
					</p>
					<a class="btn btn-outline-primary" role="button" href="./assets/img/resume.pdf">Hire me</a>
				</div>
			</div>
		</section>
		<section class="portfolio-block cv">
			<div class="container">
				<div class="work-experience group">
					<div class="heading">
						<h2 class="text-center">Work Experience</h2>
					</div>
					<div class="item">
						<div class="row">
							<div class="col-md-6">
								<h3>PHP Developer</h3>
								<h4 class="organization">Self</h4>
							</div>
							<div class="col-md-6"><span class="period">2018 - /2019</span></div>
						</div>
						<p class="text-muted">
							 I learnt PHP at Udemy as my first web development course. I have done some project 
						</p>
					</div>
					<div class="item">
						<div class="row">
							<div class="col-6">
								<h3>React Front Developer</h3>
								<h4 class="organization">Self</h4>
							</div>
							<div class="col-md-6"><span class="period">2019 - 2020</span></div>
						</div>
						<p class="text-muted">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies,
							feugiat est sed,
							efficitur nunc, vivamus vel accumsan dui.
						</p>
					</div>
					<div class="item">
						<div class="row">
							<div class="col-md-6">
								<h3>MERN Stack Developer</h3>
								<h4 class="organization">Self</h4>
							</div>
							<div class="col-md-6"><span class="period">2020 - Present</span></div>
						</div>
						<p class="text-muted">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies,
							feugiat est sed,
							efficitur nunc, vivamus vel accumsan dui.
						</p>
					</div>
				</div>
				<div class="education group">
					<div class="heading">
						<h2 class="text-center">Education</h2>
					</div>
					<div class="item">
						<div class="row">
							<div class="col-md-6">
								<h3>Master of Computer Application</h3>
								<h4 class="organization">Nehru Gram Bharti University</h4>
							</div>
							<div class="col-6"><span class="period">07/2019 - 05/2021</span></div>
						</div>
						<p class="text-muted">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies,
							feugiat est sed,
							efficitur nunc, vivamus vel accumsan dui.
						</p>
					</div>
					<div class="item">
						<div class="row">
							<div class="col-md-6">
								<h3>Bachelor of Computer Applications </h3>
								<h4 class="organization">Allahabad State University</h4>
							</div>
							<div class="col-md-6"><span class="period">07/2016 - 06/2019</span></div>
						</div>
						<p class="text-muted">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies,
							feugiat est sed,
							efficitur nunc, vivamus vel accumsan dui.
						</p>
					</div>
				</div>
				<div class="group">
					<div class="row">
						<div class="col-md-6">
							<div class="skills portfolio-info-card">
								<h2>Skills</h2>
								<h3>ReactJS</h3>
								<div class="progress">
											<div class="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
												style={{ width: "90%"}}>
										<span class="visually-hidden">90%</span>
									</div>
								</div>
								<h3>NodeJS</h3>
								<div class="progress">
											<div class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
												style={{ width: "70%"}}>
										<span class="visually-hidden">70%</span>
									</div>
								</div>
								<h3>JavaScript</h3>
								<div class="progress">
											<div class="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
												style={{ width:" 75%"}}>
										<span class="visually-hidden">75%</span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="contact-info portfolio-info-card">
								<h2>Contact Info</h2>
								<div class="row">
									<div class="col-1"><i class="icon ion-android-calendar icon"></i></div>
									<div class="col-9"><span>09/04/1996</span></div>
								</div>
								<div class="row">
									<div class="col-1"><i class="icon ion-person icon"></i></div>
									<div class="col-9"><span>Mohd Fazil</span></div>
								</div>
								<div class="row">
									<div class="col-1"><i class="icon ion-ios-telephone icon"></i></div>
									<div class="col-9"><span>+91 735 441 83</span></div>
								</div>
								<div class="row">
									<div class="col-1"><i class="icon ion-at icon"></i></div>
									<div class="col-9"><span>kfazil185@gmail.com</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="hobbies group">
					<div class="heading">
						<h2 class="text-center">Hobbies</h2>
					</div>
					<p class="text-center text-muted">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras risus ligula, iaculis ut metus sit
						amet,
						luctus pharetra mauris. Aliquam purus felis, pretium vel pretium vitae, dapibus sodales ante.
						Suspendisse
						potenti. Duis nunc eros.
					</p>
				</div>
			</div>
		</section>
	</main>
        </div>
    )
}
