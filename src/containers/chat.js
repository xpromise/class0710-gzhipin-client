import {connect} from 'react-redux';

import {sendMessage} from '../redux/actions';
import Chat from '../components/chat';

export default connect(
  state => ({}),
  {sendMessage}
)(Chat)