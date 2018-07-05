import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Navigation from './components/Content/Navigation';
import List from './components/Content/List';

import { fetchScooters } from './redux/actions/content';

const Container = styled.main`
    padding: 10px 2em;
`;

class App extends Component {
    componentDidMount() {
        // this.props.fetchScooters();

        this.timer = setInterval(() => {
            this.props.fetchScooters();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Container>
                <Header />
                <Navigation />
                <List />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
	return {};
};

App.propTypes = {
    fetchScooters: PropTypes.func,
};

export default connect(mapStateToProps, {fetchScooters})(App);
