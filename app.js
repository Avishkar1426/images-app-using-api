let box = document.querySelector(".box");
let intBtn = document.querySelector("form");
let btn = document.querySelector(".btn");
let page = 1;
let int = "";
intBtn.addEventListener("submit",()=>{
    
     int = document.querySelector(".input").value;
    ApiCall(int,true);
})

btn.addEventListener("click",()=>{
    page++
    ApiCall(int,false);
})


function ApiCall(searchValue,loadImg){
    let key = "47260838-f41f0d5c632e7f61506aa5b7b";
    let url = `https://pixabay.com/api/?key=${key}&q=${searchValue}&image_type=photo&page=${page}`;

   if(loadImg){
    box.innerHTML = "";
   }

    btn.style.display = "block";
    btn.innerText = "Load more...";
    fetch(url)
.then((rel)=>{
    let a = rel.json()
    return a
})
.then(async(rel)=>{
   let hits = rel.hits;
   for(let url of hits){
    let imgurl = url.
    largeImageURL
;
    let a = document.createElement("img");
    a.setAttribute("src",imgurl)
    box.appendChild(a);
   }
})
.catch((err)=>{
    console.log(err);
})
   
}

ApiCall(int,true);

