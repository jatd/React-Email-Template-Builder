import { formatPhoneNumber } from "../mainApp/library/utils/formatPhoneNumber";

export default function accountInfo() {
  const color = "#163660";

  const logoUrl =
    "https://carecru-production.s3.amazonaws.com/logos/9d5c4e67-80af-4993-be1b-d5b9c555eb42/38190253-43ed-4c10-8a2f-b4bf0a9a653b_original_epic w url.png";
  const googlePlaceId = "ChIJydDUkTd5a4cRRPMLnp2FMAk";

  const headerProps = {
    logoUrl
  };

  const footerProps = {
    address: "7621 Shaffer Pkwy #A",
    province: "Colorado",
    city: "Littleton",
    phoneNumber: "+15555555555",
    phoneNumberFormatted: formatPhoneNumber("+1555 555 5555"),
    email: "debbie.caulfield@comcast.net",
    accountName: "Epic Dentistry",
    facebookUrl: "https://www.facebook.com/Epic-Dentistry-390040617731417/",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "https://littletonsmiles.com/"
  };
}
