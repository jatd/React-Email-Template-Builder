import React from "react";
import { Item, Image } from "react-html-email";
import { SpaceTable, CenterContainer, CenterElement } from "../../library";

export default function Header(props) {
  const { logoUrl, imageHeight, imageWidth, heightSpacing } = props;

  const link1 =
    "https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/b46b23df-6cab-47af-91f5-ee8cb4fc2628.png";

  const testImage =
    "https://carecru-production.s3.amazonaws.com/logos/31326a55-4399-497b-a22d-d656666559eb/49181383-aa1a-4264-9ab2-38c9a48b0b66_original_414417af-7290-4665-a76b-09f078d5aace_original_image2.png";

  return (
    <Item>
      <CenterElement colWidth={imageWidth || 460}>
        <SpaceTable height={55} />
        <CenterContainer>
          <Image
            width={imageWidth || "auto"}
            alt="Clinic Logo"
            src={logoUrl || link1}
            height={imageHeight || 40}
          />
        </CenterContainer>
      </CenterElement>
      <SpaceTable height={heightSpacing || 50} />
    </Item>
  );
}
