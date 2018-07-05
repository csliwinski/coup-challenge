import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import Header from './components/Header';
import Navigation from './components/Content/Navigation';
import List from './components/Content/List';

import { fetchScooters } from './redux/actions/content';

const Container = styled.main`
    padding: 10px 2em;
`;

class App extends Component {
    componentDidMount() {
        this.props.fetchScooters();
    }

    render() {
        return (
            <Container>
                {/* <Header /> */}
                <Navigation />
                <List />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, {fetchScooters})(App);
