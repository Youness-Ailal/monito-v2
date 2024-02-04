import Container from "@/components/ui/Container";
import { PRODUCTS } from "@/data/productsData";
import useShareSocial from "@/hooks/useShareSocial";
import { IMAGE_URL } from "@/utils/constants";
import { useEffect, useState } from "react";

import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../Cart/CartSlice";
import { useCartDispatch } from "@/store/hooks";

function ProductDetails() {
  const { id } = useParams();
  const { shareToFacebook, shareToTwitter, shareToLinkedIn, shareToGoogle } =
    useShareSocial();
  const dispatch = useCartDispatch();

  const navigate = useNavigate();
  const product = PRODUCTS.find(item => item.id === id);
  useEffect(() => {
    if (!product) navigate("/");
  }, [id, product, navigate]);

  const {
    id: productId,
    name,
    type,
    weight,
    price,
    gift,
    description,
  } = product || {};
  const [quantity, setQuantity] = useState(1);

  function quantityIncrease() {
    setQuantity(prev => prev + 1);
  }
  function quantityDescrease() {
    setQuantity(prev => Math.max(1, prev - 1));
  }
  function handleAddItem() {
    dispatch(
      addToCart({
        id: productId,
        name,
        quantity,
        price,
      })
    );
    setQuantity(1);
  }

  if (!product) return null;
  return (
    <Container>
      <div className="product-details">
        <div className="product-details__left">
          <div className="product-details__image">
            <img
              src={IMAGE_URL(name!.replaceAll(" ", "%20"), 800)}
              alt={name}
            />
          </div>

          <div className="product-details__share">
            <span>
              <FaShareAlt className="product-details__share--icon" />
              share :
            </span>
            <div className="product-details__share--socials">
              <FaFacebook
                className="product-details__share--social"
                onClick={shareToFacebook}
              />
              <FaTwitter
                className="product-details__share--social"
                onClick={shareToTwitter}
              />
              <FaLinkedin
                className="product-details__share--social"
                onClick={shareToLinkedIn}
              />
              <FaGoogle
                className="product-details__share--social"
                onClick={shareToGoogle}
              />
            </div>
          </div>
        </div>
        <div className="product-details__right">
          <div className="product-details__right--top">
            <p className="product-details__id">PD #{id?.split("PD")[1]}</p>
            <p className="product-details__name">{name} </p>
            <p className="product-details__price">{price} DH</p>
          </div>
          <div className="product-details__right--center">
            <div className="product-details__quantity">
              <button onClick={quantityDescrease}>-</button>
              <span>{quantity}</span>
              <button onClick={quantityIncrease}>+</button>
            </div>
            <button
              className="button product-details__add"
              onClick={handleAddItem}>
              Add to Cart
            </button>
          </div>
          <div className="product-details__right--bottom">
            <ul>
              <li>
                <p>ID</p>
                <p>: {id}</p>
              </li>
              <li>
                <p>Stock</p>
                <p className="stock">: in Stock</p>
              </li>
              <li>
                <p>Type</p>
                <p>: {type}</p>
              </li>

              <li>
                <p>Weight</p>
                <p>: {weight}</p>
              </li>
              <li>
                <p>Gift</p>
                <p>: {gift}</p>
              </li>
              <li>
                <p>Description</p>
                <p>: {description}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
