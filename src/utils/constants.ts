import { SliderMarks } from "antd/es/slider";
import FacebookSvg from "../svg/Facebook";
import VkSvg from "../svg/Vk";
import OKSvg from "../svg/Ok";
import InstagramSvg from "../svg/Instagram";
import TiktokSvg from "../svg/Tiktok";
import { TCoefficients } from "./types";

export const minuteMarks: SliderMarks = {
  100: "100",
  200: "200",
  300: "300",
  600: "600",
};

export const smsMarks: SliderMarks = {
  0: "0",
  50: "50",
  100: "100",
  150: "150",
};

export const internetMarks: SliderMarks = {
  5: "5",
  10: "10",
  15: "15",
  25: "25",
};

export const options = [
  { label: "Оператор N1", value: "Оператор N1" },
  { label: "Оператор N2", value: "Оператор N2" },
  { label: "Оператор N3", value: "Оператор N3" },
];

export const addSocials = [
  { id: crypto.randomUUID(), name: "Facebook", Icon: FacebookSvg, value: 20 },
  { id: crypto.randomUUID(), name: "Vk", Icon: VkSvg, value: 20 },
  { id: crypto.randomUUID(), name: "OK", Icon: OKSvg, value: 20 },
  { id: crypto.randomUUID(), name: "Instagram", Icon: InstagramSvg, value: 60 },
  { id: crypto.randomUUID(), name: "Tiktok", Icon: TiktokSvg, value: 60 },
];

export const coefficients: TCoefficients = {
  operator: { "Оператор N1": 1.1, "Оператор N2": 1.2, "Оператор N3": 1.3 },
  minute: 0.5,
  sms: 0.2,
  internet: 10,
  wifi: { Аренда: 99, Выкупить: 0 },
  services: { Facebook: 20, Vk: 20, OK: 20, Instagram: 60, Tiktok: 60 },
};
