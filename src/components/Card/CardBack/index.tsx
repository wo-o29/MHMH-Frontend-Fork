import * as S from "./styled";
import CardDotEffect from "@assets/icons/card-dot-effect.svg";
import CardBackIcon from "@assets/icons/card-back.svg";
import TipTextIcon from "@assets/icons/tip-text.svg";
import { CardProps } from "..";

const TIPS = [
  {
    content: "1. 상대방의 답변을 공감하며 확장하기",
    items: [
      "반응하기: 상대의 답변에 긍정적인 리액션을 보여주세요.",
      "관련된 경험 공유: '비슷한 거 해봤는데 재미있더라구요.' 라고 말하며 공통점을 찾아가세요.",
    ],
  },
  {
    content: "2. 관심사를 탐색하며 구체적인 질문 던지기",
    items: [
      "'운동하신다고 했는데, 주로 어떤 운동을 하세요?'",
      "'최근 본 영화 중에 가장 재밌었던 건 뭐였어요?'",
    ],
  },
  {
    content: "3. 상대방의 답변을 공감하며 확장하기",
    items: [
      "반응하기: 상대의 답변에 긍정적인 리액션을 보여주세요.",
      "관련된 경험 공유: '비슷한 거 해봤는데 재미있더라구요.' 라고 말하며 공통점을 찾아가세요.",
    ],
  },
] as const;

function CardBack({ situationName, id, content }: CardProps) {
  return (
    <S.CardWrap>
      <S.Card>
        <S.Box>
          <S.SubTitle>
            No. <S.CardIndex>{id}</S.CardIndex> {situationName}
          </S.SubTitle>
          <S.Title>{content}</S.Title>
          <S.TipBox>
            <S.TipText>
              <img src={TipTextIcon} />
            </S.TipText>
            <S.Line />
          </S.TipBox>
          <S.TipList>
            {TIPS.map((tip, idx) => (
              <S.Tip key={idx}>
                <S.TipItem>{tip.content}</S.TipItem>
                <S.TipSubList>
                  <S.TipSubItem>{tip.items[0]}</S.TipSubItem>
                  <S.TipSubItem>{tip.items[1]}</S.TipSubItem>
                </S.TipSubList>
              </S.Tip>
            ))}
          </S.TipList>
        </S.Box>
        <S.CardDotEffect src={CardDotEffect} draggable={false} />
        <S.CardBackIcon src={CardBackIcon} alt="카드 뒤집기" />
      </S.Card>
    </S.CardWrap>
  );
}

export default CardBack;
