document.getElementById("add-card-button").addEventListener("click", function () {
    var cardcontainer = document.getElementById("card-container");
    cardcontainer.innerHTML += '<div class="card">'+'<img class="card-img-top" src="https://source.unsplash.com/random" alt="Card image cap" >'+'</div>'
});