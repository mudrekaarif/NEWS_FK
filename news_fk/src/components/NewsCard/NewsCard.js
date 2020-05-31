import React from 'react';
// import Card from 'react-bootstrap/Card'
import "./NewsCard.css"


const NewsCard = (props) => {
    return (

        <div className="column thumbnail col-lg-4 col-md-6 col-xs-1pic">
            {/* <div class="card">
            <img src={props.img} alt="No Image Found!" style="width:100%" />
            <div class="container">
                <h2>{props.title}</h2>
                <p class="title">CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button class="button">Contact</button></p>
            </div>
            </div> */}
            <div className="container">
                <div className="card" onClick={() => {
                    var win = window.open(props.url, '_blank');
                    win.focus();
                }}
                onmouseover={() => { document.getElementById('overlay').style.display = 'block';}}
                >
                    <img src={props.img} alt="not found" id="hello" height="175"/>
                    <div className="container">
                        <p className="title">{props.title}</p>
                        <p className="maxLines">{props.description}...</p>
                    </div>
                </div>
                <div className="overlay" style={{display: 'none'}}>
                    <div className="text">Read More</div>
                </div>
            </div>
            
        </div>
        // <Card variant="outlined" style={{ width: '18rem' }}>
        // <Card.Img variant="left" src={props.img}/>
        // <Card.Body>
        //     <Card.Title>{props.title}</Card.Title>
        //     <Card.Text>
        //         {props.description}
        //     </Card.Text>
        // </Card.Body>
        // </Card>
    )
}
export default NewsCard;