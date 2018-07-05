import React, { Component } from 'react';
import styled from 'styled-components';
import { compose, withProps, withHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

import PropTypes from 'prop-types';

const Table = styled.div`
    display: table;
    width: 100%;
`;

const Row = styled.div`
    display: table-row;
    background: #fff;
`;

const Cell = styled.div`
    display: table-cell;
    padding: 7px 5px;
    border-bottom: 1px solid #eee;
`;

const Button = styled.div`
    padding: 10px 20px;
    text-align: center;
    width: 130px;
    background: #1c2130;
    color: #24ddaf;
    cursor: pointer;
    display: block;
    margin: 20px auto;
    &:hover {
        background: #24ddaf;
        color: #1c2130;
    }
`;

const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCUxxEipKJ83zBlwMHqniGXVyHXFiYxSWA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <div style={{ height: '700px' }} />,
        mapElement: <div style={{ height: '100%' }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers()
            console.log(`Current clicked markers length: ${clickedMarkers.length}`)
            console.log(clickedMarkers)
        },
    }),
    withScriptjs,
    withGoogleMap
)((props) => {return (
    <GoogleMap defaultZoom={12} defaultCenter={{lat: 52.519411, lng: 13.388003 }}>
        <MarkerClusterer onClick={props.onMarkerClustererClick} averageCenter enableRetinaIcons gridSize={60}>
            {props.markers.map(marker => (
                <Marker key={marker.id} position={{ lat: marker.latitude, lng: marker.longitude }} />
            ))}
        </MarkerClusterer>
    </GoogleMap>
)});

class List extends Component {
    handleClick = () => {
        this.props.increasePagination();
    }

    renderMap = () => {
        const {scootersList, pagination} = this.props;
        const scooters = [...scootersList].slice(0, pagination).reduce((accumulator, currentValue) => {
            return [...accumulator, {id: currentValue.id, 'longitude': currentValue.location.lng, 'latitude': currentValue.location.lat}]
        });

        return (
            <MapWithAMarkerClusterer markers={scooters} />
        );
    }

    renderScooters = () => {
        const {filters, scootersList, pagination} = this.props;
        let scooters = [...scootersList];

        Object.keys(filters).forEach((key) => {
            const filter = filters[key];
            if (filter.length > 0) {
                switch (key) {
                    case 'model':
                        scooters = scooters.filter(item => item.model === filter);
                        break;
                    case 'minmax':
                        if (filter === 'max') {
                            scooters = scooters.sort((a, b) => b.energy_level - a.energy_level);
                        } else if (filter === 'min') {
                            scooters = scooters.sort((a, b) => a.energy_level - b.energy_level);
                        }
                        break;
                    default:
                        return null;
                }
            }
            return null;
        });

        return scooters.slice(0, pagination).map((item) => {
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
            <React.Fragment>
                {
                    this.props.view === 'list' ?
                        <React.Fragment>
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
                            <Button onClick={this.handleClick}>Load more</Button>
                        </React.Fragment> :
                        this.renderMap()
                }                
            </React.Fragment>
        );
    }
}

List.propTypes = {
    increasePagination: PropTypes.func,
    scootersList: PropTypes.array,
    filters: PropTypes.object,
    pagination: PropTypes.number,
    view: PropTypes.string,
};

export default List;
