import styled from "styled-components";
import BigCard from "../reuseable/BigCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3% auto;

  @media (max-width: 1044px) {
    flex-wrap: wrap;
  }
`;

const HomeTop = () => {
  return (
    <Container>
      <BigCard
        platform="facebook"
        handle="nathanf"
        followers="1987"
        followSubscribe="FOLLOWERS"
        todayChange="12"
        changeDirection="up"
      />
      <BigCard
        platform="twitter"
        handle="nathanf"
        followers="1044"
        followSubscribe="FOLLOWERS"
        todayChange="99"
        changeDirection="up"
      />
      <BigCard
        platform="instagram"
        handle="realnathanf"
        followers="11k"
        followSubscribe="FOLLOWERS"
        todayChange="1099"
        changeDirection="up"
      />
      <BigCard
        platform="youtube"
        handle="Nathan F."
        followers="8239"
        followSubscribe="SUBSCRIBERS"
        todayChange="144"
        changeDirection="down"
      />
    </Container>
  );
};

export default HomeTop;
