import axios from "axios";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import styles from "./PokemonCard.module.css";
export const PokemonCard = ({ item }) => {
  const [data1, setData] = useState(null);
  const getoneData = async () => {
    const { data } = await axios.get(item.url);
    setData(data);
  };
  useEffect(() => {
    getoneData();
  }, []);

  return (
    data1 && (
      <>
        <div className={styles.showhim}>
          <div className={styles.showme}>
            <div className={styles.nameContainer2}>
              <div className={styles.insideDiv}>
                <div style={{ display: "flex", gap: "8px" }}>
                  Hp{" "}
                  <div style={{ width: "120px", marginLeft: "35px" }}>
                    <ProgressBar
                      completed={data1.stats[0]["base_stat"]}
                      className={styles.wrapper}
                      barContainerClassName={styles.container}
                      isLabelVisible={false}
                      height={"12px"}
                      bgColor={"darkRed"}
                    />
                  </div>
                  <div>{data1.stats[0]["base_stat"]}</div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  Attack{" "}
                  <div style={{ width: "120px", marginLeft: "20px" }}>
                    <ProgressBar
                      completed={data1.stats[1]["base_stat"]}
                      className={styles.wrapper}
                      barContainerClassName={styles.container}
                      isLabelVisible={false}
                      height={"12px"}
                      bgColor={"darkRed"}
                    />
                  </div>
                  <div>{data1.stats[1]["base_stat"]}</div>
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  Defense{" "}
                  <div style={{ width: "100px", marginLeft: "15px" }}>
                    <ProgressBar
                      completed={data1.stats[2]["base_stat"]}
                      className={styles.wrapper}
                      barContainerClassName={styles.container}
                      isLabelVisible={false}
                      height={"12px"}
                      bgColor={"darkRed"}
                    />
                  </div>
                  <div>{data1.stats[2]["base_stat"]}</div>
                </div>
                <div style={{ display: "flex", gap: "3px" }}>
                  Special-Attack{" "}
                  <div style={{ width: "120px", gap: "5px" }}>
                    <ProgressBar
                      completed={data1.stats[3]["base_stat"]}
                      className={styles.wrapper}
                      barContainerClassName={styles.container}
                      isLabelVisible={false}
                      height={"12px"}
                      bgColor={"darkRed"}
                    />
                  </div>
                  <div>{data1.stats[3]["base_stat"]}</div>
                </div>
                <div style={{ display: "flex", gap: "3px" }}>
                  Special-Defense{" "}
                  <div style={{ width: "120px", gap: "5px" }}>
                    <ProgressBar
                      completed={data1.stats[4]["base_stat"]}
                      className={styles.wrapper}
                      barContainerClassName={styles.container}
                      isLabelVisible={false}
                      height={"12px"}
                      bgColor={"darkRed"}
                    />
                  </div>
                  <div>{data1.stats[4]["base_stat"]}</div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  Speed{" "}
                  <div style={{ width: "120px", marginLeft: "15px" }}>
                    <ProgressBar
                      completed={data1.stats[5]["base_stat"]}
                      className={styles.wrapper}
                      barContainerClassName={styles.container}
                      isLabelVisible={false}
                      height={"12px"}
                      bgColor={"darkRed"}
                    />
                  </div>
                  <div>{data1.stats[5]["base_stat"]}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ok}>
            <div className={styles.nameContainer}>
              <div className={styles.imgCircle}>
                <img
                  className={styles.imgMain}
                  src={data1.sprites.other["official-artwork"].front_default}
                  alt=""
                />
              </div>
              <div>{item.name}</div>
              <br />
              <div className={styles.rank}>
                {"#"}
                {data1.id}
              </div>
              <br />
              <div>{data1.types[0].type.name}</div>
              <br />
            </div>
          </div>
        </div>
      </>
    )
  );
};
