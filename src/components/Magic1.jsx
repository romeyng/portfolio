import React, { Component } from 'react';
import Deck from 'deck-of-cards';
import Card from 'deck-of-cards'


class Magic1 extends Component {
 
    deck = Deck()
    stage = React.createRef() 
    subdeck1 = React.createRef() 
    subdeck2 = React.createRef() 
    subdeck3 = React.createRef() 
    state = { subdeck:[],a:[],b:[],c:[],combs:0 }

    start = ()=>{
      let x = document.getElementById('stage')
      
    this.deck.shuffle()
    let twentyone = this.deck.cards.splice(21)
    twentyone.forEach(function (r){
      r.unmount()
    })
      console.log(this.deck);
     
      this.deck.mount(x)
      this.deck.flip()
      this.deck.fan()
      this.getDeck()


      
    }

    getDeck=()=>{
      let doc = require('deck-o-cards')
      let deck = doc.randomizedDeck()
      let subdeck = deck.slice(0,21)
      this.deal(this.deck.cards)
      
     
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

    updateBoard=(prevState)=>{
     
    }
    
    revealCard=(combined)=>{
      if (this.state.combs===3) {
        this.setState({x: combined[10]}) 
        
        
      }
    
    }
    componentDidMount() {
      //this.getDeck()
    }
    componentDidUpdate(prevProps, prevState) {
      let first  = Deck()
      let second  = Deck()
      let third  = Deck()

      let x = document.getElementById('subdeck1')
      let y = document.getElementById('subdeck2')
      let z = document.getElementById('subdeck3')

      first.cards=this.state.a
      second.cards=this.state.b
      third.cards=this.state.c
      first.mount(x)
      first.flip()
      first.fan()
      second.mount(y)
      second.flip()
      second.fan()
      third.mount(z)
      third.flip()
      third.fan()
      console.log(first)
      console.log(second)
      console.log(third)
    
    }
    
      render() {
        
        // let a ="deck"
        // let b ="deck"
        // let c ="deck"
        // if (this.state.a.length >0){
        //  a= <div className="columns subdeck1" ref={this.subdeck1}>
    
           
        
        // {this.state.a.map((i,k)=>(
        //   <div className="column ">{i}</div> 
        //   ))}
        //   <button className={this.state.x? "is-hidden": ""} onClick={e=>this.combine(1)}>Here</button>
        //   </div>
        // }
        // if (this.state.b.length >0){
        //   b= <div className="columns subdeck2" ref={this.subdeck2}>
     
            
         
        //  {this.state.b.map((i,k)=>(
        //    <div className="column">{i}</div> 
        //    ))}
        //    <button className={this.state.x? "is-hidden": ""} onClick={e=>this.combine(2)}>Here</button>
        //    </div>
        //  }
        //  if (this.state.c.length >0){
        //   c= <div className="columns subdeck3" ref={this.subdeck3}>
     
            
         
        //  {this.state.c.map((i,k)=>(
        //    <div className="column">{i}</div> 
        //    ))}
        //    <button className={this.state.x? "is-hidden": ""} onClick={e=>this.combine(3)}>Here</button>
        //    </div>
        //  }
        
        return (
          <div className="main">
            <button onClick={e=>this.start()}>Deal</button>
            <div ref={this.stage} id="stage" className="stage"></div>
            <div className="columns">
            
            </div>
           
             <div className="rows">
             <div className="columns subdeck" id="subdeck1" ref={this.subdeck1}></div>
             <div className="columns subdeck" id="subdeck2" ref={this.subdeck2}></div>
             <div className="columns subdeck" id="subdeck3" ref={this.subdeck3}></div>
           
            </div>
    
              <section>Your card is: {this.state.x}</section>
           
         
          
         
        </div>
        );
      
}
}
 
export default Magic1;