/* eslint-disable no-undef */
import PropTypes from 'prop-types';

import rosemaryImage from '../assets/images/rosemary.jpg';

const Suggestions = ({ result }) => {
  Suggestions.propTypes = {
    result: PropTypes.any.isRequired,
  };

  const imagePaths = {
    rosemary: rosemaryImage,
    // Add other imported images here
  };

  const plants = {
    1: {
      res: 1,
      conditions: {
        ph: '6',
        moist: '700-1000',
      },
      names: [
        {
          name: 'Azaleas (Rhododendron spp.)',
          description:
            'Azaleas are flowering shrubs that belong to the Rhododendron genus. They are known for their vibrant and showy flowers, which come in various colors including pink, white, red, purple, and orange. Azaleas are popular ornamental plants and are often grown in gardens or used as potted plants.',
          image: 'insert Azaleas image link here',
        },
        {
          name: 'Blueberries (Vaccinium spp.)',
          description:
            'Blueberries are small, round berries that are well-known for their delicious taste and numerous health benefits. They belong to the Vaccinium genus and are native to North America. Blueberry plants are shrubs with green foliage and clusters of small white flowers that develop into blue or purple berries.',
          image: 'insert Blueberries image link here',
        },
        {
          name: 'Camellias (Camellia spp.)',
          description:
            'Camellias are evergreen shrubs or small trees that produce beautiful flowers. They are part of the Camellia genus and are native to East Asia. Camellia flowers come in a variety of colors, including shades of red, pink, and white. These plants are highly valued for their attractive blooms and are often cultivated for ornamental purposes.',
          image: 'insert Camellias image link here',
        },
        {
          name: 'Ferns (various species, such as Osmunda and Athyrium)',
          description:
            'Ferns are a diverse group of plants that reproduce via spores instead of seeds. They are characterized by their feathery or lacy fronds and are known for their ability to thrive in shady and moist environments. There are numerous fern species, such as Osmunda and Athyrium, each with its own unique appearance and growth habits.',
          image: 'insert Ferns image link here',
        },
        {
          name: 'Hydrangeas (Hydrangea spp.)',
          description:
            'Hydrangeas are deciduous shrubs that produce large, showy flower clusters. They belong to the Hydrangea genus and are native to Asia and the Americas. Hydrangea flowers come in various colors, including white, pink, blue, and purple, and can change their color based on soil pH. These plants are popular in gardens and landscaping due to their stunning blooms.',
          image: 'insert Hydrangeas image link here',
        },
        {
          name: 'Rhododendrons (Rhododendron spp.)',
          description:
            'Rhododendrons are a diverse group of flowering shrubs and small trees. They are part of the Rhododendron genus, which includes many species and cultivars. Rhododendron flowers come in a wide range of colors and sizes, and their foliage is usually dark green and leathery. These plants are widely admired for their impressive floral displays and are commonly found in gardens.',
          image: 'insert Rhododendrons image link here',
        },
        {
          name: 'Sphagnum moss (Sphagnum spp.)',
          description:
            'Sphagnum moss is a type of moss that forms dense, carpet-like mats in wetland areas such as bogs and swamps. It belongs to the Sphagnum genus, which comprises numerous species. Sphagnum moss is commonly used in horticulture and gardening for its water-holding capacity and ability to provide favorable growing conditions for certain plants.',
          image: 'insert Sphagnum moss image link here',
        },
      ],
    },
    2: {
      res: 2,
      conditions: {
        ph: '7',
        moist: '700-1000',
      },
      names: [
        {
          name: 'Japanese maples (Acer palmatum)',
          description:
            'Japanese maples are small to medium-sized trees that are highly valued for their ornamental value. They are known for their delicate and colorful foliage, which can range from vibrant shades of red and orange to deep purple or green. Japanese maples are popular in landscaping and are often grown as focal points in gardens or used in bonsai.',
          image: 'insert Japanese maples image link here',
        },
        {
          name: 'Hostas (Hosta spp.)',
          description:
            'Hostas are herbaceous perennial plants that are prized for their attractive foliage. They have large, broad leaves that come in various shades of green, blue, yellow, or variegated patterns. Hostas are commonly grown in shade gardens or woodland settings and are appreciated for their tolerance to shade and low maintenance requirements.',
          image: 'insert Hostas image link here',
        },
        {
          name: 'Lily of the valley (Convallaria majalis)',
          description:
            'Lily of the valley is a perennial flowering plant that is native to Europe and North America. It features small, bell-shaped white flowers that bloom in spring and emit a sweet fragrance. Lily of the valley plants have a spreading habit and are often used as ground covers or in shaded areas of the garden. However, it is important to note that lily of the valley is considered toxic if ingested.',
          image: 'insert Lily of the valley image link here',
        },
        {
          name: 'Maidenhair fern (Adiantum spp.)',
          description:
            'Maidenhair ferns are delicate ferns characterized by their lacy and fan-shaped fronds. They belong to the Adiantum genus, which comprises numerous species. Maidenhair ferns are typically grown for their ornamental value and are popular choices for indoor gardening or shaded outdoor areas with high humidity. They require moist soil and indirect light to thrive.',
          image: 'insert Maidenhair fern image link here',
        },
        {
          name: 'Mountain laurel (Kalmia latifolia)',
          description:
            'Mountain laurel is a broadleaf evergreen shrub native to the eastern United States. It is known for its beautiful clusters of cup-shaped flowers that come in shades of pink, white, or red. Mountain laurel plants have glossy, dark green leaves and are often grown as ornamental shrubs in gardens or naturalized in woodland areas.',
          image: 'insert Mountain laurel image link here',
        },
        {
          name: 'Orchids (Orchidaceae family)',
          description:
            'Orchids are a diverse and widespread family of flowering plants known for their intricate and often fragrant blooms. They come in a wide variety of shapes, sizes, and colors. Orchids are highly prized for their exotic beauty and are often cultivated by enthusiasts. While some orchid species can be challenging to grow, many popular orchid varieties are suitable for indoor cultivation with proper care.',
          image: 'insert Orchids image link here',
        },
        {
          name: 'Trilliums (Trillium spp.)',
          description:
            'Trilliums are perennial wildflowers that are native to temperate regions of North America and Asia. They are known for their distinctive three-petaled flowers and whorl of leaves. Trilliums are typically found in woodland environments and are valued for their delicate beauty. They are popular among wildflower enthusiasts and can also be cultivated in shaded garden areas.',
          image: 'insert Trilliums image link here',
        },
      ],
    },
    3: {
      res: 3,
      conditions: {
        ph: '7',
        moist: '700-1000',
      },
      names: [
        {
          name: 'Hollyhocks (Alcea rosea)',
          description:
            'Hollyhocks are tall flowering plants that belong to the Alcea rosea species. They are characterized by their sturdy stems, large colorful flowers, and palmate leaves. Hollyhocks are often grown against walls or fences for support and are favored for their cottage garden charm. They come in a range of colors, including pink, red, yellow, and white.',
          image: 'insert Hollyhocks image link here',
        },
        {
          name: 'Lavender (Lavandula spp.)',
          description:
            'Lavender is a genus of flowering plants that are known for their fragrant blooms and aromatic foliage. They are widely cultivated for their essential oils, culinary uses, and ornamental value. Lavender plants have slender stems, gray-green leaves, and clusters of small, fragrant flowers that can be purple, pink, white, or blue, depending on the species.',
          image: 'insert Lavender image link here',
        },
        {
          name: 'Iris (Iris spp.)',
          description:
            'Irises are perennial flowering plants that belong to the Iris genus. They are known for their striking and intricate flowers, which come in a wide range of colors and patterns. Irises are commonly grown in gardens and are popular choices for borders, beds, or water gardens. They prefer well-drained soil and thrive in sunny locations.',
          image: 'insert Iris image link here',
        },
        {
          name: 'Sedums (Sedum spp.)',
          description:
            'Sedums, also known as stonecrops, are a diverse group of succulent plants that are valued for their drought tolerance and easy care. They come in various shapes, sizes, and colors, ranging from low-growing ground covers to upright flowering perennials. Sedums are commonly grown in rock gardens, containers, or as border plants.',
          image: 'insert Sedums image link here',
        },
        {
          name: 'Yarrow (Achillea spp.)',
          description:
            'Yarrow is a perennial herbaceous plant that belongs to the Achillea genus. It is characterized by its feathery foliage and flat-topped flower clusters. Yarrow flowers can be found in a wide range of colors, including white, yellow, pink, and red. These plants are popular for attracting pollinators and are often used in wildflower meadows or cottage-style gardens.',
          image: 'insert Yarrow image link here',
        },
        {
          name: 'Russian sage (Perovskia atriplicifolia)',
          description:
            'Russian sage is a woody perennial plant that is native to Central Asia. It features silvery-gray foliage and long, slender spikes of lavender-blue flowers. Russian sage is prized for its airy and aromatic presence in the garden and is often used as a background or border plant. It thrives in full sun and well-drained soil.',
          image: 'insert Russian sage image link here',
        },
        {
          name: 'Canterbury bells (Campanula medium)',
          description:
            'Canterbury bells are biennial or short-lived perennial plants that belong to the Campanula medium species. They are known for their bell-shaped flowers that come in various colors, including blue, purple, pink, and white. Canterbury bells are often grown in cottage gardens or mixed borders and can add vertical interest to the landscape.',
          image: 'insert Canterbury bells image link here',
        },
      ],
    },
    4: {
      res: 4,
      conditions: {
        ph: '6',
        moist: '400-600',
      },
      names: [
        {
          name: 'Bog rosemary (Andromeda polifolia)',
          description:
            'Bog rosemary is a small evergreen shrub that belongs to the Andromeda polifolia species. It is known for its delicate, bell-shaped flowers that can be pink or white. Bog rosemary is typically found in wetland areas such as bogs and marshes and is valued for its ability to thrive in acidic, moist conditions.',
          image: 'rosemary',
        },
        {
          name: 'Cranberries (Vaccinium oxycoccos)',
          description:
            'Cranberries are small, tart berries that belong to the Vaccinium oxycoccos species. They are known for their vibrant red color and are often associated with Thanksgiving and holiday meals. Cranberries are grown commercially in bogs and are also used in various culinary preparations and beverages.',
          image: 'rosemary',
        },
        {
          name: 'Leatherleaf fern (Rumohra adiantiformis)',
          description:
            'Leatherleaf fern, also known as Rumohra adiantiformis, is a species of fern with leathery fronds. It is characterized by its glossy, dark green foliage and arching growth habit. Leatherleaf fern is often used in floral arrangements and is popular in the floristry industry.',
          image: 'rosemary',
        },
        {
          name: 'Sphagnum moss (Sphagnum spp.)',
          description:
            'Sphagnum moss is a type of moss that belongs to the Sphagnum genus. It is known for its ability to retain water and is commonly found in wetland areas such as bogs and swamps. Sphagnum moss is used for various purposes, including as a growing medium for certain plants, as an ingredient in potting mixes, and for decorative purposes.',
          image: 'rosemary',
        },
        {
          name: 'Sundews (Drosera spp.)',
          description:
            'Sundews are a group of carnivorous plants that belong to the Drosera genus. They are known for their small, sticky tentacles that capture and digest insects. Sundews typically grow in nutrient-poor soils and thrive in boggy or wetland environments. They are fascinating plants to observe and are often cultivated by enthusiasts.',
          image: 'rosemary',
        },
        {
          name: 'Sweet pepperbush (Clethra alnifolia)',
          description:
            'Sweet pepperbush, also known as Clethra alnifolia, is a deciduous shrub that produces fragrant, white or pinkish flowers. It is valued for its tolerance to wet conditions and its ability to attract pollinators, such as bees and butterflies. Sweet pepperbush is often used in wetland restoration projects and as an ornamental plant in gardens.',
          image: 'rosemary',
        },
        {
          name: 'Wintergreen (Gaultheria procumbens)',
          description:
            'Wintergreen is a low-growing evergreen shrub that belongs to the Gaultheria procumbens species. It is known for its aromatic leaves and bright red berries. Wintergreen is often used as groundcover in woodland gardens and is also a source of wintergreen flavoring in certain products.',
          image: 'rosemary',
        },
      ],
    },
    5: {
      res: 5,
      conditions: {
        ph: '7',
        moist: '400-600',
      },
      names: [
        {
          name: 'Daylilies (Hemerocallis spp.)',
          description:
            'Daylilies are flowering plants that belong to the Hemerocallis genus. They are known for their attractive and colorful flowers that typically last for a single day. Daylilies come in a variety of colors and are popular choices for garden borders and landscaping. They are relatively low-maintenance plants that can tolerate a pH level of 7 and prefer moist conditions.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Coral bells (Heuchera spp.)',
          description:
            'Coral bells, also known as Heuchera, are herbaceous perennial plants that are valued for their attractive foliage. They have vibrant leaves in various colors, including shades of green, red, purple, and silver. Coral bells produce delicate flowers on tall stems, adding additional visual interest. These plants can thrive in pH-neutral conditions and prefer moist soil.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Foamflower (Tiarella cordifolia)',
          description:
            'Foamflower, scientifically known as Tiarella cordifolia, is a perennial plant native to North America. It gets its name from the delicate, foam-like clusters of small flowers that adorn the plant. Foamflower prefers shady locations and moist, well-draining soil. It can tolerate a pH level of 7 and adds a graceful touch to woodland gardens or shady borders.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Japanese forest grass (Hakonechloa macra)',
          description:
            'Japanese forest grass, or Hakonechloa macra, is a graceful ornamental grass native to Japan. It features cascading, arching foliage in shades of green, gold, or variegated combinations. Japanese forest grass thrives in shady locations and prefers consistently moist soil. It can tolerate a pH level of 7 and is often used to add texture and movement to garden landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: "Lady's mantle (Alchemilla spp.)",
          description:
            "Lady's mantle, scientifically known as Alchemilla, is a perennial plant that is prized for its beautiful, pleated leaves and clusters of small, yellowish-green flowers. Lady's mantle prefers moist, well-draining soil and can tolerate a pH level of 7. It is often used in borders, rock gardens, and cottage-style landscapes for its charming appearance and ability to attract beneficial insects.",
          image: '', // Placeholder for the image link
        },
        {
          name: 'Sedges (Carex spp.)',
          description:
            'Sedges are a diverse group of grass-like plants that belong to the Carex genus. They come in various sizes, colors, and textures, making them versatile choices for garden landscapes. Sedges thrive in moist soil conditions and can tolerate a pH level of 7. They are often used as groundcovers, in container gardens, or near water features to add visual interest.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Woodland phlox (Phlox divaricata)',
          description:
            'Woodland phlox, or Phlox divaricata, is a herbaceous perennial plant that produces clusters of fragrant, pale lavender or violet flowers. It prefers partial shade and moist, well-draining soil. Woodland phlox can tolerate a pH level of 7 and is a popular choice for woodland gardens, borders, and naturalistic plantings.',
          image: '', // Placeholder for the image link
        },
      ],
    },
    6: {
      res: 6,
      conditions: {
        ph: '7',
        moist: '400-600',
      },
      names: [
        {
          name: 'Butterfly weed (Asclepias tuberosa)',
          description:
            'Butterfly weed, scientifically known as Asclepias tuberosa, is a perennial plant that attracts butterflies with its vibrant orange flowers. It is a sun-loving plant that thrives in well-draining soil. Butterfly weed can tolerate a pH level greater than 7 and is commonly used in butterfly gardens, native plantings, and pollinator-friendly landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Coneflowers (Echinacea spp.)',
          description:
            'Coneflowers, belonging to the Echinacea genus, are popular flowering plants native to North America. They are known for their distinctive cone-shaped centers surrounded by colorful petals. Coneflowers thrive in full sun and well-draining soil. They can tolerate a pH level greater than 7 and are attractive to pollinators, making them excellent additions to sunny borders or wildflower gardens.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Salvia (Salvia spp.)',
          description:
            'Salvia is a diverse genus of flowering plants that includes many different species and varieties. They are valued for their attractive flowers, which can come in various colors, including shades of blue, purple, red, or white. Salvias prefer full sun and well-draining soil. They can tolerate a pH level greater than 7 and are often used to add vibrant color to garden landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Shasta daisies (Leucanthemum x superbum)',
          description:
            'Shasta daisies, scientifically known as Leucanthemum x superbum, are herbaceous perennials that produce large, white, daisy-like flowers with yellow centers. They prefer full sun and well-draining soil. Shasta daisies can tolerate a pH level greater than 7 and are popular choices for borders, cottage gardens, and cut flower arrangements.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Verbena (Verbena spp.)',
          description:
            'Verbena is a genus of flowering plants that includes many different species, both annuals and perennials. They are known for their clusters of small, colorful flowers that attract butterflies and pollinators. Verbena plants thrive in full sun and well-draining soil. They can tolerate a pH level greater than 7 and are often used in hanging baskets, containers, or garden borders.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Russian sage (Perovskia atriplicifolia)',
          description:
            'Russian sage, scientifically known as Perovskia atriplicifolia, is a perennial plant native to Central Asia. It features aromatic silver-gray foliage and tall spikes of lavender-blue flowers. Russian sage prefers full sun and well-draining soil. It can tolerate a pH level greater than 7 and is commonly used to add texture and color to garden landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Yucca (Yucca spp.)',
          description:
            'Yucca is a genus of perennial plants known for their distinctive, sword-shaped leaves and tall flower spikes. They are hardy plants that can tolerate a wide range of conditions, including full sun, well-draining soil, and a pH level greater than 7. Yuccas are often used in arid or xeriscape gardens and can add a sculptural element to landscapes.',
          image: '', // Placeholder for the image link
        },
      ],
    },
    7: {
      res: 7,
      conditions: {
        ph: '6',
        moist: '100-300',
      },
      names: [
        {
          name: 'Heather (Calluna spp.)',
          description:
            'Heather, belonging to the Calluna genus, is a group of low-growing evergreen shrubs known for their vibrant foliage and small, bell-shaped flowers. They prefer acidic soil with a pH level lower than or equal to 6 and moist, well-draining conditions. Heather is commonly used in rock gardens, borders, or as groundcovers to add color and texture.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Junipers (Juniperus spp.)',
          description:
            'Junipers are coniferous evergreen shrubs or trees that belong to the Juniperus genus. They come in various shapes and sizes, including low-growing groundcovers and tall, upright forms. Junipers thrive in well-draining soil and can tolerate a pH level lower than or equal to 6. They are commonly used in landscaping for their attractive foliage and ability to withstand harsh conditions.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Pine trees (Pinus spp.)',
          description:
            'Pine trees are evergreen conifers that belong to the Pinus genus. They are known for their tall, straight trunks, needle-like leaves, and characteristic pine cones. Pine trees prefer well-draining soil and can tolerate a pH level lower than or equal to 6. They are widely planted for their aesthetic value, timber production, and as windbreaks or privacy screens.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Rhododendrons (Rhododendron spp.)',
          description:
            'Rhododendrons are flowering evergreen shrubs that belong to the Rhododendron genus. They produce large clusters of colorful flowers and have attractive foliage. Rhododendrons prefer acidic soil with a pH level lower than or equal to 6 and consistent moisture. They are popular choices for woodland gardens, borders, or as specimen plants in landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Spruce trees (Picea spp.)',
          description:
            'Spruce trees are coniferous evergreens that belong to the Picea genus. They are characterized by their pyramidal shape, needle-like leaves, and cone-shaped fruit. Spruce trees prefer well-draining soil and can tolerate a pH level lower than or equal to 6. They are commonly used as ornamental trees, windbreaks, or in Christmas tree production.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Witch hazel (Hamamelis spp.)',
          description:
            'Witch hazel is a genus of deciduous shrubs or small trees that produce clusters of fragrant, yellow or orange-red flowers. They prefer acidic soil with a pH level lower than or equal to 6 and moist conditions. Witch hazel is prized for its late-winter or early-spring blooms and is often used in woodland gardens or as a focal point in landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Lingonberries (Vaccinium vitis-idaea)',
          description:
            'Lingonberries are small evergreen shrubs that belong to the Vaccinium genus, which also includes blueberries and cranberries. They produce tart, red berries and have shiny, dark green leaves. Lingonberries prefer acidic soil with a pH level lower than or equal to 6 and moist, well-draining conditions. They are popular in edible gardens and are used for their culinary and medicinal purposes.',
          image: '', // Placeholder for the image link
        },
      ],
    },
    8: {
      res: 8,
      conditions: {
        ph: '7',
        moist: '100-300',
      },
      names: [
        {
          name: 'Agave (Agave spp.)',
          description:
            'Agave is a genus of succulent plants that includes many different species, known for their rosette-shaped leaves and spiky appearance. They prefer well-draining soil and can tolerate a pH level of 7. Agaves are commonly used in arid or desert-style gardens and can add architectural interest to landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Sedums (Sedum spp.)',
          description:
            'Sedums, also known as stonecrops, are a group of succulent plants that belong to the Sedum genus. They come in various sizes and forms, ranging from low-growing groundcovers to taller, upright plants. Sedums thrive in well-draining soil and can tolerate a pH level of 7. They are often used in rock gardens, green roofs, or as low-maintenance landscape plants.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Yucca (Yucca spp.)',
          description:
            'Yucca is a genus of perennial plants known for their distinctive, sword-shaped leaves and tall flower spikes. They are hardy plants that can tolerate a wide range of conditions, including full sun, well-draining soil, and a pH level of 7. Yuccas are often used in arid or xeriscape gardens and can add a sculptural element to landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Lavender (Lavandula spp.)',
          description:
            'Lavender is a group of fragrant flowering plants that belong to the Lavandula genus. They produce spikes of aromatic flowers in shades of purple, blue, or white. Lavender prefers well-draining soil and can tolerate a pH level of 7. It is popular for its soothing fragrance and is often used in herb gardens, borders, or as a natural remedy.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Rosemary (Rosmarinus officinalis)',
          description:
            'Rosemary is an aromatic herb that belongs to the Rosmarinus officinalis species. It has needle-like leaves and produces small, blue flowers. Rosemary prefers well-draining soil and can tolerate a pH level of 7. It is commonly used in culinary dishes, herb gardens, or as an ornamental plant in landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Thyme (Thymus spp.)',
          description:
            'Thyme is a low-growing herb that belongs to the Thymus genus. It has small, fragrant leaves and produces clusters of pink, white, or lavender flowers. Thyme prefers well-draining soil and can tolerate a pH level of 7. It is often used as a culinary herb, groundcover, or in rock gardens for its aromatic foliage and attractive blooms.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Sage (Salvia spp.)',
          description:
            'Sage is a diverse genus of flowering plants that includes many different species and varieties. They are valued for their aromatic leaves and attractive flowers, which can come in various colors. Sage plants thrive in well-draining soil and can tolerate a pH level of 7. They are often used in culinary dishes, herb gardens, or as ornamental plants in landscapes.',
          image: '', // Placeholder for the image link
        },
      ],
    },
    9: {
      res: 9,
      conditions: {
        ph: '7',
        moist: '100-300',
      },
      names: [
        {
          name: 'Agave (Agave spp.)',
          description:
            'Agave is a genus of succulent plants that includes many different species, known for their rosette-shaped leaves and spiky appearance. They prefer well-draining soil and can tolerate a pH level greater than 7. Agaves are commonly used in arid or desert-style gardens and can add architectural interest to landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Yucca (Yucca spp.)',
          description:
            'Yucca is a genus of perennial plants known for their distinctive, sword-shaped leaves and tall flower spikes. They are hardy plants that can tolerate a wide range of conditions, including full sun, well-draining soil, and a pH level greater than 7. Yuccas are often used in arid or xeriscape gardens and can add a sculptural element to landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Lavender (Lavandula spp.)',
          description:
            'Lavender is a group of fragrant flowering plants that belong to the Lavandula genus. They produce spikes of aromatic flowers in shades of purple, blue, or white. Lavender prefers well-draining soil and can tolerate a pH level greater than 7. It is popular for its soothing fragrance and is often used in herb gardens, borders, or as a natural remedy.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Russian sage (Perovskia atriplicifolia)',
          description:
            'Russian sage, scientifically known as Perovskia atriplicifolia, is a perennial plant native to Central Asia. It features aromatic silver-gray foliage and tall spikes of lavender-blue flowers. Russian sage prefers full sun and well-draining soil. It can tolerate a pH level greater than 7 and is commonly used to add texture and color to garden landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Texas sage (Leucophyllum spp.)',
          description:
            'Texas sage is a group of flowering shrubs that belong to the Leucophyllum genus. They produce clusters of tubular, purple or pink flowers and have silver-gray foliage. Texas sage plants prefer full sun and well-draining soil. They can tolerate a pH level greater than 7 and are commonly used in arid or desert gardens.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Desert marigold (Baileya multiradiata)',
          description:
            'Desert marigold, scientifically known as Baileya multiradiata, is a perennial plant native to arid regions of North America. It features bright yellow flowers with daisy-like petals and silvery-gray foliage. Desert marigold prefers full sun and well-draining soil. It can tolerate a pH level greater than 7 and is often used in xeriscape gardens or naturalistic landscapes.',
          image: '', // Placeholder for the image link
        },
        {
          name: 'Red yucca (Hesperaloe parviflora)',
          description:
            'Red yucca, scientifically known as Hesperaloe parviflora, is a succulent plant native to the arid regions of Texas and Mexico. It has long, narrow leaves and produces tall spikes of tubular, coral-red flowers. Red yucca thrives in full sun and well-draining soil. It can tolerate a pH level greater than 7 and is commonly used in water-wise gardens or as a focal point in landscapes.',
          image: '', // Placeholder for the image link
        },
      ],
    },
  };

  return (
    <div className="suggestions">
      <h1 className="title">Suggestions</h1>

      <div className="suggestion_container">
        {Object.keys(plants).map((key) => {
          const plant = plants[key];
          if (plant.res === result) {
            return (
              <div key={key}>
                <div className="classification_container">
                  <h3>pH level: {plant.res}</h3>
                  <h3>Moisture: {plant.conditions.moist}</h3>
                </div>

                <div className="plants_main_container">
                  <span>Plants Suggestions:</span>
                  <div className="plants_container">
                    {plant.names.map((PLANTDETAILS, index) => (
                      <div className="plant-each-container" key={index}>
                        <h1>*{PLANTDETAILS.name}</h1>
                        <img
                          src={imagePaths[PLANTDETAILS.image]}
                          alt={PLANTDETAILS.name}
                        />
                        <p>{PLANTDETAILS.description}</p>
                      </div>
                    ))}
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
