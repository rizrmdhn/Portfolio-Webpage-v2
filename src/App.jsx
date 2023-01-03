import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/About/AboutPage";
import HeaderPage from "./components/Header/HeaderPage";
import LoadProjectItem from "./components/Project/LoadProjectItem";

const api = "https://api.github.com/users/rizrmdhn/repos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      projectList: [],
    };
  }

  async componentDidMount() {
    await axios.get(api).then((item) => {
      this.setState({
        projectList: item.data,
      });
    });
    setTimeout(async () => {
      await this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <BrowserRouter>
            <HeaderPage />
            <div className="body-container">
              <Routes>
                <Route exact path="/" element={<AboutPage />} />
                <Route
                  exact
                  path="/Project"
                  element={
                    <LoadProjectItem
                      isLoading={this.state.isLoading}
                      lists={this.state.projectList}
                      cards={this.state.projectList.length}
                    />
                  }
                />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
