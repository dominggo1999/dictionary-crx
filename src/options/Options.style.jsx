import tw, { styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import { Wrapper } from '~/common/Wrapper.jsx';

export const OptionsWrapper = styled(Wrapper)`
  ${tw`
    flex 
    md:flex-row
    flex-col  
    gap-x-10
  `}
`;

export const ScrollbarStyle = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    ${tw`
      bg-transparent
    `}
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    ${tw`
      bg-[#495670] 
      rounded-md
    `}
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
