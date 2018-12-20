import React from "react";
import firebase, {db} from "./firebase";
import YouTube from 'react-youtube';

const finalDiv = {
    // background: "radial-gradient(red, yellow, green)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
};

class FinalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: '',
            artist: '',
            artwork: '',
            title: '',
            url: '',
            response: ''
        }
    }

    componentWillMount() {

        let answer = this.props.drawIndex;
        console.log(answer);

        if (answer[0] == 10 && answer[1] == 200) {
            this.setState({
                response: "darkmatter"
            })
        } else if (answer[0] == 10 && answer [1] == 201) {
            this.setState({
                response: "strainofhate"
            })
        }
    }

    componentDidMount() {

        db.collection('songs').doc(this.state.response).get().then((doc) => {
            if (doc.exists) {
                this.setState({
                        artist: doc.data().artist,
                        artwork: doc.data().artwork,
                        title: doc.data().title,
                        url: doc.data().url
                    }
                );

                // var url = new URL('https://apicloud-colortag.p.rapidapi.com/tag-url.json');
                //
                // var params = {palette: 'simple',
                //     sort: 'relevance',
                //     url: doc.data().artwork
                // };

                // url.search = new URLSearchParams(params)
                //
                // fetch(url, {
                //         headers: {
                //             'X-RapidAPI-Key': '831a701d2fmshf5c1b08c520d4c7p139ad3jsnd1905d0aed9c',
                //         }
                //     }
                // ).then(resp => {
                //     console.log(resp);
                //     return resp.json()
                // }).then(
                //     data => {
                //         console.log(data)
                //     }
                // )
                //     .catch(err => {
                //         console.log(err)
                //     })
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });



    }

    render() {
        {
            const opts = {
                height: '390',
                width: '640',
                playerVars: {
                    autoplay: 1,
                }
            };
            return <div style={finalDiv}>
                <div><h1>PIOSENKA DLA CIEBIE:</h1></div>
                <div><img src={this.state.artwork} alt="album_artwork" height="250" width="250"/></div>
                <div><h1>{this.state.title}</h1></div>
                <div><h3>{this.state.artist}</h3></div>

                <YouTube
                    videoId={this.state.url}
                    opts={opts}
                />

            </div>
        }
    }
}

export default FinalPage;