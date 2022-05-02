export type Product = {
  productId: string;
  amount: number;
  createdAt: string;
  title: string;
  bulkAmount: number;
  bulkUnit: string;
  singleUnit: string;
  supplierArticleId: string;
  ean: string;
};

export type Order = {
  id: string;
  supplierId: string;
  createdAt: string;
  orderNumber: string;
  buyerName: string;
  productList: Record<string, Product>;
  buyerId: string;
};
