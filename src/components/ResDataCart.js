import {CDN_URL} from '../utils/contant'
const ResDataCard = (props)=>{
    const {resData} =props;
    const {name,
          cuisines, 
          avgRating,
          costForTwo,
          cloudinaryImageId
          } = resData?.info;
    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <h3> {name}</h3>
        <img className="res-logo" alt="resFoodLogo" src={CDN_URL +cloudinaryImageId
          }/>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ★</h4>
        {/* <h4>{costForTwoString}</h4> */}
        <h4>{costForTwo}</h4>
        {/* <h4>{deliveryTime} minutes</h4> */}
      </div>
    );
  }
  export default ResDataCard;