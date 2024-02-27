import SvgImagotype from "../assets/svg/imagotype.svg";
import SvgImagotypeLight from "../assets/svg/imagotype_light.svg";
import SvgHeartPlus from "../assets/svg/heartplus.svg";
import JpgLanding from "../assets/img/landing.avif";
import SvgAddPersonal from "../assets/svg/addpersonal.svg";
import SvgLogOut from "../assets/svg/close.svg";

export const Imagotype = {
  name: "CiudadSalud",
  SvgComponent: SvgImagotype,
  title: "Imagotype",
  href: "",
};

export const ImagotypeLight = {
  name: "CiudadSalud",
  SvgComponent: SvgImagotypeLight,
  title: "Imagotype",
  href: "",
};

export const NavIcons = {
  HeartPlus: {
    name: "HeartPlus",
    SvgComponent: SvgHeartPlus,
    title: "HeartPlus",
    href: "/patient",
  },
  AddPersonal:{
    name: "AddPersonal",
    SvgComponent: SvgAddPersonal,
    title: "AddPersonal",
    href: "/personal",
  },
  LogOut:{
    name: "LogOut",
    SvgComponent: SvgLogOut,
    title: "LogOut",
    href: "/close",
  }
};

export const ImgLanding = {
  src: JpgLanding,
  title: "Portada Landing",
  href: "",
};
