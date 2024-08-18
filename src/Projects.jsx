import React from "react";
import Card from "./projectCard.jsx";
import projectsData from "./js/projectsData"

function cards(card){
	
	return(
	
		<div id="divContainer" key = {card.id} >
			
	<Card 
		title={card.title}
		picture={card.picSource}
		description={card.description}
		websiteLink={card.link}
		codeLink={card.websiteCode}/>
			</div>
			
		)
}

function Projects() {
	
	return(
		<section id="projects-section" className="main-top-space">
		<div className="main-flex-column main-whole-width main-relative-position main-bottom-space">
              <h1 className="resume-middle main-title-shadow">Projects</h1>
              <h2 className="resume-middle main-title main-font-title">My Projects</h2>
		</div>
		
			{projectsData.map(cards)}
		
			
		</section>
    )
}

export default Projects;