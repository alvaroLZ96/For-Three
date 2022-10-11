import "./home.css"
import { cleanPage } from "../../utils/cleanPage";

export const home = () =>{
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = `
    <section class="home">
    <img src="<img src="https://c.tenor.com/_u-gDFZQuIQAAAAC/basketball-sports.gif" alt="Basketball"/>
    </section>
    `


}


