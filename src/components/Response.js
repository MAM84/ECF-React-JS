import React, {Component} from 'react';

class Response extends Component {

    render() {
        const {numRslt, artistName, titleName, albumName, click, idRecording} = this.props;
        return (
            <tr>
                <th>{numRslt}</th>
                <th>{artistName}</th>
                <th>{titleName}</th>
                <th>{albumName}</th>
                <th><button onClick={(e)=>click(idRecording)}>+</button></th>
            </tr>
        )
    }
}

export default Response;