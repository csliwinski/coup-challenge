import List from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        scootersList: state.contentReducer.scootersList,
    };
};

export default connect(mapStateToProps)(List);
