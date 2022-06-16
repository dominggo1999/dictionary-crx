import tw, { styled } from 'twin.macro';

export const PronunciationWrapper = styled.div`

  audio{
    ${tw`
      hidden
    `}
  }
`;

export const Icon = styled.button`
  ${tw`
    h-full
    flex 
    items-center 
    text-4xl 
    text-accent
  `}
`;
