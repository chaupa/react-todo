import React, {Component} from 'react';

class Todo extends Component {

    constructor() {
        super();
        this.state = {
            edit: false,
            id: null,
            mockData: [
                {
                    id: '1',
                    title: 'Buy milk',
                    done: false,
                    date: new Date(),
                },
                {
                    id: '2',
                    title: 'Meeting with Ali',
                    done: false,
                    date: new Date(),
                },
                {
                    id: '3',
                    title: 'Tea break',
                    done: false,
                    date: new Date(),
                },
                {
                    id: '4',
                    title: 'Go for a run',
                    done: false,
                    date: new Date(),
                },
            ],
        };
    }

    onSubmitHandle = (event) => {
        event.preventDefault();
        if (event.target.item.value) {
            this.setState({
                mockData: [
                    ...this.state.mockData,
                    {
                        id: Date.now(),
                        title: event.target.item.value,
                        done: false,
                        date: new Date(),
                    }
                ],
            });
            event.target.item.value = '';
        }
    };

    onCompleteHandle = (id) => {
        this.setState({
            mockData: this.state.mockData.map((item) => {
                if (item.id === id) {
                    item['done'] = true;
                    return item;
                }
                return item;
            }),
        });
    };

    onEditHandle = (id, title) => {
        this.setState({
            edit: true,
            id: id,
            title: title,
        });
    };

    onUpdateHandle = (event) => {
        event.preventDefault();
        this.setState({
            mockData: this.state.mockData.map((item) => {
                if (item.id === this.state.id) {
                    item['title'] = event.target.updatedItem.value;
                    return item;
                }
                return item;
            }),
            edit: false,
        });
    };

    renderEditForm = () => {
      if (this.state.edit) {
          return (
              <form onSubmit={this.onUpdateHandle} className="mb-5">
                  <div className="row">
                      <div className="col-md-5">
                          <input type="text" name="updatedItem" className="form-control" defaultValue={this.state.title}/>
                      </div>
                      <div className="col">
                          <button className="btn btn-primary">Update</button>
                      </div>
                  </div>
              </form>
          );
      }
    };
    
    onDeleteHandle = (id) => {
        this.setState({
            mockData: this.state.mockData.filter((item) => {
                if (item.id !== id) {
                    return item;
                }
                return null;
            }),
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandle} className="mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-5">
                            <input type="text" name="item" className="form-control" placeholder="Add something to do"/>
                        </div>
                        <div className="col">
                            <button className="btn btn-success">Add</button>
                        </div>
                    </div>
                </form>
                {this.renderEditForm()}
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.mockData.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.done ? 'Done' : 'Doing'}</td>
                                    <td>
                                        <button className="btn btn-success mr-3" onClick={this.onCompleteHandle.bind(this, item.id)}>Complete</button>
                                        <button className="btn btn-primary mr-3" onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
                                        <button className="btn btn-danger" onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Todo;