import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ResultsTable from './components/ResultsTable';
import Response from './components/Response';
import Modal from './components/Modal';
import {sendSearch} from './api/musicBrainzAPI'; 
import {sendSearchDetails} from './api/musicBrainzAPI'; 
import {sendSearchCover} from './api/musicBrainzAPI'; 


class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        "responsesList" : [],
        "addSearch": "",
        "addSelect": "",
        'makeSearch' : true,
        'nbResult': "",
        'emptyResult': false,
        'visuResult': false,
        'seeMore': false,
        'visualModal': false,
        "responseDetail" : [],
        "coversList" : [],
        "cover" : "",
        "loader" : "",
      }
      this.offset = 0;
    };

  submit = (ev) => {
      ev.preventDefault();

      const {addSearch, addSelect} = ev.target;

      this.setState({
          "responsesList": [],
          "addSearch": addSearch.value,
          "addSelect": addSelect.value,
      })

      this.offset = 0;

      sendSearch(addSelect.value, addSearch.value, this.offset, this.addResponse);
  };

  clickSeeMore = () => {
      const {addSearch, addSelect} = this.state;
      this.offset += 100;
      sendSearch(addSelect, addSearch, this.offset, this.addResponse);
  };

  addResponse = (response) => {
      const {responsesList} = this.state;

      response.recordings.map(a => 
          responsesList.push({
              "artistName":a["artist-credit"]?.[0].name,
              "titleName": a?.title,
              "albumName": a["releases"]?.[0].title,
              "idRecording": a?.id,
      }));

      this.setState({
          "responsesList": responsesList,
      })

      //pour gérer l'apparition ou non du bouton "voir plus"
      if(this.offset+100 < response.count){
          this.setState({
              "seeMore": true,
          });
      }else{
          this.setState({
              "seeMore": false,
          }); 
      } 

      //pour gérer l'apparition ou non du tableau des résultats ou d'un texte
      if(response.count > 0){
        this.setState({
          "visuResult": true,
          "makeSearch": false,
          "emptyResult": false,
          "nbResult" : response.count,
        }); 
      }else{
        this.setState({
          "visuResult": false,
          "makeSearch": false,
          "emptyResult": true,
        }); 
      }
  };

  clickOnModal = (idRecording) => {
    document.body.classList.add("bodyModalOpen");

    const {visualModal} = this.state;
    this.setState({
      "visualModal": !visualModal,
      "loader": "loader",
    }); 

    sendSearchDetails(idRecording, this.addDetails);
  };

  addDetails = (response) => {
    const {responseDetail} = this.state;

    const artists = [];
    for(let artist of response["artist-credit"]){
      artists.push(artist.name);
    }
    
    const releases = [];
    for(let release of response["releases"]){
      releases.push(release.title);
    }

    const genres = [];
    for(let genre of response?.genres){
      genres.push(genre.name);
    }

    let length = response?.length;
    let minuts = Math.floor(length/1000/60);
    let seconds = Math.floor((length/1000)%60);

    responseDetail.push({
        "titleName": response?.title,
        "artistName": response["artist-credit"]?.length === 0 ? "Indisponible" : artists.join(', '),
        "albumName": response["releases"].length === 0 ? "Indisponible" : releases.join(', '),
        "genre": response?.genres.length === 0 ? "Indisponible" : genres.join(', '),
        "length": minuts+'mn '+seconds+"s",
        "rating": response["rating"]?.value === null ? "Indisponible" : response["rating"]?.value + "/5",
      });

      this.setState({
          "responseDetail": responseDetail,
      })

      //récupération des id albums pour les covers
      this.setState({
        "coversList": [],
        "cover": "",
      })

      const idReleases = [];
      for(let release of response["releases"]){
        idReleases.push(release.id);
      }

      for(let idRelease of idReleases){
        sendSearchCover(idRelease, this.addCover);
      }
  };

  addCover = (responseCover) => {
    if(responseCover === "noCover"){
      this.setState({
        "cover": false,
        "loader": "",
      })
    }else{
      const {coversList} = this.state;
      for(let cover of responseCover.images){
        coversList.push({
          "url": cover['thumbnails'].small});
      }

      this.setState({
        "coversList": coversList,
        "cover": true,
        "loader": "",
      })
    }
  };

  clickOffModal = () => {
    document.body.classList.remove("bodyModalOpen");

    const {visualModal} = this.state;
    this.setState({
      "visualModal": !visualModal,
      "responseDetail": [],
    }); 
  };

  render() {
      const {responsesList, seeMore, visualModal, visuResult, makeSearch, nbResult, emptyResult, responseDetail, coversList, cover, loader} = this.state;
      return (
          <div>
            <Header/>

            <main>
              <SearchForm submit={this.submit}/>

              {makeSearch && <p className="search">Veuillez effectuer une recherche</p>}

              {visuResult && <p className="result">{nbResult} résultats</p>}
                
              {visuResult && <ResultsTable result={responsesList.map((r,i) => <Response key={i} {...r} numRslt={i+1} click={this.clickOnModal}/>)}/> }

              {emptyResult && <p>Aucun résultat pour votre recherche</p>}

              {seeMore && <button className="btnSeeMore" onClick={this.clickSeeMore}>Voir plus</button> }

              {visualModal && responseDetail.map((d,i) => <Modal key={i} {...d} click={this.clickOffModal} urlList={coversList} cover={cover} loader={loader}/>)}
            </main>

          </div>
      )
  }
}

export default App;