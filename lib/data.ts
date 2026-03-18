export interface Property {
  id: string
  name: string
  builder: string
  location: string
  area: string
  price: string
  priceValue: number
  bhk: string[]
  type: 'Apartment' | 'Villa' | 'Plot'
  size: string
  status: 'Ready to Move' | 'Under Construction' | 'New Launch'
  amenities: string[]
  description: string
  highlights: string[]
  images: string[]
  floorPlans: string[]
  lat: number
  lng: number
  featured: boolean
  luxury: boolean
  possession: string
  totalUnits: number
  availableUnits: number
  rera: string
}

export interface Developer {
  id: string
  name: string
  logo: string
  description: string
  established: number
  projectsCompleted: number
  ongoingProjects: number
  rating: number
  headquarters: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  property: string
  avatar: string
}

export const properties: Property[] = [
  {
    id: '1',
    name: 'My Home Bhooja',
    builder: 'My Home Group',
    location: 'Gachibowli',
    area: 'Gachibowli, Hyderabad',
    price: '3.5 Cr - 6.2 Cr',
    priceValue: 35000000,
    bhk: ['3 BHK', '4 BHK'],
    type: 'Apartment',
    size: '2850 - 4200 sq.ft',
    status: 'Ready to Move',
    amenities: ['Swimming Pool', 'Gymnasium', 'Clubhouse', 'Tennis Court', 'Jogging Track', 'Spa', 'Kids Play Area', 'Party Hall', 'Indoor Games'],
    description: 'My Home Bhooja is an ultra-luxury residential project offering world-class amenities and premium living spaces in the heart of Gachibowli. With meticulously designed apartments and state-of-the-art facilities, it represents the pinnacle of luxury living in Hyderabad.',
    highlights: ['Vastu Compliant', 'Premium Interiors', 'Smart Home Features', 'Private Terrace Gardens', '24x7 Concierge'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4401,
    lng: 78.3489,
    featured: true,
    luxury: true,
    possession: 'Immediate',
    totalUnits: 450,
    availableUnits: 28,
    rera: 'P02400003456'
  },
  {
    id: '2',
    name: 'Prestige High Fields',
    builder: 'Prestige Group',
    location: 'Financial District',
    area: 'Nanakramguda, Hyderabad',
    price: '4.2 Cr - 8.5 Cr',
    priceValue: 42000000,
    bhk: ['3 BHK', '4 BHK', '5 BHK'],
    type: 'Apartment',
    size: '3200 - 5500 sq.ft',
    status: 'Under Construction',
    amenities: ['Infinity Pool', 'Golf Simulator', 'Sky Lounge', 'Private Cinema', 'Helipad', 'Spa & Wellness', 'Business Center', 'Wine Cellar'],
    description: 'Prestige High Fields sets new standards in luxury living with its iconic architecture and unparalleled amenities. Located in the prestigious Financial District, it offers panoramic city views and world-class living experiences.',
    highlights: ['Iconic Architecture', 'Sky Gardens', 'Private Elevators', 'Butler Service', 'Imported Fittings'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4156,
    lng: 78.3816,
    featured: true,
    luxury: true,
    possession: 'Dec 2025',
    totalUnits: 320,
    availableUnits: 145,
    rera: 'P02400004567'
  },
  {
    id: '3',
    name: 'Aparna Zenon',
    builder: 'Aparna Constructions',
    location: 'Hitech City',
    area: 'Nallagandla, Hyderabad',
    price: '2.8 Cr - 4.5 Cr',
    priceValue: 28000000,
    bhk: ['3 BHK', '4 BHK'],
    type: 'Apartment',
    size: '2400 - 3800 sq.ft',
    status: 'Ready to Move',
    amenities: ['Rooftop Pool', 'Meditation Center', 'Library', 'Mini Theater', 'Squash Court', 'Yoga Deck', 'Senior Citizen Park', 'Amphitheater'],
    description: 'Aparna Zenon offers a perfect blend of luxury and tranquility with its thoughtfully designed spaces and premium amenities. Experience elevated living with stunning views of the surrounding landscape.',
    highlights: ['Green Building Certified', 'Rainwater Harvesting', 'Solar Power', 'EV Charging', 'Organic Garden'],
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4622,
    lng: 78.3109,
    featured: true,
    luxury: true,
    possession: 'Immediate',
    totalUnits: 280,
    availableUnits: 12,
    rera: 'P02400005678'
  },
  {
    id: '4',
    name: 'Rajapushpa Provincia',
    builder: 'Rajapushpa Properties',
    location: 'Kondapur',
    area: 'Kokapet, Hyderabad',
    price: '5.5 Cr - 12 Cr',
    priceValue: 55000000,
    bhk: ['4 BHK', '5 BHK', 'Penthouse'],
    type: 'Villa',
    size: '4500 - 8000 sq.ft',
    status: 'Under Construction',
    amenities: ['Private Pool', 'Home Theater', 'Wine Cellar', 'Garden', 'Staff Quarters', 'Multi-car Garage', 'Outdoor Kitchen', 'Fire Pit'],
    description: 'Rajapushpa Provincia presents exclusive luxury villas designed for those who demand the extraordinary. Each villa is a masterpiece of architecture with private amenities and expansive living spaces.',
    highlights: ['Private Swimming Pool', 'Landscaped Gardens', 'Smart Home Automation', 'Italian Marble', 'Designer Interiors'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4277,
    lng: 78.3466,
    featured: true,
    luxury: true,
    possession: 'Mar 2026',
    totalUnits: 85,
    availableUnits: 32,
    rera: 'P02400006789'
  },
  {
    id: '5',
    name: 'Phoenix Golf Edge',
    builder: 'Phoenix Group',
    location: 'Gachibowli',
    area: 'Gachibowli, Hyderabad',
    price: '6.8 Cr - 15 Cr',
    priceValue: 68000000,
    bhk: ['4 BHK', '5 BHK', 'Duplex'],
    type: 'Apartment',
    size: '4800 - 9500 sq.ft',
    status: 'New Launch',
    amenities: ['Golf Course View', 'Private Putting Green', 'Cigar Lounge', 'Art Gallery', 'Concierge Service', 'Valet Parking', 'Rooftop Restaurant', 'Observatory'],
    description: 'Phoenix Golf Edge offers an unparalleled living experience overlooking the lush greens of the Hyderabad Golf Course. This ultra-premium development caters to the most discerning homebuyers.',
    highlights: ['Golf Course Frontage', 'Panoramic Views', 'Double Height Living', 'Private Lift Lobby', 'Imported Kitchen'],
    images: [
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4389,
    lng: 78.3578,
    featured: true,
    luxury: true,
    possession: 'Jun 2027',
    totalUnits: 120,
    availableUnits: 120,
    rera: 'P02400007890'
  },
  {
    id: '6',
    name: 'Lodha Bellezza',
    builder: 'Lodha Group',
    location: 'Hitech City',
    area: 'Madhapur, Hyderabad',
    price: '2.2 Cr - 3.8 Cr',
    priceValue: 22000000,
    bhk: ['2 BHK', '3 BHK'],
    type: 'Apartment',
    size: '1850 - 2800 sq.ft',
    status: 'Ready to Move',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Jogging Track', 'Badminton Court', 'Children Park', 'Multipurpose Hall', 'Reading Room'],
    description: 'Lodha Bellezza offers elegant homes with world-class specifications in the IT hub of Hyderabad. Perfect for professionals seeking premium living with excellent connectivity.',
    highlights: ['IT Hub Location', 'Metro Connectivity', 'Premium Specifications', 'Landscaped Gardens', 'Power Backup'],
    images: [
      'https://images.unsplash.com/photo-1600573472556-0f4bdd8f8b7e?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4449,
    lng: 78.3810,
    featured: false,
    luxury: true,
    possession: 'Immediate',
    totalUnits: 380,
    availableUnits: 45,
    rera: 'P02400008901'
  },
  {
    id: '7',
    name: 'Sobha Dream Acres',
    builder: 'Sobha Limited',
    location: 'Financial District',
    area: 'Puppalguda, Hyderabad',
    price: '1.8 Cr - 2.9 Cr',
    priceValue: 18000000,
    bhk: ['2 BHK', '3 BHK'],
    type: 'Apartment',
    size: '1450 - 2200 sq.ft',
    status: 'Under Construction',
    amenities: ['Club House', 'Swimming Pool', 'Tennis Court', 'Basketball Court', 'Gym', 'Party Hall', 'Kids Zone', 'Seniors Park'],
    description: 'Sobha Dream Acres brings the renowned Sobha quality to Hyderabad with meticulously crafted homes surrounded by beautiful landscapes and premium amenities.',
    highlights: ['Sobha Quality', 'Pre-certified IGBC Gold', 'Earthquake Resistant', 'Wide Balconies', 'Cross Ventilation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.3987,
    lng: 78.3678,
    featured: false,
    luxury: false,
    possession: 'Sep 2025',
    totalUnits: 850,
    availableUnits: 234,
    rera: 'P02400009012'
  },
  {
    id: '8',
    name: 'Godrej Platinum',
    builder: 'Godrej Properties',
    location: 'Kondapur',
    area: 'Kondapur, Hyderabad',
    price: '2.5 Cr - 4.2 Cr',
    priceValue: 25000000,
    bhk: ['3 BHK', '4 BHK'],
    type: 'Apartment',
    size: '2100 - 3400 sq.ft',
    status: 'Ready to Move',
    amenities: ['Infinity Pool', 'Sky Deck', 'Mini Golf', 'Meditation Zone', 'Open Air Theater', 'BBQ Area', 'Pet Park', 'EV Charging'],
    description: 'Godrej Platinum offers luxurious residences with thoughtful design and sustainable features. Experience the trusted Godrej quality in a prime Kondapur location.',
    highlights: ['IGBC Gold Certified', 'Air Purification System', 'Water Recycling', 'Solar Lighting', 'Smart Meters'],
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4614,
    lng: 78.3599,
    featured: false,
    luxury: true,
    possession: 'Immediate',
    totalUnits: 290,
    availableUnits: 18,
    rera: 'P02400010123'
  },
  {
    id: '9',
    name: 'DLF Privana',
    builder: 'DLF Limited',
    location: 'Gachibowli',
    area: 'Nanakramguda, Hyderabad',
    price: '7.5 Cr - 18 Cr',
    priceValue: 75000000,
    bhk: ['4 BHK', '5 BHK', 'Penthouse'],
    type: 'Apartment',
    size: '5200 - 12000 sq.ft',
    status: 'New Launch',
    amenities: ['Private Pool Deck', 'Wine Tasting Room', 'Golf Simulator', 'Private Cinema', 'Art Studio', 'Spa Suite', 'Executive Lounge', 'Rooftop Helipad'],
    description: 'DLF Privana represents the zenith of luxury living in Hyderabad. These exclusive residences offer unprecedented space, privacy, and amenities for the elite few.',
    highlights: ['Private Lift', 'Dedicated Staff Entrance', 'Personalized Concierge', 'Imported Materials', 'Designer Interiors'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4234,
    lng: 78.3756,
    featured: true,
    luxury: true,
    possession: 'Dec 2027',
    totalUnits: 45,
    availableUnits: 45,
    rera: 'P02400011234'
  },
  {
    id: '10',
    name: 'Brigade Citadel',
    builder: 'Brigade Group',
    location: 'Financial District',
    area: 'Financial District, Hyderabad',
    price: '1.6 Cr - 2.4 Cr',
    priceValue: 16000000,
    bhk: ['2 BHK', '3 BHK'],
    type: 'Apartment',
    size: '1350 - 1950 sq.ft',
    status: 'Under Construction',
    amenities: ['Swimming Pool', 'Clubhouse', 'Gym', 'Landscaped Gardens', 'Jogging Track', 'Indoor Games', 'Party Lawn', 'Shopping Complex'],
    description: 'Brigade Citadel offers well-designed homes in the heart of Financial District with easy access to IT parks, schools, and entertainment zones.',
    highlights: ['Premium Location', 'Branded Fittings', 'Ample Parking', 'Fire Safety', '24x7 Security'],
    images: [
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4189,
    lng: 78.3867,
    featured: false,
    luxury: false,
    possession: 'Jun 2025',
    totalUnits: 520,
    availableUnits: 187,
    rera: 'P02400012345'
  },
  {
    id: '11',
    name: 'Mahindra Windchimes',
    builder: 'Mahindra Lifespaces',
    location: 'Kondapur',
    area: 'Adarsh Palm Retreat, Hyderabad',
    price: '1.9 Cr - 3.1 Cr',
    priceValue: 19000000,
    bhk: ['2 BHK', '3 BHK'],
    type: 'Apartment',
    size: '1550 - 2350 sq.ft',
    status: 'Ready to Move',
    amenities: ['Clubhouse', 'Pool', 'Tennis Court', 'Yoga Room', 'Library', 'Crèche', 'Convenience Store', 'Medical Room'],
    description: 'Mahindra Windchimes offers sustainable luxury living with homes designed for modern families. Experience the perfect balance of comfort and eco-consciousness.',
    highlights: ['IGBC Platinum', 'Net Zero Water', 'Waste Management', 'Urban Forest', 'Cycling Track'],
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4567,
    lng: 78.3623,
    featured: false,
    luxury: false,
    possession: 'Immediate',
    totalUnits: 420,
    availableUnits: 56,
    rera: 'P02400013456'
  },
  {
    id: '12',
    name: 'Salarpuria Magnus',
    builder: 'Salarpuria Sattva',
    location: 'Hitech City',
    area: 'Shilpa Hills, Hyderabad',
    price: '2.1 Cr - 3.5 Cr',
    priceValue: 21000000,
    bhk: ['3 BHK', '4 BHK'],
    type: 'Apartment',
    size: '1800 - 2900 sq.ft',
    status: 'Ready to Move',
    amenities: ['Swimming Pool', 'Squash Court', 'Badminton', 'Table Tennis', 'Gymnasium', 'Steam & Sauna', 'Party Hall', 'Landscaped Gardens'],
    description: 'Salarpuria Magnus offers spacious homes with excellent ventilation and natural light. Located in the IT corridor with excellent connectivity to major tech parks.',
    highlights: ['IT Hub Location', 'Spacious Homes', 'Natural Ventilation', 'Covered Parking', 'Rainwater Harvesting'],
    images: [
      'https://images.unsplash.com/photo-600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4489,
    lng: 78.3789,
    featured: false,
    luxury: false,
    possession: 'Immediate',
    totalUnits: 340,
    availableUnits: 23,
    rera: 'P02400014567'
  },
  {
    id: '13',
    name: 'Tata Promont',
    builder: 'Tata Housing',
    location: 'Financial District',
    area: 'Raidurg, Hyderabad',
    price: '3.2 Cr - 5.8 Cr',
    priceValue: 32000000,
    bhk: ['3 BHK', '4 BHK'],
    type: 'Apartment',
    size: '2600 - 4100 sq.ft',
    status: 'Under Construction',
    amenities: ['Golf Putting', 'Infinity Pool', 'Private Cabanas', 'Sky Lounge', 'Business Center', 'Wine Lounge', 'Pet Spa', 'Rooftop Restaurant'],
    description: 'Tata Promont brings the trusted Tata legacy to luxury housing. Experience meticulously crafted homes with world-class amenities and sustainable features.',
    highlights: ['Tata Quality', 'Premium Specifications', 'Smart Home Ready', 'EV Infrastructure', 'Concierge Services'],
    images: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4156,
    lng: 78.3923,
    featured: true,
    luxury: true,
    possession: 'Mar 2026',
    totalUnits: 180,
    availableUnits: 89,
    rera: 'P02400015678'
  },
  {
    id: '14',
    name: 'PBEL City',
    builder: 'PBEL Group',
    location: 'Gachibowli',
    area: 'Appa Junction, Hyderabad',
    price: '1.2 Cr - 1.8 Cr',
    priceValue: 12000000,
    bhk: ['2 BHK', '3 BHK'],
    type: 'Apartment',
    size: '1150 - 1650 sq.ft',
    status: 'Ready to Move',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Play Area', 'Jogging Track', 'Basketball Court', 'Shopping Arcade', 'ATM'],
    description: 'PBEL City offers affordable luxury homes in a well-planned township with excellent amenities and proximity to IT hubs.',
    highlights: ['Township Living', 'Affordable Luxury', 'School Nearby', 'Hospital Access', 'Metro Connectivity'],
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4034,
    lng: 78.3534,
    featured: false,
    luxury: false,
    possession: 'Immediate',
    totalUnits: 1200,
    availableUnits: 156,
    rera: 'P02400016789'
  },
  {
    id: '15',
    name: 'Aliens Space Station',
    builder: 'Aliens Group',
    location: 'Hitech City',
    area: 'Tellapur, Hyderabad',
    price: '4.8 Cr - 9.2 Cr',
    priceValue: 48000000,
    bhk: ['4 BHK', '5 BHK'],
    type: 'Villa',
    size: '4200 - 7500 sq.ft',
    status: 'Ready to Move',
    amenities: ['Private Garden', 'Home Theater', 'Personal Gym', 'Private Pool', 'Staff Quarters', 'Garage', 'Terrace Garden', 'Security System'],
    description: 'Aliens Space Station offers exclusive villa plots and ready villas in a gated community with world-class infrastructure and amenities.',
    highlights: ['Gated Community', 'Club Membership', 'Landscaped Streets', 'Underground Cabling', 'Smart Security'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4856,
    lng: 78.2934,
    featured: false,
    luxury: true,
    possession: 'Immediate',
    totalUnits: 120,
    availableUnits: 8,
    rera: 'P02400017890'
  },
  {
    id: '16',
    name: 'NCC Urban One',
    builder: 'NCC Urban',
    location: 'Kondapur',
    area: 'Narsingi, Hyderabad',
    price: '1.5 Cr - 2.3 Cr',
    priceValue: 15000000,
    bhk: ['2 BHK', '3 BHK'],
    type: 'Apartment',
    size: '1280 - 1890 sq.ft',
    status: 'Under Construction',
    amenities: ['Clubhouse', 'Swimming Pool', 'Gym', 'Indoor Games', 'Lawn Tennis', 'Jogging Track', 'Kids Play', 'Multipurpose Hall'],
    description: 'NCC Urban One offers well-designed homes with quality construction and modern amenities at competitive prices.',
    highlights: ['Quality Construction', 'Affordable Pricing', 'Good Connectivity', 'Ample Greenery', 'Future Metro'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.3923,
    lng: 78.3412,
    featured: false,
    luxury: false,
    possession: 'Dec 2025',
    totalUnits: 680,
    availableUnits: 245,
    rera: 'P02400018901'
  },
  {
    id: '17',
    name: 'Embassy Boulevard',
    builder: 'Embassy Group',
    location: 'Financial District',
    area: 'Financial District, Hyderabad',
    price: '8.5 Cr - 22 Cr',
    priceValue: 85000000,
    bhk: ['5 BHK', '6 BHK', 'Villa'],
    type: 'Villa',
    size: '6500 - 15000 sq.ft',
    status: 'New Launch',
    amenities: ['Private Lake', 'Golf Course', 'Equestrian Club', 'Yacht Club', 'Helipad', 'Organic Farm', 'Vineyard', 'Wellness Retreat'],
    description: 'Embassy Boulevard is an ultra-exclusive estate offering palatial villas with unprecedented luxury and privacy. Each estate is designed as a private sanctuary.',
    highlights: ['Lake Front Villas', 'Private Golf Access', 'Horse Riding', 'Organic Living', 'Butler Service'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4089,
    lng: 78.3978,
    featured: true,
    luxury: true,
    possession: 'Jun 2028',
    totalUnits: 35,
    availableUnits: 35,
    rera: 'P02400019012'
  },
  {
    id: '18',
    name: 'Vasavi Urban',
    builder: 'Vasavi Group',
    location: 'Gachibowli',
    area: 'Gachibowli, Hyderabad',
    price: '95 Lakhs - 1.4 Cr',
    priceValue: 9500000,
    bhk: ['2 BHK', '3 BHK'],
    type: 'Apartment',
    size: '980 - 1450 sq.ft',
    status: 'Ready to Move',
    amenities: ['Swimming Pool', 'Gym', 'Community Hall', 'Kids Play Area', 'Indoor Games', 'Visitor Parking', 'Power Backup', 'Water Storage'],
    description: 'Vasavi Urban offers value-for-money homes in Gachibowli with essential amenities and good connectivity to IT parks.',
    highlights: ['Budget Friendly', 'IT Hub Proximity', 'Basic Amenities', 'Good Construction', 'Family Living'],
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4367,
    lng: 78.3567,
    featured: false,
    luxury: false,
    possession: 'Immediate',
    totalUnits: 450,
    availableUnits: 67,
    rera: 'P02400020123'
  },
  {
    id: '19',
    name: 'Ramky One Galaxia',
    builder: 'Ramky Group',
    location: 'Hitech City',
    area: 'Nallagandla, Hyderabad',
    price: '1.1 Cr - 1.7 Cr',
    priceValue: 11000000,
    bhk: ['2 BHK', '3 BHK'],
    type: 'Apartment',
    size: '1050 - 1580 sq.ft',
    status: 'Under Construction',
    amenities: ['Club House', 'Pool', 'Gym', 'Play Area', 'Walking Track', 'Basketball', 'Amphitheater', 'Shopping'],
    description: 'Ramky One Galaxia offers modern homes with excellent specifications at affordable prices. Perfect for young professionals and families.',
    highlights: ['Modern Design', 'Affordable Pricing', 'Smart Features', 'Green Building', 'Good Location'],
    images: [
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4678,
    lng: 78.3234,
    featured: false,
    luxury: false,
    possession: 'Sep 2025',
    totalUnits: 890,
    availableUnits: 312,
    rera: 'P02400021234'
  },
  {
    id: '20',
    name: 'Mantri Celestia',
    builder: 'Mantri Developers',
    location: 'Kondapur',
    area: 'Hafeezpet, Hyderabad',
    price: '2.8 Cr - 4.9 Cr',
    priceValue: 28000000,
    bhk: ['3 BHK', '4 BHK'],
    type: 'Apartment',
    size: '2350 - 3850 sq.ft',
    status: 'Ready to Move',
    amenities: ['Rooftop Infinity Pool', 'Sky Lounge', 'Golf Putting', 'Billiards', 'Home Theater', 'Spa', 'Meditation', 'BBQ Deck'],
    description: 'Mantri Celestia offers premium residences with stunning views and world-class amenities. Experience sophisticated living in the heart of Kondapur.',
    highlights: ['Panoramic Views', 'Premium Interiors', 'Smart Home', 'EV Ready', 'Concierge Service'],
    images: [
      'https://images.unsplash.com/photo-1600573472556-0f4bdd8f8b7e?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
    ],
    floorPlans: [],
    lat: 17.4723,
    lng: 78.3567,
    featured: false,
    luxury: true,
    possession: 'Immediate',
    totalUnits: 195,
    availableUnits: 14,
    rera: 'P02400022345'
  }
]

export const developers: Developer[] = [
  {
    id: '1',
    name: 'My Home Group',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80',
    description: 'My Home Group is one of the leading real estate developers in Hyderabad, known for delivering premium residential and commercial projects with exceptional quality and timely delivery.',
    established: 1988,
    projectsCompleted: 45,
    ongoingProjects: 8,
    rating: 4.8,
    headquarters: 'Hyderabad'
  },
  {
    id: '2',
    name: 'Prestige Group',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80',
    description: 'Prestige Group is a leading property developer in South India with an illustrious track record spanning over four decades. Known for iconic landmarks and innovative designs.',
    established: 1986,
    projectsCompleted: 250,
    ongoingProjects: 45,
    rating: 4.9,
    headquarters: 'Bangalore'
  },
  {
    id: '3',
    name: 'Aparna Constructions',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80',
    description: 'Aparna Constructions has been at the forefront of real estate development in Hyderabad, known for sustainable practices and customer-centric approach.',
    established: 1996,
    projectsCompleted: 60,
    ongoingProjects: 12,
    rating: 4.6,
    headquarters: 'Hyderabad'
  },
  {
    id: '4',
    name: 'Rajapushpa Properties',
    logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200&q=80',
    description: 'Rajapushpa Properties specializes in ultra-luxury villas and premium apartments, creating exclusive communities for discerning homebuyers.',
    established: 2004,
    projectsCompleted: 15,
    ongoingProjects: 5,
    rating: 4.7,
    headquarters: 'Hyderabad'
  },
  {
    id: '5',
    name: 'Phoenix Group',
    logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    description: 'Phoenix Group is renowned for creating landmark developments that redefine luxury living. Their projects are synonymous with innovation and excellence.',
    established: 2001,
    projectsCompleted: 25,
    ongoingProjects: 6,
    rating: 4.8,
    headquarters: 'Hyderabad'
  },
  {
    id: '6',
    name: 'Godrej Properties',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80',
    description: 'Godrej Properties brings the 125+ year legacy of the Godrej Group to real estate, known for sustainability, innovation, and trust.',
    established: 1897,
    projectsCompleted: 180,
    ongoingProjects: 40,
    rating: 4.7,
    headquarters: 'Hyderabad'
  },
  {
    id: '7',
    name: 'Sobha Limited',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80',
    description: 'Sobha Limited is known for its backward integration model and uncompromising quality in construction. A pioneer in luxury real estate.',
    established: 1995,
    projectsCompleted: 140,
    ongoingProjects: 35,
    rating: 4.8,
    headquarters: 'Hyderabad'
  },
  {
    id: '8',
    name: 'DLF Limited',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80',
    description: 'DLF is India\'s largest real estate company with a 75+ year track record. Known for creating iconic landmarks across India.',
    established: 1946,
    projectsCompleted: 350,
    ongoingProjects: 28,
    rating: 4.6,
    headquarters: 'Hyderabad'
  },
  {
    id: '9',
    name: 'Tata Housing',
    logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200&q=80',
    description: 'Tata Housing brings the trusted Tata brand to real estate, known for ethical practices, quality construction, and customer satisfaction.',
    established: 1984,
    projectsCompleted: 85,
    ongoingProjects: 18,
    rating: 4.9,
    headquarters: 'Hyderabad'
  },
  {
    id: '10',
    name: 'Embassy Group',
    logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    description: 'Embassy Group is a leading real estate conglomerate with presence across office spaces, residential, retail, and hospitality sectors.',
    established: 1993,
    projectsCompleted: 120,
    ongoingProjects: 22,
    rating: 4.7,
    headquarters: 'Hyderabad'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'IT Director',
    content: 'Genie Realty made our home buying journey seamless. Their expertise in Hyderabad\'s luxury market is unparalleled. We found our dream home in Gachibowli within weeks.',
    rating: 5,
    property: 'My Home Bhooja',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  },
  {
    id: '2',
    name: 'Priya Reddy',
    role: 'Business Owner',
    content: 'The team at Genie Realty understood exactly what we were looking for. Their personalized approach and attention to detail exceeded our expectations.',
    rating: 5,
    property: 'Prestige High Fields',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  },
  {
    id: '3',
    name: 'Vikram Rao',
    role: 'Tech Entrepreneur',
    content: 'Investing in a villa through Genie Realty was the best decision. Their market knowledge and negotiation skills saved us significantly.',
    rating: 5,
    property: 'Rajapushpa Provincia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
  },
  {
    id: '4',
    name: 'Ananya Krishna',
    role: 'Finance Professional',
    content: 'From property search to documentation, Genie Realty handled everything professionally. Highly recommend their premium services.',
    rating: 5,
    property: 'Aparna Zenon',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  }
]

export const locations = ['Gachibowli', 'Hitech City', 'Kondapur', 'Financial District'] as const
export const propertyTypes = ['Apartment', 'Villa', 'Plot'] as const
export const bhkOptions = ['2 BHK', '3 BHK', '4 BHK', '5 BHK', 'Penthouse'] as const
export const priceRanges = [
  { label: 'Under 1 Cr', min: 0, max: 10000000 },
  { label: '1 - 2 Cr', min: 10000000, max: 20000000 },
  { label: '2 - 5 Cr', min: 20000000, max: 50000000 },
  { label: '5 - 10 Cr', min: 50000000, max: 100000000 },
  { label: 'Above 10 Cr', min: 100000000, max: 1000000000 },
] as const
