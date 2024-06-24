import React from "react";
import  StyledButton  from './js/ButtonStyle';

function Resume() {
    return(
    <section className="" id="resume-section">
    	<div className="main-container">
    		<div className="ٌHeader-Resume About-Container">
          
          	<h1 className="main-title-shadow Header-Resume">Resume</h1>
            <h2 className="Header-Resume main-title main-font-title">Resume</h2>
            <p>Better late than never.</p>
          
        </div>

    		<div className="Degrees-Resume">
    			<div className="Degree-Container">
    				<div className="">
    					<span className="date">2002-2007</span>
    					<h2>Bachelor Degree in Engineering</h2>
    					<span className="">AAST University</span>
    					<p className="">Bachelor Degree in Construction Engineering with an average GPA 3.69/4.00 "Excellent with honor".</p>
    				</div>
    			</div>

    			<div className="Degree-Container">
                <div className="">
    					<span className="date">2009</span>
    					<h2>FE Exam</h2>
    					<span className="">NCEES USA</span>
    					<p className="">Passed the fundamental engineering exam from the NCEES USA.</p>
    				</div>
    			</div>
    		</div>

    		<div className="Header-Resume">
				<StyledButton variant="contained">Download CV</StyledButton>
    				</div>
    		
    	</div>
    </section>)
}

export default Resume;