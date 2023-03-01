// Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEye,
  faEyeSlash,
  faCheck,
  faExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const installGlobalIcons = () => {
  library.add(faEye);
  library.add(faEyeSlash);
  library.add(faCheck);
  library.add(faExclamation);
  library.add(faXmark);
  library.add(faFacebookF);
  library.add(faTwitter);
  library.add(faInstagram);
  library.add(faYoutube);
  library.add(faLinkedinIn);
};
