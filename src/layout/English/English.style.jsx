import tw, { styled } from 'twin.macro';

export const EnglishWrapper = styled.div`
  ${tw`
    flex 
    flex-col 
    gap-y-4 
    mt-4
  `}

  b{
    ${tw`
      font-normal
      text-accent
    `}
  }
`;

export const Short = styled.p`
  ${tw`
    text-2xl
    mb-2
  `}
`;

export const Long = styled.p`
  ${tw`
    text-lg
  `}
`;
