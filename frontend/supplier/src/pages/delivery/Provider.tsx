import { Container as DeliveryContainer } from "./Container";
import { fetchOrder } from "../../../../../api";

export const Provider = () => {
  const order = fetchOrder();

  if (!order) return <div>Loading...</div>;

  return <DeliveryContainer order={order} />;
};
