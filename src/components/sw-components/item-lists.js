import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helper";

const withChildFunction = (Wrapped, fc) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fc}
            </Wrapped>
        );
    }
}

const mapPersonMethosToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}
const mapPlanetMethosToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const mapStarshipMethosToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const renderName = ({ name }) => `${name}`;

const PersonList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPersonMethosToProps);

const PlanetList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPlanetMethosToProps);

const StarshipList = withSwapiService(withData(
    withChildFunction(ItemList, renderName)),
    mapStarshipMethosToProps);


export {
    PersonList,
    PlanetList,
    StarshipList
}