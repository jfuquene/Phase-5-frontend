import AnimalContainer from './AnimalContainer';
import SearchBar from './SearchBar'

const Home = ({AllAnimals, FavoriteAnimals}) => {
    return(
        <div>
            <AnimalContainer Animals={AllAnimals} FavoriteAnimals={FavoriteAnimals} /> 
        </div>
    )
}
export default Home;