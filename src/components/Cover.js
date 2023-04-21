import React, {Component} from 'react';

class Cover extends Component {

    render() {
        const {url} = this.props;
        return (
            <div className="cover">
                <img alt="" src={url}/>
            </div>
        )
    }
}

export default Cover;