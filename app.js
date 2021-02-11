const form= document.querySelector("#form");

form.addEventListener("submit", async function(event){
    event.preventDefault(); //will prevent refreshing of the page on clicking the button
    let input= form.elements.query.value;
    let url= `http://api.tvmaze.com/search/shows?q=${input}`;
    let res= await axios.get(url);
    
    let img= document.createElement("img");
    img.src= res.data[0].show.image.medium;
    document.body.append(img);
})
