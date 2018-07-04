import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.div`
    display: table;
    width: 100%;
`;

const Row = styled.div`
    display: table-row;
`;

const Cell = styled.div`
    display: table-cell;
`;

class List extends Component {
    renderScooters = () => {
        const {scootersList} = this.props;
        return scootersList.map((item) => {
            return (
                <Row key={item.id}>
                    <Cell>{item.id}</Cell>
                    <Cell>{item.license_plate}</Cell>
                    <Cell>{item.model}</Cell>                    
                    <Cell>{item.energy_level}</Cell>                    
                    <Cell>{item.distance_to_travel}</Cell>                    
                </Row>
            );
        });
    }

    render() {
        return (
            <Table>
                <Row>
                    <Cell>ID</Cell>
                    <Cell>SCOOTER</Cell>
                    <Cell>MODEL</Cell>
                    <Cell>BATTERY</Cell>
                    <Cell>DISTANCE</Cell>
                </Row>
                {this.renderScooters()}
            </Table>
        );
    }
}

export default List;
