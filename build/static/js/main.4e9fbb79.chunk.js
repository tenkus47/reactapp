(this.webpackJsonpbikerentals=this.webpackJsonpbikerentals||[]).push([[0],{178:function(e,a,t){},179:function(e,a,t){},180:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(13),r=t.n(c),s=(t(76),t(77),t(78),t(45)),o=t.n(s),m=t(65),i=t(34),d=(t(80),t(66)),u=t.n(d),E=t(47),p=t.n(E),v=(t(98),t(46));var b=Object(v.GoogleApiWrapper)({apiKey:"AIzaSyCbxyT5e2RFjZWLmXQVTdD6oFb3JtCPPPo"})((function(e){var a=e.google,t=e.lat,l=e.long;return n.a.createElement("div",{className:"map"},n.a.createElement(v.Map,{google:a,zoom:11,style:{width:"40vw",height:"30vh"},initialCenter:{lat:t,lng:l}}))}));var N=function(){var e=Object(l.useState)({content:!1}),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(),s=Object(i.a)(r,2),d=s[0],E=s[1],v=Object(l.useState)(),N=Object(i.a)(v,2),g=N[0],A=N[1],h=function(){var e=Object(m.a)(o.a.mark((function e(a,t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(a,"&longitude=").concat(t,"&localityLanguage=en")).then((function(e){c({principalSubdivision:e.data.principalSubdivision,locality:e.data.locality,latitude:a,longitude:t,content:!0})})).catch((function(e){alert("Check your network and try again "+e)}));case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"bodyForm w-100"},n.a.createElement("form",{className:"form-group container p-3",onSubmit:function(e){e.preventDefault(),""!==t.lat?d>g||d===g?alert("Date input is Incorrect"):alert("continue"):alert("location not clicked")}},n.a.createElement("div",{className:"input-group d-flex justify-content-center align-items-center row"},n.a.createElement("div",{className:"date-section col-sm-3 "},n.a.createElement("label",{htmlFor:"Fromdate"},"From"),n.a.createElement("div",{className:" mb-3"},n.a.createElement(p.a,{className:"form-control",id:"Fromdate",selected:d,onChange:function(e){return E(e)},required:!0}))),n.a.createElement("div",{className:"date-section col-sm-3"},n.a.createElement("label",{htmlFor:"Todate"},"To"),n.a.createElement("div",{className:"mb-3"},n.a.createElement(p.a,{className:"form-control",id:"Todate ",selected:g,onChange:function(e){return A(e)},required:!0}))),n.a.createElement("div",{className:"date-section col-sm-3"},n.a.createElement("label",{htmlFor:"Location"},"Location"),n.a.createElement("div",{className:"mb-3"},t.locality?n.a.createElement("div",{id:"result"},t.locality+" , "+t.principalSubdivision,n.a.createElement("button",{className:"ml-3 btn btn-lg btn-danger",onClick:function(){return c("")}},"Retry")):n.a.createElement("input",{type:"button",onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){h(e.coords.latitude,e.coords.longitude)})):alert("Sorry, your browser does not support HTML5 geolocation.")},value:"Get Location",id:"locationFind",required:!0}))),n.a.createElement("div",{className:"date-section-btn col-sm-3"},n.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg p-3"},"Search a Vehicle")))),n.a.createElement("div",{className:"google-map"},t.content&&n.a.createElement(b,{lat:t.latitude,long:t.longitude})))};var g=function(){return n.a.createElement("div",{className:"FormData d-flex align-items-center"},n.a.createElement(N,null))},A=(t(178),t(30)),h=t.n(A),f=t(20),x=t.n(f);var y=function(){return n.a.createElement("div",{className:"bikesList container mt-4 mb-4"},n.a.createElement("div",{className:"text-center mb-4"},n.a.createElement("h1",null,"Rent AnyRide ,AnyTime , Anywhere!")),n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:x.a,className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Card title"),n.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("a",{href:"/",className:"btn btn-primary"},"Go somewhere")))),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:h.a,className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Card title"),n.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("a",{href:"/",className:"btn btn-primary"},"Go somewhere")))),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:x.a,className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Card title"),n.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("a",{href:"/",className:"btn btn-primary"},"Go somewhere"))))))},w=t(69),k=t.n(w);var C=function(){return n.a.createElement("div",{id:"carouselExampleCaptions",className:"carousel slide container mb-3","data-ride":"carousel"},n.a.createElement("ol",{className:"carousel-indicators"},n.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",className:"active"}),n.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})),n.a.createElement("div",{className:"carousel-inner"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{src:x.a,className:"d-block w-100",alt:"..."}),n.a.createElement("div",{className:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"First slide label"),n.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{src:h.a,className:"d-block w-100",alt:"..."}),n.a.createElement("div",{className:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"Second slide label"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{src:k.a,className:"d-block w-100",alt:"..."}),n.a.createElement("div",{className:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"Third slide label"),n.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))),n.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next")))};var D=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"Nepal Rentals"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"/"},"Home ",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},"SignUp / Login")),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Option"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},n.a.createElement("a",{className:"dropdown-item",href:"/"},"Payment Methods"),n.a.createElement("a",{className:"dropdown-item",href:"/"},"Availability"),n.a.createElement("div",{className:"dropdown-divider"}),n.a.createElement("a",{className:"dropdown-item",href:"/"},"Contact Us")))),n.a.createElement("form",{className:"form-inline my-2 my-lg-0"},n.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},V=(t(179),t(70)),P=t.n(V);var j=function(){return n.a.createElement("footer",{className:"section footer-classic context-dark bg-image"},n.a.createElement("link",{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row row-30"},n.a.createElement("div",{className:"col-md-4 col-xl-5"},n.a.createElement("div",{className:"pr-xl-4"},n.a.createElement("a",{className:"brand",href:"index.html"},n.a.createElement("img",{className:"brand-logo-light",src:P.a,alt:"LOGO",width:"140",height:"37",srcSet:"images/agency/logo-retina-inverse-280x74.png 2x"})),n.a.createElement("p",null,"We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing."),n.a.createElement("p",{className:"rights"},n.a.createElement("span",null,"\xa9\xa0 "),n.a.createElement("span",{className:"copyright-year"},"2018"),n.a.createElement("span",null,"\xa0"),n.a.createElement("span",null,"Waves"),n.a.createElement("span",null,".\xa0"),n.a.createElement("span",null,"All Rights Reserved.")))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("h5",null,"Contacts"),n.a.createElement("dl",{className:"contact-list"},n.a.createElement("dt",null,"Address:"),n.a.createElement("dd",null,"798 South Park Avenue, Jaipur, Raj")),n.a.createElement("dl",{className:"contact-list"},n.a.createElement("dt",null,"email:"),n.a.createElement("dd",null,n.a.createElement("a",{href:"mailto:#"},"dkstudioin@gmail.com"))),n.a.createElement("dl",{className:"contact-list"},n.a.createElement("dt",null,"phones:"),n.a.createElement("dd",null,n.a.createElement("a",{href:"/"},"https://karosearch.com")," ",n.a.createElement("span",null,"or")," ",n.a.createElement("a",{href:"/"},"https://karosearch.com")))),n.a.createElement("div",{className:"col-md-4 col-xl-3"},n.a.createElement("h5",null,"Links"),n.a.createElement("ul",{className:"nav-list"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Blog")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Contacts")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Pricing")))))),n.a.createElement("div",{className:"row no-gutters social-container"},n.a.createElement("div",{className:"col"},n.a.createElement("a",{className:"social-inner",href:"/"},n.a.createElement("span",{className:"icon mdi mdi-facebook"}),n.a.createElement("span",null,"Facebook"))),n.a.createElement("div",{className:"col"},n.a.createElement("a",{className:"social-inner",href:"/"},n.a.createElement("span",{className:"icon mdi mdi-instagram"}),n.a.createElement("span",null,"instagram"))),n.a.createElement("div",{className:"col"},n.a.createElement("a",{className:"social-inner",href:"/"},n.a.createElement("span",{className:"icon mdi mdi-twitter"}),n.a.createElement("span",null,"twitter"))),n.a.createElement("div",{className:"col"},n.a.createElement("a",{className:"social-inner",href:"/"},n.a.createElement("span",{className:"icon mdi mdi-youtube-play"}),n.a.createElement("span",null,"google")))))};var O=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(D,null),n.a.createElement(g,null),n.a.createElement(y,null),n.a.createElement(C,null),n.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,a,t){e.exports=t.p+"static/media/1.e6127078.jpg"},30:function(e,a,t){e.exports=t.p+"static/media/2.53d9a81f.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/3.2bbc0cb8.jpg"},70:function(e,a){e.exports="data:image/png;base64,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"},71:function(e,a,t){e.exports=t(180)},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},80:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.4e9fbb79.chunk.js.map