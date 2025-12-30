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
  { id: 'co1', name: 'Subhadeb Mitra', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤' },
  
  { id: 'co3', name: 'Arka Pratim Das', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤', image: '/Arka.jpeg' },
  { id: 'co4', name: 'Shruti Gupta ', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤' },
  { id: 'co5', name: 'Sayantan Roy', role: 'Event Management', category: 'co-organizers', avatarIcon: '👤' },
  

  // Core Team
  { id: 'ct1', name: 'Arnashree De', role: 'TECHNICAL HEAD', category: 'core', avatarIcon: '👤'},
  { id: 'ct2', name: 'Abhijit Jana', role: 'Hackathon Coordinator', category: 'core', avatarIcon: '👤' },
  { id: 'ct3', name: 'Parambrata Biswas', role: 'Operations & Strategy', category: 'core', avatarIcon: '👤' },
  { id: 'ct4', name: 'Sweta Dhar', role: 'Communications Lead', category: 'core', avatarIcon: '👤' },
  { id: 'ct5', name: 'Akash Mukherjee', role: 'Visual Identity', category: 'core', avatarIcon: '👤' },
  { id: 'ct6', name: 'Soumik Bag', role: 'Event Volunteer', category: 'core', avatarIcon: '👤' },
  { id: 'ct7', name: 'Md Faizan ', role: 'Event Volunteer', category: 'core', avatarIcon: '👤' },
  { id: 'ct8', name: 'Upayan Sarkar', role: 'Event Volunteer', category: 'core', avatarIcon: '👤' },
  { id: 'ct9', name: 'Srijan Das', role: 'Event Volunteer', category: 'core', avatarIcon: '👤' },
  { id: 'ct10', name: 'Prince Bharti', role: 'Event Volunteer', category: 'core', avatarIcon: '👤' },
  { id: 'ct11', name: 'Surajit Nayak', role: 'Event Volunteer', category: 'core', avatarIcon: '👤' },
  { id: 'ct12', name: 'Trisha Chakrabarti', role: 'Event Volunteer', category: 'core', avatarIcon: '👤' },
  { id: 'ct13', name: 'Ayesha Parvin', role: 'Event Volunteer', category: 'core', avatarIcon: '👤' },
  { id: 'ct14', name: 'Eshika Saha', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Eshika.JPG' },
  { id: 'ct15', name: 'Srijoyni Mukherjee', role: 'Event Volunteer', category: 'core', avatarIcon: '👤', image: '/Srijoyni.jpeg' },
  { id: 'ct16', name: 'Ankan Paul', role: 'Event Volunteer', category: 'core', avatarIcon: '👤' },
];
