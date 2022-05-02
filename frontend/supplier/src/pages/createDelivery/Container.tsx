import { View as CreateDeliveryView } from "./View";
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

  const onAmountChange = (amount: number, id: string) => {
    const productList = { ...values.productList };
    const product = { ...productList[id] };

    product.amount = amount;
    productList[id] = product;

    setValues((oldValues) => ({
      ...oldValues,
      productList,
    }));
  };

  const isAmountChanged = () => {
    for (const key in values.productList) {
      const currentProduct = values.productList[key];
      const initialProduct = order.productList[key];
      if (currentProduct.amount !== initialProduct.amount) return false;
    }
    return true;
  };

  return (
    <CreateDeliveryView
      {...values}
      isModalOpen={values.isModalOpen}
      toggleModal={toggleModal}
      onAmountChange={onAmountChange}
      isAmountChanged={isAmountChanged}
    />
  );
};
