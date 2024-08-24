import "./SmallCard.css";

import Icon from "./Icon";

import upIcon from "../../assets/icons/icon-up.svg";
import downIcon from "../../assets/icons/icon-down.svg";

const SmallCard = ({
  metricName,
  metricCount,
  platform,
  changeDirection,
  metricChange,
}) => {
  return (
    <div className="overviewContainer">
      <div className="cont">
        <div className="metricName">{metricName}</div>
        <Icon name={platform} />
      </div>
      <div className="cont">
        
        <div className="metricCount">{metricCount}</div>
        <div className={`metricChange ${changeDirection}`}>
          <img
            src={changeDirection === "up" ? upIcon : downIcon}
            alt={`${changeDirection} icon`}
            className="changeIcon"
          />
          {metricChange}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
