import {Carousel} from 'react-bootstrap' 
import React, { Component } from 'react'  

export class BootstrapCarousel extends Component {  

        render() {  

  

                return (  

                        <div>  

                         <div class='container-fluid' >  

                          <div className="row title" style={{ marginBottom: "80px" }} >  
                          <div class="col-sm-12 btn ">  
                         </div>  
                         </div>  
                         </div>  

                         <div className='container-fluid' >  

                         <Carousel>  

                         <Carousel.Item style={{'height':"100%"}} >  

                         <img style={{'height':"100%"}}  
                         className="d-block w-100"  
                        src={'assets/img/img2.jpg'}  />  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"300px"}}>  
                                 <img style={{'height':"100%"}}  
                                   className="d-block w-100"  
                                    src={'assets/img/img1.jpg'}    />  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"100%"}}>  
                                       <img style={{'height':"100%"}}  
                                        className="d-block w-100"  
                                         src={'assets/img/img3.jpg'}   />  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default BootstrapCarousel  
