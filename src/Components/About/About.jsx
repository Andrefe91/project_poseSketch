//Modules
import React from "react";
//Components
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import FootBar from "../FootBar/FootBar";

function About() {
	return (
		<>
			<StaticAppBar selected="about" />
			<p>
				Welcome to [Your App Name], a simple yet powerful tool designed for
				artists who want to improve their figure drawing skills. Whether you're
				just starting or looking to refine your technique, our platform makes it
				easy to create personalized practice sessions tailored to your needs.
				Upload your favorite reference images, organize them into a collection,
				and use our practice tools to focus on what matters most—enhancing your
				artistic skills. With features like timed sessions, random or sequential
				image display, and customizable practice sets, you can make every
				session uniquely yours. Let your creativity flow, one sketch at a time!
			</p>
			<FootBar />
		</>
	);
}

export default About;
