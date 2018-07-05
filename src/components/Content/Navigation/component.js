import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const NavigationComponent = styled.div`
    display: flex;
    
    width: 100%;
    padding: 5px 0;
    margin: 0 0 10px 0;
`;

const Tab = styled.div`
    padding: 5px 10px 6px;
    margin-right: 5px;
    cursor: pointer;
    background: #1c2130;
    color: #24ddaf;
    &:hover {
        background: #24ddaf;
        color: #1c2130;
    }
`;

const Column = styled.div`
    display: flex;
    margin-right: 20px; 
`;

const Label = styled.label`
    display: flex;
    align-self: center;
    margin-right: 10px;
`;

const Select = styled.select`
    margin-left: 10px;
`;

class Navigation extends Component {
    handleClick = (view) => {
        this.props.changeView(view);
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.props.changeFilter(name, value);
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
                        <Label>
                            Model:
                            <Select name="model" value={this.props.filters.model} onChange={this.handleChange}>
                                <option value="">Default</option>
                                <option value="Gogoro 1st edition">Gogoro 1st edition</option>
                                <option value="Gogoro 2nd edition">Gogoro 2nd edition</option>
                            </Select>
                        </Label>
                        <Label>
                            Sorting:
                            <Select name="minmax" value={this.props.filters.minmax} onChange={this.handleChange}>
                                <option value="">Default</option>
                                <option value="min">Min</option>
                                <option value="max">Max</option>
                            </Select>
                        </Label>
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
    view: PropTypes.string,
};

export default Navigation;
