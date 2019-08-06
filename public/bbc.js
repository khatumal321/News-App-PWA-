window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('pwa.js')
            .then(() => {
                console.log('service worker register')
            })
    }
})

let API = "https://newsapi.org/v1/articles?source=bbc-news&apikey=ccdf329e6b6d46e49d6b000f311e3f4d";
let apiDiv = document.getElementById("apiDiv");
fetch(API)
.then((sucess)=>{
    return sucess.json()
})
.then((news)=>{
    console.log(news);
    let articles = news.articles;
    console.log(articles);
    for(let key in articles) {
        apiDiv.innerHTML += 
        + "<div id='newsCard'>" + "<br>" + "<center>" + "<h1>" + articles[key].title + "</h1>" + "</center>" 
        + "<i>"+ articles[key].author + "</i>"
        + "<br>" + "<center>" + "<img width='100%' height='400px' src=" + articles[key].urlToImage + "/>"  + "</center>"      
        + "<br>" + "<p>"+ articles[key].description + "</p>"
        + "<br>" + "<b>"+ articles[key].publishedAt + "</b>" 
        + "<br>" + "<a href="+ articles[key].url + ">Read More </a>"   
        + "</div>" 

    }
})