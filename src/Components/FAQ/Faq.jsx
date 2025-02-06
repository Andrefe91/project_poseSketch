//Modules
import React from "react";
//Components
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import FootBar from "../FootBar/FootBar";

function Faq() {
	return (
		<>
			<div className="container">
				<StaticAppBar selected="faq" />

				<div>
					<h3>
						What is <i>Pose Player</i>?
					</h3>
					<p>
						It&apos;s a web application for artists to practice figure drawing
						by uploading and organizing reference images, then creating
						personalized practice sessions.
					</p>
				</div>

				<div>
					<h3>Why Pose Player exist?</h3>

					<p>
						As an artist, i have always struggled with the lack of tools to
						practice figure drawing. I have tried many webpages and some desktop
						applications, but some of them felt cluncky or were difficult to
						install. I wanted something simple, flexible, that allowed me to use
						my own images, and that was not a subscription service. So i decided
						to create it myself.
					</p>
				</div>

				<div>
					<h3>How do i upload images?</h3>
					<p>
						Just click on the &quot;Upload Images&quot; field and select the
						images you want to load or just pick and drop on the same field.
					</p>
				</div>

				<div>
					<h3>Can i organize my images?</h3>
					<p>
						Currently, all uploaded images are added to a single collection. As
						this tool is designed to work locally on your computer we dont store
						any image, reference or personal data, so an organization tool would
						serve no purpose.
					</p>
				</div>

				<div>
					<h3>How does the timer work?</h3>
					<p>
						The timer allows you to set a specific duration for each image to be
						displayed during a practice session. This helps simulate the time
						constraints of real-life sketching.
					</p>
				</div>

				<div>
					<h3>And those beeps?</h3>
					<p>
						You can enable, disable or even modify the time of the beeps that
						sound when the timer reaches 0. This is useful for those who want to
						be alerted when the time has almost run out without having to look
						at the timer all the time.
					</p>
				</div>

				<div>
					<h3>Whats the random/sequential display feature?</h3>
					<p>
						This along with the timer control are the main reason for this
						application to exist. You can choose to display images in a random
						order or follow the sequence in which they were uploaded. This
						flexibility helps keep your practice sessions dynamic.
					</p>
				</div>

				<div>
					<h3>Can i select a specific number of images for a session?</h3>
					<p>
						Currently, all the images uploaded makes the pool from wich the
						selection tool takes the images. Im currently working to add
						functionality to improve user interaction within the collection.
					</p>
				</div>

				<div>
					<h3>Is my data saved? Tell me the truth...</h3>
					<p>
						No, but yes. We don&apos;t save any of your images or personal
						information to a server, not even your preferences. However, without
						any kind of save functionality you would have to construct study
						sessions everytime the webpage loads, that would be not very usefull
						and even somewhat frustrating, so im using a browser function called
						LocalStorage to save your preferences <i>locally</i>.
					</p>
				</div>

				<div>
					<h3>I don&apos;t believe you, how can i trust you?</h3>
					<p>
						This tool is opensource and it will always be. You can check the
						code on the Github repository, or if you are not code oriented i
						have made a video for you to easily follow and make sure that we are
						not loading any of your images to a server.
					</p>
				</div>

				<div>
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

				<div>
					<h3>Can i use this on my phone?</h3>
					<p>
						Yes, you can. The application is responsive and should work on any
						device. However, the experience is better on a desktop or tablet.
					</p>
				</div>

				<div>
					<h3>
						I would like for a given functionallity/option to exist in Pose
						Player, can you add it?
					</h3>
					<p>
						As this is a passion and learning project, i can&apos;t promise that
						i can add a given functionallity or option, but please feel free to
						contact me. I will be more than glad to hear your ideas and
						suggestions.
					</p>
				</div>

				<div>
					<h3>I have more questions...</h3>
					<p>
						Please don&apos;t hesitate to ask. I will be glad to help you and
						answer any questions you may have. Just use any of the contact
						channels at the bottom of the page. I will be happy to help you and
						even update this FAQ with your questions.
					</p>
				</div>
				<FootBar />
			</div>
		</>
	);
}

export default Faq;
