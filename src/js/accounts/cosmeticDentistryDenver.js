export default function accountInfo() {
  const color = "#00446d";

  const logoUrl =
    "https://carecru-production.s3.amazonaws.com/logos/690084eb-29e4-4d37-9000-57de82639e79/1c45d487-45ff-476f-aa42-0cd1ba0881dc_original_logo-gay-radz (1).png";
  const googlePlaceId = "ChIJq07tHdp4bIcR1lmnO62NwmE";

  const headerProps = {
    logoUrl,
    imageHeight: 60
  };

  const footerProps = {
    address: "999 18th St. Suite 1300 South Tower",
    province: "Colorado",
    city: "Denver",
    phoneNumber: "+13032981414",
    phoneNumberFormatted: "(303) 298-1414",
    email: "care@downtowndenverdentist.com",
    accountName: "Cosmetic Dentistry of Colorado",
    facebookUrl: "https://www.facebook.com/cosmeticdentistryofcolorado/",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "http://www.downtowndenverdentist.com/"
  };
}
