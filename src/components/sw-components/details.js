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

const personRecord = [
    { field: 'gender', label: 'Gender:' },
    { field: 'eyeColor', label: 'Eye Color:' },
    { field: 'birthYear', label: 'Birth year:' }
];
const planetRecord = [
    { field: 'population', label: 'Population:' },
    { field: 'rotationPeriod', label: 'Rotation Period:' },
    { field: 'diameter', label: 'Diameter:' }
];

const starshipRecord = [
    { field: 'model', label: 'Model:' },
    { field: 'crew', label: 'Crew:' },
    { field: 'passengers', label: 'Passengers:' }
];

const PersonDetails = withDetails(ItemDetails, getPerson, getPersonImage, personRecord);

const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetImage, planetRecord);

const StarshipDetails = withDetails(ItemDetails, getStarship, getStarshipImage, starshipRecord);

export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails,
};