import Hero from "../components/Hero"
import Feature from "../components/Feature"
import JobListings from "../components/JobListings"

export default function HomePage() {
  return (
    <>
        <Hero />
       <Feature />
       <JobListings isHome={true}/>
    </>
  );
};
