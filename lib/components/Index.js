import React,{Component} from 'react';
import ReactDom from 'react-dom';



export default class App extends Component {
    state = {
        answer: 42,
    };

    asyncFunc = ()=>{
       return Promise.resolve(37);   
    }

    async componentDidMount() {
      this.setState({
          answer: await this.asyncFunc()
      });
    }
    

    render() {
        return (
        <h2> Hello from React Client -- {this.state.answer}</h2>
        )
    }
}

// const App=()=>{
//    return ( 
//     <h2> Hello from React Client</h2>);
// }

ReactDom.render(
    <App />,
    document.getElementById('root')
)