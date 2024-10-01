import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { IRelatedTopic } from "../../types/RelatedTopic";

// Defining the props interface for the ListOfSuggestions component
interface ListOfSuggestionsProps {
  infoContinent?: IRelatedTopic; // Optional prop for related topic information
}

function ListOfSuggestions({ infoContinent }: ListOfSuggestionsProps) {
  const navigate = useNavigate(); // Initializing the navigate function for programmatic navigation

  // Function to handle click events, navigating to the results page with state
  const handleClick = () => {
    navigate("/results", { state: { searchResult: infoContinent } }); // Navigating to the /results route with searchResult state
  };

  // Extracting the link match from infoContinent.Result using regex
  const linkMatch = infoContinent?.Result.match(/<a href="(.+?)">(.+?)<\/a>/);
  const title = linkMatch?.[2] ?? "No Title"; // Setting the title from the regex match or defaulting to "No Title"

  return (
    <div
      onClick={handleClick}
      className="hover:bg-zinc-700 p-3 rounded-md hover:cursor-pointer flex items-center">
        {/* Search icon with styling */}
      <IoMdSearch className="w-7 h-7 mr-4 cursor-pointer text-orange-300" />
        {/* Displaying the title */}
      <span className="text-white text-2xl">{title}</span>
    </div>
  );
}

export default ListOfSuggestions; 
