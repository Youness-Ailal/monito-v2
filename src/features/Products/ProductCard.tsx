import { IMAGE_URL } from "@/utils/constants";
import "./products.scss";
import { Link } from "react-router-dom";
import { GoGift } from "react-icons/go";

//@ts-ignore
function ProductCard({ product }) {
  const { id, name, type, weight, price, gift } = product;
  return (
    <Link to={`/products/${id}`} className="product">
      <div className="product__image-container">
        <img
          src={IMAGE_URL(name.replaceAll(" ", "%20"))}
          alt={name}
          className="product__image"
        />
      </div>
      <div className="product__text">
        <div className="product__name">{name}</div>
        <div className="product__info">
          <div className="product__gene">
            Product : <span>{type}</span>
          </div>

          {weight && (
            <>
              <span>|</span>
              <div className="product__age">
                Weight : <span>{weight} </span>
              </div>
            </>
          )}
        </div>
        <div className="product__pricing">
          <div className="product__price">{price} DH</div>
        </div>
        <div className="product__gift">
          <GoGift className="product__gift--icon" />
          <p>&bull; {gift} </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
