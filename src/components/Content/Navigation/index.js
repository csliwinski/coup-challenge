import Navigation from './component';
import { connect } from 'react-redux';
import { changeView, changeFilter } from '../../../redux/actions/content';

const mapStateToProps = (state) => {
    return {
        filters: state.contentReducer.filters,
        view: state.contentReducer.view,
    };
};

export default connect(mapStateToProps, {
    changeView,
    changeFilter,
})(Navigation);
