export function createPageUrl (page: string)  {
  const slug = page.toLowerCase();
  switch (slug) {
    case "home":
      return "/salon/home";
    case "services":
      return "/salon/services";
    case "stylists":
      return "/salon/stylist";
    case "booking":
      return "/salon/booking";
    case "gallery":
      return "/salon/gallery";
    case "contact":
      return "/salon/contact";
    default:
      return "/salon";
  }
};