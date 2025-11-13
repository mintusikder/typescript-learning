type Product = {
  name: string;
  price: number;
  stock: number;
    category?: string;
};

type ProductUpdate = Pick<Product, "price" | "stock">;

type ProductPreview = Omit<Product, "stock">;

type ProductRequire = Required<Product>;