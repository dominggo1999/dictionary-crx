import tw, { styled } from 'twin.macro';

export const SentencesWrapper = styled.div`
  ${tw`
    md:w-1/2
    w-full
    md:py-10
    mb-10  
    md:mb-0
  `}

  ul{
    ${tw`
      flex 
      flex-col
      gap-y-5
      text-lg
    `}
  }

  b{
    ${tw`
      text-accent
    `}
  }
`;
