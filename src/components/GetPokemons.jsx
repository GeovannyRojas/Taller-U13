/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import ByType from './ByType';
import Item from './Item';
import Pagination from './Pagination';
import '../styles/Listado.css'

// eslint-disable-next-line react/prop-types
const GetPokemons = ({pokemons, setPokemons}) => {
    const [page, setPage] = useState(1)
    const perPage = 5
    const lastIndex = perPage * page
    


    const getByType = (url) => {
        setPage(1)
        axios.get(url)
            .then(res => setPokemons(res.data))
            console.log(url);
    }

    let shortRoutePokemons
    let shortRouteCount
    const route = () => {
        // eslint-disable-next-line react/prop-types
        if(pokemons?.results){ //eslint-disable-next-lin
            // eslint-disable-next-line react/prop-types
            shortRoutePokemons = pokemons?.results //eslint-disable-next-lin
            // eslint-disable-next-line react/prop-types
            shortRouteCount = pokemons?.count //eslint-disable-next-lin
        } else {
            shortRoutePokemons = pokemons.pokemon //eslint-disable-next-lin
            shortRouteCount = pokemons.pokemon?.length //eslint-disable-next-lin
        }
    }
    route()
    
    const totalPages = Math.ceil( shortRouteCount / perPage);
    const pokemonsToShow = shortRoutePokemons?.slice(lastIndex - perPage, lastIndex)
    const arrayIteracion = []
    const iteracion = () => {
        for (let i = 1; i <= totalPages; i++) {
            arrayIteracion.push(i)
        }
    }
    iteracion();

    let acces
    const selectAcces = () => {
        if (totalPages > 10) {
        if (page > totalPages - 5) {
            acces = arrayIteracion.slice(totalPages - 10, totalPages)
        } else if (page > 5) {
            acces = arrayIteracion.slice(page - 5, page + 5)
        } else {
            acces = arrayIteracion.slice(0, 10)
        }} else {
            acces = arrayIteracion.slice(0, totalPages)
        }
    }
    selectAcces();
    console.log(page);
    return (
        <div  className='container'>
            <div className="right-content">
            <ByType getByType={getByType} />
            <br></br>
            {
                acces.map((num) => (
                    <Pagination num={num} key={num} setPage={setPage}/>
                ))
            }
            </div>
           
           <div className='pokemon-container' >
           {pokemonsToShow?.map((pokemon) => (
               <Item 
               url={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
               key={pokemon.url ? pokemon.url : pokemon.pokemon.url} /> 
            ))
            }
          
           </div>
          
        </div>
    );
};

export default GetPokemons;