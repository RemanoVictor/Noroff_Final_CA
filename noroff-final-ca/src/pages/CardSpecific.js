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
      console.log(mtgData);
      setmtgCharacters(mtgData.data.card);
    });
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        {mtgcharacters !== undefined ? (
          <Cardspecific
            id={mtgcharacters.id}
            name={mtgcharacters.name}
            img={`${mtgcharacters.imageUrl}`}
            // location={mtgcharacters.location.name}
            // created={mtgcharacters.created}
          />
        ) : (
          <div> No data </div>
        )}
      </div>
    </div>
  );
}
