import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@hierfoods/components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@fontsource/roboto/400.css";
import "@fontsource/inter/400.css";
import { Delivery } from "./pages/delivery";
import { CreateDelivery } from "./pages/createDelivery";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/order/:orderId/delivery/create"
            element={<CreateDelivery />}
          />
          <Route path="/order/:orderId/delivery" element={<Delivery />} />
          <Route
            path="/"
            element={<Navigate to="/order/123/delivery/create" />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
