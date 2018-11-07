export default function accountInfo() {
  const color = "#0087c7";
  const logoUrl =
    "https://carecru-production.s3.amazonaws.com/logos/5086adbe-22a9-4b76-981b-b68f0a3d6113/87ee979e-75e8-4b33-b294-86bbc3af2c78_original_GoersLogo.png";
  const googlePlaceId = "ChIJXS0oeDlPDogRPFUkvjZVhAg";

  const headerProps = {
    logoUrl,
    imageHeight: 50
  };

  const footerProps = {
    address: "6700 Route 83",
    province: "Illinois",
    city: "Darien",
    phoneNumber: "+16307890900",
    phoneNumberFormatted: "(630) 789-0900",
    email: "smile@goersdentalcare.com",
    accountName: "Goers Dental Care",
    facebookUrl: "https://www.facebook.com/GoersDentalCare/",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "https://www.goersdentalcare.com/"
  };
}
