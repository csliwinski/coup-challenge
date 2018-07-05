import List from './component';
import { connect } from 'react-redux';
import { increasePagination } from '../../../redux/actions/content';

const mapStateToProps = (state) => {
    return {
        scootersList: state.contentReducer.scootersList,
        filters: state.contentReducer.filters,
        pagination: state.contentReducer.pagination,
        view: state.contentReducer.view,
    };
};

export default connect(mapStateToProps, {
    increasePagination,
})(List);
