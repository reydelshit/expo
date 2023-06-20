/* eslint-disable react/prop-types */
const FarmingsSuggestions = ({ setSetShowFarmings, plant, imagePaths }) => {
  return (
    <div className="modal_container">
      <div className="inside-farmings-container">
        <button onClick={() => setSetShowFarmings(false)}>close</button>

        <div className="farmings_container">
          {plant.farmingPlants.map((FARMINGPLANTSDETAILS, index) => (
            <div className="farming-each-container general" key={index}>
              <h1>{FARMINGPLANTSDETAILS.name}</h1>
              <img
                src={imagePaths[FARMINGPLANTSDETAILS.image.toLowerCase()]}
                alt={FARMINGPLANTSDETAILS.name}
              />
              <p>{FARMINGPLANTSDETAILS.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmingsSuggestions;
