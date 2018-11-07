export default function accountInfo() {
  const color = "#c6aa7b";

  const logoUrl =
    "https://carecru-production.s3.amazonaws.com/logos/a1e3cc16-6e43-461d-b79a-97c7bd8d1a68/f33d3133-ae6b-410a-8d93-9b8cc7786406_original_thelowecentre_logo_2_2014.png";
  const googlePlaceId = "ChIJx2jbl9RzhlQRnZlxYm4m-V0";

  const headerProps = {
    logoUrl,
    imageHeight: 80
  };

  const footerProps = {
    address: "601-1200 Burrard St",
    province: "BC",
    city: "Vancouver",
    phoneNumber: "+16046832483",
    phoneNumberFormatted: "(604) 683-2483",
    email: "info@mysmilemakeover.com",
    accountName: "The Lowe Centre for Cosmetic and Implant Dentistry",
    facebookUrl: "https://www.facebook.com/MySmileMakeover",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "http://www.mysmilemakeover.com"
  };
}
