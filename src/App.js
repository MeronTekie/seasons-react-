import React from "react";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position),
// 		(error) => console.log(error)
// 	);

// 	return <div>Eating </div>;
// };
class App extends React.Component {
	// constructor(props){
	//   super(props);
	//   //This is the only time we do directli assign  this.state
	//   this.state ={latitude:null ,errorMessage :null};
	//   //built in method
	// }
	state = { latitude: null, errorMessage: null };
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ latitude: position.coords.latitude }),
			//inorder to update our this.state we use this.setState
			(error) => this.setState({ errorMessage: error.message })
		);
	}
	// componentDidUpdate() {
	// 	console.log("My component just got updated");
	// }
	render() {
		if (this.state.errorMessage && !this.state.latitude) {
			return (
				<div>
					<SeasonDisplay/>
				</div>
			);
		} else if (!this.state.errorMessage && this.state.latitude) {
			return <div> <SeasonDisplay/></div>;
		} else {
			return <div>Loadinng...</div>;
		}
	}
}
export default App;
