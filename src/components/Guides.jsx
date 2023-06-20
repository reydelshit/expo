/* eslint-disable react/prop-types */
const Guides = ({ setSetShowGuides, result }) => {
  console.log(result);
  const guides = {
    1: {
      Classifications: {
        pHLevel: '5-6 (acidic)',
        Moisure: 'Wet (100, 400)',
      },

      Ornamental: {
        'Soil Preparation':
          'Prepare the planting area by incorporating organic matter, such as compost or well-rotted manure, into the soil to improve its fertility and moisture-holding capacity.',
        'Select Acid-Loving Plants':
          'Choose ornamental plants that thrive in acidic soil and wet conditions. Some options include:\n\n- Azaleas: These flowering shrubs provide vibrant blooms and prefer acidic soil.\n- Camellias: Known for their beautiful flowers, camellias thrive in acidic soil and appreciate moist conditions.\n- Rhododendrons: These evergreen shrubs produce stunning blooms and prefer acidic soil with consistent moisture.\n- Ferns: Many fern varieties thrive in acidic and wet conditions, adding a lush and green touch to your garden.',
        Watering:
          'Keep the soil consistently moist by providing regular watering. Monitor the moisture levels and adjust the watering frequency based on the specific needs of each plant.',
        Mulching:
          'Apply a layer of organic mulch around the plants to help conserve moisture, regulate soil temperature, and suppress weed growth.',
        'Additional Information':
          "Remember to choose plant varieties that are specifically suited to acidic soil and wet conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
      Farming: {
        'Soil Preparation':
          'Prepare the planting beds by incorporating organic matter and ensuring proper drainage to avoid waterlogging.',
        'Crop Selection':
          'Choose farming plants that are well-suited to acidic soil and wet conditions. Some options include:\n\n- Acid-Loving Vegetables: Crops such as potatoes, tomatoes, peppers, and blueberries tend to thrive in slightly acidic soil.\n- Leafy Greens: Crops like lettuce, spinach, and kale can tolerate acidic soil and appreciate consistently moist conditions.\n- Bog-loving Crops: Some crops, like cranberries or watercress, are well-suited to wetter conditions and can tolerate slightly acidic soil.',
        Watering:
          'Provide regular and adequate watering to keep the soil consistently moist. Be cautious not to overwater, as it can lead to waterlogging and root rot.',
        'Crop Rotation':
          'Practice crop rotation to maintain soil health and minimize the risk of diseases and pests associated with continuously growing the same crops in the same area.',
        'Nutrient Management':
          'Monitor soil nutrient levels and adjust fertilization practices accordingly to ensure optimal plant growth and productivity.',
        'Additional Information':
          "Remember to choose plant varieties that are specifically suited to acidic soil and wet conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
    },
    2: {
      Classifications: {
        pHLevel: '6-7 (neutral to slightly acidic)',
        Moisture: 'Wet (400-700)',
      },

      Ornamental: {
        'Soil Preparation':
          'Prepare the planting area by incorporating organic matter, such as compost or well-rotted manure, into the soil to improve its fertility and moisture-holding capacity.',
        'Select Acid-Loving Plants':
          'Choose ornamental plants that thrive in slightly acidic to neutral soil and wet conditions. Some options include:\n\n- Hydrangeas: These flowering shrubs exhibit stunning blooms and can adapt to a range of soil pH, including slightly acidic to neutral.\n- Japanese Irises: These elegant flowering plants prefer moist soil conditions and can tolerate slightly acidic to neutral pH levels.\n- Hostas: These shade-loving perennials appreciate consistently moist soil and can thrive in slightly acidic to neutral conditions.',
        Watering:
          'Keep the soil consistently moist by providing regular watering. Monitor the moisture levels and adjust the watering frequency based on the specific needs of each plant.',
        Mulching:
          'Apply a layer of organic mulch around the plants to help conserve moisture, regulate soil temperature, and suppress weed growth.',
        'Additional Information':
          "Remember to choose plant varieties that are specifically suited to slightly acidic to neutral soil and wet conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
      Farming: {
        'Soil Preparation':
          'Prepare the planting beds by incorporating organic matter and ensuring proper drainage to avoid waterlogging.',
        'Crop Selection':
          'Choose farming plants that are well-suited to slightly acidic to neutral soil and wet conditions. Some options include:\n\n- Sweet Corn: This crop thrives in moist soil conditions and can tolerate slightly acidic to neutral pH levels.\n- Beans: Various bean varieties, such as green beans or snap beans, can tolerate slightly acidic to neutral soil and appreciate consistent moisture.\n- Cucumbers: These vining vegetables enjoy moist soil and can grow well in slightly acidic to neutral conditions.',
        Watering:
          'Provide regular and adequate watering to keep the soil consistently moist. Be cautious not to overwater, as it can lead to waterlogging and root rot.',
        'Crop Rotation':
          'Practice crop rotation to maintain soil health and minimize the risk of diseases and pests associated with continuously growing the same crops in the same area.',
        'Nutrient Management':
          'Monitor soil nutrient levels and adjust fertilization practices accordingly to ensure optimal plant growth and productivity.',
        'Additional Information':
          "Remember to choose crop varieties that are specifically suited to slightly acidic to neutral soil and wet conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
    },
    3: {
      Classifications: {
        pHLevel: '7-8 (alkaline)',
        Moisture: 'Wet (700-1000)',
      },

      Ornamental: {
        'Soil Preparation':
          'Prepare the planting area by incorporating organic matter, such as compost or well-rotted manure, into the soil to improve its fertility and moisture-holding capacity.',
        'Select Alkaline-Loving Plants':
          'Choose ornamental plants that thrive in alkaline soil and wet conditions. Some options include:\n\n- Lavender: This fragrant flowering plant prefers well-draining alkaline soil and appreciates consistent moisture.\n- Russian Sage: With its silvery foliage and purple flowers, Russian Sage is well-suited to alkaline soil and can tolerate wet conditions.\n- Penstemon: These perennial plants offer colorful tubular flowers and thrive in alkaline soil with adequate moisture.',
        Watering:
          'Keep the soil consistently moist by providing regular watering. Monitor the moisture levels and adjust the watering frequency based on the specific needs of each plant.',
        Mulching:
          'Apply a layer of organic mulch around the plants to help conserve moisture, regulate soil temperature, and suppress weed growth.',
        'Additional Information':
          "Remember to choose plant varieties that are specifically suited to alkaline soil and wet conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
      Farming: {
        'Soil Preparation':
          'Prepare the planting beds by incorporating organic matter and ensuring proper drainage to avoid waterlogging.',
        'Crop Selection':
          "Choose farming plants that are well-suited to alkaline soil and wet conditions. Some options include:\n\n- Asparagus: This perennial vegetable can tolerate alkaline soil and appreciates consistent moisture.\n- Artichokes: These edible thistles thrive in alkaline soil and enjoy moist conditions.\n- Wheatgrass: It's a good option for alkaline soil and can handle wetter conditions.",
        Watering:
          'Provide regular and adequate watering to keep the soil consistently moist. Be cautious not to overwater, as it can lead to waterlogging and root rot.',
        'Crop Rotation':
          'Practice crop rotation to maintain soil health and minimize the risk of diseases and pests associated with continuously growing the same crops in the same area.',
        'Nutrient Management':
          'Monitor soil nutrient levels and adjust fertilization practices accordingly to ensure optimal plant growth and productivity.',
        'Additional Information':
          "Remember to choose crop varieties that are specifically suited to alkaline soil and wet conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
    },

    4: {
      Classifications: {
        pHLevel: '5-6 (acidic)',
        Moisture: 'Damp (400-700)',
      },

      Ornamental: {
        'Soil Preparation':
          'Prepare the planting area by incorporating organic matter, such as compost or well-rotted manure, into the soil to improve its fertility and moisture-holding capacity.',
        'Select Acid-Loving Plants':
          'Choose ornamental plants that thrive in acidic soil and damp conditions. Some options include:\n\n- Azaleas: These flowering shrubs provide vibrant blooms and prefer acidic soil. They appreciate a damp environment.\n- Camellias: Known for their beautiful flowers, camellias thrive in acidic soil and appreciate moist to damp conditions.\n- Rhododendrons: These evergreen shrubs produce stunning blooms and prefer acidic soil with consistent moisture. They can tolerate a damp environment.\n- Ferns: Many fern varieties thrive in acidic and damp conditions, adding a lush and green touch to your garden.',
        Watering:
          'Keep the soil consistently moist by providing regular watering. Monitor the moisture levels and adjust the watering frequency based on the specific needs of each plant.',
        Mulching:
          'Apply a layer of organic mulch around the plants to help conserve moisture, regulate soil temperature, and suppress weed growth.',
        'Additional Information':
          "Remember to choose plant varieties that are specifically suited to acidic soil and damp conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
      Farming: {
        'Soil Preparation':
          'Prepare the planting beds by incorporating organic matter and ensuring proper drainage to avoid waterlogging.',
        'Crop Selection':
          'Choose farming plants that are well-suited to acidic soil and damp conditions. Some options include:\n\n- Blueberries: These acid-loving fruits thrive in acidic soil and appreciate consistently moist to damp conditions.\n- Cranberries: These bog-loving crops are well-suited to wetter conditions and can tolerate slightly acidic soil. They require a damp environment.\n- Watercress: This leafy green vegetable is well-suited to damp soil and can tolerate acidic conditions.',
        Watering:
          'Provide regular and adequate watering to keep the soil consistently moist. Be cautious not to overwater, as it can lead to waterlogging and root rot.',
        'Crop Rotation':
          'Practice crop rotation to maintain soil health and minimize the risk of diseases and pests associated with continuously growing the same crops in the same area.',
        'Nutrient Management':
          'Monitor soil nutrient levels and adjust fertilization practices accordingly to ensure optimal plant growth and productivity.',
        'Additional Information':
          "Remember to choose crop varieties that are specifically suited to acidic soil and damp conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
    },

    5: {
      Classifications: {
        pHLevel: '6-7 (neutral to slightly acidic)',
        Moisture: 'Damp (700-1000)',
      },

      Ornamental: {
        'Soil Preparation':
          'Prepare the planting area by incorporating organic matter, such as compost or well-rotted manure, into the soil to improve its fertility and moisture-holding capacity.',
        'Select Plants for Neutral to Slightly Acidic Soil':
          'Choose ornamental plants that thrive in neutral to slightly acidic soil and damp conditions. Some options include:\n\n- Daffodils: These spring-blooming flowers can tolerate slightly acidic soil and appreciate a damp environment.\n- Lilacs: Known for their fragrant blooms, lilacs can grow well in neutral to slightly acidic soil with consistent moisture.\n- Hollyhocks: These tall flowering plants prefer slightly acidic soil and damp conditions.\n- Peonies: These popular flowering plants thrive in neutral to slightly acidic soil and enjoy a damp environment.',
        Watering:
          'Keep the soil consistently moist by providing regular watering. Monitor the moisture levels and adjust the watering frequency based on the specific needs of each plant.',
        Mulching:
          'Apply a layer of organic mulch around the plants to help conserve moisture, regulate soil temperature, and suppress weed growth.',
        'Additional Information':
          "Remember to choose plant varieties that are specifically suited to neutral to slightly acidic soil and damp conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
      Farming: {
        'Soil Preparation':
          'Prepare the planting beds by incorporating organic matter and ensuring proper drainage to avoid waterlogging.',
        'Crop Selection':
          'Choose farming plants that are well-suited to neutral to slightly acidic soil and damp conditions. Some options include:- Strawberries: These fruits prefer slightly acidic soil and appreciate consistent moisture.\n- Swiss Chard: This leafy green vegetable can tolerate slightly acidic soil and thrives in a damp environment.\n- Carrots: These root vegetables grow well in neutral to slightly acidic soil and appreciate a damp growing environment.\n- Cabbage: This cruciferous vegetable can tolerate slightly acidic soil and enjoys a damp environment.',
        Watering:
          'Provide regular and adequate watering to keep the soil consistently moist. Be cautious not to overwater, as it can lead to waterlogging and root rot.',
        'Crop Rotation':
          'Practice crop rotation to maintain soil health and minimize the risk of diseases and pests associated with continuously growing the same crops in the same area.',
        'Nutrient Management':
          'Monitor soil nutrient levels and adjust fertilization practices accordingly to ensure optimal plant growth and productivity.',
        'Additional Information':
          "Remember to choose crop varieties that are specifically suited to neutral to slightly acidic soil and damp conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
      },
    },

    6: {
      Classifications: {
        pHLevel: 'Alkaline soil',
        Moisture: 'Damp (500-700)',
      },

      Ornamental: {
        'Soil Preparation':
          'Prepare the planting area by ensuring proper drainage to avoid waterlogging in the alkaline soil.',
        'Select Plants for Alkaline Soil':
          'Choose ornamental plants that are well-suited to alkaline soil and can thrive in damp conditions. Some options include:\n\n- Lavender: This fragrant herb thrives in alkaline soil and appreciates moderate moisture.\n- Yarrow: With its beautiful flower clusters, yarrow can tolerate alkaline soil and damp conditions.\n- Russian Sage: This perennial plant prefers alkaline soil and enjoys moderate moisture.\n- Penstemon: These vibrant flowering plants can adapt well to alkaline soil and damp environments.',
        Watering:
          'Provide regular and sufficient watering to keep the soil consistently damp. Avoid overwatering, as it may lead to waterlogging and negatively impact plant health.',
        Mulching:
          'Apply a layer of organic mulch around the plants to help conserve moisture, regulate soil temperature, and suppress weed growth in the alkaline soil.',
        'Additional Information':
          'Remember to select plant varieties that are specifically suited to alkaline soil and damp conditions, as they are more likely to thrive in this environment. Additionally, monitor the plants for any signs of nutrient deficiencies, pests, or diseases and provide appropriate care based on their specific requirements.',
      },
      Farming: {
        'Soil Preparation':
          'Prepare the planting beds by amending the alkaline soil with organic matter and ensuring proper drainage for optimal crop growth.',
        'Crop Selection':
          'Choose farming plants that are well-adapted to alkaline soil and can tolerate damp conditions. Some options include:\n\n- Artichokes: These perennial vegetables thrive in alkaline soil and appreciate moderate moisture.\n- Barley: This cereal crop is well-suited to alkaline soil and can tolerate damp growing conditions.\n- Fava Beans: These legumes can adapt well to alkaline soil and enjoy moderate moisture.\n- Sorghum: This grain crop is known for its tolerance to alkaline soil and damp environments.',
        Watering:
          'Provide regular irrigation to maintain consistent moisture levels in the alkaline soil. Avoid waterlogging by ensuring proper drainage.',
        'Crop Rotation':
          'Practice crop rotation to maintain soil fertility and minimize the risk of pests and diseases associated with continuous cultivation of the same crops in alkaline soil.',
        'Nutrient Management':
          'Monitor soil nutrient levels and adjust fertilization practices accordingly to optimize crop growth and productivity in the alkaline soil.',
        'Additional Information':
          'Remember to choose crop varieties that are specifically suited to alkaline soil and damp conditions, as they are more likely to thrive in this environment. Additionally, monitor the crops for any nutrient deficiencies, pests, or diseases and provide appropriate care based on their specific requirements.',
      },
    },

    7: {
      Classifications: {
        pHLevel: 'Acidic soil',
        Moisture: 'Dry (800-1000)',
      },

      Ornamental: {
        'Soil Preparation':
          'Prepare the planting area by improving drainage to prevent water accumulation in the acidic and dry soil.',
        'Select Plants for Acidic Soil':
          'Choose ornamental plants that thrive in acidic soil and can tolerate dry conditions. Some options include:\n\n- Azaleas: These flowering shrubs prefer acidic soil and can tolerate dry periods.\n- Blueberries: These fruit-bearing shrubs thrive in acidic soil and appreciate well-drained, drier conditions.\n- Heather: This low-growing plant is well-suited to acidic soil and can withstand dry environments.\n- Japanese Pieris: This evergreen shrub prefers acidic soil and can adapt to drier conditions.',
        Watering:
          'Provide infrequent but deep watering to meet the plants’ moisture needs without overwatering in the acidic and dry soil. Allow the soil to dry partially between watering sessions.',
        Mulching:
          'Apply a layer of organic mulch around the plants to conserve moisture, regulate soil temperature, and suppress weed growth in the acidic and dry soil.',
        'Additional Information':
          'When selecting plants for acidic and dry soil, ensure they are suitable for such conditions to promote their health and vitality. Monitor the plants for any signs of nutrient deficiencies, pests, or diseases and provide appropriate care based on their specific requirements.',
      },
      Farming: {
        'Soil Preparation':
          'Improve the drainage of the planting beds in the acidic and dry soil to prevent waterlogging and ensure optimal root health for crops.',
        'Crop Selection':
          'Choose farming plants that are well-adapted to acidic soil and can tolerate dry conditions. Some options include:\n\n- Potatoes: These root vegetables can thrive in acidic soil and tolerate drier conditions.\n- Rhubarb: This perennial vegetable prefers acidic soil and can withstand dry periods.\n- Buckwheat: This versatile grain crop is suitable for acidic soil and can tolerate drier environments.\n- Cacti: These succulent plants are well-suited to acidic and dry soil conditions.',
        Watering:
          'Water the crops sparingly in the acidic and dry soil, allowing the soil to dry out between watering sessions. Be cautious not to overwater, as it may lead to root rot.',
        'Crop Rotation':
          'Practice crop rotation to maintain soil fertility and minimize the risk of pests and diseases associated with continuous cultivation of the same crops in the acidic and dry soil.',
        'Nutrient Management':
          'Regularly monitor soil nutrient levels and adjust fertilization practices to ensure the crops receive essential nutrients in the acidic and dry soil.',
        'Additional Information':
          'Choose crop varieties that are specifically suited to acidic soil and can tolerate dry conditions. Proper monitoring and care, including addressing any nutrient deficiencies, pests, or diseases promptly, will contribute to the success of the crops in the acidic and dry soil.',
      },
    },

    8: {
      Classifications: {
        pHLevel: 'Neutral acidic soil',
        Moisture: 'Dry (800-1000)',
      },

      Ornamental: {
        'Soil Preparation':
          'Prepare the planting area by ensuring adequate drainage to prevent water accumulation in the neutral acidic and dry soil.',
        'Select Plants for Neutral Acidic Soil':
          'Choose ornamental plants that thrive in neutral acidic soil and can tolerate dry conditions. Some options include:\n\n- Roses: These flowering plants can adapt well to neutral acidic soil and appreciate drier environments.\n- Geraniums: These popular flowering plants are suitable for neutral acidic soil and can withstand dry periods.\n- Sedums: These succulent plants are well-suited to neutral acidic soil and can tolerate dry conditions.\n- Coneflowers: These perennial flowers thrive in neutral acidic soil and can withstand drier environments.',
        Watering:
          'Water the plants sparingly, allowing the soil to dry out between watering sessions in the neutral acidic and dry soil. Deep watering at longer intervals is preferable over frequent shallow watering.',
        Mulching:
          'Apply a layer of organic mulch around the plants to conserve moisture, regulate soil temperature, and suppress weed growth in the neutral acidic and dry soil.',
        'Additional Information':
          'Ensure the selected ornamental plants are suitable for neutral acidic and dry soil conditions to promote their health and growth. Monitor the plants for any signs of nutrient deficiencies, pests, or diseases and provide appropriate care based on their specific requirements.',
      },
      Farming: {
        'Soil Preparation':
          'Improve the drainage of the planting beds in the neutral acidic and dry soil to prevent waterlogging and ensure optimal root health for crops.',
        'Crop Selection':
          'Choose farming plants that are well-suited to neutral acidic soil and can tolerate dry conditions. Some options include:\n\n- Tomatoes: These popular vegetables can thrive in neutral acidic soil and withstand drier periods.\n- Beans: This legume crop is suitable for neutral acidic soil and can tolerate drier environments.\n- Zucchini: This summer squash can adapt well to neutral acidic soil and appreciate drier conditions.\n- Marjoram: This herb prefers neutral acidic soil and can withstand dry periods.',
        Watering:
          'Water the crops judiciously, allowing the soil to dry out partially between watering sessions in the neutral acidic and dry soil. Adjust the watering frequency based on the specific needs of each crop.',
        'Crop Rotation':
          'Implement crop rotation to maintain soil fertility and reduce the risk of pests and diseases associated with continuous cultivation of the same crops in the neutral acidic and dry soil.',
        'Nutrient Management':
          'Regularly monitor soil nutrient levels and provide appropriate fertilization to ensure optimal crop growth and yield in the neutral acidic and dry soil.',
        'Additional Information':
          'Choose crop varieties that are specifically suited to neutral acidic soil and can tolerate dry conditions. Proper monitoring and care, including addressing any nutrient deficiencies, pests, or diseases promptly, will contribute to successful crop cultivation in the neutral acidic and dry soil.',
      },
    },

    9: {
      Classifications: {
        pHLevel: 'Alkaline soil',
        Moisture: 'Dry (800-1000)',
      },

      Ornamental: {
        'Soil Preparation':
          'Prepare the planting area by improving the soil structure and adding organic matter to enhance moisture retention in the alkaline and dry soil.',
        'Select Plants for Alkaline Soil':
          'Choose ornamental plants that thrive in alkaline soil and can tolerate dry conditions. Some options include:\n\n- Lavender: This aromatic flowering plant thrives in alkaline soil and can withstand dry periods.\n- Yucca: This drought-tolerant plant is well-suited to alkaline soil and can thrive in dry environments.\n- Russian Sage: This perennial plant is adapted to alkaline soil and can tolerate dry conditions.\n- Juniper: This evergreen shrub is suitable for alkaline soil and can withstand drier environments.',
        Watering:
          'Water the plants infrequently, allowing the soil to dry out between watering sessions in the alkaline and dry soil. Deep watering at longer intervals is preferable to frequent shallow watering.',
        Mulching:
          'Apply a layer of organic mulch around the plants to conserve moisture, regulate soil temperature, and suppress weed growth in the alkaline and dry soil.',
        'Additional Information':
          'Ensure that the selected ornamental plants are well-suited to alkaline and dry soil conditions to support their health and vigor. Monitor the plants for any signs of nutrient deficiencies, pests, or diseases and provide appropriate care based on their specific requirements.',
      },
      Farming: {
        'Soil Preparation':
          'Improve the soil structure and water-holding capacity of the planting beds in the alkaline and dry soil by incorporating organic matter and using mulching techniques.',
        'Crop Selection':
          'Choose farming plants that are well-adapted to alkaline soil and can tolerate dry conditions. Some options include:\n\n- Sunflowers: These vibrant flowers are suited for alkaline soil and can withstand drier periods.\n- Quinoa: This nutritious grain crop can grow well in alkaline soil and tolerate dry environments.\n- Agave: This succulent plant is well-suited to alkaline soil and can thrive in dry conditions.\n- Safflower: This oilseed crop is suitable for alkaline soil and can tolerate drier environments.',
        Watering:
          'Water the crops judiciously, allowing the soil to dry out between watering sessions in the alkaline and dry soil. Adjust the watering frequency based on the specific needs of each crop.',
        'Crop Rotation':
          'Implement crop rotation to maintain soil fertility and minimize the risk of pests and diseases associated with continuous cultivation of the same crops in the alkaline and dry soil.',
        'Nutrient Management':
          'Regularly monitor soil nutrient levels and provide appropriate fertilization to support optimal crop growth and yield in the alkaline and dry soil.',
        'Additional Information':
          'Choose crop varieties that are specifically adapted to alkaline soil and can tolerate dry conditions. Proper monitoring and care, including addressing any nutrient deficiencies, pests, or diseases promptly, will contribute to successful crop cultivation in the alkaline and dry soil.',
      },
    },
  };

  const renderGuides = () => {
    if (result && guides[result]) {
      return (
        <div className="guide" key={result}>
          <h1>Guides</h1>
          {Object.entries(guides[result]).map(([category, details]) => (
            <div className="guides-each-container" key={category}>
              <h3>{category}</h3>
              {Object.entries(details).map(([title, content]) => (
                <div key={title}>
                  <h4>{title}</h4>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="modal_container">
      <div className="inside-guides-container">
        <button onClick={() => setSetShowGuides(false)}>close</button>
        <div className="general">{renderGuides()}</div>
      </div>
    </div>
  );
};

export default Guides;
