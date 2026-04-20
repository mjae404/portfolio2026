import iconEmail from "@/app/assets/icons/icon-email.svg";
import iconGithub from "@/app/assets/icons/icon-github.svg";
import iconLinkedin from "@/app/assets/icons/icon-linkedin.svg";
import { StaticImageData } from "next/image";

export interface ContactItem {
  label: string;
  href: string;
  icon: StaticImageData;
}

export const contactItems: ContactItem[] = [
  {
    label: "email",
    href: "mailto:mjaedot@gmail.com",
    icon: iconEmail,
  },
  {
    label: "github",
    href: "https://github.com/mjae404",
    icon: iconGithub,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/mjaedot",
    icon: iconLinkedin,
  },
];
