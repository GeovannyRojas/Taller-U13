/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Listado.css";

const Detail = () => {
  //const userName = useSelector((state) => state.userName);
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [descripcion, setDescripcion] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => setDescripcion(res.data));
  }, []);

  return (
    <div className="modal-container" onClick={() => navigate(-1)}>
      <section className="modal-body">
        <div className="imagen-container">
          <img
            width={"200px"}
            src={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.front_default}
            alt=""
            className="imagen-detalle"
          />

          <section>
            {pokemon.types?.map((type) => (
              <span key={type.slot} className="tag">
                {type.type.name}{" "}
              </span>
            ))}
          </section>

          <section>
          <div className="descripcion">
                {descripcion.flavor_text_entries?.[9].flavor_text};
          </div>
          </section>

         
        </div>

        <div className="data">
          <h2 className="titulo">
            {pokemon.name} ({pokemon.id})
          </h2>

          <h3 className="titulo-seccion">Habilidades</h3>
          {pokemon.abilities?.map((ability) => (
            <span key={ability.name} className="tag">
              {ability.ability.name}
            </span>
          ))}

          <h3 className="titulo-seccion">Estadisticas</h3>
          <div className="stats">
            {pokemon.stats?.map((stat) => (
              <section key={stat.name}>
                <span className="puntos">{stat.base_stat}</span>
                <span>{stat.stat.name}</span>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
