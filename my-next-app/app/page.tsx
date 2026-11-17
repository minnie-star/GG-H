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
  biography: `Gcinaphi was born on January 1, 1948, in KwaSwayimani, Pietermaritzburg in the district of KwaGqugquma to Mr. Paulose and Mrs. Alvinah Mkhize. 
  
  Gcinaphi grew and attended school, she loved school. Unfortunately, her father preferred that she stayed home to take care of household responsibilities during the day when her mother went to work. 

  The Mkhize family loved church and Gcinaphi was a member of a church choir. The Choir conductor fell in love with Gcinaphi. In 1969 Gcinaphi married her sweetheart Sphiwe Emmanuel Hlongwane and together raised seven children, Busisiwe, Thandekile, Ntombifuthi, Lorraine, Zanele, Aurah and Sandile. She worked for Comet Andries factory for a few years and then became a full-time housewife. She instilled gospel learning in her household and took all her children to church every Sunday. 

  After the passing of her husband in 1992, Gcinaphi continued raising her children with the support from her late husband’s employer, her sister, Harriet, brother, Samuel, and loving community of KwaMashu in uMdoni Road. 

  Gcinaphi was predeceased by her beloved parents, husband, brothers Samuel and Mphenyi Mkhize and her son law Mr. Mpikanelanga Manyathi. She is survived by her sister Harriet Mkhize, her sister-in-law Mathusi, her seven children, her daughter in law, Mrs. Yoliswa Hlongwane, her sons in law, Dr. Khumbulani Mdletshe, Mr. Ephraim Nsibande, Mr. Ellis Mnyandu, Mr. Emelian Aagyredwomoh, her beloved 19 grandchildren and one great grandchild Lukhona uThando. `,
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
      quote: "Her wisdom will guide us always",
    },
    {
      name: "Lorrian Mnyandu",
      relationship: "Daughter",
      quote: "Thank you for everything, Grandma",
    },
    {
      name: "Zanele Manyathi",
      relationship: "Daughter",
      quote: "Your legacy lives on",
    },
    {
      name: "Aurah Agyare-Dwomoh",
      relationship: "Daughter",
      quote: "We miss you dearly",
    },
    {
      name: "Sandile Hlongwane",
      relationship: "Son",
      quote: "We miss you dearly",
    },
    {
      name: "Harriet Mkhize",
      relationship: "Sister",
      quote: "We miss you dearly",
    },
    {
      name: "Sindisiwe Mkhize",
      relationship: "Niece",
      quote: "We miss you dearly",
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
