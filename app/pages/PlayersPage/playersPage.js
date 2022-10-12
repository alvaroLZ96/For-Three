import "./players.css"
import { playerCard } from "../../components/PlayerCard/playerCard";
import { getData } from "../../services/services"
import { cleanPage } from "../../utils/cleanPage";

let playersList;
const getPlayers = async ()=>{
const players =await getData("players");
playersList = players;

printPlayers(players, "");
};


const printPlayers =(list, word)=>{
const filteredPlayers = list.filter((item)=>
item.player.toLowerCase().includes(word.toLowerCase())
);
    const playerContainer = document.querySelector(".player-gallery");
    playerContainer.innerHTML ="";
for(const item of list){
    playerContainer.innerHTML += playerCard(item);
}
choosePlayer();
};

const changeRightCard =(image,index) =>{
    const rightCard = document.querySelector(".right");
    rightCard.style.backgroundImage = `url(${image})`;
    changeText(index); 
}
const changeText = (index)=>{
const h2 = document.querySelector("#player-name");
const p =document.querySelector("#player-desc");
h2.innerHTML = `${playersList[index].player}`;
p.innerHTML = `${playersList[index].teamName}`;
};
const choosePlayer =() =>{
    const allCard = document.querySelectorAll(".player");
    allCard.forEach ((card, index) =>{
card.addEventListener("click", (ev)=>
changeRightCard(ev.target.src, index)
);
});
};
export const playersPage= () =>{
    const app =document.querySelector("#app");
    cleanPage(app);
    app.innerHTML =`
    <section class="players">
    <div class="upper-screen">
        <div class="left"></div>
        <div class="center"><input type="text" id="search" placeholder="Search...:"/></div>

        <div class="right" style="background: url(${"https://cdn.fansshare.com/photograph/nba/basketball-nba-logo-wallpapers-wallpaper-1409729417.jpg"}) no-repeat center center;
    background-size: cover 120%"></div>
    
    </div>
    
    <div class="lower-screen">
        <h2 id="player-name">Choose your player:</h2>
        <p id="player-desc">-</p>
    </div>
    
    <div class="player-gallery">
    </div>
    </section>
    `;
    
    getPlayers();
     const searchInput =document.querySelector("#search");
     searchInput.addEventListener("input", (ev)=>
     printPlayers(playersList, ev.target.value)
     )
};
