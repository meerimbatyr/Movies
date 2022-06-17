import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: true,
      imageURL: "http://images.tmdb.org/t/p/w185",
    };
  }

  toggle = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    this.props.isOpenInAppJs();
  };
  render() {
    return (
      <>
        <div className="modal">
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggle}>
            <ModalHeader>{this.props.data.name}</ModalHeader>
            <ModalBody>
              <div>
                <img
                  src={`${this.state.imageURL}${this.props.data.profile_path}`}
                  className="image-popup"
                  alt=""
                />
                <p>Popularity:{this.props.data.popularity}</p>
                <h2>Known For ...</h2>
                <div className="containerMovies">
                  {this.props.data.known_for.map((poster) => {
                    return (
                      <div className="posters">
                        <img
                          src={`${this.state.imageURL}${poster.poster_path}`}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => this.toggle()}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}
export default ModalPage;
