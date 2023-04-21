import React, {Component} from 'react';

class Loader extends Component {

    render() {
        const {loader} = this.props;
        return (
            <div className={loader}>
            </div>
        )
    }
}

export default Loader;