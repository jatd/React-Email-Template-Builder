export default function accountInfo() {
  const color = "#c5ab78";

  const logoUrl =
    "https://carecru-production.s3.amazonaws.com/logos/41ed3497-fb86-4d0c-94bf-a2db0912ed0a/c52ed801-72a8-4c14-88c2-154fad7f6ec3_original_Acu_Dental_Gold.png";

  const googlePlaceId = "ChIJkaU4jll2hlQRs9KNT-oEJEM";

  const headerProps = {
    logoUrl
  };

  const footerProps = {
    address: "#245 - 4800 Kingsway",
    province: "BC",
    city: "Burnaby",
    phoneNumber: "+16044397744",
    phoneNumberFormatted: "(604) 439-7744",
    email: "info@acudentalclinic.ca",
    accountName: "Ivory Dental",
    facebookUrl: "https://www.facebook.com/ACUDental",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "https://www.ivorydental.ca"
  };
}
