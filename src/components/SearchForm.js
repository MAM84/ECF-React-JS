import React, {Component} from 'react';

class SearchForm extends Component {

    render() {
        const {submit} = this.props;
        return (
            <form onSubmit={submit}>
                    <label >Votre recherche : </label>
                    <input type="text" placeholder="Votre recherche par Artiste, Album, Titre ou sans sélection" name="addSearch" />
                    <select name="addSelect">
                        <option value="everything">Tout</option>
                        <option value="artist">Artiste</option>
                        <option value="release">Album</option>
                        <option value="recording">Titre</option>
                    </select>
                    <input type="submit" value="Rechercher"/>
            </form> 
        )
    }
}

export default SearchForm;