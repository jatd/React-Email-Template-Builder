import { formatPhoneNumber } from "../mainApp/library/utils/formatPhoneNumber";

export default function accountInfo() {
  const color = "#204d79";

  const logoUrl =
    "https://carecru-production.s3.amazonaws.com/logos/c05ade0e-eb8a-44ed-bf3c-a83bfa4bc5a3/89767e11-e098-4901-ac6b-983dde78fd6e_original_Dental-Gallery-copy-1.png";
  const googlePlaceId = "ChIJKWmbIeofoFMRwt-A_HTTyq8";

  const headerProps = {
    logoUrl,
    imageHeight: 80
  };

  const phoneNumber = "+17807057700";
  const trackingNumber = "+15877414093";

  const footerProps = {
    address: "466 Riverbend Square NW",
    province: "Alberta",
    city: "Edmonton",
    phoneNumber: trackingNumber,
    phoneNumberFormatted: formatPhoneNumber(trackingNumber),
    email: "doctorhsekhon@gmail.com",
    accountName: "Gallery Dental",
    facebookUrl: "https://www.facebook.com/DentalGalleryEdmonton",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "https://www.sekhondentistry.com/"
  };
}
