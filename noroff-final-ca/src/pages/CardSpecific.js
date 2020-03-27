import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";

import { MAGIC_API } from "./../constants/constant";

import Cardspecific from "./../components/card-specific";

export default function CardSpecific() {
  const [mtgcharacters, setmtgCharacters] = useState(undefined);
  let { id } = useParams();
  useEffect(() => {
    axios.get(MAGIC_API + id).then(mtgData => {
      setmtgCharacters(mtgData.data.card);
    });
  }, [id]);
  return (
    <div className="container">
      {mtgcharacters !== undefined ? (
        <Cardspecific
          id={mtgcharacters.id}
          name={mtgcharacters.name}
          img={`${mtgcharacters.imageUrl}`}
          colour={mtgcharacters.colors[0]}
          rarity={mtgcharacters.rarity}
          about={mtgcharacters.text}
        />
      ) : (
        <div>
          <img
            src="https://bloxy.info/assets/progress_horizontal-e1c9f4c66e06ad7aa169dc42e420abe6f097111e9d98cf35dfc162bb41ffffe1.gif"
            alt="loading"
          />
        </div>
      )}
    </div>
  );
}
