import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { Icon, IconNames } from '../Icon';
import Logo from '../Logo';
import Sidebar from '../Sidebar';

interface Props {
  routes: {
    name: string;
    path: string;
    icon?: IconNames;
  }[];
  isOpen: boolean;
  sidebarToggleClicked?: (newState: boolean) => {};
}

const Navbar = ({ routes, isOpen, sidebarToggleClicked }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar isOpen={isOpen} sidebarToggleClicked={sidebarToggleClicked}>
      <Flex flexDirection="column" flex={1} padding='0 1rem 1rem'>
        <Logo width="2.5rem" />
        <Flex direction="column" marginTop="2.75rem">
          {routes.map((route) => (
            <Box key={route.name} marginBottom="0.063rem">
              <Button
                isActive={route.path === `/${location.pathname.split('/')[1]}`}
                isFullWidth={true}
                leftIcon={route.icon && <Icon iconName={route.icon} />}
                variant="ghost"
                justifyContent="flex-start"
                onClick={() => navigate(route.path)}
              >
                {route.name}
              </Button>
            </Box>
          ))}
        </Flex>
        <Spacer />
        <Box margin='0 .5rem .25rem'>
          <Button isFullWidth={true} size="lg" variant="outline">
            Logout
          </Button>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Navbar;
