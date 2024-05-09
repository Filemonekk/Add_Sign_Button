class App extends React.Component {
    //constructor(props) {
    //    super(props);
     //   this.state = {
     //       text: ""
     //   }

    state = {
        text: ""
   }

    handleClick() {
       // console.log(this)
        const number = Math.floor(Math.random() *10)
        this.setState({
            text: this.state.text +number
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this)}>{this.props.btnTitle}</button>
                <PanelResult text={this.state.text}>Score</PanelResult> 
            </>
        )
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.text}: {props.children}</h1>
    )
}

ReactDOM.render(<App btnTitle="dodaj cyfrę" />, document.getElementById("root"))

