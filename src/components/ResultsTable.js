import React, {Component} from 'react';

class ResultsTable extends Component {

    render() {
        const {result} = this.props;
        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Artiste</th>
                        <th>Titre</th>
                        <th>Album</th>
                        <th className="thSeeMore">Voir plus</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        )
    }
}

export default ResultsTable;