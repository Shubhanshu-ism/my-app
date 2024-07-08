import ResDataCard from "./ResDataCart";
import { useState, useEffect } from "react";

import Shimmer from "./shimmer";
const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [SeachText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.8191134&lng=86.4359561&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const resturants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    if (resturants.length) {
      setListOfRestaurant(resturants);
      setFilteredRestaurant(resturants);
    }
  };

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="fliters">
        {/* <div className="search"> */}
        <input
          type="text"
          value={SeachText}
          placeholder="Search a restaurant..."
          className="searchBox"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const filteredRestaurant = ListOfRestaurant.filter((x) =>
              x.info.name.toLowerCase().includes(SeachText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        {/* </div> */}
        <button
          className="top-rated-button"
          onClick={() => {
            const filterList = ListOfRestaurant.filter(
              (x) => x.info.avgRating > 4
            );
            setFilteredRestaurant(filterList);
          }}
        >
          Top Rated
        </button>

        <button
          className="reset-button"
          onClick={() => {
            setFilteredRestaurant(ListOfRestaurant);
          }}
        >
          Reset
        </button>
      </div>

      {/* Resutant containner */}
      <div className="res-container">
        {filteredRestaurant.map((x) => (
          <ResDataCard key={x?.info?.id} resData={x} />
        ))}
      </div>
    </div>
  );
};
export default Body;
