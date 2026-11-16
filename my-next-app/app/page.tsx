import HeroNew from "./HeroNew";
import LifeStory from "./LifeStory";
import FamilySection from "./FamilySection";
import ElegantGallery from "./ElegantGallery";
import ServiceDetails from "./ServiceDetails";
import VenueMap from "./VenueMap";
import Tributes from "./Tributes";
import FooterSection from "./FooterSection";

const personInfo = {
  name: "Gcinaphi Gertrude Hlongwane",
  birthYear: "1948",
  deathYear: "2026",
  quote:
    "The greatest legacy we leave behind is the love we shared and the lives we touched.",
  biography: `Gcinaphi Gertrude Hlongwane was born on the 1st of January, 1948, to a loving family in South Africa. With a heart full of compassion and a spirit that radiated warmth, she lived a life dedicated to her family, her community, and the values she held dear.

Throughout her 76 years, Gcinaphi was known for her unwavering strength, her infectious laughter, and her ability to make everyone feel valued and loved. She was a devoted mother, grandmother, and great-grandmother, always ensuring that family gatherings were filled with joy, good food, and meaningful conversation.

A woman of faith and principle, she served her community with grace and dignity, always putting others first. Her wisdom, gained through decades of lived experience, was freely shared with those who sought her counsel. She had a remarkable gift for bringing people together and creating moments that would be cherished for generations to come.

Gcinaphi's legacy is not measured by what she accumulated, but by the profound impact she made on the lives of those who knew her. She will be remembered as a beacon of love, strength, and compassion.`,
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

      <LifeStory biography={personInfo.biography} />

      <FamilySection familyMembers={personInfo.familyMembers} />

      <ElegantGallery />

      <ServiceDetails events={personInfo.serviceEvents} />

      <VenueMap />

      <Tributes initialTributes={personInfo.initialTributes} />

      <FooterSection />
    </main>
  );
}
