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

						<HashLink smooth to="#page_died">
							<li>I uploaded a bunch of images and the page died, why?</li>
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
							It&apos;s is a web application designed for artists to practice
							figure drawing. It allows users to upload and organize reference
							images, then create personalized practice sessions.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="why_pose_player_exist">
						<h3>
							Why <i>Pose Player</i> exist?
						</h3>

						<p>
							As an artist, I&apos;ve always struggled to find the right tools
							for figure drawing practice. I&apos;ve tried various websites and
							desktop applications, but many felt clunky or were difficult to
							install. I wanted something simple, flexible, and capable of using
							my own images—without requiring a subscription. So, I decided to
							create it myself.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="how_do_i_upload_images">
						<h3>How do i upload images?</h3>
						<p>
							Simply click on the &quot;Upload Images&quot; field and select the
							images you want to add. You can also drag and drop files into the
							same field. Once uploaded, you can start your practice session.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="can_i_organize_my_images">
						<h3>Can i organize my images?</h3>
						<p>
							Currently, all uploaded images are added to a single collection.
							Since this tool is designed to work locally on your computer, we
							don&apos;t store any images, references, or personal data, so an
							organization tool wouldn&apos;t serve much purpose.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="how_does_the_timer_works">
						<h3>How does the timer work?</h3>
						<p>
							The timer lets you set a specific duration for each image in your
							practice session, helping to simulate real-life sketching time
							constraints.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="and_those_beeps">
						<h3>And those beeps?</h3>
						<p>
							You can enable, disable, or even adjust the timing of beeps that
							sound when the timer reaches zero. This feature is helpful for
							those who want an audible alert without having to constantly check
							the timer.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div
						className="question"
						id="whats_the_random_and_sequential_display_feature"
					>
						<h3>Whats the random/sequential display feature?</h3>
						<p>
							This, along with the timer, is one of the core reasons Pose Player
							exists. You can choose to display images in a random order or in
							the sequence they were uploaded. This flexibility helps keep your
							practice sessions dynamic.
						</p>
					</div>

					<div className="question" id="page_died">
						<h3>I uploaded a bunch of images and the page died, why?</h3>
						<p>
							Remember that everything is happening locally, so the
							dozens/hundreds of high-resolution images you uploaded to the page
							might have been too much for your browser to handle. Try reducing
							the number of images or their size, or use a more powerful device.
							I&apos;m working on improving the performance of the application,
							so stay tuned for updates!
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div
						className="question"
						id="can_i_select_a_specific_number_of_images_for_a_session"
					>
						<h3>Can i select a specific number of images for a session?</h3>
						<p>
							Currently, all uploaded images form a pool from which selections
							are made. I&apos;m working on adding more functionality to improve
							user interaction within the collection.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="is_my_data_saved">
						<h3>Is my data saved? Tell me the truth...</h3>
						<p>
							No—but also yes. We don&apos;t save your images or personal
							information on a server, not even your preferences. However,
							without some form of saving, you&apos;d have to rebuild your study
							sessions every time the page loads, which would be frustrating. To
							avoid this, the application uses a browser feature called{" "}
							<b>LocalStorage</b> to save your preferences <i>locally</i> on
							your computer and nowhere else.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="i_dont_believe_you">
						<h3>I don&apos;t believe you, how can i trust you?</h3>
						<p>
							I don&apos;t blame you! Given the state of the internet, I made
							this tool open-source, and it always will be. You can check the
							code on the GitHub repository. If you&apos;re not into coding,
							I&apos;ve also created a video to show you exactly how it works—so
							you can be sure that we&apos;re not uploading any of your images
							to a server
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="my_images_are_on_the_cloud">
						<h3>
							My images are on the cloud, how can i connect them to this
							application?
						</h3>
						<p>
							Unfortunately, not at this time. I&apos;d love to add that
							functionality in the future, but this application was designed
							primarily for local use. Implementing cloud integration would
							require a significant rewrite and the collection of some personal
							data, which is a whole different challenge.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="can_i_use_this_on_my_phone">
						<h3>Can i use this on my phone?</h3>
						<p>
							Yes! The application is responsive and should work on any device.
							However, the best experience is on a desktop or tablet.
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="can_you_add_a_given_functionallity">
						<h3>
							I would like for a given functionallity/option to exist in Pose
							Player, can you add it?
						</h3>
						<p>
							As this is a passion and learning project, I can&apos;t guarantee
							that I&apos;ll be able to implement every request. However,
							I&apos;d love to hear your ideas and suggestions, so feel free to
							reach out!
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="did_you_use_ai">
						<h3>Did you use AI to create this?</h3>
						<p>
							This project is my personal learning experience, so I
							wouldn&apos;t gain much by having AI build it for me. However,
							I&apos;d be foolish not to use all the tools at my
							disposal—I&apos;ve used AI to help diagnose bugs and help solve
							implementation problems. That said, this site is entirely built
							with React, Material-UI, HTML, CSS, and JavaScript, along with
							libraries like react-router and react-dropzone. Any bugs you find
							are entirely my own fault!
						</p>
					</div>

					<Divider aria-hidden="true" variant="inset" flexItem />

					<div className="question" id="i_have_more_questions">
						<h3>I have more questions...</h3>
						<p>
							Please don&apos;t hesitate to ask! I&apos;d be happy to help and
							answer any questions you have. Just use any of the contact
							channels at the bottom of the page, and I might even update this
							FAQ with your question.
						</p>
					</div>
				</div>
			</div>
			<FootBar />
		</div>
	);
}

export default Faq;
