import tw, { styled } from 'twin.macro';

export const IndonesianWrapper = styled.div`
  ${tw`
    py-5
  `}
`;

export const DefItem = styled.li`
  ${tw`
    text-lg
    flex 
    gap-x-4 
    gap-y-2
  `}

  span{
    ${tw`
      text-accent
      italic
      min-w-[4rem]
    `}
  }
`;
