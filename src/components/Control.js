import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import ToggleForm from './ToggleForm';

class Control extends Component {

    render() {
        return (
            <div className="row">

                {/* SEARCH : START */}
                <Search/>
                {/* SEARCH : END */}

                {/* SORT : START */}
                <Sort 
                />
                {/* SORT : END */}

                {/* ADD : START */}
                <ToggleForm/>
                {/* ADD : END */}
            </div>
        );
    }
}

export default Control;
