import { withRouter } from "next/router";
import styles from "../../styles/main.module.css";

function Product(product) {
  console.log("name", product.name);
  return (
    <div className={styles.product}>
      <img src={product.image} alt="" className={styles.product__image} />
      <h2 className={styles.product__title}>{product.name}</h2>
      <p className={styles.product__category}>
        Categories: {product.categories}
      </p>
      <p className={styles.product__description}>{product.description}</p>
      <div>
        <div className={styles.product__price}>COP$ {product.price}</div>
        <button
          className="snipcart-add-item"
          data-item-id={product.id}
          data-item-name={product.name}
          data-item-price={product.price}
          data-item-url={product.url}
          data-item-categories={product.categories}
          data-item-image={product.image}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default Product;
