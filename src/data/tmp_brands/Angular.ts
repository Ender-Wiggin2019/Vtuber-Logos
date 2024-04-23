import { Author, getCredit } from "../credits";

export const Angular: IBrand = {
  name: "Angular",
  logos: [
    {
      url: "/DownloadedLogos/Angular.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
    {
      url: "/DownloadedLogos/AngularNewLogo.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "new",
    },
  ],
};