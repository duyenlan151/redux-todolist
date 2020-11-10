import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actToggleForm, actUnSelectedItem } from '../actions/index';

class ToggleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
        this.handelToggle = this.handelToggle.bind(this);
        // props.onClickSearchGo
    }

    handelToggle(){
        this.props.handelToggle();
    }
    render() { 
        // console.log(this.props.isShowForm);
        let btnName = 'Add Task';
        let btnClassName = "btn-primary";
        if(this.props.isShowForm === true){
            btnName = 'Close Form';
            btnClassName = "btn-success";
        }
        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button onClick={this.handelToggle} type="button" className={`btn ${btnClassName} btn-block`}>{btnName}</button>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        isShowForm: state.isShowForm
    }
}

const mapDispatchToProps = (dispatch, owsProps) => {
    return {
        handelToggle: () => {
            dispatch(actToggleForm())
            dispatch(actUnSelectedItem())
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ToggleForm);