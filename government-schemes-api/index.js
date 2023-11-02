const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3000;

// Set Content Security Policy headers
app.use((_, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'none'; font-src 'self' data:; img-src 'self' data:;");
  return next();
});

app.use(cors());
app.use(bodyParser.json());

// Sample data for government schemes
const schemes = [
  {
    id: 1,
    name: "Girl Child Scholarship",
    description: "Scholarship for girl children in Gujarat.",
    profession: "Students",
    minAge: 18,
    gender: "female",
    benefits: "Financial support for education",
    applicationProcess: "Apply online through the official portal.",
    requiredDocuments: "Birth certificate, school records, identity proof",
    startDate: "01-01-2024",
    endDate: "31-12-2024",
    applicationLink: "https://www.gujarat-girlscholarship.com"
  },
  {
    id: 2,
    name: "SC/ST/OBC Welfare Program",
    description: "Social welfare program for SC/ST/OBC communities.",
    profession: "General",
    minAge: 21,
    gender: "male",
    benefits: "Financial assistance, skill development training",
    applicationProcess: "Visit the nearest government office for registration.",
    requiredDocuments: "Caste certificate, income proof, residence proof",
    startDate: "01-04-2024",
    endDate: "31-03-2025",
    applicationLink: "https://www.gujarat-welfareprogram.com"
  },
  {
    id: 3,
    name: "Entrepreneurship Development Scheme",
    description: "Support for starting a new business.",
    profession: "Entrepreneurs",
    minAge: 25,
    gender: "any",
    benefits: "Seed capital, business training, mentorship",
    applicationProcess: "Submit a detailed business plan to the District Office.",
    requiredDocuments: "Business plan, identity proof, address proof",
    startDate: "15-02-2024",
    endDate: "15-02-2025",
    applicationLink: "https://www.gujarat-entrepreneurship.com"
  },
  {
    id: 4,
    name: "Housing for All",
    description: "Affordable housing scheme for everyone.",
    profession: "General",
    minAge: 18,
    gender: "any",
    benefits: "Subsidized housing, low-interest loans",
    applicationProcess: "Apply through the municipal corporation's housing department.",
    requiredDocuments: "Income proof, residence proof, employment details",
    startDate: "01-03-2024",
    endDate: "31-12-2024",
    applicationLink: "https://www.gujarat-housingforall.com"
  },
  {
    id: 5,
    name: "Farmers' Support Initiative",
    description: "Financial assistance and training for farmers.",
    profession: "Farmers",
    minAge: 18,
    gender: "any",
    benefits: "Crop insurance, agricultural training, equipment subsidy",
    applicationProcess: "Visit the nearest agriculture department office.",
    requiredDocuments: "Land ownership documents, Aadhaar card, bank details",
    startDate: "10-05-2024",
    endDate: "10-05-2025",
    applicationLink: "https://www.gujarat-farmersupport.com"
  },
  {
    id: 6,
    name: "Healthcare Access Program",
    description: "Improved healthcare facilities and services.",
    profession: "Healthcare Workers",
    minAge: 21,
    gender: "any",
    benefits: "Free medical services, training programs",
    applicationProcess: "Healthcare professionals can apply through their institutions.",
    requiredDocuments: "Professional certification, employment proof",
    startDate: "01-06-2024",
    endDate: "31-05-2025",
    applicationLink: "https://www.gujarat-healthcareaccess.com"
  },
  {
    id: 7,
    name: "Artisan Development Initiative",
    description: "Support for traditional artisans and craftsmen.",
    profession: "Artisans",
    minAge: 20,
    gender: "any",
    benefits: "Financial aid, marketing support, skill enhancement workshops",
    applicationProcess: "Apply at the District Craftsmen Association office.",
    requiredDocuments: "Artisan certificate, identity proof, sample work",
    startDate: "15-07-2024",
    endDate: "15-07-2025",
    applicationLink: "https://www.gujarat-artisaninitiative.com"
  },
  {
    id: 8,
    name: "Student Scholarships Program",
    description: "Scholarships for students pursuing higher education.",
    profession: "Students",
    minAge: 18,
    gender: "any",
    benefits: "Financial support for tuition and books",
    applicationProcess: "Apply online through the State Scholarship Portal.",
    requiredDocuments: "Previous academic records, identity proof, admission letter",
    startDate: "01-02-2024",
    endDate: "31-03-2024",
    applicationLink: "https://www.gujarat-studentscholarships.com"
  },
  {
    id: 9,
    name: "Student1 Scholarships Program",
    description: "Scholarships for students pursuing higher education.",
    profession: "Students",
    minAge: 18,
    gender: "any",
    benefits: "Financial support for tuition and books",
    applicationProcess: "Apply online through the State Scholarship Portal.",
    requiredDocuments: "Previous academic records, identity proof, admission letter",
    startDate: "06-11-2023",
    endDate: "31-01-2024",
    applicationLink: "https://www.gujarat-student1scholarships.com"
  },
  {
    id: 10,
    name: "Student2 Scholarships Program",
    description: "Scholarships for students pursuing higher education.",
    profession: "Students",
    minAge: 18,
    gender: "any",
    benefits: "Financial support for tuition and books",
    applicationProcess: "Apply online through the State Scholarship Portal.",
    requiredDocuments: "Previous academic records, identity proof, admission letter",
    startDate: "01-11-2023",
    endDate: "31-12-2023",
    applicationLink: "https://www.gujarat-students2cholarships.com"
  }
].map(scheme => ({
  ...scheme,
  applications: Math.floor(Math.random() * 10), // Mock applications for sorting
}));



// Endpoint to get a specific scheme by ID
app.get('/filtered-schemes/:id', (req, res) => {
  const schemeId = parseInt(req.params.id);
  const scheme = schemes.find(s => s.id === schemeId);
  if (scheme) {
    res.json(scheme);
  } else {
    res.status(404).json({ error: "Scheme not found" });
  }
});2


app.get('/filtered-schemes', (req, res) => {
  console.log('Received a request to /filtered-schemes');
  const { profession, age, gender, searchTerm } = req.query;

  // Filter schemes based on provided criteria
  let filteredSchemes = schemes.filter(scheme => {
    const matchesProfession = !profession || scheme.profession.toLowerCase().includes(profession.toLowerCase());
    const matchesAge = !age || scheme.minAge <= parseInt(age);
    const matchesGender = !gender || scheme.gender.toLowerCase() === gender.toLowerCase();
    const matchesSearchTerm = !searchTerm || scheme.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesProfession && matchesAge && matchesGender && matchesSearchTerm;
  });

  res.json(filteredSchemes);
});

// Backend API for Popular Schemes
app.get('/popular-schemes', (_, res) => {
  const popularSchemes = [...schemes].sort((a, b) => b.applications - a.applications).slice(0, 2);
  res.json(popularSchemes);
});


// Backend API for Recent Schemes
app.get('/recent-schemes', (_, res) => {
  const recentSchemes = [...schemes].sort((a, b) => new Date(b.startDate) - new Date(a.startDate)).slice(0, 2);
  res.json(recentSchemes);
});



// Handle requests to the root URL ("/")
app.get('/', (_, res) => {
  res.send('Welcome to the Government Schemes Information API');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
