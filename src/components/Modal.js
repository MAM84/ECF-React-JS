import React, {Component} from 'react';
import Cover from './Cover';
import Loader from './Loader';

class Modal extends Component {

    render() {
        const {click, titleName, artistName, albumName, genre, length, rating, urlList, cover, loader} = this.props;
        return (
            <aside className="modal">
                <div className="modal-wrapper">
                    <button onClick={click} className="modal-close" value="Fermer la modal">X</button>
                    <h1>Informations</h1>
                    <p><b>Titre :</b> {titleName}</p>
                    <p><b>Artiste(s) :</b> {artistName}</p>
                    <p><b>Album(s) :</b> {albumName}</p>
                    <p><b>Genre(s) :</b> {genre}</p>
                    <p><b>Durée :</b> {length}</p>
                    <p><b>Note :</b> {rating}</p>
                    <p><b>Covers</b> : </p>
                    <Loader loader={loader}/>
                    <div className="coverContent">
                        {urlList.map((u,i) => <Cover key={i} {...u}/>)}
                    </div>
                    {!cover && <p>Pas de cover disponible</p>}
                </div>
            </aside>  
        )
    }
}

export default Modal;