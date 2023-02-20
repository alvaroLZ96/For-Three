import { teamCard } from "../../components/TeamCard/teamCard";
import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

const getTeams = async () => {
  const teams = await getData("teams");
  printTeams(teams);
};

const printTeams = (list) => {
  const section = document.createElement("section");
  section.classList.add("teamsSection");
  for (const item of list) {
    section.innerHTML += teamCard(item);
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const teams = () => {
  getTeams();
};
