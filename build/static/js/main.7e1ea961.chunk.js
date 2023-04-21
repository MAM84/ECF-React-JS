(this.webpackJsonpecf=this.webpackJsonpecf||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.0329795d.svg"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),s=a.n(l),c=(a(14),a(5)),o=a(1),i=a(2),u=a(4),m=a(3),d=(a(15),a(8)),v=a.n(d),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("img",{alt:"logo",src:v.a}),r.a.createElement("h1",null,"My Music App"))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.submit;return r.a.createElement("form",{onSubmit:e},r.a.createElement("label",null,"Votre recherche : "),r.a.createElement("input",{type:"text",placeholder:"Votre recherche par Artiste, Album, Titre ou sans s\xe9lection",name:"addSearch"}),r.a.createElement("select",{name:"addSelect"},r.a.createElement("option",{value:"everything"},"Tout"),r.a.createElement("option",{value:"artist"},"Artiste"),r.a.createElement("option",{value:"release"},"Album"),r.a.createElement("option",{value:"recording"},"Titre")),r.a.createElement("input",{type:"submit",value:"Rechercher"}))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.result;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Artiste"),r.a.createElement("th",null,"Titre"),r.a.createElement("th",null,"Album"),r.a.createElement("th",{className:"thSeeMore"},"Voir plus"))),r.a.createElement("tbody",null,e))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.numRslt,a=e.artistName,n=e.titleName,l=e.albumName,s=e.click,c=e.idRecording;return r.a.createElement("tr",null,r.a.createElement("th",null,t),r.a.createElement("th",null,a),r.a.createElement("th",null,n),r.a.createElement("th",null,l),r.a.createElement("th",null,r.a.createElement("button",{onClick:function(e){return s(c)}},"+")))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.url;return r.a.createElement("div",{className:"cover"},r.a.createElement("img",{alt:"",src:e}))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.loader;return r.a.createElement("div",{className:e})}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.click,a=e.titleName,n=e.artistName,l=e.albumName,s=e.genre,c=e.length,o=e.rating,i=e.urlList,u=e.cover,m=e.loader;return r.a.createElement("aside",{className:"modal"},r.a.createElement("div",{className:"modal-wrapper"},r.a.createElement("button",{onClick:t,className:"modal-close",value:"Fermer la modal"},"X"),r.a.createElement("h1",null,"Informations"),r.a.createElement("p",null,r.a.createElement("b",null,"Titre :")," ",a),r.a.createElement("p",null,r.a.createElement("b",null,"Artiste(s) :")," ",n),r.a.createElement("p",null,r.a.createElement("b",null,"Album(s) :")," ",l),r.a.createElement("p",null,r.a.createElement("b",null,"Genre(s) :")," ",s),r.a.createElement("p",null,r.a.createElement("b",null,"Dur\xe9e :")," ",c),r.a.createElement("p",null,r.a.createElement("b",null,"Note :")," ",o),r.a.createElement("p",null,r.a.createElement("b",null,"Covers")," : "),r.a.createElement(y,{loader:m}),r.a.createElement("div",{className:"coverContent"},i.map((function(e,t){return r.a.createElement(E,Object.assign({key:t},e))}))),!u&&r.a.createElement("p",null,"Pas de cover disponible")))}}]),a}(n.Component),j="https://musicbrainz.org/ws/2/recording";function g(e,t,a,n){var r=new XMLHttpRequest;"everything"===e?r.open("GET",j+'?query="'+t+'"&fmt=json&limit=100&offset='+a,!0):r.open("GET",j+"?query="+e+':"'+t+'"&fmt=json&limit=100&offset='+a,!0),r.addEventListener("readystatechange",(function(){if(r.readyState===XMLHttpRequest.DONE&&200===r.status){var e=JSON.parse(r.responseText);n(e)}})),r.send()}function S(e,t){var a=new XMLHttpRequest;a.open("GET","https://coverartarchive.org/release/"+e,!0),a.addEventListener("readystatechange",(function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var e=JSON.parse(a.responseText);t(e)}else t("noCover")})),a.send()}var k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).submit=function(e){e.preventDefault();var t=e.target,a=t.addSearch,r=t.addSelect;n.setState({responsesList:[],addSearch:a.value,addSelect:r.value}),n.offset=0,g(r.value,a.value,n.offset,n.addResponse)},n.clickSeeMore=function(){var e=n.state,t=e.addSearch,a=e.addSelect;n.offset+=100,g(a,t,n.offset,n.addResponse)},n.addResponse=function(e){var t=n.state.responsesList;e.recordings.map((function(e){var a,n;return t.push({artistName:null===(a=e["artist-credit"])||void 0===a?void 0:a[0].name,titleName:null===e||void 0===e?void 0:e.title,albumName:null===(n=e.releases)||void 0===n?void 0:n[0].title,idRecording:null===e||void 0===e?void 0:e.id})})),n.setState({responsesList:t}),n.offset+100<e.count?n.setState({seeMore:!0}):n.setState({seeMore:!1}),e.count>0?n.setState({visuResult:!0,makeSearch:!1,emptyResult:!1,nbResult:e.count}):n.setState({visuResult:!1,makeSearch:!1,emptyResult:!0})},n.clickOnModal=function(e){document.body.classList.add("bodyModalOpen");var t=n.state.visualModal;n.setState({visualModal:!t,loader:"loader"}),function(e,t){var a=new XMLHttpRequest;a.open("GET",j+"/"+e+"?inc=ratings+genres+releases+artists&fmt=json",!0),a.addEventListener("readystatechange",(function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var e=JSON.parse(a.responseText);t(e)}})),a.send()}(e,n.addDetails)},n.addDetails=function(e){var t,a,r,l,s=n.state.responseDetail,o=[],i=Object(c.a)(e["artist-credit"]);try{for(i.s();!(l=i.n()).done;){var u=l.value;o.push(u.name)}}catch(C){i.e(C)}finally{i.f()}var m,d=[],v=Object(c.a)(e.releases);try{for(v.s();!(m=v.n()).done;){var p=m.value;d.push(p.title)}}catch(C){v.e(C)}finally{v.f()}var h,f=[],b=Object(c.a)(null===e||void 0===e?void 0:e.genres);try{for(b.s();!(h=b.n()).done;){var E=h.value;f.push(E.name)}}catch(C){b.e(C)}finally{b.f()}var y=null===e||void 0===e?void 0:e.length,O=Math.floor(y/1e3/60),j=Math.floor(y/1e3%60);s.push({titleName:null===e||void 0===e?void 0:e.title,artistName:0===(null===(t=e["artist-credit"])||void 0===t?void 0:t.length)?"Indisponible":o.join(", "),albumName:0===e.releases.length?"Indisponible":d.join(", "),genre:0===(null===e||void 0===e?void 0:e.genres.length)?"Indisponible":f.join(", "),length:O+"mn "+j+"s",rating:null===(null===(a=e.rating)||void 0===a?void 0:a.value)?"Indisponible":(null===(r=e.rating)||void 0===r?void 0:r.value)+"/5"}),n.setState({responseDetail:s}),n.setState({coversList:[],cover:""});var g,k=[],M=Object(c.a)(e.releases);try{for(M.s();!(g=M.n()).done;){var N=g.value;k.push(N.id)}}catch(C){M.e(C)}finally{M.f()}for(var R=0,L=k;R<L.length;R++){S(L[R],n.addCover)}},n.addCover=function(e){if("noCover"===e)n.setState({cover:!1,loader:""});else{var t,a=n.state.coversList,r=Object(c.a)(e.images);try{for(r.s();!(t=r.n()).done;){var l=t.value;a.push({url:l.thumbnails.small})}}catch(s){r.e(s)}finally{r.f()}n.setState({coversList:a,cover:!0,loader:""})}},n.clickOffModal=function(){document.body.classList.remove("bodyModalOpen");var e=n.state.visualModal;n.setState({visualModal:!e,responseDetail:[]})},n.state={responsesList:[],addSearch:"",addSelect:"",makeSearch:!0,nbResult:"",emptyResult:!1,visuResult:!1,seeMore:!1,visualModal:!1,responseDetail:[],coversList:[],cover:"",loader:""},n.offset=0,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.responsesList,n=t.seeMore,l=t.visualModal,s=t.visuResult,c=t.makeSearch,o=t.nbResult,i=t.emptyResult,u=t.responseDetail,m=t.coversList,d=t.cover,v=t.loader;return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("main",null,r.a.createElement(h,{submit:this.submit}),c&&r.a.createElement("p",{className:"search"},"Veuillez effectuer une recherche"),s&&r.a.createElement("p",{className:"result"},o," r\xe9sultats"),s&&r.a.createElement(f,{result:a.map((function(t,a){return r.a.createElement(b,Object.assign({key:a},t,{numRslt:a+1,click:e.clickOnModal}))}))}),i&&r.a.createElement("p",null,"Aucun r\xe9sultat pour votre recherche"),n&&r.a.createElement("button",{className:"btnSeeMore",onClick:this.clickSeeMore},"Voir plus"),l&&u.map((function(t,a){return r.a.createElement(O,Object.assign({key:a},t,{click:e.clickOffModal,urlList:m,cover:d,loader:v}))}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7e1ea961.chunk.js.map