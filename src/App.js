import { AxiosError } from "axios";
import { useState } from "react";
import { Test } from "./components/Test";
import axios from "axios";
import { PokemonCard } from "./components/PokemonCard";
import styles from "./styles.module.css";

export default function App() {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const handleClick = async () => {
    setShow(true);
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      console.log(res.data, "res");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.App}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Pokemon Data
      </h1>
      <div className={styles.mainSearch}>
        <input
          className={styles.inp}
          type="text"
          placeholder="enter a pokemon name"
          onChange={(e) => {
            setName(e.target.value);
            setShow(false);
            setData(null);
          }}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {name.length === 0 && <Test />}
      {show && data && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.nameContainer}>
            <div className={styles.imgCircle}>
              <img
                className={styles.imgMain}
                src={data.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </div>
            <div>{name}</div>
            <br />
            <div className={styles.rank}>
              {"#"}
              {data.id}
            </div>
            <br />
            <div>{data.types[0].type.name}</div>
            <br />
          </div>
        </div>
      )}
    </div>
  );
}
