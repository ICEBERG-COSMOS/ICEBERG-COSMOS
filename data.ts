export type TeamTab = 'organizers' | 'co-organizers' | 'core';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: TeamTab;
  avatarIcon?: string;
  image?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // Organizers
  { id: 'o1', name: 'Debjoy Sarkar', role: 'IE(I) CONVENOR', category: 'organizers', avatarIcon: '👤', image: '/Debjoy.jpeg' },
  { id: 'o2', name: 'Vageesha Kriti', role: 'IE(I) CONVENOR', category: 'organizers', avatarIcon: '👤', image: '/Vageesha.jpeg' },
  
  // Co-Organizers
  { id: 'co1', name: 'Subhadeb Mitra', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤', image: '/Subhadeb.jpeg' },
  { id: 'co2', name: 'Arka Pratim Das', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤', image: '/Arka.jpeg' },
  { id: 'co3', name: 'Shruti Gupta ', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤', image: '/Shruti.jpg' },
  { id: 'co4', name: 'Sayantan Roy', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤', image: '/Sayantan.jpg' },

  // Core Team
  { id: 'ct1', name: 'Arnashree De', role: 'TECHNICAL HEAD', category: 'core', avatarIcon: '👤', image: '/Arnashree.jpg' },
  { id: 'ct2', name: 'Abhijit Jana', role: 'Hackathon Coordinator', category: 'core', avatarIcon: '👤', image: '/Abhijit.jpg' },
  { id: 'ct3', name: 'Parambrata Biswas', role: 'Operations & Strategy', category: 'core', avatarIcon: '👤', image: '/Parambrata.jpg' },
  { id: 'ct4', name: 'Sweta Dhar', role: 'Communications Lead', category: 'core', avatarIcon: '👤', image: '/Sweta.jpg' },
  { id: 'ct5', name: 'Akash Mukherjee', role: 'Visual Identity', category: 'core', avatarIcon: '👤', image: '/Akash.jpg' },
  { id: 'ct6', name: 'Soumik Bag', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Soumik.jpg' },
  { id: 'ct7', name: 'Md Faizan ', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Faizan.jpg' },
  { id: 'ct8', name: 'Upayan Sarkar', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Upayan.jpg' },
  { id: 'ct9', name: 'Md Talha Ali', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤', image: '/Talha.jpeg' },
  { id: 'ct10', name: 'Santanu Shrivastava', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤', image: '/Santanu.jpg' },
  { id: 'ct11', name: 'Srijan Das', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Srijan.jpg' },
  { id: 'ct12', name: 'Prince Bharti', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Prince.jpg' },
  { id: 'ct13', name: 'Surajit Nayak', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Surajit.jpeg' },
  { id: 'ct14', name: 'Trisha Chakrabarti', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Trisha.jpg' },
  { id: 'ct15', name: 'Ayesha Nazmun Nahar', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Ayesha.jpg' },
  { id: 'ct16', name: 'Eshika Saha', role: 'Event Volunteer', category:'core' , avatarIcon:'👤' , image:'/Eshika.JPG' },
  { id: 'ct17', name: 'Srijoyni Mukherjee', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Srijoyni.jpeg' },
  { id: 'ct18', name: 'Ankan Paul', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Ankan.png' },
];
