import { useEffect, useState } from 'react';
import Suggestions from './components/Suggestions';

import iconYellow from './assets/images/icon-memory.svg';
import iconGreen from './assets/images/icon-verbal.svg';
import iconRed from './assets/images/icon-reaction.svg';

import iconRefresh from './assets/images/icon-refresh.svg';

const App = () => {
  const [result, setResult] = useState(0);
  const [inputAcidity, setInputAcidity] = useState(0);
  const [MoistData, setMoistData] = useState([]);

  const [decider, setDecider] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3000/data');
    //     const jsonData = await response.json();
    //     // setMoistData(jsonData.valueMoist);
    //     setMoistData(518);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };

    // fetchData();

    setMoistData(708);
  }, [MoistData]);

  const plants = {
    1: {
      res: 1,
      conditions: {
        ph: 'acidic soil',
        moist: 'wet moisture',
        level: [100, 400],
      },
      ornomental: [
        {
          name: 'Bougainvillea',
          description:
            'Bougainvillea is a flowering vine known for its colorful bracts that surround its small, inconspicuous flowers. It thrives in acidic soil and requires wet moisture conditions.',
          image: 'bougainvillea',
        },
        {
          name: 'Anthuriums',
          description:
            'Anthuriums are tropical plants prized for their vibrant, heart-shaped flowers and glossy foliage. They prefer slightly acidic soil and thrive in wet and humid conditions.',
          image: 'anthuriums',
        },
        {
          name: 'Caladiums',
          description:
            'Caladiums are ornamental plants known for their large, colorful, and often variegated leaves. They prefer slightly acidic soil and require consistently moist conditions to thrive.',
          image: 'caladiums',
        },
        {
          name: 'Ferns (such as Boston Fern)',
          description:
            'Ferns, including Boston Fern, are popular indoor and outdoor plants with delicate fronds and a lush appearance. They prefer slightly acidic soil and thrive in consistently moist conditions with high humidity.',
          image: 'Ferns',
        },
        {
          name: 'Gardenias',
          description:
            'Gardenias are fragrant flowering shrubs known for their beautiful white flowers and glossy green leaves. They thrive in acidic soil and require moist conditions to bloom.',
          image: 'gardenias',
        },
      ],
      farmingPlants: [
        {
          name: 'Pineapples',
          description:
            'Pineapple plants are tropical fruit plants known for their delicious and juicy fruits. They require well-drained acidic soil and regular watering. Pineapples can be grown in warm climates.',
          image: 'pineapples',
        },
        {
          name: 'Ginger',
          description:
            'Ginger is a spice plant grown for its flavorful and aromatic rhizomes. It prefers slightly acidic soil and requires regular watering. Ginger can be grown in both tropical and subtropical regions.',
          image: 'ginger',
        },
        {
          name: 'Taro (Gabi)',
          description:
            'Taro, also known as Gabi, is a starchy root vegetable commonly used in cooking. It thrives in acidic soil and requires consistently moist conditions. Taro is typically grown in tropical and subtropical regions.',
          image: 'taro',
        },
        {
          name: 'Turmeric',
          description:
            'Turmeric is a spice plant known for its bright yellow rhizomes, which are used for cooking and medicinal purposes. It prefers slightly acidic soil and requires regular watering. Turmeric is commonly grown in tropical and subtropical regions.',
          image: 'turmeric',
        },
      ],
    },
    2: {
      res: 2,
      conditions: {
        ph: 'neutral acidic soil',
        moist: 'wet moisture:',
        level: [100, 400],
      },
      ornomental: [
        {
          name: 'Hibiscus',
          description:
            'Hibiscus plants are known for their large, colorful flowers. They can tolerate slightly acidic soil and require wet moisture conditions.',
          image: 'hibiscus',
        },
        {
          name: 'Impatiens',
          description:
            'Impatiens are popular flowering plants that come in a variety of colors. They prefer neutral to slightly acidic soil and thrive in wet and humid conditions.',
          image: 'impatiens',
        },
        {
          name: 'Coleus',
          description:
            'Coleus is an ornamental plant valued for its vibrant and patterned foliage. It thrives in neutral to slightly acidic soil and requires consistently moist conditions.',
          image: 'Coleus',
        },
        {
          name: 'Elephant Ear (Alocasia)',
          description:
            'Elephant Ear, also known as Alocasia, is a tropical plant with large, heart-shaped leaves. It prefers neutral to slightly acidic soil and thrives in consistently moist conditions.',
          image: 'Elephant',
        },
      ],
      farmingPlants: [
        {
          name: 'Eggplant',
          description:
            'Eggplant plants produce versatile fruits used in various cuisines. They prefer slightly acidic soil and require regular watering.',
          image: 'Eggplant',
        },
        {
          name: 'Cabbage',
          description:
            'Cabbage is a leafy vegetable known for its dense, layered leaves. It thrives in neutral to slightly acidic soil and requires consistent watering.',
          image: 'Cabbage',
        },
        {
          name: 'Lettuce',
          description:
            'Lettuce is a leafy vegetable that can be grown in various varieties. It prefers neutral to slightly acidic soil and requires consistent watering.',
          image: 'Lettuce',
        },
        {
          name: 'Kale',
          description:
            'Kale is a nutritious leafy green vegetable with a rich flavor. It thrives in neutral to slightly acidic soil and requires regular watering.',
          image: 'Kale',
        },
        {
          name: 'Mustard Greens (Mustasa)',
          description:
            'Mustard Greens, also known as Mustasa, are leafy vegetables with a slightly spicy taste. They prefer neutral to slightly acidic soil and require regular watering.',
          image: 'Mustard',
        },
      ],
    },
    3: {
      res: 3,
      conditions: {
        ph: 'alkaline soil',
        moist: 'wet moisture',
        level: [100, 400],
      },
      ornomental: [
        {
          name: 'Ixora',
          description:
            'Ixora is a flowering shrub that produces clusters of colorful, star-shaped flowers. It thrives in alkaline soil and requires wet moisture conditions.',
          image: 'Ixora',
        },
        {
          name: 'Bougainvillea (some varieties)',
          description:
            'Bougainvillea is a flowering vine known for its colorful bracts that surround its small, inconspicuous flowers. Some varieties of Bougainvillea can tolerate alkaline soil and require wet moisture conditions.',
          image: 'bou',
        },
        {
          name: 'Plumeria (Frangipani)',
          description:
            'Plumeria, also known as Frangipani, is a tropical tree with fragrant and beautiful flowers. It can tolerate alkaline soil and requires wet moisture conditions.',
          image: 'Plumeria',
        },
        {
          name: 'Bird of Paradise (Strelitzia)',
          description:
            'Bird of Paradise, also known as Strelitzia, is a striking plant with vibrant and unique bird-like flowers. It can tolerate alkaline soil and requires wet moisture conditions.',
          image: 'Strelitzia',
        },
        {
          name: 'Ti Plant (Cordyline)',
          description:
            'Ti Plant, also known as Cordyline, is a tropical plant with colorful foliage. It can tolerate alkaline soil and requires wet moisture conditions.',
          image: 'Cordyline',
        },
      ],
      farmingPlants: [
        {
          name: 'Okra',
          description:
            'Okra is a warm-season vegetable with edible green pods. It prefers slightly alkaline soil and requires regular watering.',
          image: 'Okra',
        },
        {
          name: 'String Beans (Sitaw)',
          description:
            'String Beans, also known as Sitaw, are legume plants that produce long edible pods. They prefer slightly alkaline soil and require regular watering.',
          image: 'Sitaw',
        },
        {
          name: 'Malunggay (Moringa)',
          description:
            'Malunggay, also known as Moringa, is a fast-growing tree with nutritious leaves and seed pods. It prefers slightly alkaline soil and requires regular watering.',
          image: 'Malunggay',
        },
        {
          name: 'Kangkong (Water Spinach)',
          description:
            'Kangkong, also known as Water Spinach, is a leafy green vegetable that grows in water or moist soil. It can tolerate alkaline soil and requires wet moisture conditions.',
          image: 'Kangkong',
        },
        {
          name: 'Amaranth Leaves (Kulitis)',
          description:
            'Amaranth Leaves, also known as Kulitis, are leafy greens with a mild and earthy flavor. They can tolerate alkaline soil and require regular watering.',
          image: 'Amaranth',
        },
      ],
    },
    4: {
      res: 4,
      conditions: {
        ph: 'acidic soil ',
        moist: 'damp moisture',
        level: [500, 700],
      },
      ornomental: [
        {
          name: 'Ferns (such as Asplenium nidus)',
          description:
            'Ferns, including Asplenium nidus (Birds Nest Fern), are valued for their attractive foliage and adaptability. They thrive in acidic soil and require damp moisture conditions.',
          image: 'asplenium',
        },
        {
          name: 'Calathea',
          description:
            'Calathea is a tropical plant with vibrant patterned leaves. It prefers acidic soil and requires damp moisture conditions.',
          image: 'Calathea',
        },
        {
          name: 'Aglaonema',
          description:
            'Aglaonema is a popular houseplant with variegated foliage. It thrives in acidic soil and requires damp moisture conditions.',
          image: 'Aglaonema',
        },
        {
          name: 'Croton (Codiaeum variegatum)',
          description:
            'Croton, also known as Codiaeum variegatum, is a colorful tropical plant with glossy leaves. It prefers acidic soil and requires damp moisture conditions.',
          image: 'Croton',
        },
      ],
      farmingPlants: [
        {
          name: 'Tomato',
          description:
            'Tomato plants are popular for their delicious fruits and can be grown in various climates. They prefer slightly acidic soil and require regular watering.',
          image: 'Tomato',
        },
        {
          name: 'Chilies',
          description:
            'Chilies, also known as hot peppers, are spicy vegetables used in cooking. They prefer slightly acidic soil and require consistent watering.',
          image: 'Chilies',
        },
        {
          name: 'Bell Peppers',
          description:
            'Bell peppers come in various colors and are a popular vegetable choice. They prefer slightly acidic soil and require adequate sunlight and moisture.',
          image: 'Bell',
        },
        {
          name: 'Strawberries',
          description:
            'Strawberry plants produce sweet and juicy fruits. They thrive in slightly acidic soil and require adequate sunlight and moisture.',
          image: 'Strawberries',
        },
      ],
    },
    5: {
      res: 5,
      conditions: {
        ph: 'neutral acidic soil',
        moist: 'damp moisture',
        level: [500, 700],
      },
      ornomental: [
        {
          name: 'Peace Lily (Spathiphyllum)',
          description:
            'Peace Lily is an evergreen plant with glossy, dark green leaves and white flowers. It can tolerate neutral to slightly acidic soil and requires damp moisture conditions.',
          image: 'Lily',
        },
        {
          name: 'Philodendron',
          description:
            'Philodendron is a popular houseplant with a variety of leaf shapes and sizes. It thrives in neutral to slightly acidic soil and requires damp moisture conditions.',
          image: 'Philodendron',
        },
        {
          name: 'Spider Plant (Chlorophytum comosum)',
          description:
            'Spider Plant, also known as Chlorophytum comosum, is an adaptable houseplant with long, arching leaves. It prefers neutral to slightly acidic soil and requires damp moisture conditions.',
          image: 'Spider',
        },
        {
          name: 'Pothos (Epipremnum aureum)',
          description:
            'Pothos, also known as Epipremnum aureum, is a trailing vine with heart-shaped leaves. It can tolerate neutral to slightly acidic soil and requires damp moisture conditions.',
          image: 'Pothos',
        },
        {
          name: 'Syngonium',
          description:
            'Syngonium is a versatile houseplant with arrow-shaped leaves. It thrives in neutral to slightly acidic soil and requires damp moisture conditions.',
          image: 'Syngonium',
        },
      ],
      farmingPlants: [
        {
          name: 'Corn',
          description:
            'Corn is a staple crop with sweet and tender kernels. It prefers neutral to slightly acidic soil and requires consistent watering.',
          image: 'Corn',
        },
        {
          name: 'Squash',
          description:
            'Squash plants produce various types of edible fruits and are known for their vigorous growth. They prefer neutral to slightly acidic soil and require regular watering.',
          image: 'Squash',
        },
        {
          name: 'Cucumber',
          description:
            'Cucumber plants produce crisp and refreshing fruits. They prefer neutral to slightly acidic soil and require regular watering.',
          image: 'Cucumber',
        },
        {
          name: 'Watermelon',
          description:
            'Watermelon is a juicy fruit known for its sweet and refreshing taste. It prefers neutral to slightly acidic soil and requires consistent moisture.',
          image: 'Watermelon',
        },
      ],
    },

    6: {
      res: 6,
      conditions: {
        ph: 'alkaline soil',
        moist: 'damp moisture',
        level: [500, 700],
      },
      ornomental: [
        {
          name: 'Golden Cane Palm (Dypsis lutescens)',
          description:
            'Golden Cane Palm, also known as Dypsis lutescens or Areca Palm, is a tropical plant with graceful, feathery fronds. It thrives in slightly acidic soil and moist moisture conditions.',
          image: 'Golden',
        },
        {
          name: 'Areca Palm (Dypsis lutescens)',
          description:
            'Areca Palm, also known as Dypsis lutescens or Golden Cane Palm, is a popular indoor palm plant. It prefers slightly acidic soil and moist moisture conditions.',
          image: 'Areca',
        },
        {
          name: 'Dieffenbachia',
          description:
            'Dieffenbachia is an attractive houseplant known for its large, patterned leaves. It thrives in slightly acidic soil and requires moist moisture conditions.',
          image: 'Dieffenbachia',
        },
        {
          name: 'ZZ Plant (Zamioculcas zamiifolia)',
          description:
            'ZZ Plant, also known as Zamioculcas zamiifolia, is a low-maintenance houseplant with glossy, dark green leaves. It can tolerate slightly acidic soil and prefers moist moisture conditions.',
          image: 'Zamioculcas',
        },
      ],

      farmingPlants: [
        {
          name: 'Rice',
          description:
            'Rice is a staple food crop cultivated for its edible grains. It prefers slightly acidic soil and requires consistent moisture.',
          image: 'Rice',
        },
        {
          name: 'Corn',
          description:
            'Corn, also known as maize, is a versatile grain crop. It can tolerate a wide range of soil pH levels and requires regular watering.',
          image: 'Corn',
        },
        {
          name: 'Sorghum',
          description:
            'Sorghum is a drought-tolerant cereal grain used for food and animal feed. It can tolerate neutral acidic soil and requires moderate watering.',
          image: 'Sorghum',
        },
        {
          name: 'Barley',
          description:
            'Barley is a cereal grain commonly used in brewing and cooking. It can tolerate slightly acidic soil and requires moderate watering.',
          image: 'Barley',
        },
        {
          name: 'Sugarcane',
          description:
            'Sugarcane is a tall perennial grass known for its sweet stalks used to produce sugar. It thrives in slightly acidic soil and requires ample water supply.',
          image: 'Sugarcane',
        },
      ],
    },

    7: {
      res: 7,
      conditions: {
        ph: ' acidic soil',
        moist: 'dry moisture',
        level: [800, 1000],
      },
      ornomental: [
        {
          name: 'Bromeliads',
          description:
            'Bromeliads are tropical plants known for their colorful and exotic flowers. They can tolerate acidic soil and thrive in dry moisture conditions.',
          image: 'Bromeliads',
        },
        {
          name: 'Sansevieria',
          description:
            "Sansevieria, also known as Snake Plant or Mother-in-Law's Tongue, is a hardy and low-maintenance houseplant. It can tolerate acidic soil and prefers dry moisture conditions.",
          image: 'Sansevieria',
        },
        {
          name: 'Zebra Plant (Aphelandra squarrosa)',
          description:
            'Zebra Plant, also known as Aphelandra squarrosa, is a tropical houseplant with striking foliage. It can tolerate acidic soil and thrives in dry moisture conditions.',
          image: 'Zebra',
        },
        {
          name: 'Aloe Vera',
          description:
            'Aloe Vera is a succulent plant known for its medicinal properties. It can tolerate acidic soil and requires dry moisture conditions.',
          image: 'Aloe',
        },
        {
          name: 'Pencil Cactus (Euphorbia tirucalli)',
          description:
            'Pencil Cactus, also known as Euphorbia tirucalli, is a unique succulent with slender, pencil-like branches. It can tolerate acidic soil and is well-suited to dry moisture conditions.',
          image: 'Pencil',
        },
      ],
      farmingPlants: [
        {
          name: 'Coffee',
          description:
            'Coffee plants are cultivated for their aromatic beans. They prefer acidic soil and can tolerate a wide range of pH levels. They require regular watering.',
          image: 'Coffee',
        },
        {
          name: 'Pineapple',
          description:
            'Pineapple plants are tropical fruit plants known for their delicious and juicy fruits. They require well-drained soil and regular watering. Pineapples can be grown in warm climates.',
          image: 'Pineapples',
        },
        {
          name: 'Dragon Fruit',
          description:
            'Dragon Fruit is a unique and exotic fruit plant. It prefers acidic soil but can tolerate alkaline conditions. It requires well-drained soil and regular watering.',
          image: 'Dragon',
        },
        {
          name: 'Passion Fruit',
          description:
            'Passion Fruit plants produce delicious and tangy fruits. They can tolerate acidic soil and require consistent moisture. Passion Fruit vines thrive in warm climates.',
          image: 'Passion',
        },
      ],
    },
    8: {
      res: 8,
      conditions: {
        ph: 'neutral acidic soil',
        moist: 'dry moisture',
        level: [800, 1000],
      },
      ornomental: [
        {
          name: 'Desert Rose (Adenium obesum)',
          description:
            'Desert Rose is a beautiful flowering succulent plant native to arid regions. It thrives in neutral acidic soil and dry moisture conditions.',
          image: 'Desert',
        },
        {
          name: 'Ponytail Palm (Beaucarnea recurvata)',
          description:
            'Ponytail Palm is a unique-looking plant with a swollen trunk and long, curly leaves. It prefers neutral acidic soil and dry moisture conditions.',
          image: 'Ponytail',
        },
        {
          name: 'Kalanchoe',
          description:
            'Kalanchoe is a popular ornamental plant with vibrant flowers and thick, fleshy leaves. It thrives in neutral acidic soil and dry moisture conditions.',
          image: 'Kalanchoe',
        },
        {
          name: 'Jade Plant (Crassula ovata)',
          description:
            'Jade Plant, also known as Money Plant, is a succulent with thick, glossy leaves. It prefers neutral acidic soil and dry moisture conditions.',
          image: 'Jade',
        },
      ],
      farmingPlants: [
        {
          name: 'Peanut',
          description:
            'Peanut is a legume crop grown for its edible seeds. It prefers neutral acidic soil and dry moisture conditions.',
          image: 'Peanut',
        },
        {
          name: 'Soybean',
          description:
            'Soybean is a versatile legume crop used for various purposes, including food and animal feed. It thrives in neutral acidic soil and dry moisture conditions.',
          image: 'Soybean',
        },
        {
          name: 'Sesame',
          description:
            'Sesame is an oilseed crop grown for its seeds, which are used in cooking and as a flavoring. It prefers neutral acidic soil and dry moisture conditions.',
          image: 'Sesame',
        },
        {
          name: 'Adzuki Beans',
          description:
            'Adzuki Beans, also known as Azuki Beans, are small red beans commonly used in Asian cuisine. They thrive in neutral acidic soil and dry moisture conditions.',
          image: 'Adzuki',
        },
      ],
    },
    9: {
      res: 9,
      conditions: {
        ph: 'alkaline soil',
        moist: 'dry moisture',
        level: [800, 1000],
      },
      ornomental: [
        {
          name: 'Cacti (various species)',
          description:
            'Cacti are desert plants known for their unique shapes and ability to thrive in dry conditions. They prefer alkaline soil and dry moisture conditions.',
          image: 'Cacti',
        },
        {
          name: 'Sedum',
          description:
            'Sedum, also known as stonecrop, is a group of succulent plants that are drought-tolerant and prefer alkaline soil with dry moisture conditions.',
          image: 'Sedum',
        },
        {
          name: 'Portulaca (Moss Rose)',
          description:
            'Portulaca, commonly known as Moss Rose, is a flowering plant that thrives in hot and dry environments. It prefers alkaline soil and dry moisture conditions.',
          image: 'Portulaca',
        },
        {
          name: 'Ponytail Palm (Beaucarnea recurvata)',
          description:
            'Ponytail Palm is a unique palm tree with a distinctive swollen trunk and long, thin leaves. It can tolerate alkaline soil and thrives in dry moisture conditions.',
          image: 'Ponytail',
        },
      ],

      farmingPlants: [
        {
          name: 'Pigeon Pea (Kadyos)',
          description:
            'Pigeon Pea, also known as Kadyos, is a legume crop cultivated for its nutritious seeds. It prefers alkaline soil and dry moisture conditions.',
          image: 'Pigeon',
        },
        {
          name: 'Winged Beans (Sigarilyas)',
          description:
            'Winged Beans, also known as Sigarilyas, are tropical legume plants with edible pods and leaves. They prefer alkaline soil and dry moisture conditions.',
          image: 'Winged',
        },
        {
          name: 'Mung Beans (Munggo)',
          description:
            'Mung Beans, also known as Munggo, are commonly used in Asian cuisine and are easy to grow. They prefer alkaline soil and dry moisture conditions.',
          image: 'Mung',
        },
        {
          name: 'Kidney Beans (Bataw)',
          description:
            'Kidney Beans, also known as Bataw, are a type of legume known for their kidney-shaped seeds. They prefer alkaline soil and dry moisture conditions.',
          image: 'Kidney',
        },
      ],
    },
  };

  const calculateMoist = () => {
    if (inputAcidity == '') {
      setError('error please enter acidity');
    }

    console.log('inputAcidity:', inputAcidity);
    console.log('MoistData:', MoistData);

    if (
      parseInt(inputAcidity) <= 6 &&
      parseInt(MoistData) >= 0 &&
      parseInt(MoistData) <= 400
    ) {
      setResult(1);
    } else if (
      parseInt(inputAcidity) === 7 &&
      parseInt(MoistData) >= 0 &&
      parseInt(MoistData) <= 400
    ) {
      setResult(2);
    } else if (
      parseInt(inputAcidity) > 7 &&
      parseInt(MoistData) >= 0 &&
      parseInt(MoistData) <= 400
    ) {
      setResult(3);
    } else if (
      parseInt(inputAcidity) <= 6 &&
      parseInt(MoistData) >= 400 &&
      parseInt(MoistData) <= 700
    ) {
      setResult(4);
    } else if (
      parseInt(inputAcidity) === 7 &&
      parseInt(MoistData) >= 400 &&
      parseInt(MoistData) <= 700
    ) {
      setResult(5);
    } else if (
      parseInt(inputAcidity) > 7 &&
      parseInt(MoistData) >= 400 &&
      parseInt(MoistData) <= 700
    ) {
      setResult(6);
    } else if (
      parseInt(inputAcidity) <= 6 &&
      parseInt(MoistData) >= 700 &&
      parseInt(MoistData) <= 1000
    ) {
      setResult(7);
    } else if (
      parseInt(inputAcidity) === 7 &&
      parseInt(MoistData) >= 700 &&
      parseInt(MoistData) <= 1000
    ) {
      setResult(8);
    } else if (
      parseInt(inputAcidity) > 7 &&
      parseInt(MoistData) >= 700 &&
      parseInt(MoistData) <= 1000
    ) {
      setResult(9);
    } else {
      setError('Error: Invalid pH or moisture range');
    }

    setDecider(true);
  };

  const refresh = () => {
    location.reload();
  };

  return (
    <div className="main-container">
      <div className="inside-container">
        <div className="upper-container">
          <button className="refresh" onClick={() => refresh()}>
            <img src={iconRefresh} alt="" />
          </button>

          <div className="main_description">
            <h1 className="title">Plantito Plantita</h1>
            <div
              className="gradient_container moist"
              style={{ marginBottom: 10 }}
            >
              <img src={iconYellow} alt="" />
              <p>
                Moist <span className="moist_data">{MoistData}</span>
              </p>
            </div>

            <div className="gradient_container acidity">
              <img src={iconGreen} alt="" />
              <p>Acidity</p>
              <input
                type="text"
                placeholder="enter acidityy"
                onChange={(e) => setInputAcidity(e.target.value)}
              />
            </div>

            <div className="gradient_container ph">
              <img src={iconRed} alt="" />
              <p>
                PH Level <span className="res">{result}</span>
              </p>
            </div>

            <div className="error_container">
              {error.length != 0 ? error : ''}
            </div>
          </div>

          <button
            className="suggestion_button"
            onClick={() => calculateMoist()}
          >
            {decider ? 'close suggestion' : 'show suggestion'}
          </button>
        </div>

        {decider && <Suggestions plants={plants} result={result} />}
      </div>
    </div>
  );
};

export default App;
