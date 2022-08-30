<script setup lang="ts">
	import { socialLinks } from '@/data/socialLinks.json';
	import { services } from '@/data/services.json';
	import { projects } from '@/data/projects.json';
	import Service from '@/components/Service.vue';
	import Project from '@/components/Project.vue';
</script>
<template>
	<div id="home_page">
		<div class="hero-part">
			<div class="content">
				<div class="text-side">
					<h1>We create <span>unique &amp; efficient</span> digital solutions</h1>
					<p>We are providing solutions for all kinds of businesses, from small to enterprise organizations,
						individuals as well as the general public.</p>
					<router-link to="/#our_projects" class="main-btn">Checkout our Products</router-link>
				</div>

				<div class="img-container">
					<img src="@/assets/img/icon_logo.png" alt="Logo Icon">
				</div>

				<div class="hero-footer">
					<div class="socials">
						<a v-for="socialLink in socialLinks" :key="socialLink.id" :href="socialLink.url" target="_blank"
							rel="noopener noreferrer"><i :class="`fa ${socialLink.icon}`"></i></a>
					</div>
					<a href="#"><i class="fa fa-chevron-double-down"></i></a>
					<p>&copy; {{ new Date().getFullYear() }} mY Plus Plus Inc.</p>
				</div>
			</div>
		</div>
		<div class="about-us" id="about_us">
			<div class="content">
				<h1 class="page-title">Our story</h1>
				<ul class="list-unstyled">
					<li>
						<h4>Mthatha</h4>
						<span>Born</span>
					</li>
					<li>
						<h4>6 Years</h4>
						<span>Work Experience</span>
					</li>
					<li>
						<h4>20+</h4>
						<span>Happy Customers</span>
					</li>
				</ul>
				<div class="details">
					<h1 class="main-title">High-caliber software development and technology provider</h1>
					<p>
						mY++ &#40;Pty&#41; Ltd is a technology innovations company headquartered in Johannesburg.
						mY++&#39;s
						primary
						objective is to enhance customers&#39; experience and maximize their productivity by improving
						existing tools and inventing new technologies. We are providing solutions for all kinds of
						businesses, from small to enterprise organizations, individuals as well as the general public.
					</p>
					<p>
						According to &#40;Datareportal, 2021&#41;, there were 38.19 million internet users in South
						Africa
						in
						January 2021. The number of internet users in South Africa increased by 1.7 million
						&#40;+4.5%&#41;
						between 2020 and 2021. Internet penetration in South Africa stood at 64.0% in January 2021. mY++
						is embracing the 4th industrial revolution, we are striving to form a significant part in
						this revolution while also bridging the gap, pulling the societies that are behind with
						technology, ensuring they are up with the technology growth and usage so as to benefit from the
						advantages that it brings.
					</p>
				</div>
			</div>
		</div>
		<div class="service" id="our_services">
			<div class="content">
				<div class="header-part">
					<h1 class="page-title">Services <span>we offer</span></h1>
					<p>
						We are providing solutions for all kinds of businesses, from small to enterprise organizations,
						individuals as well as the general public.
					</p>
				</div>
				<div class="service-list">
					<div class="row gy-5">
						<div class="col-sm-4" v-for="service in services" :key="service.id">
							<Service :service="service" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="projects" id="our_projects">
			<div class="content">
				<div class="header-part">
					<h1 class="page-title">Our <span>projects</span></h1>
					<p>
						We have a wide range of projects that we are proud to be working on. You can request a demo of any our listed projects.
					</p>
				</div>
				<div class="projects-list">
					<div class="row gx-5 gy-5 justify-content-center">
            			<div class="col-sm-10" v-for="project in projects" :key="project.id">
							<Project :project="project"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="contact-us" id="contact_us">
			<div class="container">
				<div class="row gx-3 gy-5">
					<div class="col-sm-5">
						<div class="text-side">
							<h1>Let's make it happen</h1>
							<ul class="list-unstyled contact-details">
								<li>
									<a href="tel:+27780687445"><i class="fa fa-phone"></i> 078 068 7445</a>
								</li>
								<li>
									<a href="mailto:info@myplusplus.com"><i class="fa fa-envelope"></i>
										info@myplusplus.com</a>
								</li>
							</ul>
							<div class="socials">
								<a v-for="socialLink in socialLinks" :key="socialLink.id" :href="socialLink.url"
									target="_blank" rel="noopener noreferrer"><i :class="`fa ${socialLink.icon}`"></i>
								</a>
							</div>
						</div>
					</div>
					<div class="col-sm-7">
						<div class="contact-form">
							<h4>Leave us a message</h4>
							<form action="#" method="post">
								<div class="form-group">
									<label for="name">Hello, I am </label>
									<input type="text" id="name" placeholder="Enter your name">
								</div>
								<div class="form-group mb-4">
									<label for="email" class="mb-2">I am looking for help with a</label><br>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" id="presentation" name="help"
											value="presentation">
										<label class="form-check-label" for="presentation">Presentation</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" id="cloud_computing" name="help"
											value="cloud_computing">
										<label class="form-check-label" for="cloud_computing">Cloud Computing</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" id="development" name="help"
											value="development">
										<label class="form-check-label" for="cloud_computing">Software
											Development</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" id="maintenance" name="help"
											value="maintenance">
										<label class="form-check-label" for="maintenance">Maintenance and
											Support</label>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-sm-6">
											<label for="email">Please contact me at</label>
											<input type="email" id="email" placeholder="Email">
										</div>
										<div class="col-sm-6">
											<label for="phone">Or my number phone</label>
											<input type="text" id="phone" placeholder="Phone">
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="message">More details about request</label>
									<textarea id="message" rows="3"
										placeholder="Message"></textarea>
								</div>
								<button type="submit" class="main-btn">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>