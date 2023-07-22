export const dummyTags = [
  {
    id: "1",
    name: "UI/UX",
  },
  {
    id: "2",
    name: "Software Engineering",
  },
  {
    id: "3",
    name: "Artificial Intelligence",
  },
];

export const dummyProvinces = [
  {
    id: "1",
    name: "JAWA BARAT",
  },
  {
    id: "2",
    name: "JAWA TENGAH",
  },
  {
    id: "3",
    name: "JAWA TIMUR",
  },
];

export const dummyCities = [
  {
    id: "1",
    name: "KOTA BANDUNG",
  },
  {
    id: "2",
    name: "KABUPATEN BANDUNG",
  },
  {
    id: "3",
    name: "KOTA CIMAHI",
  },
];

export const dummyUser = {
  name: "Marchotridyo",
  email: "marcho@gmail.com",
  city: "KOTA BANDUNG",
  role: "MENTOR",
  tags: ["UI/UX", "Artificial Intelligence", "Software Engineering"],
  description: "Saya adalah seorang mahasiswa tingkat akhir di ITB.",
};

export const dummyMentors = [
  {
    id: "1",
    name: "Marchotridyo",
    city: "KOTA BANDUNG",
    tags: [
      "Artificial Intelligence",
      "Software Engineering",
      "Education",
      "Sales dan Marketing",
    ],
    imageUrl: "",
    subscriptionStatus: "FREE",
  },
  {
    id: "2",
    name: "Maria Khelli",
    city: "KOTA BANDUNG",
    tags: ["Artificial Intelligence", "Software Engineering"],
    imageUrl: "/next.svg",
    subscriptionStatus: "PREMIUM",
  },
  {
    id: "3",
    name: "Malik Akbar",
    city: "KOTA BANDUNG",
    tags: [
      "Artificial Intelligence",
      "Software Engineering",
      "Education",
      "Sales dan Marketing",
      "UI/UX",
    ],
    imageUrl: "/vercel.svg",
    subscriptionStatus: "PREMIUM",
  },
  {
    id: "4",
    name: "Fayza Nadia",
    city: "KOTA BANDUNG",
    tags: ["Artificial Intelligence"],
    imageUrl: "",
    subscriptionStatus: "FREE",
  },
  {
    id: "5",
    name: "Oppenheimer",
    city: "KOTA BANDUNG",
    tags: [
      "Artificial Intelligence",
      "Software Engineering",
      "Education",
      "Sales dan Marketing",
    ],
    imageUrl: "",
    subscriptionStatus: "PREMIUM",
  },
];

export const dummyMentorWithPicture = {
  name: "Marchotridyo",
  imageUrl: "/next.svg",
  tags: [
    "Artificial Intelligence",
    "Software Engineering",
    "Sales dan Marketing",
  ],
  city: "KOTA BANDUNG",
  subscriptionStatus: "FREE",
};

export const dummyMentorWithoutPicture = {
  name: "Malik Akbar",
  imageUrl: "",
  tags: ["Artificial Intelligence", "Software Engineering"],
  city: "KOTA BANDUNG",
  subscriptionStatus: "PREMIUM",
};

export const dummyReviews = [
  {
    id: "1",
    menteeName: "Maria Khelli",
    updatedAt: new Date().toISOString(),
    review: "Sesi mentoringnya menyenangkan!",
    rating: 4.5,
  },
  {
    id: "2",
    menteeName: "Fayza Nadia",
    updatedAt: new Date().toISOString(),
    review: "Sesi mentoringnya menyenangkan!",
    rating: 3,
  },
  {
    id: "1",
    menteeName: "Oppenheimer",
    updatedAt: new Date().toISOString(),
    review: "Sesi mentoringnya menyenangkan!",
    rating: 2,
  },
];
