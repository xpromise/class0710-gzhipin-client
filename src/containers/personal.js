import {connect} from 'react-redux';

import Personal from '../components/personal';

export default connect(
  state => ({user: state.user}),
  {}
)(Personal);