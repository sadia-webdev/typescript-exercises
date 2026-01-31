# TypeScript exercise

TypeScript exercise in the mentorship program.

---

## 🧩 Code Snippet

```tsx


// interface ProductProps  {
//     name: string,
//     price: number,
//     description?: string
// }

type ProductProps = {
  name: string;
  price: number;
  description?: string;
};

const ProductCard = ({ name, price, description }: ProductProps) => {
  return (
    <div>
      <p>Product name: {name}</p>
      <p>Product price: ${price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;


```

![exercis photo](/exercise_7/src/assets/image.png)
