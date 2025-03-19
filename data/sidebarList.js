import {
    Home,
    Book,
    Music,
    Camera,        // Instead of "Photography"
    Dumbbell,      // Instead of "Sport"
    Monitor,       // Instead of "Technology"
    Plane,         // Instead of "Travel"
    Pencil,        // Instead of "Journaling"
    Clapperboard,  // Instead of "Show"
    Film,          // Instead of "Cartoon"
    Settings,      // Corrected: "Settings" instead of "Setting"
} from "lucide-react";

export const sidebarList = [
    { id: 1, icon: Home, label: "Home" },
    { id: 2, icon: Book, label: "Book Categories" },
    { id: 3, icon: Film, label: "Old-School Cartoons" },
    { id: 4, icon: Clapperboard, label: "Movies & TV Shows" },
    { id: 5, icon: Music, label: "Music" },
    { id: 6, icon: Camera, label: "Photography" },
    { id: 7, icon: Dumbbell, label: "Sports & Fitness" },
    { id: 8, icon: Monitor, label: "Technology & Gadgets" },
    { id: 9, icon: Plane, label: "Travel & Exploration" },
    { id: 10, icon: Pencil, label: "Writing & Journaling" },
    { id: 11, icon: Settings, label: "Settings" }, // Corrected
];
