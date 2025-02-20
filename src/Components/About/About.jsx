//Modules
import React from "react";
//Components
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import FootBar from "../FootBar/FootBar";
//Css
import "./about.css";

function About() {
	return (
		<>
			<div className="container">
				<StaticAppBar selected="about" />
				<div className="about-container">
					<h2>About Pose Player</h2>
					<p>
						Welcome to <i>Pose Player</i>, a simple yet powerful tool designed
						for artists who want to improve their figure drawing skills. Whether
						you re just starting or looking to refine your technique, our
						platform makes it easy to create personalized practice sessions
						tailored to your needs. Load your favorite reference images,
						organize them into a collection, and use our practice tools to focus
						on what matters most—enhancing your artistic skills. With features
						like timed sessions, random or sequential image display, and
						customizable practice sets, you can make every session uniquely
						yours. Let your creativity flow, one sketch at a time!
					</p>

				</div>

				<FootBar />
			</div>
		</>
	);
}

export default About;
