import { connect } from 'react-redux';
import PostListView from './PostListView';
import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';

const mapState = state => ({
    posts: selectors.getAuthorPosts(state),
});

export default connect(mapState)(PostListView);
