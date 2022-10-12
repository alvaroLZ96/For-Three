import './style.css'
import { navPage } from './components/Nav/nav';
import { footerPage } from './components/Footer/footer';
import { linkPage } from './utils/linkPage';
import { teams } from './pages/Teams/teams';
import { home } from './pages/Home/home';
import { playersPage } from './pages/PlayersPage/playersPage';

const header = document.querySelector("header");
header.innerHTML = navPage();
const footer = document.querySelector("footer");
footer.innerHTML = footerPage();


home()


linkPage("#homeLink", home);
linkPage("#teamsLink", teams);
linkPage("#playersLink", playersPage)

/* const divEvent = document.querySelectorAll(".description"); */


//cuando haga hover sobre el div, hazme un display block 