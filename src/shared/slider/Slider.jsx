import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ width: "500px", height: "400px" }}
            src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ width: "500px", height: "400px" }}
            src="https://media.gettyimages.com/id/1097944444/photo/the-mojave-operating-system-desktop-screen-is-seen-on-an-apple-macbook-pro-in-this-photo.jpg?s=612x612&w=gi&k=20&c=vUe2PWOEMzDukwYp3UPPCiZT4kJpxeUUSJQ6nczdb5g="
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ width: "500px", height: "400px" }}
            src="https://media.istockphoto.com/id/1199648781/photo/new-samsung-galaxy-note-10-android-smartphone.jpg?s=612x612&w=0&k=20&c=OVoepdXp3ibbBHm5KoouSxskXZ3pvg6zJnF1EPoR1Hc="
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
