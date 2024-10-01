import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import ListOfSuggestions from "../../components/list of suggestions/ListOfSuggestions";
import { getContinent } from "../../services/api";
import { IRelatedTopic } from "../../types/RelatedTopic";

function Home() {
  // State to hold related topic information (continents)
  const [infoContinent, setInfoContinent] = useState<IRelatedTopic[]>([]);
  // State to hold the current search term
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Effect hook to fetch continent data on component mount
  useEffect(() => {
    getContinent().then((result) => {
      setInfoContinent(result.RelatedTopics); // Setting state with fetched related topics
      console.log(result); // Logging the fetched result for debugging
    });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Filtering suggestions based on the search term
  const filteredSuggestions = infoContinent.filter((continent) =>
    continent.Result?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="p-16 flex justify-center items-center flex-col">
        <h1 className="text-4xl md:text-5xl tracking-[0.9px] bg-gradient-to-r from-pastelpeach to-transparent bg-clip-text text-transparent w-fit">
          ContiFinder
        </h1>
        <div className="w-80 md:w-2/3 my-16 mb-8 flex items-center justify-center p-6 rounded-full bg-darkslate shadow-lg">
          <input
            type="text"
            className="flex-1 border-none text-xl font-raleway font-medium pr-4 outline-none text-gray-400 bg-darkslate"
            placeholder="Search for Asian continent" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
           {/* Search icon */}
          <IoMdSearch className="w-9 h-9 cursor-pointer text-orange-300" />{" "}
        </div>

        {/* Conditional rendering of suggestions based on search term and filtered results */}
        {searchTerm && filteredSuggestions.length > 0 && (
          <div className="w-80 md:w-2/3 bg-zinc-800 p-6 rounded-2xl hover:scale-105 duration-300">
            {filteredSuggestions.map((continent) => (
              <ListOfSuggestions
                key={continent.Result} // Unique key for each suggestion
                infoContinent={continent} // Passing related topic information to ListOfSuggestions
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
