import { connect } from 'react-redux'
import { listUser, currentUser, createNewUser, deleteUser, filterUser } from '../actions'
import AdminPanel from '../components/AdminPanel'

const mapStateToProps = state => ({
  users: state.users,
})

const mapDispatchToProps = {
  listUser,
  currentUser,
  createNewUser,
  deleteUser,
  filterUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel)