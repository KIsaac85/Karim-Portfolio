import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StyledButton from "./js/ButtonStyle";




function projectCard(props) {
    return(


		<Card id={{card}} style={{maxWidth: 345, display:"flex", flexDirection:"column", alignItems:"center"}} >
      <CardMedia
	  	style={{height: 0,
			paddingTop: '56.25%', // 16:9,
			margin:'100'}}
        sx={{   width:160}}
        image={props.picture}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
		{props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{color:"black"}}size="small" href={`//${props.websiteLink}`}>Site</Button>
        <Button size="small" href={`//${props.websiteLink}`}>Code</Button>
      </CardActions>
    </Card>
		// <div className="">
		// 	<div className=" card col-md-6 bg-dark"  style={{width: "25rem"}}>
			
 		// 	 <img className="card-img-top" src={props.picture} alt="Card image cap"/>
 		// 	 <div className="card-body">
  		// 	  <h5 className="card-title">Card title</h5>
  		// 	  <p className="card-text">{props.description}</p>
  		// 	  <a href={`//${props.websiteLink}`} className="btn btn-primary" >Site</a>
  		// 	  <a href={`//${props.codeLink}`} className="btn btn-primary">Code</a>
		// 		</div>
				
		// 	</div>	  
		// </div>
    )
}

export default projectCard;