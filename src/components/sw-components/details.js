import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import { withDetails } from "../hoc-helper";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = withDetails(ItemDetails, getPerson, getPersonImage);

const StarshipDetails = withDetails(ItemDetails, getStarship, getStarshipImage);

const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetImage);

export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails,
}