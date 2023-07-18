/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import GetPokemons from './GetPokemons';
import '../styles/Listado.css'
import pokedex from '../img/pxfuel.jpg';

const Listado = () => {
    const userName = useSelector(state => state.userName)
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")
    const [suggestion, setSuggestion] = useState([])

    useEffect(() => {
        getAllPokemons();
    }, [])

    const getAllPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5`)
            .then(res => setPokemons(res.data))
    }
    

    return (
       // <div className='todo' style={{ backgroundImage: `url(${pokedex})` }}>
           <GetPokemons pokemons={pokemons} setPokemons={setPokemons} />
       // </div>
    );
};

export default Listado;