import React from "https://cdn.skypack.dev/react@18.2.0";
import ReactDOM from "https://cdn.skypack.dev/react-dom@18.2.0";

class Hello extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:""
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  
  handleSubmit(e){
    this.props.table.push(this.state.value)
    this.setState({
      value: ""
    })
    
    e.preventDefault()
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.value} onChange={this.handleChange} placeholder="Ecrire un message"/>
          <input type="submit" value="ENVOYER" />
      </form>
        <div className="mesBox">
          {this.props.table.map(el=>
           <p className="mes">{el}</p>                    
           )}
        </div>
      </div>
    )
  }
}

const mesTable = []

ReactDOM.render(
  <Hello table={mesTable} />, document.getElementById("root")
)
