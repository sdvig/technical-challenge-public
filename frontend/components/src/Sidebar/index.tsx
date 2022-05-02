import { ChevronLeftIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, IconButton, useTheme } from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  sidebarToggleClicked?: (newState: boolean) => {};
  children: React.ReactNode;
}

const Sidebar = ({ isOpen, sidebarToggleClicked, children }: Props) => {
  const theme = useTheme();

  return isOpen ? (
    <Flex
      width="11.5rem"
      flexDirection="column"
      backgroundColor={theme.colors.beige[100]}
    >
      <IconButton
        variant="ghost"
        aria-label="Hide sidebar"
        alignSelf="flex-end"
        icon={
          <ChevronLeftIcon color={theme.colors.gray[500]} fontSize="1.5rem" />
        }
        onClick={() => {
          sidebarToggleClicked?.(false);
        }}
      />

      <Flex flex={1}>{children}</Flex>
    </Flex>
  ) : (
    <IconButton
      aria-label="Show sidebar"
      icon={<HamburgerIcon fontSize="1.5rem" />}
      onClick={() => {
        sidebarToggleClicked?.(true);
      }}
    ></IconButton>
  );
};

export default Sidebar;
