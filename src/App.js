import React, { Component } from 'react';
import Header from './components/Header';
import { connect } from 'react-redux';

import { fetchScooters } from './redux/actions/content';

class App extends Component {
    componentDidMount() {
        this.props.fetchScooters();
    }

    render() {
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, {fetchScooters})(App);
