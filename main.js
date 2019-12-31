$(document).ready(function(){

function allMemes(){
    let result = {} // empty obj
    let memes = [] // empty array
    const baseUrl = "https://api.imgflip.com/get_memes" // API link

    axios.get(baseUrl)
    .then(function(response){
        result = response.data
        memes = result.data.memes
        
        memes.forEach(element => {
            $("#imgs").append(`<p id=${element.id}> ${element.name} </p> <img id= img${element.id} src=${element.url} width=${element.width} height=${element.height} />`)
            $(`#${element.id}`).click(function(){
                //console.log(`clicked on p tag with id ${element.id}`)
                $(`#img${element.id}`).toggle()
            }) // adding event listener on each img

        }) // end looping through memes array of 100 objects
        
    }) // end response
    
    .catch(function(error){
        console.log("Error happened", error)
    }) // end error



} // end func allMemes


allMemes()


}) // when the document is ready and the DOM is loaded


function getMeme(){
    let search = $("#meme-search").val()
    $("#search-result").append(`<h2> You Searched For ${search}</h2>`)


    let result = {} // empty obj
    let memes = [] // empty array
    const baseUrl = "https://api.imgflip.com/get_memes" // API link

    axios.get(baseUrl)
    .then(function(response){
        result = response.data
        memes = result.data.memes
        
            memes.forEach(element => {
            if (element.name.includes(search)){    
                $("#search-result").append(`<p id=${element.id}> ${element.name} </p> <img id= img${element.id} src=${element.url} width=${element.width} height=${element.height} />`)
                $(`#${element.id}`).click(function(){
                    $(`#img${element.id}`).toggle()
                }) // adding event listener on each img
                } // end if

                else {
                    console.log("Meme not found")
                    
                }

            }) // end looping through memes array of 100 objects




    }) // end response
    
    .catch(function(error){
        console.log("Error happened", error)
    }) // end error




} //end getMeme func