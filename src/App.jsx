import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/About/AboutPage";
import ExperiencePage from "./components/Experience/ExperiencePage";
import HeaderPage from "./components/Header/HeaderPage";
import LoadProjectItem from "./components/Project/LoadProjectItem";
import SocialPage from "./components/Social/SocialPage";

const api = "https://api.github.com/users/rizrmdhn/repos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      projectList: [],
      unFilteredProjectList: [],
    };

    this.onSearchTypeHandler = this.onSearchTypeHandler.bind(this);
  }

  async componentDidMount() {
    await axios.get(api).then((item) => {
      this.setState({
        projectList: item.data,
        unFilteredProjectList: item.data,
      });
    });
    setTimeout(async () => {
      await this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  onSearchTypeHandler(search) {
    const defaultValue = (this.state.projectList = this.state.unFilteredProjectList);
    if (search.length !== 0 && search.trim() !== "") {
      this.setState({
        projectList: this.state.projectList.filter((lists) =>
          lists.name.toLowerCase().includes(search.toLowerCase())
        ),
      });
      return defaultValue;
    };
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
                      onSearch={this.onSearchTypeHandler}
                    />
                  }
                />
                <Route exact path="/Experience" element={<ExperiencePage />} />
                <Route exact path="/Social" element={<SocialPage />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
