export default function accountInfo() {
  const color = "#c5ab78";

  const logoUrl =
    "https://carecru-production.s3.amazonaws.com/logos/e870ae13-057a-4a8a-8229-e08a808ee294/4dbd9e11-2b2f-4d36-bfd6-dd4925845b41_original_IVORY LOGO_H_LONG.jpg";

  const googlePlaceId = "ChIJz4gv9POIblMR4bb7dpe2p1E";

  const headerProps = {
    logoUrl
  };

  const footerProps = {
    address: "335 Columbia Blvd W",
    province: "Alberta",
    city: "Lethbridge",
    phoneNumber: "+14033817423",
    phoneNumberFormatted: "(403) 381-7423",
    email: "admin@ivorydental.ca",
    accountName: "Ivory Dental",
    facebookUrl: "https://www.facebook.com/IvoryDentalLethbridge/",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "https://www.ivorydental.ca"
  };
}
