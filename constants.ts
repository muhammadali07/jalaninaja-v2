import { TravelPackage, Translation, Language } from './types';

export const WHATSAPP_NUMBER = "6281553335534";

export const PACKAGES: TravelPackage[] = [
  {
    id: 'p1',
    title: 'Bali Paradise Escape',
    location: 'Bali, Indonesia',
    duration: '4 Days 3 Nights',
    price: 5500000,
    category: 'beach',
    image: 'https://picsum.photos/id/1039/800/600',
    gallery: [
      'https://picsum.photos/id/1039/800/600',
      'https://picsum.photos/id/1038/800/600',
      'https://picsum.photos/id/1043/800/600'
    ],
    description: 'Experience the magic of the Island of Gods. From pristine beaches to lush rice terraces, this package offers the perfect blend of relaxation and adventure.',
    facilities: ['5-Star Hotel', 'Airport Transfer', 'Daily Breakfast', 'Private Tour Guide', 'Snorkeling Gear'],
    itinerary: [
      { day: 1, title: 'Arrival & Uluwatu Sunset', desc: 'Pick up from airport, check-in, and sunset dinner at Uluwatu Temple.' },
      { day: 2, title: 'Nusa Penida Island Tour', desc: 'Full day trip to Kelingking Beach, Broken Beach, and Angel Billabong.' },
      { day: 3, title: 'Ubud Cultural Day', desc: 'Visit Monkey Forest, Tegalalang Rice Terrace, and Coffee Plantation.' },
      { day: 4, title: 'Departure', desc: 'Free time for shopping until transfer to airport.' }
    ]
  },
  {
    id: 'p2',
    title: 'Bromo Sunrise Adventure',
    location: 'East Java, Indonesia',
    duration: '2 Days 1 Night',
    price: 2800000,
    category: 'mountain',
    image: 'https://picsum.photos/id/1018/800/600',
    gallery: [
      'https://picsum.photos/id/1018/800/600',
      'https://picsum.photos/id/1015/800/600',
      'https://picsum.photos/id/1016/800/600'
    ],
    description: 'Witness the iconic sunrise over Mount Bromo. A thrilling jeep ride across the sea of sand awaits you in this volcanic landscape.',
    facilities: ['Jeep Rental', 'Homestay', 'Entrance Fees', 'Local Guide', 'Breakfast'],
    itinerary: [
      { day: 1, title: 'Journey to Bromo', desc: 'Travel from Surabaya/Malang to Bromo area. Check-in and rest.' },
      { day: 2, title: 'The Sunrise', desc: '3 AM start for sunrise at Penanjakan, followed by crater hike. Return to city.' }
    ]
  },
  {
    id: 'p3',
    title: 'Raja Ampat Diving',
    location: 'Papua, Indonesia',
    duration: '5 Days 4 Nights',
    price: 12500000,
    category: 'beach',
    image: 'https://picsum.photos/id/1050/800/600',
    gallery: [
      'https://picsum.photos/id/1050/800/600',
      'https://picsum.photos/id/1053/800/600',
      'https://picsum.photos/id/1052/800/600'
    ],
    description: 'Dive into the heart of the Coral Triangle. Pristine waters, vibrant marine life, and breathtaking karst islands.',
    facilities: ['Liveaboard/Resort', 'Full Board Meals', 'Diving Gear', 'Dive Master', 'Speedboat'],
    itinerary: [
      { day: 1, title: 'Sorong Arrival', desc: 'Transfer to Waisai by ferry. Check-in to resort.' },
      { day: 2, title: 'Wayag Islands', desc: 'Hiking to the famous viewpoint of karst islands.' },
      { day: 3, title: 'Diving Spots', desc: 'Dive at Manta Sandy and Cape Kri.' },
      { day: 4, title: 'Piaynemo', desc: 'Visit the star lagoon and local villages.' },
      { day: 5, title: 'Departure', desc: 'Transfer back to Sorong Airport.' }
    ]
  },
  {
    id: 'p4',
    title: 'Yogyakarta Heritage',
    location: 'Yogyakarta, Indonesia',
    duration: '3 Days 2 Nights',
    price: 3200000,
    category: 'culture',
    image: 'https://picsum.photos/id/1040/800/600',
    gallery: [
      'https://picsum.photos/id/1040/800/600',
      'https://picsum.photos/id/1041/800/600',
      'https://picsum.photos/id/1042/800/600'
    ],
    description: 'Immerse yourself in Javanese culture. Visit the majestic Borobudur and Prambanan temples.',
    facilities: ['Boutique Hotel', 'Private Car', 'Temple Tickets', 'Lunch & Dinner', 'Guide'],
    itinerary: [
      { day: 1, title: 'Prambanan Sunset', desc: 'Visit Prambanan temple complex and watch Ramayana Ballet.' },
      { day: 2, title: 'Borobudur Sunrise', desc: 'Early morning at Borobudur followed by Merapi Lava Tour.' },
      { day: 3, title: 'City Tour', desc: 'Visit Sultan Palace and Tamansari Water Castle.' }
    ]
  },
  {
    id: 'p5',
    title: 'Jakarta City Staycation',
    location: 'Jakarta, Indonesia',
    duration: '2 Days 1 Night',
    price: 1800000,
    category: 'city',
    image: 'https://picsum.photos/id/1035/800/600',
    gallery: [
      'https://picsum.photos/id/1035/800/600',
      'https://picsum.photos/id/1033/800/600',
      'https://picsum.photos/id/1031/800/600'
    ],
    description: 'Luxury staycation in the heart of the metropolis. Shopping, fine dining, and relaxation.',
    facilities: ['5-Star Hotel', 'Spa Voucher', 'Dinner Voucher', 'Late Check-out'],
    itinerary: [
      { day: 1, title: 'Check-in & Shop', desc: 'Check in to luxury hotel, shopping at Grand Indonesia.' },
      { day: 2, title: 'Relax & Spa', desc: 'Morning pool session, 2-hour spa treatment, late check-out.' }
    ]
  }
];

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    heroTitle: "Explore Beautiful Destinations with Ease",
    heroSubtitle: "Curated premium experiences across the Indonesian archipelago. Discover your next adventure today.",
    heroCta: "Start Exploring",
    featuredTitle: "Popular Destinations",
    viewAll: "View All Packages",
    pricePerPerson: "/ person",
    bookNow: "Book Package",
    checkoutButton: "Checkout Reservation",
    facilities: "Included Facilities",
    itinerary: "Trip Itinerary",
    duration: "Duration",
    location: "Location",
    bookingTitle: "Complete Your Booking",
    stepDetails: "Guest Details",
    stepSummary: "Review Order",
    formName: "Full Name",
    formPhone: "WhatsApp Number",
    formEmail: "Email Address",
    formPassengers: "Number of Travelers",
    formDate: "Travel Date",
    formSpecialRequest: "Special Requests (Optional)",
    summaryPackage: "Selected Package",
    summaryDate: "Travel Date",
    summaryPassengers: "Travelers",
    summaryTotal: "Total Estimate",
    confirmButton: "Send to WhatsApp",
    backButton: "Back",
    filterAll: "All Destinations"
  },
  id: {
    heroTitle: "Jelajahi Destinasi Indah dengan Mudah",
    heroSubtitle: "Pengalaman premium terpilih di seluruh nusantara. Temukan petualangan Anda berikutnya hari ini.",
    heroCta: "Mulai Jelajah",
    featuredTitle: "Destinasi Populer",
    viewAll: "Lihat Semua Paket",
    pricePerPerson: "/ orang",
    bookNow: "Pesan Paket",
    checkoutButton: "Checkout Reservasi",
    facilities: "Fasilitas Termasuk",
    itinerary: "Rencana Perjalanan",
    duration: "Durasi",
    location: "Lokasi",
    bookingTitle: "Selesaikan Pesanan",
    stepDetails: "Data Tamu",
    stepSummary: "Tinjau Pesanan",
    formName: "Nama Lengkap",
    formPhone: "Nomor WhatsApp",
    formEmail: "Alamat Email",
    formPassengers: "Jumlah Peserta",
    formDate: "Tanggal Perjalanan",
    formSpecialRequest: "Permintaan Khusus (Opsional)",
    summaryPackage: "Paket Terpilih",
    summaryDate: "Tanggal Perjalanan",
    summaryPassengers: "Peserta",
    summaryTotal: "Total Estimasi",
    confirmButton: "Kirim ke WhatsApp",
    backButton: "Kembali",
    filterAll: "Semua Destinasi"
  }
};