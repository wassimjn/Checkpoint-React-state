import React from 'react'
import image from './image/wa.jpg'

class Person extends React.Component {
  constructor(props){  
    super(props)
      this.state= { fullName:'Wassim Jendoubi', bio :'Student At Go My Code' , imgSrc: image, profession:'Student',x:0 } 
     }

componentDidMount(){
  setInterval(() => {
    this.setState({x:this.state.x+1})
  }, 1000);
}
componentDidUpdate(){

}
componentWillUnmount(){

}



render(){

    return (
         <div className='person'>
             <div>
             <h1 className='name'>{this.state.fullName}</h1>
             <h2 className='bio'>{this.state.bio}</h2>
             <h2 className='prof'>{this.state.profession}</h2>
             </div>
             <div>
             <img className='img' src ={this.state.imgSrc} alt='image'/>
             </div>
             <h1>{this.state.x}</h1>
         </div>

    )
}
}
export default Person