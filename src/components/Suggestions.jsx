/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import { useState } from 'react';

import rosemaryImage from '../assets/images/rosemary.jpg';

import PlantsSuggestions from './PlantsSuggestions';
import FarmingsSuggestions from './FarmingsSuggestions';
import Guides from './Guides';

const Suggestions = ({ result, plants }) => {
  Suggestions.propTypes = {
    result: PropTypes.any.isRequired,
  };

  const imagePaths = {
    rosemary: rosemaryImage,
    // Add other imported images here
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
                  <h3>pH level: {plant.conditions.ph}</h3>
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
                        // plant={plant}
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
