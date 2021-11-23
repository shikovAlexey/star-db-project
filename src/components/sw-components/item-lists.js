import ItemList from "../item-list";
import { withData } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const withChildFunction = (Wrapped, fc) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fc}
            </Wrapped>
        );
    }
}

const renderName = ({ name }) => `${name}`;

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);

const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);

const StarshipList = withData(withChildFunction(ItemList, renderName), getAllStarships);


export {
    PersonList,
    PlanetList,
    StarshipList,
}