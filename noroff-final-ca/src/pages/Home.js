import React, { useState, useEffect } from "react";
import axios from "axios";

import { MAGIC_API } from "../constants/constant";
import Cards from "./../components/cards";

export default function MagicTheGathering() {
  const [mtgcharacters, setmtgcharacters] = useState(undefined);
  const [filteredResults, setFilteredResults] = useState(undefined);
  const [searchPhrase, setsearchPhrase] = useState("");
  const [isResultsFiltered, setisResultsFiltered] = useState(false);

  useEffect(() => {
    axios.get(MAGIC_API).then(mtgData => {
      for (let i = mtgData.data.cards.length - 1; i >= 0; i--) {
        if (mtgData.data.cards[i].imageUrl === undefined) {
          mtgData.data.cards.splice(i, 1);
        }
      }
      setmtgcharacters(mtgData.data.cards);
    });
  }, []);

  function handleFiltering(input) {
    let filteredCards = mtgcharacters.filter(value => {
      return value.name
        .toLowerCase()
        .includes(input.target.value.toLowerCase());
    });
    setFilteredResults(filteredCards);
    setisResultsFiltered(true);
    setsearchPhrase(input.target.value);
  }
  return (
    <div>
      <div className="[ container-fluid ][ landingPage ]">
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <h1 className="[ welcomeHeading ]">Magic The Gathering </h1>
          </div>
        </div>
      </div>

      <div className="[ container ][ blogPage ]">
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <form>
              <p>You searched for {searchPhrase}</p>
              <input
                type="text"
                name="username"
                onChange={handleFiltering}
                className="form-control"
              />
              <br />
              <br />
            </form>
          </div>
        </div>

        <div className="row">
          {isResultsFiltered ? (
            <div>
              {filteredResults.length > 0 ? (
                filteredResults.map((value, index) => {
                  return (
                    <Cards
                      key={index}
                      id={value.id}
                      name={value.name}
                      img={value.imageUrl}
                      type={value.type}
                      number={value.number}
                      artist={value.artist}
                    />
                  );
                })
              ) : (
                <div>No Results</div>
              )}
            </div>
          ) : (
            <>
              {mtgcharacters !== undefined ? (
                mtgcharacters.map((value, index) => {
                  return (
                    <Cards
                      key={index}
                      id={value.id}
                      name={value.name}
                      img={value.imageUrl}
                      type={value.type}
                      number={value.number}
                      artist={value.artist}
                    />
                  );
                })
              ) : (
                <div>
                  <img
                    src="https://bloxy.info/assets/progress_horizontal-e1c9f4c66e06ad7aa169dc42e420abe6f097111e9d98cf35dfc162bb41ffffe1.gif"
                    alt="loading"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
