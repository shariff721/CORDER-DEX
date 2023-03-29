

var cardsDiv = document.querySelector("#cards");
var userName = "";

function getUserName(element){
    // console.log(element.value);
    userName = element.value;
    console.log(userName);
} 



function makeCoderCard(data){
    var resp = ` <div class="card">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <h3> ${data.login} - ${data.name}</h3>
                    <p> Location: ${data.location}</p>
                    <p> Twitter User Name: ${data.twitter_username}</p>
                </div> `
    return resp;
}

async function search(){
    var res = await fetch("https://api.github.com/users/"+ userName);
    var coderData = await res.json();
    console.log(coderData);
    makeCoderCard(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData);  

}