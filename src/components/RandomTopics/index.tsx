import Header from "../Header";
import TopicCards from "../TopicCards";
import * as S from "./styled";
import { useRandomTopics } from "../../hooks/getRandomTopics";
import { useState } from "react";
import Finish from "../SituationFinish";
import Loading from "../Loading";

const RandomTopics = () => {
  const { data, isLoading } = useRandomTopics();
  const [hasViewedAllCards, setHasViewedAllCards] = useState(false);

  const topics = data?.topics || [];

  if (isLoading)
    return (
      <>
        <Header title="랜덤 토픽 추천" />
        <Loading />
      </>
    );

  return (
    <>
      <Header title="랜덤 토픽 추천" />
      <S.Main>
        <S.TopicCardsContainer>
          {hasViewedAllCards ? (
            <Finish topics={topics} />
          ) : (
            <TopicCards
              topics={topics}
              onHasViewedAllCards={setHasViewedAllCards}
            />
          )}
        </S.TopicCardsContainer>
      </S.Main>
    </>
  );
};

export default RandomTopics;
