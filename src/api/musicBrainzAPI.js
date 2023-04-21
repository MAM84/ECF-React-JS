const baserequest = 'https://musicbrainz.org/ws/2/recording';

function sendSearch(selectValue, searchValue, offset, addResponse){
    const request = new XMLHttpRequest();
    if(selectValue === "everything"){
        request.open("GET", baserequest + '?query="' + searchValue +'"&fmt=json&limit=100&offset=' + offset, true);
    }else{
        request.open("GET", baserequest + '?query=' + selectValue + ':"' + searchValue +'"&fmt=json&limit=100&offset=' + offset, true);
    }
    request.addEventListener("readystatechange",function(){
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
            const response = JSON.parse(request.responseText);
            addResponse(response);
        }
    });
    request.send();
}

function sendSearchDetails(idRecording, addDetails){
    const request = new XMLHttpRequest();
    request.open("GET", baserequest + '/' + idRecording + '?inc=ratings+genres+releases+artists&fmt=json', true);
    request.addEventListener("readystatechange",function(){
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
            const response = JSON.parse(request.responseText);
            addDetails(response);
        }
    });
    request.send();
}

function sendSearchCover(idRelease, addCover){
    const request = new XMLHttpRequest();
    request.open("GET", 'https://coverartarchive.org/release/' + idRelease, true);
    request.addEventListener("readystatechange",function(){
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
            const response = JSON.parse(request.responseText);
            addCover(response);
        }else{
            addCover("noCover");
        }
    });
    request.send();
}

export {sendSearch, sendSearchDetails, sendSearchCover};
