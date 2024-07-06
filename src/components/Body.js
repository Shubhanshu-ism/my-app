import ResDataCard from "./ResDataCart";
import {useState, useEffect} from "react";
import resList from "../utils/mock";
import Shimmer from "./shimmer";
const Body = ()=>{
  const [ListOfRestaurant,setListOfRestaurant] = useState([...resList]);
  
  const [SeachText,setSearchText] = useState("");
  useEffect(()=> {fetchData()},[]);
    
    const fetchData = async () => {
      const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.8191134&lng=86.4359561&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      const resturants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      
      if(ListOfRestaurant.length === 0){
        return <Shimmer/>;
      }
      if(resturants.length) setListOfRestaurant( resturants);
      else setListOfRestaurant(resList);

    }
    
    
    return ( 
      <div className="body">
        <input type="text" value={SeachText} onChange={(e) =>{setSearchText(e.target.value)}}></input>
        <button className="search-button" onClick={()=>{
          const searchFilter = resList.filter((x) => {
            const f1= x.info.name.toLowerCase().includes(SeachText.toLowerCase());
           
           
            return f1 ;
          } );

          setListOfRestaurant(searchFilter);
        }}
        >
          Search
          </button>
        <button className="top-rated-button" onClick={ () => {
          const FilterList = ListOfRestaurant.filter((x) => x.info.avgRating >4);
          setListOfRestaurant(FilterList);
          }
        }
        >
          Top Rated
        </button>
        
        <button className="reset-button" onClick={() =>{
          fetchData();
          // setListOfRestaurant(ListOfRestaurant);
        }}>Reset</button>
        {/* <div className="search">Search</div> */}
        <div className="res-container">
        {
          ListOfRestaurant.map((x) => <ResDataCard key={x?.info?.id} resData={x}/>)
        }
     
        </div>
          
      </div>
    )
  }
export default Body;