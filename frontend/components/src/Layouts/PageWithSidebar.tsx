import { Flex } from '@chakra-ui/react';

interface Props {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

const PageWithSidebar = ({ sidebar, content }: Props) => (
  <Flex height="100vh">
    <Flex>{sidebar}</Flex>
    <Flex flex={1} overflowX="scroll">
      {content}
    </Flex>
  </Flex>
);

export default PageWithSidebar;
