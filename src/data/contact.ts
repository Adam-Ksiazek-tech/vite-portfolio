import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const developerMeta = {
  name: "Adam Książek",
  brand: "AKCODE",
  year: new Date().getFullYear()
};

export const contactInfo = [
  {
    icon: Mail,
    label: "contact.email",
    value: "adam.ksiazek.2024@gmail.com",
    href: "mailto:adam.ksiazek.2024@gmail.com",
  },
  {
    icon: Phone,
    label: "contact.phone",
    value: "+48 501 623 643",
    href: "tel:+48501623643",
  },
  {
    icon: MapPin,
    label: "contact.location",
    value: "Dawidy Bankowe",
    href: null,
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    icon: Github,
    link: "https://github.com/Adam-pmpg"
  },
  {
    label: "GitHub",
    icon: Github,
    link: "https://github.com/Adam-Ksiazek-tech"
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    link: "https://linkedin.com"
  }
];