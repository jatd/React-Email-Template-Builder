export default function accountInfo() {
  const color = "#0087c7";

  const logoUrl =
    "https://gallery.mailchimp.com/3a58791334fa8896539cb2841/images/b46b23df-6cab-47af-91f5-ee8cb4fc2628.png";
  const googlePlaceId = "ChIJq07tHdp4bIcR1lmnO62NwmE";

  const headerProps = {
    logoUrl
  };

  const footerProps = {
    address: "12345 Main St.",
    province: "Planet Earth",
    city: "Anytown",
    phoneNumber: "+15555555555",
    phoneNumberFormatted: "555 555 5555",
    email: "awesome@dentalclinic.com",
    accountName: "Your Awesome Dental Clinic",
    facebookUrl: "https://www.facebook.com/cosmeticdentistryofcolorado/",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "http://www.google.com/"
  };
}
