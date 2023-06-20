/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import { useState } from 'react';

import PlantsSuggestions from './PlantsSuggestions';
import FarmingsSuggestions from './FarmingsSuggestions';
import Guides from './Guides';

import arecaImage from '../assets/images/areca.jfif';
import bougainvilleaImage from '../assets/images/bougainvillea.png';
import anthuriumsImage from '../assets/images/anthuriums.jpg';
import caladiumsImage from '../assets/images/caladiums.jpg';
import fernsImage from '../assets/images/ferns.jpg';
import gardeniasImage from '../assets/images/gardenias.jpg';
import pineapplesImage from '../assets/images/pineapples.jpg';
import gingerImage from '../assets/images/ginger.jpg';
import taroImage from '../assets/images/taro.jpg';
import turmericImage from '../assets/images/turmeric.jpeg';
import hibiscusImage from '../assets/images/hibiscus.jpeg';
import impatiensImage from '../assets/images/impatiens.jpg';
import coleusImage from '../assets/images/coleus.jpg';
import elephantImage from '../assets/images/elephant.jpg';
import eggplantImage from '../assets/images/eggplant.jpg';
import cabbageImage from '../assets/images/cabbage.jpg';
import lettuceImage from '../assets/images/lettuce.jpg';
import kaleImage from '../assets/images/kale.jpg';
import mustardImage from '../assets/images/mustard.jpg';
import ixoraImage from '../assets/images/ixora.jpg';
import plumeriaImage from '../assets/images/plumeria.jpg';
import strelitziaImage from '../assets/images/strelitzia.jpg';
import cordylineImage from '../assets/images/cordyline.jpg';
import okraImage from '../assets/images/okra.jpg';
import sitawImage from '../assets/images/sitaw.jpg';
import malunggayImage from '../assets/images/malunggay.jpg';
import kangkongImage from '../assets/images/kangkong.jpg';
import amaranthImage from '../assets/images/amaranth.jpg';
import calatheaImage from '../assets/images/calathea.jpg';
import aglaonemaImage from '../assets/images/aglaonema.jpg';
import crotonImage from '../assets/images/croton.jpg';
import tomatoImage from '../assets/images/tomato.jpg';
import chiliesImage from '../assets/images/chilies.jpg';
import bellImage from '../assets/images/bell.jpg';
import strawberriesImage from '../assets/images/strawberries.jpg';
import lilyImage from '../assets/images/lily.jpg';
import philodendronImage from '../assets/images/philodendron.jpg';
import spiderImage from '../assets/images/spider.jpg';
import syngoniumImage from '../assets/images/syngonium.jpg';
import cornImage from '../assets/images/corn.jpg';
import squashImage from '../assets/images/squash.jpg';
import cucumberImage from '../assets/images/cucumber.jpg';
import watermelonImage from '../assets/images/watermelon.jpg';
import goldenImage from '../assets/images/golden.jpg';
import dieffenbachiaImage from '../assets/images/dieffenbachia.jpg';
import zamioculcasImage from '../assets/images/zamioculcas.jpg';
import riceImage from '../assets/images/rice.jpg';
import sorghumImage from '../assets/images/sorghum.jpg';
import barleyImage from '../assets/images/barley.jpg';
import sugarcaneImage from '../assets/images/sugarcane.jpg';
import bromeliadsImage from '../assets/images/bromeliads.jpg';
import sansevieriaImage from '../assets/images/sansevieria.jpg';
import zebraImage from '../assets/images/zebra.jpg';
import aloeImage from '../assets/images/aloe.jpg';
import pencilImage from '../assets/images/pencil.jpg';
import coffeeImage from '../assets/images/coffee.jpg';
import pineappleImage from '../assets/images/pineapple.jpg';
import dragonImage from '../assets/images/dragon.jpg';
import passionImage from '../assets/images/passion.jpg';
import desertImage from '../assets/images/desert.jpg';
import ponytailImage from '../assets/images/ponytail.jpg';
import kalanchoeImage from '../assets/images/kalanchoe.jpg';
import jadeImage from '../assets/images/jade.jpg';
import cactiImage from '../assets/images/cacti.jpg';
import sedumImage from '../assets/images/sedum.jpg';
import portulacaImage from '../assets/images/portulaca.jpg';
import pigeonImage from '../assets/images/pigeon.jpg';
import wingedImage from '../assets/images/winged.jpg';
import mungImage from '../assets/images/mung.jpg';
import kidneyImage from '../assets/images/kidney.jpg';
import bouImage from '../assets/images/bou.jp';
import aspleniumImage from '../assets/images/asplenium.jpg';

const Suggestions = ({ result, plants }) => {
  Suggestions.propTypes = {
    result: PropTypes.any.isRequired,
  };

  const imagePaths = {
    asplenium: aspleniumImage,
    bou: bouImage,
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
