import tw, { styled } from 'twin.macro';

export const SynonymsWrapper = styled.div`
  ${tw`
    py-5 
    flex 
    gap-x-3 
    gap-y-5
    flex-wrap 
    w-full  
    mt-8
  `}
`;

export const SynonymItem = styled.button`
  ${tw`
    capitalize 
    bg-transparent
    px-2 
    py-1 
    border 
    border-accent
    text-accent 
    rounded-sm 
    hover:(bg-accent text-primary) 
    text-base
  `}

  transition : background-color ease-in-out 200ms ;
`;
