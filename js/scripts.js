// REF: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
const getStuff = 'https://thereportoftheweek-api.herokuapp.com/reports';

// Do stuff with returned data
let doStuff = function(data) {

   // How big is array?     
  //console.log( data ); 
  console.log( data.length );
  console.log( data[0].product);
  console.log( data[0].rating);
  console.log( data[0].manufacturer);
 
  for ( i=1; i < data.length; i++ ) {
    
    // let rating = 
    //     if (data[i].rating === undefined ) {
    //      'not recorded';
    // } else {
    //     data[i].rating;
    // }
    
   const template = 
    `
   <div class="card"> 
  <h2> ${data[i].product} </h2>
  <img src="https://picsum.photos/200/200">
  <p> Rating: ${data[i].rating} </p>
  <button> ${data[i].manufacturer}</button> 
   </div>`; 
     

    $('#app').append( template ); 

  } 
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/ 
let showStuff = function(data) {
  
  console.log( data );  
 
}
