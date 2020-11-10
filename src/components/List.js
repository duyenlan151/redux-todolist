import React, { Component } from 'react';
import Item from './Item';
import { filter, includes, orderBy as funcOrderBy } from 'lodash';
import { connect } from 'react-redux';
class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
        // props.onClickEdit = App.handleEdit
    }

    render() {
        let {tasks, search, sort} = this.props;
        let {orderBy, orderDir} = sort;

        let elmItem = <tr><th colSpan="4">Không có công việc</th></tr>;
        if(orderBy && orderDir){
            tasks = funcOrderBy(tasks, [orderBy], [orderDir]);  
        }
        // 
        if(search){
            // tasks = tasks.filter((task) => task.name.toLowerCase() === search.toLowerCase())
            tasks = filter(tasks, (task) => {
                return includes(task.name.toLowerCase(), search.toLowerCase());
            });
        }
        if(tasks.length > 0){
            elmItem = tasks.map((item, index)=> {
                return (
                    <Item 
                        onClickDelete={this.props.onClickDelete} 
                        onClickEdit={this.props.onClickEdit} 
                        key={index} 
                        item={item} 
                        index={index} />
                );
            });
        }


        return (
            <div className="panel panel-success">
                <div className="panel-heading">List Task</div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th style={{width: '10%'}} className="text-center">#</th>
                            <th>Task</th>
                            <th style={{width: '20%'}} className="text-center">Level</th>
                            <th style={{width: '20%'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>{elmItem}</tbody>
                </table>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        tasks: state.items,
        search: state.search,
        sort: state.sort,
    }
}

export default connect(mapStatetoProps, null)(List);
