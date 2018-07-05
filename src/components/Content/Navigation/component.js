import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


const NavigationComponent = styled.div`
    display: flex;
    align-self: center;
    width: 100%;
`;

const Tab = styled.div`
    padding: 0 5px;
    cursor: pointer;
`;

const Column = styled.div`
    display: flex;
`;

class Navigation extends Component {
    handleClick = (view) => {
        this.props.changeView(view);
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.props.changeFilter(name, value)
    }

    render() {
        return (
            <NavigationComponent>
                <Column>
                    <Tab onClick={this.handleClick.bind(this, 'list')}>List</Tab>
                    <Tab onClick={this.handleClick.bind(this, 'map')}>Map</Tab>
                </Column>
                {this.props.view === 'list' ?
                    <Column>
                        <label>
                            Model:
                            <select name="model" value={this.props.filters.model} onChange={this.handleChange}>
                                <option value="">Default</option>
                                <option value="Gogoro 1st edition">Gogoro 1st edition</option>
                                <option value="Gogoro 2nd edition">Gogoro 2nd edition</option>
                            </select>
                        </label>
                        <label>
                            Sorting:
                            <select name="minmax" value={this.props.filters.minmax} onChange={this.handleChange}>
                                <option value="">Default</option>
                                <option value="min">Min</option>
                                <option value="max">Max</option>
                            </select>
                        </label>
                    </Column> : null            
                }                
            </NavigationComponent>
        );
    }
}

Navigation.propTypes = {
    changeFilter: PropTypes.func,
    changeView: PropTypes.func,
    filters: PropTypes.object,
};

export default Navigation;
