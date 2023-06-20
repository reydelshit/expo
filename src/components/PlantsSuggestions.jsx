/* eslint-disable react/prop-types */
const PlantsSuggestions = ({ plant, imagePaths, setSetShowPlants }) => {
  return (
    <div className="modal_container">
      <div className="inside-plants_container">
        <button onClick={() => setSetShowPlants(false)}>close</button>
        <div className="plants_container general">
          {plant.ornomental.map((PLANTDETAILS, index) => (
            <div className="plant-each-container" key={index}>
              <h1>{PLANTDETAILS.name}</h1>
              <img
                src={imagePaths[PLANTDETAILS.image.toLowerCase()]}
                alt={PLANTDETAILS.name}
              />
              <p>{PLANTDETAILS.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantsSuggestions;
