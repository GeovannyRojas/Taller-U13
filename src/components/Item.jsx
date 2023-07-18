/* eslint-disable react/prop-types */
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Item.css'
const Item = ({ url}) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="pokemon-card" onClick={() => navigate(`/listado/${pokemon.id}`)}>
            <h2 >{pokemon.id}</h2>
            <img className='pokemon-imagen' src={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.front_default} alt="" />
            <h2 className='pokemon-titulo'>{pokemon.name}</h2>
        </div>
    );
};

export default Item;