import React from 'react'

const Suggestions = ({result}) => {
  
  const plants = {
    1: {
      res: 1,
      conditions: {
        ph: "<=6",
        moist: "between 700-1000",
      },
      names: [
        "Azaleas (Rhododendron spp.)",
        "Blueberries (Vaccinium spp.)",
        "Camellias (Camellia spp.)",
        "Ferns (various species, such as Osmunda and Athyrium)",
        "Hydrangeas (Hydrangea spp.)",
        "Rhododendrons (Rhododendron spp.)",
        "Sphagnum moss (Sphagnum spp.)",
      ],
    },
    2: {
      res: 2,
      conditions: {
        ph: "7",
        moist: "between 700-1000",
      },
      names: [
        "Japanese maples (Acer palmatum)",
        "Hostas (Hosta spp.)",
        "Lily of the valley (Convallaria majalis)",
        "Maidenhair fern (Adiantum spp.)",
        "Mountain laurel (Kalmia latifolia)",
        "Orchids (Orchidaceae family)",
        "Trilliums (Trillium spp.)",
      ],
    },
    3: {
      res: 3,
      conditions: {
        ph: ">7",
        moist: "between 700-1000",
      },
      names: [
        "Hollyhocks (Alcea rosea)",
        "Lavender (Lavandula spp.)",
        "Iris (Iris spp.)",
        "Sedums (Sedum spp.)",
        "Yarrow (Achillea spp.)",
        "Russian sage (Perovskia atriplicifolia)",
        "Canterbury bells (Campanula medium)",
      ],
    },
    4: {
      res: 4,
      conditions: {
        ph: "<=6",
        moist: "between 400-600",
      },
      names: [
        "Bog rosemary (Andromeda polifolia)",
        "Cranberries (Vaccinium oxycoccos)",
        "Leatherleaf fern (Rumohra adiantiformis)",
        "Sphagnum moss (Sphagnum spp.)",
        "Sundews (Drosera spp.)",
        "Sweet pepperbush (Clethra alnifolia)",
        "Wintergreen (Gaultheria procumbens)",
      ],
    },
    5: {
      res: 5,
      conditions: {
        ph: "7",
        moist: "between 400-600",
      },
      names: [
        "Daylilies (Hemerocallis spp.)",
        "Coral bells (Heuchera spp.)",
        "Foamflower (Tiarella cordifolia)",
        "Japanese forest grass (Hakonechloa macra)",
        "Lady's mantle (Alchemilla spp.)",
        "Sedges (Carex spp.)",
        "Woodland phlox (Phlox divaricata)",
      ],
    },
    6: {
      res: 6,
      conditions: {
        ph: ">7",
        moist: "between 400-600",
      },
      names: [
        "Butterfly weed (Asclepias tuberosa)",
        "Coneflowers (Echinacea spp.)",
        "Salvia (Salvia spp.)",
        "Shasta daisies (Leucanthemum x superbum)",
        "Verbena (Verbena spp.)",
        "Russian sage (Perovskia atriplicifolia)",
        "Yucca (Yucca spp.)",
      ],
    },
    7: {
      res: 7,
      conditions: {
        ph: "<=6",
        moist: "between 100-300",
      },
      names: [
        "Heather (Calluna spp.)",
        "Junipers (Juniperus spp.)",
        "Pine trees (Pinus spp.)",
        "Rhododendrons (Rhododendron spp.)",
        "Spruce trees (Picea spp.)",
        "Witch hazel (Hamamelis spp.)",
        "Lingonberries (Vaccinium vitis-idaea)",
      ],
    },
    8: {
      res: 8,
      conditions: {
        ph: "7",
        moist: "between 100-300",
      },
      names: [
        "Agave (Agave spp.)",
        "Sedums (Sedum spp.)",
        "Yucca (Yucca spp.)",
        "Lavender (Lavandula spp.)",
        "Rosemary (Rosmarinus officinalis)",
        "Thyme (Thymus spp.)",
        "Sage (Salvia spp.)",
      ],
    },
    9: {
      res: 9,
      conditions: {
        ph: ">7",
        moist: "between 100-300",
      },
      names: [
        "Agave (Agave spp.)",
        "Yucca (Yucca spp.)",
        "Lavender (Lavandula spp.)",
        "Russian sage (Perovskia atriplicifolia)",
        "Texas sage (Leucophyllum spp.)",
        "Desert marigold (Baileya multiradiata)",
        "Red yucca (Hesperaloe parviflora)",
      ],
    },
  };
  
  return (
    <div className='suggestions'>
        <h1>Suggestions</h1>
        <div>
        {Object.keys(plants).map((key) => {
          const plant = plants[key];
          if (plant.res === result) { // Compare plant.res with result
            return (
              <div key={key}>
                <h3>Conditions: pH {plant.conditions.ph}</h3>
                <h3>Moisture {plant.conditions.moist}</h3>
                <div>
                  {plant.names.map((name, index) => (
                    <p key={index}>{name}</p>
                  ))}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}

        </div>
    </div>
  )
}

export default Suggestions