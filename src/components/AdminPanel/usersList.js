import React from "react"
import api from  "../../utility/query"

class usersList extends React.Component {

  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  async handleFilter(e){
    let users;
    if(e.target.value !== ""){
      users = await api.get(`/users/filter/${e.target.value}`);
    }
    else{
      users = await api.get("/users/");
    }
    this.props.filterUser(users);
  }

  render(){
    return(
      <div>
      <div>
        <label>Filter</label>
        <input onChange={this.handleFilter} type="text" />
        <table className="table table-striped table-bordered table-list">
          <thead>
            <tr>
              <th><em className="fa fa-cog"></em></th>
              <th>Name</th>
              <th>Email</th>
            </tr> 
          </thead>
        <tbody>
          {this.props.users.map((user) =>(
            <tr>
              <td align="center">
                <a id={user._id} onClick={this.props.handleEdit} className="btn btn-default">Edit</a>
                <a id={user._id} onClick={this.props.handleDelete} className="btn btn-danger">delete</a>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
    );
  }
}


export default usersList;