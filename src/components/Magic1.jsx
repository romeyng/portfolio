import React, { Component } from 'react';


class Magic1 extends Component {
    state = { subdeck:[],a:[],b:[],c:[],combs:0 }

    getDeck=()=>{
      let doc = require('deck-o-cards')
      let deck = doc.randomizedDeck()
      let subdeck = deck.slice(0,21)
      this.deal(subdeck)
      
     
    }
    combine=(x)=>{
      let combined=[]
      switch (x) {
        case 1:
           combined = (this.state.b.concat(this.state.a.concat(this.state.c)))
           console.log(1);
           
          break;
        case 2:
           combined = (this.state.a.concat(this.state.b.concat(this.state.c)))
           console.log(2);
           
          break;
        case 3:
           combined = (this.state.b.concat(this.state.c.concat(this.state.a)))
           console.log(3);
           
          break;
        
      
        default:
          break;
      }
     
      
      this.revealCard(combined)
      this.deal(combined)
      
    
     
      
      
    }
    
    deal=(subdeck)=>{
      let a=[]
      let b=[]
      let c=[]
      subdeck.map((i,k)=>{
        switch (k%3) {
          case 0:
            a.unshift(i)
            break
          case 1:
            b.unshift(i)
            break
          case 2:
            c.unshift(i)
            break;
        
          default:
            break;
        }
        return true
      })
      this.setState(prevState=>({combs: prevState.combs+1}))
      this.setState({subdeck: subdeck, a:a, b:b,c:c})
     
      console.log("combs before reval card " + this.state.combs);
      
      
    
      
    }
    
    revealCard=(combined)=>{
      if (this.state.combs===3) {
        this.setState({x: combined[10]}) 
        
        
      }
    
    }
    componentDidMount() {
      this.getDeck()
    }
    componentDidUpdate(prevProps, prevState) {
    
    }
    
      render() {
        let a ="deck"
        let b ="deck"
        let c ="deck"
        if (this.state.a.length >0){
         a= <div className="columns">
    
           
        
        {this.state.a.map((i,k)=>(
          <div className="column">{i}</div> 
          ))}
          <button className={this.state.x? "is-hidden": ""} onClick={e=>this.combine(1)}>Here</button>
          </div>
        }
        if (this.state.b.length >0){
          b= <div className="columns">
     
            
         
         {this.state.b.map((i,k)=>(
           <div className="column">{i}</div> 
           ))}
           <button className={this.state.x? "is-hidden": ""} onClick={e=>this.combine(2)}>Here</button>
           </div>
         }
         if (this.state.c.length >0){
          c= <div className="columns">
     
            
         
         {this.state.c.map((i,k)=>(
           <div className="column">{i}</div> 
           ))}
           <button className={this.state.x? "is-hidden": ""} onClick={e=>this.combine(3)}>Here</button>
           </div>
         }
        
        return (
          <div className="App">
            <div className="columns">
              {this.state.subdeck.map((i,k)=>(
                <div className="column">{i}</div>
                ))}
            </div>
           
             <div className="rows">
            {a}
            {b}
            {c}
            </div>
    
              <section>Your card is: {this.state.x}</section>
           
         
          
         
        </div>
        );
      
}
}
 
export default Magic1;