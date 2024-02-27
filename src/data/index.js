import SvgImagotype from "../assets/svg/imagotype.svg";
import SvgImagotypeLight from "../assets/svg/imagotype_light.svg";
import SvgHeartPlus from "../assets/svg/heartplus.svg";
import JpgLanding from "../assets/img/landing.avif";
import SvgAddPersonal from "../assets/svg/addpersonal.svg";
import SvgLogOut from "../assets/svg/close.svg";
import SvgPersonalIcon from "../assets/svg/personal.svg";
import SvgPatientIcon from "../assets/svg/patient.svg";
import  SvgProfile from '../assets/svg/profile.svg';


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

export const HomeIcons = {
  PersonalIcon: {
    name: "PersonalIcon",
    SvgComponent: SvgPersonalIcon,
    title: "PersonalIcon",
    href: "/personal",
  },PatientIcon: {
    name: "PatientIcon",
    SvgComponent: SvgPatientIcon,
    title: "PatientIcon",
    href: "/patient",
  }
}

export const ImgLanding = {
  src: JpgLanding,
  title: "Portada Landing",
  href: "",
};

export const ProfileIcons = {
  SvgComponent: SvgProfile,
  title: "ProfileIcon",
  href: "/profile",
};

