/** Store data — address/phone supplied for the project; hours to confirm. */

export type StoreLocation = {
  name: string;
  addressLines: string[];
  address: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  directionsHref: string;
  hoursNote: string;
  verified: boolean;
};

export const stores: StoreLocation[] = [
  {
    name: "Ananthula Kedari Family Shopping Mall",
    addressLines: [
      "8-11 12, Jayaprakash Narayan Road",
      "Chowrasta, Sherpura",
      "Warangal, Telangana 506002",
    ],
    address:
      "8-11 12, Jayaprakash Narayan Road, Chowrasta, Sherpura, Warangal, Telangana 506002",
    phone: "+91 88975 76699",
    phoneHref: "tel:+918897576699",
    whatsappHref:
      "https://wa.me/918897576699?text=" +
      encodeURIComponent(
        "Hello Ananthula Kedari, I would like help with your collections.",
      ),
    directionsHref:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(
        "Ananthula Kedari Family Shopping Mall, Jayaprakash Narayan Road, Chowrasta, Warangal, Telangana 506002",
      ),
    hoursNote: "Open all week — call to confirm today's hours",
    verified: false,
  },
];
