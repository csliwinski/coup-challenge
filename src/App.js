import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import List from './components/Content/List';

import { fetchScooters } from './redux/actions/content';

class App extends Component {
    componentDidMount() {
        this.props.fetchScooters();
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <List />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, {fetchScooters})(App);
