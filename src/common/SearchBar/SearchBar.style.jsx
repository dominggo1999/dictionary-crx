import tw, { styled } from 'twin.macro';

export const SearchBarWrapper = styled.div`
  ${tw`
    w-full
    flex  
    flex-wrap 
    gap-x-3
  `}

  form{
    ${tw`
      w-[80%]
    `}
  }

  input{
    ${tw`
      w-full
      flex
      border
      rounded 
      border-2 
      border-black
      border-opacity-20 
      text-2xl 
      px-3
      py-1 
      bg-transparent 
      border-accent  
      outline-none 
    `}
  }
`;
