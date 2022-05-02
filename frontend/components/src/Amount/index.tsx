import React from "react";
import { useEffect } from "react";
import { useNumberInput, Flex, Button, Input } from "@chakra-ui/react";

interface Props {
  defaultValue?: number;
  onValueChange?: (value: number, name: string) => void;
  id: string;
}

const Amount = ({ defaultValue = 0, onValueChange, id }: Props) => {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber,
  } = useNumberInput({
    step: 1,
    defaultValue,
    min: 0,
    max: 999,
    id,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  useEffect(() => {
    if (onValueChange) onValueChange(valueAsNumber, input.id as string);
  }, [valueAsNumber]);

  return (
    <Flex
      maxW={{ base: "3.9375rem", md: "5.875rem" }}
      bg={{ base: "gray.100", md: "white" }}
      borderWidth={".1px"}
      height={{ base: "2.5rem", md: "1.875rem" }}
      borderColor="gray.300"
      borderRadius="lg"
      borderStyle={"solid"}
    >
      <Button
        {...dec}
        variant="ghost"
        minW="1.25rem"
        maxW="1.25rem"
        p="0rem"
        height={{ base: "2.5rem", md: "1.875rem" }}
      >
        -
      </Button>
      <Input
        {...input}
        variant="unstyled"
        ms="0"
        textAlign="center"
        fontWeight="900"
        width={{ base: "3.125rem", md: "2.5rem" }}
      />
      <Button
        {...inc}
        variant="ghost"
        minW="1.25rem"
        maxW="1.25rem"
        p="0rem"
        height={{ base: "2.5rem", md: "1.875rem" }}
      >
        +
      </Button>
    </Flex>
  );
};

export default Amount;
