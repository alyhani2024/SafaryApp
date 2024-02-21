import { Feature } from "@/types/feature";
import { Link, MessageSquareText, Pyramid, Share2, SquareUser, Star, User } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Pyramid size={50}/>
    ),
    title: "Destination Information",
    paragraph:
      "Provide detailed information about various destinations, including historical background, cultural significance, attractions, activities, local cuisine, and safety tips.",
  },
  {
    id: 1,
    icon: (
      <Link size={50}/>
    ),
    title: "Tour Guide Booking",
    paragraph:
      "Enable tourists to browse profiles of registered tour guides, view their specialties, languages spoken, ratings, and reviews, and book guided tours or personalized experiences directly through the app.",
  },
  {
    id: 1,
    icon: (
      <Star size={50}/>
    ),
    title: "Local Guide Recommendations",
    paragraph:
      "enriching travelers' experiences with authentic local perspectives. Local guides can contribute articles, photos, and videos showcasing their favorite spots, cultural insights, and unique experiences within their communities.",
  },
  {
    id: 1,
    icon: (
      <User size={50}/>
      
    ),
    title: "User Profile",
    paragraph:
      "Allow users to create profiles, save favorite destinations, itineraries, and preferences, and sync their data across multiple devices for seamless access.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
          d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
        />
        <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
      </svg>
    ),
    title: "Social Sharing",
    paragraph:
      "Enable users to share their travel experiences, photos, and recommendations with friends and family on social media platforms directly from the app.",
  },
  {
    id: 1,
    icon: (
      <MessageSquareText size={50} />
    ),
    title: "Feedback and Support",
    paragraph:
      "Provide channels for users to give feedback, report issues, and seek assistance from customer support to continuously improve the app's functionality and user experience.",
  },
];
export default featuresData;
