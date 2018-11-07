export default function accountInfo() {
  const color = "#01a44c";

  const logoUrl =
    "https://carecru-production.s3.amazonaws.com/logos/052df93c-6f3e-4ba7-8baf-e9157d3b8540/6535bb48-799f-402e-9931-b58efccc60a1_original_Temporary Logo.PNG";
  const googlePlaceId = "ChIJ0fbdAFhskFQReXzijN934CQ";

  const headerProps = {
    logoUrl,
    imageHeight: 60
  };

  const footerProps = {
    address: "150-12737 Bel-Red Road Suite",
    province: "Washington",
    city: "Bellevue",
    phoneNumber: "+14254519001",
    phoneNumberFormatted: "(425) 451-9001",
    email: "info@fletcherdentalcare.com",
    accountName: "Fletcher Dental",
    facebookUrl: "https://www.facebook.com/fletcherdental/",
    googleUrl: `https://search.google.com/local/writereview?placeid=${googlePlaceId}`
  };

  return {
    footerProps,
    color,
    headerProps,
    website: "http://fletcherdentalcare.com/"
  };
}
