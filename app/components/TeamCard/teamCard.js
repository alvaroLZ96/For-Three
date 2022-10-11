import "./teamCard.css";
export const teamCard =(item)=>
    `
    <figure class="card" style="background: url(${item.imageTeam}) 
    no-repeat center center"> 
    <div>
    <h2>${item.team}</h2>
    <p>Division: ${item.division}</p>
    <p>Conference: ${item.conference}</p>
    <p>Championships: ${item.winnerYear.length}</p>
    </div>
     </figure>
    `