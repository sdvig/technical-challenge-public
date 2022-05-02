import { Flex, Text } from '@chakra-ui/react';
interface Props {
  amount: number;
}
const UneditableAmount = ({ amount = 0 }) => {
  return (
    <Flex maxW="4rem">
      <Text fontSize="md" color="gray.900" fontWeight="600">
        {amount} ×
      </Text>
    </Flex>
  );
};

export default UneditableAmount;
