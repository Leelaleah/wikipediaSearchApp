let resContainer=document.getElementById("resContainer");
let inputSearch=document.getElementById("inputSearch");
let spinner=document.getElementById("spinner");

function displayInScreen(response){
    spinner.classList.add("d-none")
    let {link,title,description}=response;
    //result container
    let containerEl=document.createElement("div");
    resContainer.appendChild(containerEl)

    //title element
    
    let titleEl=document.createElement("a")
    titleEl.href=link
    titleEl.textContent=title
    titleEl.target="_blank"
    titleEl.classList.add("result-title")
    containerEl.appendChild(titleEl)

    //break element
    let breakEl=document.createElement("br")
    containerEl.appendChild(breakEl)

    //url element
    let urlEl=document.createElement("a")
    urlEl.href=link
    urlEl.textContent=link
    urlEl.target="_blank"
    urlEl.classList.add("result-url")
    containerEl.appendChild(urlEl)

    //break element
    let linkbreakEl=document.createElement("br")
    containerEl.appendChild(linkbreakEl)

    //description element
    let descriptionEl=document.createElement("p")
    descriptionEl.textContent=description;
    descriptionEl.classList.add("result-disc")
    containerEl.appendChild(descriptionEl)


}

function displayResults(result){
    for(let res of result){
        displayInScreen(res);
    }
}
let inputsearch=function(event){
    if(event.key=="Enter"){
        spinner.classList.remove("d-none")
        resContainer.textContent=""; 
      let searchValue=inputSearch.value;
    
    let url="https://apis.ccbp.in/wiki-search?search=" + searchValue;
    let options={
        method:"GET"
    }
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        let { search_results } = jsonData;
        displayResults(search_results);
    })
}};
inputSearch.addEventListener("keydown",inputsearch)


