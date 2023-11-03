export type TSelectOnChange = (
  value: string,
  option:
    | {
        label: string;
        value: string;
      }
    | {
        label: string;
        value: string;
      }[]
) => void;

export type TData = {
  phone: string;
  operator: string;
  minute: number;
  sms: number;
  internet: number;
  wifi: string | null;
  services: string[];
};

export type TError = {
  phone?: string;
  operator?: string;
};

export type TStore = {
  data: TData;
  status: "loading" | "error" | "succes" | "idle";
};

export type TCoefficients = {
  operator: { [key: string]: number };
  minute: number;
  sms: number;
  internet: number;
  wifi: { [key: string]: number };
  services: { [key: string]: number };
};
