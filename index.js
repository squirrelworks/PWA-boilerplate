/* serviceworker registration */

if ("serviceWorker" in navigator) {
  
  navigator.serviceWorker.register("sw.js")
  
  .then(registration => {
    console.log("sw registered");
    loadData('https://dog.ceo/api/breeds/image/random');

  }).catch(error => {
    console.log("sw reg fail");
    console.log(error);

  })

} else {

/*browser does not support service worker*/
  alert("pwa not supported");
  /* do non pwa stuff here*/
}


/* fetch the dog*/

//let myFetchedData=loadData('https://dog.ceo/api/breeds/image/random');



//Load Data function
function loadData(apiUrl){

    console.log("fetching data");
   

    fetch(apiUrl)

    .then(   (response) => {
      // wait for fetch to complete


        return response.json();





      }
      )
      
      .then(    (data) => {
        // do something with 'data' 

        buildView(data.message);
      
      })

      .catch(

      );
}





// dom setup
// get the Dom element to work within
let app=document.getElementById("doggo");


function buildView(myImgUrl){


  let myTitle=document.createElement("h2");

  myTitle.innerText="En Hund";
   
let dogImg=document.createElement("img");
dogImg.src=myImgUrl;

app.appendChild(myTitle);
app.appendChild(dogImg);

}


