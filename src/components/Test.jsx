import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokData } from "../redux/action";
import { PokemonCard } from "./PokemonCard";
import styles from "./PokemonCard.module.css";

export const Test = () => {
  const [offset, setOffSet] = useState(0);
  const dispatch = useDispatch();
  const { pokemonData, isLoading, isError } = useSelector((state) => state);
  const { results } = pokemonData;
  console.log(results, "results");
  useEffect(() => {
    dispatch(getPokData(offset));
  }, [dispatch, offset]);
  return (
    <>
      <div className={styles.hello}>
        {results &&
          results.map((item, i) => <PokemonCard key={i} item={item} />)}
      </div>
      {!isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px"
          }}
        >
          <button
            disabled={offset === 0}
            onClick={() => setOffSet(offset - 40)}
          >
            prev
          </button>
          <button onClick={() => setOffSet(offset + 40)}>Next</button>
        </div>
      )}
    </>
  );
};
