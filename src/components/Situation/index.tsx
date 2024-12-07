import { SITUATIONS } from "./data";
import Header from "./Header";
import * as S from "./styled";

const Situation = () => {
  return (
    <>
      <Header />
      <S.Main>
        <S.DescriptionBox>
          <S.Description>
            토픽 추천이 필요한
            <br />
            상황을 선택 해주세요
          </S.Description>
        </S.DescriptionBox>
        <S.SituationBox>
          {SITUATIONS.map((situation) => (
            <S.SituationItem key={situation}>{situation}</S.SituationItem>
          ))}
        </S.SituationBox>
      </S.Main>
    </>
  );
};

export default Situation;
