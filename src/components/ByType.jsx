import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const ByType = ({getByType}) => {
    const [types, setTypes] = useState({})
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTypes(res.data))
    }, [])

    return (
        <div>
            
            <select name="" id="" onChange={e => getByType(e.target.value)}>
                <option value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279">Selecciona Tipo De pokemon</option>
            
            {
                types.results?.map((type) => (
                    <option value={type.url} key={type.url}>{type.name}</option>
                ))
            }
            </select>
        </div>
    );
};

export default ByType;