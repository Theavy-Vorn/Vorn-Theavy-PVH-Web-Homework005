import {
    Home,
    Book,
    Music,
    Camera,       
    Dumbbell,      
    Monitor,      
    Plane,         
    Pencil,        
    Clapperboard, 
    Film,          
    Settings,      
} from "lucide-react";

export const sidebarList = [
    { id: 1, icon: Home, label: "Home" , path :"/homePage"},
    { id: 2, icon: Book, label: "Book Categories", path:"/books" },
    { id: 3, icon: Film, label: "Old-School Cartoons" , path:"/cartoons"},
    { id: 4, icon: Clapperboard, label: "Movies & TV Shows" },
    { id: 5, icon: Music, label: "Music" },
    { id: 6, icon: Camera, label: "Photography" },
    { id: 7, icon: Dumbbell, label: "Sports & Fitness" },
    { id: 8, icon: Monitor, label: "Technology & Gadgets" },
    { id: 9, icon: Plane, label: "Travel & Exploration" },
    { id: 10, icon: Pencil, label: "Writing & Journaling" },
    { id: 11, icon: Settings, label: "Settings" }, // Corrected
];
