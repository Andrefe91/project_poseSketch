//Modules
import React from "react";
import { HashLink } from "react-router-hash-link";
//Components
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import FootBar from "../FootBar/FootBar";
import Divider from "@mui/material/Divider";
//Icons
import BookmarksIcon from "@mui/icons-material/Bookmarks";
//Css
import "./faq.css";

function Faq() {
	return (
		<div className="container">
			<StaticAppBar selected="faq" />

			<h2>Frequently Asked Questions</h2>

			<div className="faqContent">
				<div className="indexContainer">
					<div className="indexHeader">
						<BookmarksIcon />
						<h3>Index</h3>
					</div>
					<ul className="index">
						<HashLink smooth to="#what_is_pose_player">
							<li>
								What is <i>Pose Player</i>?
							</li>
						</HashLink>

						<HashLink smooth to="#why_pose_player_exist">
							<li>
								Why <i>Pose Player</i> exist?
							</li>
						</HashLink>

						<HashLink smooth to="#how_do_i_upload_images">
							<li>How do i upload images?</li>
						</HashLink>

						<HashLink smooth to="#can_i_organize_my_images">
							<li>Can i organize my images?</li>
						</HashLink>

						<HashLink smooth to="#how_does_the_timer_works">
							<li>How does the timer work?</li>
						</HashLink>

						<HashLink smooth to="#and_those_beeps">
							<li>And those beeps?</li>
						</HashLink>

						<HashLink
							smooth
							to="#whats_the_random_and_sequential_display_feature"
						>
							<li>Whats the random/sequential display feature?</li>
						</HashLink>

						<HashLink
							smooth
							to="#can_i_select_a_specific_number_of_images_for_a_session"
						>
							<li>Can i select a specific number of images for a session?</li>
						</HashLink>

						<HashLink smooth to="#is_my_data_saved">
							<li>Is my data saved? Tell me the truth...</li>
						</HashLink>

						<HashLink smooth to="#i_dont_believe_you">
							<li>I don&apos;t believe you, how can i trust you?</li>
						</HashLink>

						<HashLink smooth to="#my_images_are_on_the_cloud">
							<li>
								My images are on the cloud, how can i connect them to this
								application?
							</li>
						</HashLink>

						<HashLink smooth to="#can_i_use_this_on_my_phone">
							<li>Can i use this on my phone?</li>
						</HashLink>

						<HashLink smooth to="#can_you_add_a_given_functionallity">
							<li>
								I would like for a given functionallity/option to exist in Pose
								Player, can you add it?
							</li>
						</HashLink>

						<HashLink smooth to="#did_you_use_ai">
							<li>Did you use AI to create this?</li>
						</HashLink>

						<HashLink smooth to="#i_have_more_questions">
							<li>I have more questions...</li>
						</HashLink>
					</ul>
				</div>

				<div className="questions">
					<div className="question" id="what_is_pose_player">
						<h3>
							What is <i>Pose Player</i>?
						</h3>
						<p>
							It&apos;s a web application for artists to practice figure drawing
							by uploading and organizing reference images, then creating
							personalized practice sessions.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="why_pose_player_exist">
						<h3>
							Why <i>Pose Player</i> exist?
						</h3>

						<p>
							As an artist, i have always struggled with the lack of tools to
							practice figure drawing. I have tried many webpages and some
							desktop applications, but some of them felt cluncky or were
							difficult to install. I wanted something simple, flexible, that
							allowed me to use my own images, and that was not a subscription
							service. So i decided to create it myself.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="how_do_i_upload_images">
						<h3>How do i upload images?</h3>
						<p>
							Just click on the &quot;Upload Images&quot; field and select the
							images you want to load or just pick and drop on the same field.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="can_i_organize_my_images">
						<h3>Can i organize my images?</h3>
						<p>
							Currently, all uploaded images are added to a single collection.
							As this tool is designed to work locally on your computer we dont
							store any image, reference or personal data, so an organization
							tool would serve no purpose.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="how_does_the_timer_works">
						<h3>How does the timer work?</h3>
						<p>
							The timer allows you to set a specific duration for each image to
							be displayed during a practice session. This helps simulate the
							time constraints of real-life sketching.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="and_those_beeps">
						<h3>And those beeps?</h3>
						<p>
							You can enable, disable or even modify the time of the beeps that
							sound when the timer reaches 0. This is useful for those who want
							to be alerted when the time has almost run out without having to
							look at the timer all the time.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div
						className="question"
						id="whats_the_random_and_sequential_display_feature"
					>
						<h3>Whats the random/sequential display feature?</h3>
						<p>
							This along with the timer control are the main reason for this
							application to exist. You can choose to display images in a random
							order or follow the sequence in which they were uploaded. This
							flexibility helps keep your practice sessions dynamic.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div
						className="question"
						id="can_i_select_a_specific_number_of_images_for_a_session"
					>
						<h3>Can i select a specific number of images for a session?</h3>
						<p>
							Currently, all the images uploaded makes the pool from wich the
							selection tool takes the images. Im currently working to add
							functionality to improve user interaction within the collection.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="is_my_data_saved">
						<h3>Is my data saved? Tell me the truth...</h3>
						<p>
							No, but yes. We don&apos;t save any of your images or personal
							information to a server, not even your preferences. However,
							without any kind of save functionality you would have to construct
							study sessions everytime the webpage loads, that would be not very
							usefull and even somewhat frustrating, so im using a browser
							function called LocalStorage to save your preferences{" "}
							<i>locally</i>.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="i_dont_believe_you">
						<h3>I don&apos;t believe you, how can i trust you?</h3>
						<p>
							Honestly i don&apos;t blame you. Because of the current state of
							the internet i made this tool as opensource and it will always be.
							You can check the code on the Github repository, or if you are not
							code oriented i made a video for you to easily follow and make
							sure that we are not loading any of your images to a server.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="my_images_are_on_the_cloud">
						<h3>
							My images are on the cloud, how can i connect them to this
							application?
						</h3>
						<p>
							Unfortunately you can&apos;t, at least not at this time. I want to
							add that functionality in the future but this application was
							designed mainly for working locally on your computer and as result
							it&apos;s a little rigid. I would have to rewrite half of it and
							start collecting some personal data for that to work, wich is
							another beast on it&apos;s own.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="can_i_use_this_on_my_phone">
						<h3>Can i use this on my phone?</h3>
						<p>
							Yes, you can. The application is responsive and should work on any
							device. However, the experience is better on a desktop or tablet.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="can_you_add_a_given_functionallity">
						<h3>
							I would like for a given functionallity/option to exist in Pose
							Player, can you add it?
						</h3>
						<p>
							As this is a passion and learning project, i can&apos;t promise
							that i can add a given functionallity or option, but please feel
							free to contact me. I will be more than glad to hear your ideas
							and suggestions.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="did_you_use_ai">
						<h3>Did you use AI to create this?</h3>
						<p>
							This site is my personal learning project, wouldn&apos;t achieve
							anything if i were to use AI instead. However i would also be a fool
							not to use all the tools at my disposal, so i used some AI to help
							me diagnose bugs and implementation problems. This page is
							enterely created using React, Material-UI, HTML, CSS, and
							Javascript. I also used some libraries like react-router and
							react-dropzone. Believe me, the bugs you might find are enterely
							my own fault.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="i_have_more_questions">
						<h3>I have more questions...</h3>
						<p>
							Please don&apos;t hesitate to ask. I will be glad to help you and
							answer any questions you may have. Just use any of the contact
							channels at the bottom of the page. I will be happy to help you
							and even update this FAQ with your questions.
						</p>
					</div>
				</div>
			</div>
			<FootBar />
		</div>
	);
}

export default Faq;
