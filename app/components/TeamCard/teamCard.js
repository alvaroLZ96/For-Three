import "./teamCard.css";
export const teamCard = (item) =>
  `
  <a href=${item.website} target="_blank">
    <figure class="card" style="background: url(${item.imageTeam}) 
    no-repeat center center" background-size: cover padding: 10rem > 
         <div class="description">
             <h2>${item.team}</h2>
            <p>División: ${item.division}</p>
            <p>Conferencia: ${item.conference}</p>
             <p>Palmarés: ${item.winnerYear.length}</p>
        </div>
     </figure>  
  </a>
    `;
