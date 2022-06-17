import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalPage from "./components/ModalPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      imageURL: "http://images.tmdb.org/t/p/w185",
      openModal: false,
      actorToShow: {},
    };
  }

  componentDidMount() {
    // const API =
    //   "https://api.themoviedb.org/3/person/popular?api_key=5e14f9fffbe0f8a5dfac0a2a45882309&language=en";
    // fetch(API)
    //   .then((req) => req.json())
    //   .then((data) => console.log(data.results))
    //   .catch((err) => console.log(err.message));

    (async () => {
      const API =
        "https://api.themoviedb.org/3/person/popular?api_key=5e14f9fffbe0f8a5dfac0a2a45882309&language=en";
      try {
        const req = await fetch(API);
        const res = await req.json();
        this.setState({ ...this.state, data: res.results });
      } catch (err) {
        console.log(err.message);
      }
    })();
  }
  modal = (movie = {}) => {
    this.setState({ openModal: !this.state.openModal, actorToShow: movie });
  };
  render() {
    return (
      <div className="actors">
        {this.state.openModal ? (
          <ModalPage
            isOpenInAppJs={this.modal}
            data={this.state.actorToShow}
          ></ModalPage>
        ) : null}
        {this.state.data.map((movie) => {
          return (
            <div className="actor" onClick={() => this.modal(movie)}>
              <img src={`${this.state.imageURL}${movie.profile_path}`} alt="" />
              <h3>{movie.name}</h3>
              <div className="knownfor">
                {movie.known_for.map((el) => {
                  return <span>{el.original_title}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
