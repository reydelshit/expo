/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import { useState } from 'react';

// import rosemaryImage from '../assets/images/rosemary.jpg';

import PlantsSuggestions from './PlantsSuggestions';
import FarmingsSuggestions from './FarmingsSuggestions';
import Guides from './Guides';

const Suggestions = ({ result, plants }) => {
  Suggestions.propTypes = {
    result: PropTypes.any.isRequired,
  };

  const imagePaths = {
    rosemary: rosemaryImage,
    bougainvillea: bougainvilleaImage,
    anthuriums: anthuriumsImage,
    caladiums: caladiumsImage,
    Ferns: fernsImage,
    gardenias: gardeniasImage,
    pineapples: pineapplesImage,
    ginger: gingerImage,
    taro: taroImage,
    turmeric: turmericImage,
    hibiscus: hibiscusImage,
    impatiens: impatiensImage,
    Coleus: coleusImage,
    Elephant: elephantImage,
    Eggplant: eggplantImage,
    Cabbage: cabbageImage,
    Lettuce: lettuceImage,
    Kale: kaleImage,
    Mustard: mustardImage,
    Ixora: ixoraImage,
    Plumeria: plumeriaImage,
    Strelitzia: strelitziaImage,
    Cordyline: cordylineImage,
    Okra: okraImage,
    Sitaw: sitawImage,
    Malunggay: malunggayImage,
    Kangkong: kangkongImage,
    Amaranth: amaranthImage,
    Calathea: calatheaImage,
    Aglaonema: aglaonemaImage,
    Croton: crotonImage,
    Tomato: tomatoImage,
    Chilies: chiliesImage,
    Bell: bellImage,
    Strawberries: strawberriesImage,
    Lily: lilyImage,
    Philodendron: philodendronImage,
    Spider: spiderImage,
    Syngonium: syngoniumImage,
    Corn: cornImage,
    Squash: squashImage,
    Cucumber: cucumberImage,
    Watermelon: watermelonImage,
    Golden: goldenImage,
    Areca: arecaImage,
    Dieffenbachia: dieffenbachiaImage,
    Zamioculcas: zamioculcasImage,
    Rice: riceImage,
    Sorghum: sorghumImage,
    Barley: barleyImage,
    Sugarcane: sugarcaneImage,
    Bromeliads: bromeliadsImage,
    Sansevieria: sansevieriaImage,
    Zebra: zebraImage,
    Aloe: aloeImage,
    Pencil: pencilImage,
    Coffee: coffeeImage,
    Pineapple: pineappleImage,
    Dragon: dragonImage,
    Passion: passionImage,
    Desert: desertImage,
    Ponytail: ponytailImage,
    Kalanchoe: kalanchoeImage,
    Jade: jadeImage,
    Cacti: cactiImage,
    Sedum: sedumImage,
    Portulaca: portulacaImage,
    Pigeon: pigeonImage,
    Winged: wingedImage,
    Mung: mungImage,
    Kidney: kidneyImage,
  };

  const [showPlants, setSetShowPlants] = useState(false);
  const [showFarmings, setSetShowFarmings] = useState(false);
  const [showGuides, setSetShowGuides] = useState(false);

  return (
    <div className="suggestions">
      <div className="suggestion_container">
        {Object.keys(plants).map((key) => {
          const plant = plants[key];
          if (plant.res === result) {
            return (
              <div className="inside-suggestion" key={key}>
                <div className="classification_container">
                  <h3>pH classification: {plant.conditions.ph}</h3>
                  <h3>Moist Description: {plant.conditions.moist}</h3>
                  <h3>Moist Level: {plant.conditions.level.join(' ')}</h3>
                </div>

                <div className="trio-suggestions-container">
                  <div className="trio-size view_plants_container">
                    ORNAMENTALS
                    <button onClick={() => setSetShowPlants(true)}>
                      show plants
                    </button>
                    {showPlants && (
                      <PlantsSuggestions
                        setSetShowPlants={setSetShowPlants}
                        plant={plant}
                        imagePaths={imagePaths}
                      />
                    )}
                  </div>

                  <div className="trio-size  view_factors_container">
                    FARMINGS
                    <button onClick={() => setSetShowFarmings(true)}>
                      show farmings
                    </button>
                    {showFarmings && (
                      <FarmingsSuggestions
                        setSetShowFarmings={setSetShowFarmings}
                        plant={plant}
                        imagePaths={imagePaths}
                      />
                    )}
                  </div>

                  <div className="trio-size view_guides_container">
                    Guides
                    <button onClick={() => setSetShowGuides(true)}>
                      show guides
                    </button>
                    {showGuides && (
                      <Guides
                        setSetShowGuides={setSetShowGuides}
                        result={result}
                        // imagePaths={imagePaths}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Suggestions;
