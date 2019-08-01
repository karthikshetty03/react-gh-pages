import React from "react";
import logo from './react.jpg'

import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Nav,Image,Row,Col,Form,Button,Jumbotron } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';



{/* CSS */}

const FormLayout={
  marginTop:'35px',

}

const imgResize={
  height : '350px',
  width : '350px',
  marginLeft:'50px',
  marginTop:'50px',
   
}

const styleCards={
  display:'flex',
  padding:'100px 10px 100px 50px'

  
}













{/* Display want to know projects list */}

const ProjToKnow=props=>(
  <li>
  <h4>{props.proj.text}</h4>
  </li>

)
 
  



{/* initialize and define id and counts for 4 cards */}

let id=1
let count=0
let count1=0
let count2=0
let count3=0



class App extends React.Component {
  
    constructor(props)
    {
        super(props)

        this.state={
          count:this.count,
          count1:this.count1,
          count2:this.count2,
          count3:this.count3,
          projs:[],
          Rate:["","Satisfactory","Good","Very Good","Excellent","Out of the Box thing"],
          Projects : ['Project 1,Project 2,Project 3 and Project 4'],
          Display1:"none",
          Display:this.Display,
          Display2:this.Display2,
          backColor:this.backcolor,
       
                  }

    }




    

    up=(num)=>{

      if(num===1){
      if(count===6)
      {
        count=0
      }
      this.setState({count:count++})
    }
       else if(num===2){
      if(count1===6)
      {
        count1=0
      }
      this.setState({count1:count1++})
    }
    else if(num===3){
      if(count2===6)
      {
        count2=0
      }
      this.setState({count2:count2++})
    }
    else{
      if(count3===6)
      {
        count3=0
      }
      this.setState({count3:count3++})
    }

    
    }


    


    addProjs=()=>{              {/* method to add proj to array Projs*/}
      if(id===1)
        {
           alert('Choose any one of ' + this.state.Projects[0]+' at a time')
        }
      if(id===4)
        {
           this.setState({Display2:"none"})
        }
      const text= prompt("Name any one of the above projects about which you would like to know more")
      
      {/* Reset the state of array Projs by inserting new proj */}
      
      this.setState(
        {projs:[...this.state.projs,{text:text,id:id++}]
       })

                }



    handleClick=()=> {             {/* method to make changes on clicking 'About me' button */}
      this.setState({
        Display: 'none',
        backColor:'linear-gradient(to bottom, rgba(255,0,255,1), rgba(0,255,255,1))',
        Display1:"block",
      })
   
  }
 









 render()
    
    {
     


     return(
              <div>




                         {/* Navbar */}

                <Navbar sticky="top" bg="dark" variant="dark">
                  <Nav className="mr-auto">
                     <Nav.Link href="#Home">Home</Nav.Link>
                     <Nav.Link href="#projects">Projects done by me</Nav.Link>
                     <Nav.Link href="#feedback">Contact</Nav.Link>
                  </Nav>
                </Navbar>







                                     
                                             {/* Header */}

                <Jumbotron style={{background :this.state.backColor, marginTop:'30px', marginBottom:'50px',padding:'250px 100px 250px 100px'}} id="Home">
                  <div style={{display:this.state.Display1,fontFamily:"Wake the warrior",fontSize:'55px'}}>I am an undergraduate student from Mumbai studying BE(hons.) Computer Science at BITS Pilani, Hyderabad Campus.</div>
                  <div className="display-2" style={{display:this.state.Display}}> &emsp; Welcome to my Homepage</div><br/><br/>
                  <Row>
                       <Col sm={{ offset: 5}}><Button onClick={this.handleClick} style={{display:this.state.Display}} variant="outline-dark">About Me</Button></Col>
                  </Row>
                                 
                </Jumbotron>










                                        {/* Body */}


                <Row style={{backgroundColor:'rgba(0,255,255,1)'}} id="projects" >
                      
                    
                    <Col sm={{span:5}}>
                          <Image src={logo} style={imgResize} fluid roundedCircle/><br/><br/>
                            
                              <Col sm={{span:7,offset:1}}>
                                  <Nav defaultActiveKey="/home" className="flex-column bg-white" >
                                        <h1 style={{padding:'15px'}}>&ensp; Connect @</h1>
                                        <Nav.Link eventKey="link-1" ><h5>Facebook</h5></Nav.Link>
                                        <Nav.Link eventKey="link-1"><h5>Linkedin</h5></Nav.Link>
                                        <Nav.Link eventKey="link-2"><h5>Twitter</h5></Nav.Link>
                                        <Nav.Link eventKey="link-2"><h5>Github</h5></Nav.Link>
                                  </Nav>
                              </Col>
                              <br/><br/>
                    </Col>

                    

                    <Col style={styleCards} sm={{span:7}} >

                              <Row>
                                  <Col>                               
                                        <Card bg="warning" text="important" style={{ width: '25rem' }}>
                                          <Card.Header>Project 1</Card.Header>
                                          <Card.Body>
                                              <Card.Title>Robotic Arm prototype</Card.Title>
                                              <Card.Text>A Robotic Arm prototype built using  4 Servo motors and Arduino Uno where the arm motion is controlled using potentiometers.</Card.Text>
                                          </Card.Body>
                                          <Button onClick={()=>this.up(1)}>Rate</Button>
                                        </Card>
                                           <h3 className="bg-white text-important text-center">{this.state.Rate[this.state.count]}</h3>
                                        
                                        <br/>
                                        
                                        <Card bg="secondary" text="white" style={{ width: '25rem' }}>
                                          <Card.Header>Project 3</Card.Header>
                                          <Card.Body>
                                              <Card.Title>Quadcopter</Card.Title>
                                              <Card.Text>A simple drone that is lifted and propelled by four rotors and controlled by a basic flight controller board.</Card.Text>
                                          </Card.Body>
                                          <Button onClick={()=>this.up(2)}>Rate</Button>
                                        </Card>
                                           <h3 className="bg-white text-important text-center">{this.state.Rate[this.state.count1]}</h3>
                                    
                                  </Col>
                                  <Col>
                                        <Card bg="success" text="important" style={{ width: '25rem' }}>
                                          <Card.Header>project 2</Card.Header>
                                          <Card.Body>
                                              <Card.Title>Snake and the Food Game</Card.Title>
                                              <Card.Text>A short and simple game built on Scratch (it is a software where different snippets of loops,events etc.  are availiable for building simple stuff)</Card.Text>
                                          </Card.Body>
                                          <Button onClick={()=>this.up(3)}>Rate</Button>
                                        </Card>
                                           <h3 className="bg-white text-important text-center">{this.state.Rate[this.state.count2]}</h3>
                                        
                                        <br/>
                                        
                                        <Card bg="danger" text="white" style={{ width: '25rem' }}>
                                          <Card.Header>Project 4</Card.Header>
                                          <Card.Body>
                                              <Card.Title>Demo Website</Card.Title>
                                              <Card.Text>A website built using HTML,CSS (stylesheets and Bootstrap 4), JAVASCRIPT for registration and payment for web dev course.</Card.Text>
                                          </Card.Body>
                                          <Button onClick={()=>this.up(4)}>Rate</Button>
                                        </Card>
                                           <h3 className="bg-white text-important text-center">{this.state.Rate[this.state.count3]}</h3>
  
                                  </Col>
                              </Row>
                    </Col>
                                
                </Row>











                               {/* Form */}
                              
                <Row className="bg-secondary" style={{padding:'150px',marginTop:'50px' ,background:'linear-gradient(to bottom, rgba(0,255,255,1), rgba(255,0,255,1))'}}>
                    <Col sm={{ span: 8, offset: 2}}>
                            <Jumbotron style={FormLayout} id="feedback">
                                <Form action="mailto:karthikshetty03@gmail.com" method="post">
                                     <Form.Group controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="name" required placeholder="Enter your name" />
                                     
                                     </Form.Group>

                                     <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="text" name="email"  required placeholder="Enter email" />
                                     </Form.Group>
                                       
                                                                          

                                     <Button variant="outline-primary" style={{display:this.state.Display2}} onClick={()=>this.addProjs()}>Want to know more ?</Button>
                                                                          
                                  
                                    <br/><br/>
                                    <ol>
                                        {this.state.projs.map(proj => <ProjToKnow proj={proj}/>)}
                                    </ol>
                                    
                                    <Col sm={{ span:5,offset: 5}}>  <Button  variant="outline-danger" type="submit">Submit</Button></Col>
                                  
                                </Form>
                            </Jumbotron>
                    </Col>
                </Row>
              
              </div>
            

            )
    }




}


export default App;
