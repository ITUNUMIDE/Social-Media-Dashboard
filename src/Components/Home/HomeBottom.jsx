import SmallCard from "../reuseable/SmallCard";
import "./HomeButton.css";

const HomeBottom = () => {
  return (
    <div style={{ width: "100%" }}>
      <h3 className="text">Overview - Today</h3>
      <div className="container">
        <SmallCard
          metricName="Page Views"
          metricCount="87"
          platform="facebook"
          changeDirection="up"
          metricChange="3%"
        />
        <SmallCard
          metricName="Likes"
          metricCount="52"
          platform="facebook"
          changeDirection="down"
          metricChange="2%"
        />
        <SmallCard
          metricName="Likes"
          metricCount="5462"
          platform="instagram"
          changeDirection="up"
          metricChange="2257%"
        />
        <SmallCard
          metricName="Profile Views"
          metricCount="52k"
          platform="instagram"
          changeDirection="up"
          metricChange="1375%"
        />
        <SmallCard
          metricName="Retweets"
          metricCount="117"
          platform="twitter"
          changeDirection="up"
          metricChange="303%"
        />
        <SmallCard
          metricName="Likes"
          metricCount="507"
          platform="twitter"
          changeDirection="up"
          metricChange="553%"
        />
        <SmallCard
          metricName="Likes"
          metricCount="107"
          platform="youtube"
          changeDirection="down"
          metricChange="19%"
        />
        <SmallCard
          metricName="Total Views"
          metricCount="1407"
          platform="youtube"
          changeDirection="down"
          metricChange="12%"
        />
      </div>
    </div>
  );
};

export default HomeBottom;
