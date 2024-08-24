import "./BigCard.css";
import Icon from "./Icon";

import upIcon from "../../assets/icons/icon-up.svg";
import downIcon from "../../assets/icons/icon-down.svg";

const BigCard = ({ platform, handle, followers, followSubscribe, todayChange, changeDirection }) => {
  return (
    <div className={`cardContainer card-${platform}`}>
      <div className="iconHandle">
        <Icon name={platform} />
        <div className="handle">@{handle}</div>
      </div>
      <div>
        <h1 className="h1Text">{followers}</h1>
        <span className="follow">{followSubscribe}</span>
      </div>
    
      <div className={`todayChange ${changeDirection}`}>
        <img src={changeDirection === 'up' ? upIcon : downIcon} alt={`${changeDirection} icon`} className="changeIcon" />
        {todayChange} Today
      </div>
    </div>
  );
};

export default BigCard;
