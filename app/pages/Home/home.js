import "./home.css";
import { cleanPage } from "../../utils/cleanPage";

export const home = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
    <section class="home">
    <div class="content">
        <h1>For Three!</h1>
        <p>Bienvenido a la mejor liga de baloncesto del mundo</p>
    </div>
    </section>
    `;
};
