import React, { Component } from 'react';
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";
import Scroll from './components/Scroll';
import ErrorBoundary from "./components/ErrorBoundary";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return (
            <div className='tc pa3'>
                <h1 className='f1'>Robo Friends</h1>
                <p className="f4 lh-copy mb3">
                    Welcome to <strong>Robo Friends</strong>, an interactive directory powered by React. This platform
                    showcases dynamic content retrieval from an external API, enhancing your experience with real-time
                    search functionality.
                </p>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
                <Footer />
            </div>
        );
    }
}

export default App;
