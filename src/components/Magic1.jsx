import React, { Component } from 'react';
import Deck from 'deck-of-cards';
import Card from 'deck-of-cards';
import '../Magic.css';


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
     this.deck.cards.splice(21)
    //pass the 21 card deck to 
    console.log(this.deck.cards)
    this.deal(this.deck.cards)
      //this.deck.mount(x)
      // this.deck.flip()
      // this.deck.fan()
     // this.getDeck()

     
    
     


      
    }

    // getDeck=()=>{
    //   let doc = require('deck-o-cards')
    //   let deck = doc.randomizedDeck()
    //   let subdeck = deck.slice(0,21)
    //   this.deal(this.deck.cards)
      
     
    // }
    combine=(x)=>{
      //combines the chosen deck into the middle 
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
      //takes 21 cards and split it into 3 decks. 
      //its important that the cards are 'dealt' into the split decks and not just cut into 3.
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
        console.log(combined[10])
        
        
      }
    
    }
    componentDidMount() {
      //=this.getDeck()
    }
    componentDidUpdate(prevProps, prevState) {
      let first  = Deck()
      let second  = Deck()
      let third  = Deck()
      let d1 = document.getElementById('subdeck1')
      let d2 = document.getElementById('subdeck2')
      let d3 = document.getElementById('subdeck3')
      first.cards=this.state.a
      second.cards=this.state.b
      third.cards=this.state.c
      first.mount(d1)
      first.flip()
      first.fan()
      second.mount(d2)
      second.flip()
      second.fan()
      third.mount(d3)
      third.flip()
      third.fan()
      console.log(first.cards)
      console.log(second.cards)
      console.log(third.cards)

    
    }
    
      render() {
        
        
        
        return (
          <div className="container">
            <div className="row"> <button onClick={e=>this.start()}>Deal</button></div>
            <div className="row">
              <div className="col-12">
                 <div ref={this.stage} id="stage" className="stage"></div>
              </div>
            </div>
            <div className="row " >
              <div className="col ">
                <div className="subdeck" id="subdeck1" ref={this.subdeck1}></div>
               
              </div>
              <div className="col ">
              <div className="subdeck" id="subdeck2" ref={this.subdeck2}></div>

              </div>
              <div className="col ">
              <div className="subdeck" id="subdeck3" ref={this.subdeck3}></div>

              </div>
            </div>
            <div className="row">
              <div className="col"> <div className="btn btn-primary" onClick={e=>this.combine(1)}>Here</div></div>
              <div className="col"> <div className="btn btn-primary" onClick={e=>this.combine(2)}>Here</div></div>
              <div className="col"> <div className="btn btn-primary" onClick={e=>this.combine(3)}>Here</div></div>
            </div>
            <div className="row">
              <div className="container">Your card is: </div>
            </div>
           
           
           
    
           
         
          
         
        </div>
        );
      
}
}
 
export default Magic1;