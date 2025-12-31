export type TeamTab = 'organizers' | 'co-organizers' | 'core' ;

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
  { id: 'co1', name: 'Subhadeb Mitra', role: 'Commitee Member', category: 'co-organizers', avatarIcon: '👤', image: '/Subhadeb.jpeg' },
  { id: 'co2', name: 'Arka Pratim Das', role: 'Tech Member', category: 'co-organizers', avatarIcon: '👤', image: '/Arka.jpeg' },
  { id: 'co3', name: 'Shruti Gupta ', role: 'Commitee Member', category: 'co-organizers', avatarIcon: '👤', image: '/Shruti.jpg' },
  { id: 'co4', name: 'Sayantan Roy', role: 'Commitee Member', category: 'co-organizers', avatarIcon: '👤', image: '/Sayantan.jpg' },

  // Core Team
  { id: 'ct1', name: 'Arnashree De', role: 'Commitee Member', category: 'core', avatarIcon: '👤', image: '/Arnashree.jpg' },
  { id: 'ct2', name: 'Abhijit Jana', role: 'IE(I) Member', category: 'core', avatarIcon: '👤', image: '/Abhijit.jpg' },
  { id: 'ct3', name: 'Parambrata Biswas', role: 'Management Member', category: 'core', avatarIcon: '👤', image: '/Parambrata.jpg' },
  { id: 'ct4', name: 'Sweta Dhar', role: 'Commitee Member', category: 'core', avatarIcon: '👤', image: '/Sweta.jpg' },
  { id: 'ct5', name: 'Akash Mukherjee', role: 'PR Member', category: 'core', avatarIcon: '👤', image: '/Akash.jpg' },
  { id: 'ct6', name: 'Soumik Bag', role: 'Management Member', category: 'core', avatarIcon: '👤', image: '/Soumik.jpg' },
  { id: 'ct7', name: 'Md Faizan ', role: 'Tech Member', category: 'core', avatarIcon: '👤', image: '/Faizan.jpg' },
  { id: 'ct8', name: 'Upayan Sarkar', role: 'IE(I) Member', category: 'core', avatarIcon: '👤', image: '/Upayan.jpg' },
  { id: 'ct9', name: 'Md Talha Ali', role: 'Event Logistics', category: 'core', avatarIcon: '👤', image: '/Talha.jpeg' },
  { id: 'ct10', name: 'Santanu Shrivastava', role: 'Graphics Member', category: 'core', avatarIcon: '👤', image: '/Santanu.jpg' },
  { id: 'ct11', name: 'Srijan Das', role: 'Commitee Member', category: 'core', avatarIcon: '👤', image: '/Srijan.jpg' },
  { id: 'ct12', name: 'Prince Bharti', role: 'Tech Member', category: 'core', avatarIcon: '👤', image: '/Prince.png' },
  { id: 'ct13', name: 'Surajit Nayak', role: 'Commitee Member', category: 'core', avatarIcon: '👤', image: '/Surajit.jpeg' },
  { id: 'ct14', name: 'Trisha Chakrabarti', role: 'IE(I) Member', category: 'core', avatarIcon: '👤', image: '/Trisha.jpg' },
  { id: 'ct15', name: 'Ayesha Nazmun Nahar', role: 'Graphics Member', category: 'core', avatarIcon: '👤', image: '/Ayesha.jpg' },
  { id: 'ct16', name: 'Eshika Saha', role: 'Graphics Associate', category:'core' , avatarIcon:'👤' , image:'/Eshika.JPG' },
  { id: 'ct17', name: 'Srijoyni Mukherjee', role: 'Graphics Associate', category: 'core', avatarIcon: '👤', image: '/Srijoyni.jpeg' },
  { id: 'ct18', name: 'Ankan Paul', role: 'Graphics Associate', category: 'core', avatarIcon: '👤', image: '/Ankan.png' },
];
