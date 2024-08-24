import SmallCard from "../reuseable/SmallCard";
import styled from 'styled-components';
const H3 = styled.h3`
color:rgb(99, 104, 126);
font-weight: 700;
font-size: 20px;
&.dark-mode h3 {
    color: hsl(0, 0%, 100%);
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const HomeBottom = () => {
  return (
    <div style ={{width: "100%" }}>
      <H3 >Overview - Today</H3>
      <Container>
        <SmallCard metricName="Page Views" metricCount="87" platform="facebook" changeDirection="up" metricChange="3%" />
        <SmallCard metricName="Likes" metricCount="52" platform="facebook" changeDirection="down" metricChange="2%" />
        <SmallCard metricName="Likes" metricCount="5462" platform="instagram" changeDirection="up" metricChange="2257%" />
        <SmallCard metricName="Profile Views" metricCount="52k" platform="instagram" changeDirection="up" metricChange="1375%" />
        <SmallCard metricName="Retweets" metricCount="117" platform="twitter" changeDirection="up" metricChange="303%" />
        <SmallCard metricName="Likes" metricCount="507" platform="twitter" changeDirection="up" metricChange="553%" />
        <SmallCard metricName="Likes" metricCount="107" platform="youtube" changeDirection="down" metricChange="19%" />
        <SmallCard metricName="Total Views" metricCount="1407" platform="youtube" changeDirection="down" metricChange="12%" />
      
        </Container>
    </div>
  )
}

export default HomeBottom
