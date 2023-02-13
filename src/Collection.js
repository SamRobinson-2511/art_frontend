import Search from './Search'
import Review from './Review'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';



function Collection(){
    const [collection, setCollection] = useState([])

    function handleSearch(e){
        let value = e.target.value
        setSearch(value)
    }


    const fetchAPI = () => {
        fetch("/collection")
        .then( r => r.json())
        .then( art => setArtData(art.data))
        console.log(artData)
      }
    return(
        <Search/>
    )
}


export default Collection;