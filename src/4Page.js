import React from "react";
import "./../scss/main.scss";

const fourthDiv = {
    backgroundColor: "#DAAE90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class FourthPage extends React.Component {

    handleButtonFourth = () => {
        this.props.ClickMethodFourthPage();
    };

    render() {
        return <div className='secondPageBackground5' style={fourthDiv}>
            <div><p className="questions pulse">do u love metal?</p></div>
            <div>
                <button className="btn draw-border draw5" onClick={this.handleButtonFourth}>yeah</button>
                <button className="btn draw-border draw5" onClick={this.handleButtonFourth}>sure</button>
                <button className="btn draw-border draw5" onClick={this.handleButtonFourth}>yeah, sure</button>
            </div>
        </div>

    }
}

export default FourthPage;