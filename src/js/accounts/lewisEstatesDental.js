export default function accountInfo() {
  const color = "#d09043";

  const logoUrl =
    "https://carecru-production.s3.amazonaws.com/logos/9f0f0506-4ec6-4690-8e09-4a615f901cea/937f85a0-7e42-40e2-972e-fdfed5a4c43f_original_Lewis-Estates-Logo-Copper-Black (1).png";
  const googlePlaceId = "ChIJCSJyr4aKn1MRO_PZjZENt4Q";

  const headerProps = {
    logoUrl,
    imageHeight: 60
  };

  const footerProps = {
    address: "2556 Guardian Road NW",
    province: "Alberta",
    city: "Edmonton",
    phoneNumber: "+15874104847",
    phoneNumberFormatted: "(587) 410-4847",
    email: "info@lewisestatesdental.com",
    accountName: "Lewis Estates Dental Centre",
    facebookUrl: "https://www.facebook.com/lewisestatesdentalcentre/",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "https://lewisestatesdental.com"
  };
}
