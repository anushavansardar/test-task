import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField } from "./redux/reducer";
import { getData } from "./redux/request";
import { TData, TError, TSelectOnChange } from "./utils/types";
import { selectData, selectStatus } from "./redux/selectors";
import { coefficients } from "./utils/constants";
import { validatePhoneNumber } from "./utils/helpers";

type TUseApp = {
  data: TData;
  status: string;
  onSubmit: () => void;
  onCheck: (value: string) => void;
  onChangeService: (name: string) => void;
  onSliderChange: (mode: string, value: number) => void;
  onSelectChange: TSelectOnChange;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  tariffPrice: number;
  error: TError;
};

const useApp = (): TUseApp => {
  const [error, setError] = useState<TError>({});
  const data: TData = useSelector(selectData);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const tariffPrice = useMemo(() => {
    let result = 100;
    result += coefficients.minute * data.minute;
    result += coefficients.sms * data.sms;
    result += coefficients.internet * data.internet;
    if (data.services?.length) {
      data.services.forEach((service) => {
        result += coefficients?.services[service];
      });
    }

    if (data.wifi) {
      result += coefficients.wifi[data.wifi];
    }

    if (data.operator) {
      result *= coefficients.operator[data.operator];
    }

    return result;
  }, [data]);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    if (!value) {
      setError((prev) => ({
        ...prev,
        phone: "Обязательное поле",
      }));
    } else if (!validatePhoneNumber(value)) {
      setError((prev) => ({
        ...prev,
        phone: "Невалидный номер телефона",
      }));
    } else {
      setError((prev) => {
        const { phone, ...rest } = prev;
        return rest;
      });
    }

    dispatch(setField({ key: "phone", value }));
  };

  const onSelectChange: TSelectOnChange = (value) => {
    setError((prev) => {
      const { operator, ...rest } = prev;
      return rest;
    });
    dispatch(setField({ key: "operator", value }));
  };

  const onSliderChange = (mode: string, value: number) => {
    dispatch(setField({ key: mode, value }));
  };

  const onChangeService = (name: string) => {
    if (data.services.includes(name)) {
      dispatch(
        setField({
          key: "services",
          value: data.services.filter((item) => item !== name),
        })
      );
    } else {
      dispatch(setField({ key: "services", value: [...data.services, name] }));
    }
  };

  const onCheck = (value: string) => {
    dispatch(setField({ key: "wifi", value }));
  };

  const onSubmit = () => {
    if (!data.phone) {
      setError((prev) => ({ ...prev, phone: "Обязательное поле" }));
    }

    if (!data.operator) {
      setError((prev) => ({ ...prev, operator: "Обязательное поле" }));
    }

    if (data.phone || data.operator || JSON.stringify(error) !== "{}") {
      alert(JSON.stringify({...data, total: tariffPrice}, null, " "));
    }
  };

  useEffect(() => {
    dispatch(getData() as any);
  }, [dispatch]);

  return {
    data,
    status,
    onSubmit,
    onCheck,
    onChangeService,
    onSliderChange,
    onSelectChange,
    onInputChange,
    tariffPrice,
    error,
  };
};

export default useApp;
