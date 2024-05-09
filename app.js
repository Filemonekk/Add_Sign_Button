//Przycisk - po kliknięciu dodana jest litera do tekstu

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
}
    //state = {
     //   text: ""
   // }

    handleClick() {
       // console.log(this)
        const letter = "a"
        this.setState({
            text: this.state.text +letter
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this)}>Dodaj A</button>
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))

