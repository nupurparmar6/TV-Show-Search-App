
const form= document.querySelector("#form");

form.addEventListener("submit", async function(event){

    let container= document.querySelector("#container");
    removeExistingImages();
    
    event.preventDefault(); //will prevent refreshing of the page on clicking the button

    let input= form.elements.query.value;
    let config= {params:{q:input}};
    let res= await axios.get(`http://api.tvmaze.com/search/shows?q=`,config);
    createImages(res.data);
    form.elements.query.value= "";

})

function createImages(arr){
    let container= document.querySelector("#container");
    for(let i=0; i<arr.length; i++){
        if(arr[i].show.image){
            let img= document.createElement("img");
            img.src= arr[i].show.image.medium;
            container.appendChild(img);
        } 
    }  
}

function removeExistingImages(){
    var images = document.getElementsByTagName('img');
    console.log(images.length);
    let n= images.length;
    for(var i=0; i < n; i++) {
        console.log(images[0].src);
        images[0].parentNode.removeChild(images[0]);
    }
}