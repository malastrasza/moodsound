import React from "react";
import "./../scss/main.scss";

const secondPageGood = {
    // backgroundColor: "#297A7A",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white"
};

const secondPageBad = {
    // backgroundColor: "red",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
};

const secondPageNeutral = {
    // backgroundColor: "#DAAE90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class SecondPageGood extends React.Component {

    handleButtonSecond1 = () => {
        this.props.ClickMethodSecondPage(200);
    };
    handleButtonSecond2 = () => {
        this.props.ClickMethodSecondPage(201);
    };

    render() {
        return <div className='secondPageBackground' style={secondPageGood}>
            <div className='secondPageQuestion'><p className='questions'>a nie masz może ochoty, tak wiesz, w głębi serca, sklepać kogoś po pysku?</p></div>
            <div>
                <button className="btn draw-border draw2" onClick={this.handleButtonSecond1}>jasne!</button>
                <button className="btn draw-border draw2" onClick={this.handleButtonSecond2}>broń mnie panie boże przed takimi myślami!</button>
                <button className="btn draw-border draw2" onClick={this.handleButtonSecond2}>eeee... nope.</button>

            </div>
        </div>
    }
}

class SecondPageNeutral extends React.Component {

    handleButtonSecond1 = () => {
        this.props.ClickMethodSecondPage(200);
    };
    handleButtonSecond2 = () => {
        this.props.ClickMethodSecondPage(201);
    };


    render() {
        return <div className='secondPageBackground2' style={secondPageNeutral}>
            <div><p className="questions">a luja na pysk to chcesz?</p></div>
            <div>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond1}>dawaj!</button>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond1}>nah, obojętne mi to...</button>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond2}>lol, nie</button>
            </div>
        </div>
    }
}

class SecondPageBad extends React.Component {

    handleButtonSecond1 = () => {
        this.props.ClickMethodSecondPage(200);
    };
    handleButtonSecond2 = () => {
        this.props.ClickMethodSecondPage(201);
    };

    render() {
        return <div className='secondPageBackground3' style={secondPageBad}>
            <div><p className="questions">a nie rozkwasiłbyś paru parszywych ryjów?</p></div>
            <div>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond1}>slayer ku*waaaaaa</button>
                <button className="btn draw-border draw3" onClick={this.handleButtonSecond2}>nah</button>
            </div>
        </div>
    }
}

export default SecondPageGood;
export {SecondPageNeutral};
export {SecondPageBad};
