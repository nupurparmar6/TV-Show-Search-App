
const form= document.querySelector("#form");

form.addEventListener("submit", async function(event){
    event.preventDefault(); //will prevent refreshing of the page on clicking the button
    let input= form.elements.query.value;
    let url= `http://api.tvmaze.com/search/shows?q=`;
    let config= {params:{q:input}};
    let res= await axios.get(url,config);
    createImages(res.data);
    form.elements.query.value= "";

})

function createImages(arr){
    
    for(let i=0; i<arr.length; i++){
        if(arr[i].show.image){
            let img= document.createElement("img");
            img.src= arr[i].show.image.medium;
            document.body.append(img);
        } 
    }
}