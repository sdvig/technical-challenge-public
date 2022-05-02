import { HStack, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 1.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const CtaContainer = ({ children, ...props }: Props) => {
  return (
    <Box {...props}>
      <Container>
        <HStack maxW={'4xl'} w={'100%'} justify="flex-end" spacing="2rem">
          {children}
        </HStack>
      </Container>
    </Box>
  );
};

export default CtaContainer;
