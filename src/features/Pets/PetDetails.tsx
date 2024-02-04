import Container from "@/components/ui/Container";
import { PETS } from "@/data/petsData";
import { IMAGE_URL } from "@/utils/constants";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PiDogLight } from "react-icons/pi";
import Button from "../../components/ui/Button";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { RiHeartsLine } from "react-icons/ri";

function PetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const shareUrl = window.location.href;

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`);
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${shareUrl}`);
  };

  const shareToGoogle = () => {
    window.open(`https://plus.google.com/share?url=${shareUrl}`);
  };

  const pet = PETS.find(item => item.id === id);
  useEffect(() => {
    const pet = PETS.find(item => item.id === id);
    if (!pet) {
      navigate("/");
    }
  }, [id, navigate]);
  if (!pet) return null;

  const {
    name,
    gene,
    age,
    price,
    size,
    color,
    location,
    info,
    microchip,
    vaccinated,
    publishDate,
  } = pet;

  return (
    <Container>
      <div className="peti">
        <div className="peti__left">
          <div className="peti__image">
            <img
              src={IMAGE_URL(`${name.replaceAll(" ", "-")}-1`, 800)}
              alt={name}
            />
          </div>

          <div className="peti__remarks">
            <div className="peti__remarks--mark">
              <RiHeartsLine className="peti__remarks--icon" />
              100% health guarantee for pets
            </div>
            <div className="peti__remarks--mark">
              <PiDogLight className="peti__remarks--icon" />
              100% guarantee of pet identification
            </div>
          </div>
          <div className="peti__share">
            <span>
              <FaShareAlt className="peti__share--icon" />
              share :
            </span>
            <div className="peti__share--socials">
              <FaFacebook
                className="peti__share--social"
                onClick={shareToFacebook}
              />
              <FaTwitter
                className="peti__share--social"
                onClick={shareToTwitter}
              />
              <FaLinkedin
                className="peti__share--social"
                onClick={shareToLinkedIn}
              />
              <FaGoogle
                className="peti__share--social"
                onClick={shareToGoogle}
              />
            </div>
          </div>
        </div>
        <div className="peti__right">
          <div className="peti__right--top">
            <p className="peti__id">MO #{id?.split("MO")[1]}</p>
            <p className="peti__name">{name} </p>
            <p className="peti__price">{price}</p>
          </div>
          <div className="peti__right--center">
            <Button> Contact us</Button>
            <Button variant="outline" icon={<IoChatboxEllipsesOutline />}>
              Chat with Monito
            </Button>
          </div>
          <div className="peti__right--bottom">
            <ul>
              <li>
                <p>ID</p>
                <p>: {id}</p>
              </li>
              <li>
                <p>Gender</p>
                <p>: {gene}</p>
              </li>
              <li>
                <p>Age</p>
                <p>: {age}</p>
              </li>
              <li>
                <p>Size</p>
                <p>: {size}</p>
              </li>
              <li>
                <p>Color</p>
                <p>: {color}</p>
              </li>
              <li>
                <p>Vaccinated</p>
                <p>: {vaccinated}</p>
              </li>
              <li>
                <p>Location</p>
                <p>: {location}</p>
              </li>
              <li>
                <p>Microship</p>
                <p>: {microchip}</p>
              </li>
              <li>
                <p>Published Date</p>
                <p>: {publishDate}</p>
              </li>
              <li>
                <p>Additional Info</p>
                <p>: {info}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PetDetails;
