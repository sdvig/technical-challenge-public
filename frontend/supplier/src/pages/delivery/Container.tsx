import { View as DeliveryView } from "./View";
import { Order } from "../../types";
import { useState } from "react";

interface ContainerProps {
  order: Order;
}

export const Container = ({ order }: ContainerProps) => {
  const [values, setValues] = useState({
    order,
    productList: order.productList,
    isModalOpen: false,
  });

  const toggleModal = () => {
    setValues((oldValues) => ({
      ...oldValues,
      isModalOpen: !oldValues.isModalOpen,
    }));
  };

  return (
    <DeliveryView
      {...values}
      isModalOpen={values.isModalOpen}
      toggleModal={toggleModal}
    />
  );
};
