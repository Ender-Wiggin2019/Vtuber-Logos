import { Author, getCredit } from "../credits";

export const RaspberryPi: IBrand = {
  name: "RaspberryPi",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/RaspberryPi/Raspberry Pi.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};