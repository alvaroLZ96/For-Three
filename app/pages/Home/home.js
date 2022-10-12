import "./home.css"
import { cleanPage } from "../../utils/cleanPage";

export const home = () =>{
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = `
    <section class="home">
   
    </section>
    `


}


