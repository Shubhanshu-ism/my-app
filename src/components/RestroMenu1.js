import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contant";

const RestaurantMenu1 = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
        // `${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const Info =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card || {};

  return (
    <div>
      {name && avgRatingString && (
        <h1>
          {name} - {avgRatingString} ★
        </h1>
      )}

      {cuisines && costForTwoMessage && (
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      )}

      <h2>Menu </h2>
      <h2>Categories </h2>
      <h4>{Info?.title}</h4>
      <ul>
        {Info?.itemCards?.length > 0 ? (
          Info.itemCards.map((item) => (
            <li key={item.card?.info?.id}>
              ₹
              {item.card?.info?.price / 100 ||
                item.card?.info?.defaultPrice / 100}
              ......... {item.card?.info?.name}
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu1;
