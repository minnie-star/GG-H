import HeroNew from "./HeroNew";
import LifeStory from "./LifeStory";
import FamilySection from "./FamilySection";
import ElegantGallery from "./ElegantGallery";
import VideoMemorial from "./VideoMemorial";
import ServiceDetails from "./ServiceDetails";
import VenueMap from "./VenueMap";
import OnlineParticipation from "./OnlineParticipation";
import Tributes from "./Tributes";
import FooterSection from "./FooterSection";

const personInfo = {
  name: "Gcinaphi Gertrude Hlongwane",
  birthYear: "1948",
  deathYear: "2026",
  quote:
    "The greatest legacy we leave behind is the love we shared and the lives we touched.",
  biography: `Gcinaphi Getrude Hlongwane, aged 78, passed away peacefully at home on November 12, 2026.
  
  Gcinaphi was born on January 1, 1948 in KwaSwayimani, Pietermaritzburg in the district of KwaGqugquma to Mr. Paulose and Mrs. Alvinah Mkhize.
  
  In 1969 she married her sweetheart Sphiwe Emmanuel Hlongwane and together they raised seven children: Busisiwe, Thandekile, Ntombifuthi, Lorraine, Zanele, Aurah, and Sandile.
  After the Passing of her husband in 1992, Gcinaphi continued raising her children with love.
  
  She was predeceased by her parents, Husband, Brothers, Samuel and Mphenyi, and son-in-law Mpika Manyathi. She is survived by her Sister Harriet Mkhize, Niece Sindisiwe, seven Children, Sister-in-law Mathusi, Daughter-in-law Yoliswa, Sons-in-law Dr. Khumbulani Mdletshe, Mr. Ephraim Nsibande, Mr. Ellis Mnyandu, Mr. Emelian Aagyre-Dwomoh, 20 grandchildren, and 2 great-grandchildren. `,
  familyMembers: [
    {
      name: "Busisiwe Hlongwane",
      relationship: "Daughter",
      quote: "A mother's love never fades",
    },
    {
      name: "Thandi Nsibande",
      relationship: "Daughter",
      quote: "Forever in my heart",
    },
    {
      name: "Ntombifuthi Mdletshe",
      relationship: "Daughter",
      quote: "My praying warrior taught me how to pray",
    },
    {
      name: "Lorriane Mnyandu",
      relationship: "Daughter",
      quote: "Your guidance and love shaped the person I am today",
    },
    {
      name: "Zanele Manyathi",
      relationship: "Daughter",
      quote: "World's best mom",
    },
    {
      name: "Aurah Agyare-Dwomoh",
      relationship: "Daughter",
      quote: "Fly high SKHOKHO Sami",
    },
    {
      name: "Sandile Hlongwane",
      relationship: "Son",
      quote: "We miss you dearly",
    },
    {
      name: "Harriet Mkhize",
      relationship: "Sister",
      quote: "Ngophinde ngisho kubani ukuthi MtakaMa",
    },
    {
      name: "Sindisiwe Mkhize",
      relationship: "Niece",
      quote: "Ngophinde ngisho kubani ukuthi Mamkhulu",
    },
    {
      name: "Yoliswa Hlongwane",
      relationship: "Makoti",
      quote: "I love you Mah",
    },
  ],
  serviceEvents: [
   
    {
      title: "Funeral Service",
      date: "Saturday, November 21, 2026",
      time: "9:00-10:30 AM",
      location: "3 Philips Avenue, Roodepoort, Johannesburg, 1709",
      description:
        "A beautiful eulogy and service honoring her remarkable life and legacy.",
    },
    
    {
      title: "Refreshments",
      date: "Saturday, November 21, 2026",
      time: "11:00 - 12:00",
      location: "The Church of Jesus Christ of Latter-day Saints, 3 Philips Avenue, Roodepoort, Johannesburg, 1709",
      description:
        "Join us for refreshments and continued celebration of her extraordinary life.",
    },
  ],
  initialTributes: [
    {
      author: "A Cherished Friend",
      relationship: "Close Friend",
      message:
        "Gcinaphi was the kindest soul I ever knew. Her generosity and warmth touched everyone around her. She will be deeply missed.",
      date: "2026-11-14",
    },
    {
      author: "Family Member",
      relationship: "Niece",
      message:
        "Auntie, your love and guidance shaped who I am today. Thank you for all the wisdom you shared with me over the years.",
      date: "2026-11-13",
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-ivory">
      <HeroNew
        name={personInfo.name}
        birthYear={personInfo.birthYear}
        deathYear={personInfo.deathYear}
        quote={personInfo.quote}
        portraitSrc="/photos/1.jpg"
      />

      <OnlineParticipation />

      <LifeStory biography={personInfo.biography} />

      <FamilySection familyMembers={personInfo.familyMembers} />

      <ElegantGallery />

      <VideoMemorial />

      <ServiceDetails events={personInfo.serviceEvents} />

      <VenueMap />

      <Tributes initialTributes={personInfo.initialTributes} />

      <FooterSection />
    </main>
  );
}
