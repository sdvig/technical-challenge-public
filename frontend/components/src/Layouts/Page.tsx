import { Container } from "@chakra-ui/react";
import React from "react";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ flex: 1 }}>
      <Container pt="4rem" pr="3rem" pl="3rem" flex={1} maxW="4xl">
        {children}
      </Container>
    </main>
  );
};

export default Page;
