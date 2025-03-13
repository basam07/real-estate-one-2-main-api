import { fetchAllTeamDescriptions } from "../../../server/our-team/our_team";
const ourTeam = await getOurTeam();
export const teamTileData = {
  title: "Our Team",
  desc: ourTeam.description,
  button_text: "Meet The Team",
};

async function getOurTeam() {
  return fetchAllTeamDescriptions();
}
