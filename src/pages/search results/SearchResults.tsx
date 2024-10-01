import { useLocation } from "react-router-dom";
import { IRelatedTopic } from "../../types/RelatedTopic";

// Function to extract the link and title from the given result string
function extractLinkAndTitle(result: string) {
  const linkMatch = result.match(/<a href="(.+?)">(.+?)<\/a>/); // Using regex to match the link and title
  return {
    link: linkMatch?.[1] || "#", // Extracting link, defaulting to "#" if not found
    title: linkMatch?.[2] || "No Title", // Extracting title, defaulting to "No Title" if not found
  };
}

function SearchResults() {
  const location = useLocation(); // Getting the current location object
  const searchResult = location.state?.searchResult as IRelatedTopic; // Extracting searchResult from location state

  // If no search result is found, display a message
  if (!searchResult) {
    return <p className="text-white">No result found</p>;
  }

  // Extracting link and title from the search result
  const { link, title } = extractLinkAndTitle(searchResult.Result);
  const description = searchResult.Text || "No description available"; // Getting description or default message

  return (
    <div className="p-16 flex flex-col items-center">
      <h1 className="text-3xl mb-8 text-pastelpeach">Search Result</h1>
      <div className="w-full md:w-2/3 bg-zinc-800 p-6 rounded-2xl">
        {/* Title with a link that opens in a new tab */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-600 hover:underline">
          {title}
        </a>
        {/* Short Description */}
        <p className="text-gray-400 mt-2">{description}</p>
        {/* Displaying the link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-sm text-green-500 mt-1 block">
          {link}
        </a>
      </div>
    </div>
  );
}

export default SearchResults;
