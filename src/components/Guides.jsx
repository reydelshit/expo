/* eslint-disable react/prop-types */
const Guides = ({ setSetShowGuides }) => {
  const guides = {
    1: {
      'Ornamental Plants': {
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
        'pH Level': '5-6 (acidic)',
        'Moisture Level': [100, 400],
      },
      'Farming Plants': {
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
        'pH Level': '5-6 (acidic)',
        'Moisture Level': [100, 400],
      },
    },
    2: {
      'Ornamental Plants': {
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
        'pH Level': '6-7 (neutral to slightly acidic)',
        'Moisture Level': 'Wet (400-700)',
      },
      'Farming Plants': {
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
        'pH Level': '6-7 (neutral to slightly acidic)',
        'Moisture Level': 'Wet (400-700)',
      },
    },
    3: {
      'Ornamental Plants': {
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
        'pH Level': '7-8 (alkaline)',
        'Moisture Level': 'Wet (700-1000)',
      },
      'Farming Plants': {
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
        'pH Level': '7-8 (alkaline)',
        'Moisture Level': 'Wet (700-1000)',
      },
    },

    4: {
      'Ornamental Plants': {
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
        'pH Level': '5-6 (acidic)',
        'Moisture Level': 'Damp (400-700)',
      },
      'Farming Plants': {
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
        'pH Level': '5-6 (acidic)',
        'Moisture Level': 'Damp (400-700)',
      },
    },

    5: {
      'Ornamental Plants': {
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
        'pH Level': '6-7 (neutral to slightly acidic)',
        'Moisture Level': 'Damp (700-1000)',
      },
      'Farming Plants': {
        'Soil Preparation':
          'Prepare the planting beds by incorporating organic matter and ensuring proper drainage to avoid waterlogging.',
        'Crop Selection':
          'Choose farming plants that are well-suited to neutral to slightly acidic soil and damp conditions. Some options include:\n\n- Strawberries: These fruits prefer slightly acidic soil and appreciate consistent moisture.\n- Swiss Chard: This leafy green vegetable can tolerate slightly acidic soil and thrives in a damp environment.\n- Carrots: These root vegetables grow well in neutral to slightly acidic soil and appreciate a damp growing environment.\n- Cabbage: This cruciferous vegetable can tolerate slightly acidic soil and enjoys a damp environment.',
        Watering:
          'Provide regular and adequate watering to keep the soil consistently moist. Be cautious not to overwater, as it can lead to waterlogging and root rot.',
        'Crop Rotation':
          'Practice crop rotation to maintain soil health and minimize the risk of diseases and pests associated with continuously growing the same crops in the same area.',
        'Nutrient Management':
          'Monitor soil nutrient levels and adjust fertilization practices accordingly to ensure optimal plant growth and productivity.',
        'Additional Information':
          "Remember to choose crop varieties that are specifically suited to neutral to slightly acidic soil and damp conditions, as they are more likely to thrive in this environment. Additionally, it's essential to monitor the plants' health, address any pest or disease issues promptly, and provide appropriate care based on their specific requirements.",
        'pH Level': '6-7 (neutral to slightly acidic)',
        'Moisture Level': 'Damp (700-1000)',
      },
    },
  };

  return (
    <div className="modal_container">
      <div className="inside-guides-container">
        <button onClick={() => setSetShowGuides(false)}>close</button>
      </div>
    </div>
  );
};

export default Guides;
