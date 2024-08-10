// import data from '../data/photographers';
import aya from '../components/assets/aya.jpg';
import ail from '../components/assets/ail.jpg';
import farid from '../components/assets/allphotographers/farid.jpeg';
import hussain from '../components/assets/allphotographers/hussain.jpeg';
import mahmood from '../components/assets/allphotographers/mahmood.jpeg';
import omar from '../components/assets/allphotographers/omar.jpeg';
import sara from '../components/assets/allphotographers/sara.png';
import zahra from '../components/assets/allphotographers/zahra.png';
import ahmed from '../components/assets/allphotographers/ahmed.jpeg';
import ibrahim from '../components/assets/ibrahim.jpeg';
import amer from '../components/assets/allphotographers/amer.jpeg';
import youssef from '../components/assets/allphotographers/youssef.jpeg';
import mohammed from '../components/assets/allphotographers/mohammed.jpeg';
import niveen from '../components/assets/niveen.jpg';
// import Data from '../pages/Data'
import gruwork from '../components/assets/workimg/gruwork.jpg'
import widdingwork from '../components/assets/workimg/widdingwork.jpg'
import birthwork from '../components/assets/workimg/birthwork.jpg'

const data = [
  { id: '1', title: 'Aya',  workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],  
   places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ],
   photo: aya, rating: 4.5, price: 200, description: 'Aayana is a 23-year-old Indian photographer, known for her bold and unconventional style. She loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '2', title: 'Ali',   workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ], rating: 3.2, price: 300, photo: ail, description: 'Ali is a 25-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '3', title: 'Ahmed',   workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],    places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], photo: ahmed,
   
  
   rating: 5, price: 400, description: 'Ahmed is a 28-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '4', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],    places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Ibrahim', photo: ibrahim, rating: 2.2, price: 500, description: 'Ibrahim is a 32-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '5', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],   places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ]
  ,title: 'Ammar', photo: amer, price: 600, rating: 4.5, description: 'Ammar is a 35-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '6', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],    places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Youssef', photo: youssef, rating: 3.5, price: 700, description: 'Youssef is a 38-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '7', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],    places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Hussain', photo: hussain, price: 250, rating: 2.8, description: 'Hussain is a 41-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '8', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],   places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Mohammed', photo: mohammed, rating: 3.8, price: 450, description: 'Mohammed is a 43-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '9', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],   places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Zahra', photo: zahra, rating: 4.8, price: 550, description: 'Salah is a 46-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '10', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],    places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Mohammad', photo: mohammed, rating: 4.8, price: 650, description: 'Mohammad is a 49-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '11', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],    places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Omar', photo: omar, rating: 4.8, price: 100, description: 'Omar is a 52-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '12', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],   places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Farid', photo: farid, rating: 4.8, price: 900, description: 'Farid is a 55-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '13',  workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],   places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Sara', photo: sara, rating: 4.8, price: 1000, description: 'Sara is a 58-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '14', workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],    places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Rania', photo: niveen, price: 50, rating: 4.8, description: 'Rania is a 61-year-old Indian photographer, known for his unique and creative style. She loves capturing the beauty of nature and capturing the essence of the human spirit.' },
  { id: '15',workImages: [
    gruwork,
    widdingwork,
    birthwork,
  ],   places: [
    { name: 'Dar Al-Atraqji', description: 'It is located in Al-Jadriya and Al-Mansour for interior photography.' },
    { name: 'Al-Zawraa', description: 'It is located in Al-A dhamiyah for external photography' },
    { name: 'Palm Complex', description: 'Indoor and outdoor photography venue' },
    { name: 'Mustafa Studio', description: 'It is located in the university district for interior photography.' },
  ], title: 'Mahmood', photo: mahmood, rating: 4.8, price: 200, description: 'Mahmood is a 64-year-old Indian photographer, known for his unique and creative style. He loves capturing the beauty of nature and capturing the essence of the human spirit.' }
];
export default data;