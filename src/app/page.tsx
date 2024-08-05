import NotesFetcher from "@/components/NotesFetcher";
import {MainHeading} from "@/components/Commons"

export default function Home() {
  return (
     <>
     <div className=" flex flex-col gap-4 p-4  ">
     <MainHeading heading = {"NOTES FETCHER"} />
     <NotesFetcher /> 
     </div>
     </>
  );
}
