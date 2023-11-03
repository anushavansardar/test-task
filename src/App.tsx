import { Checkbox, Button } from "antd";

import Input from "./components/input/Input";
import Select from "./components/select/Select";
import Slider from "./components/slider/Slider";

import "./App.scss";
import {
  addSocials,
  internetMarks,
  minuteMarks,
  options,
  smsMarks,
} from "./utils/constants";
import useApp from "./useApp";

const App = () => {
  const {
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
  } = useApp();
  if (status === "loading") {
    return <div className="loading">Loading....</div>;
  }

  return (
    <main className="container">
      <h1>Настройте тариф</h1>
      <div className="inputContainer third">
        <Input
          label="Телефон"
          message={error.phone || "Обязательное поле"}
          value={data.phone}
          onChange={onInputChange}
          error={error.phone}
        />
      </div>
      <div className="inputContainer third">
        <Select
          label="Оператор"
          message={error.operator || "Обязательное поле"}
          options={options}
          value={data.operator}
          onChange={onSelectChange}
          error={error.operator}
        />
      </div>

      <div className="inputContainer sliderContainer full">
        <Slider
          label="Минут"
          mark={minuteMarks}
          onChange={(e) => onSliderChange("minute", e)}
          step={20}
          min={100}
          max={600}
        />
      </div>

      <div className="inputContainer sliderContainer full">
        <Slider
          label="SMS"
          mark={smsMarks}
          onChange={(e) => onSliderChange("sms", e)}
          step={10}
          min={0}
          max={150}
        />
      </div>

      <div className="inputContainer sliderContainer full black-slider">
        <Slider
          label="Интернет"
          mark={internetMarks}
          onChange={(e) => onSliderChange("internet", e)}
          step={1}
          min={5}
          max={25}
        />
      </div>

      <div className="inputContainer checkboxesContainer half">
        <div className="label">Wi-Fi роутер</div>
        <div className="checkboxContainer">
          <label>
            <Checkbox
              onChange={() => onCheck("Аренда")}
              checked={data.wifi === "Аренда"}
            />
            <span className="checkboxText">
              Аренда <strong>99</strong> ₽/мес.
            </span>
          </label>
        </div>
        <div className="checkboxContainer">
          <label>
            <Checkbox
              onChange={() => onCheck("Выкупить")}
              checked={data.wifi === "Выкупить"}
            />
            <span className="checkboxText">
              Выкупить <strong>2 600</strong> ₽
            </span>
          </label>
        </div>
      </div>

      <div className="inputContainer half">
        <div className="label">Соцсети</div>
        <div className="additionalServices">
          {addSocials.map(({ id, Icon, name, value }) => (
            <div
              key={id}
              className={`service${
                data.services?.includes(name) ? " active" : ""
              }`}
              onClick={() => onChangeService(name)}
            >
              <Icon active={data.services?.includes(name)} />
              <div className="price">{value} ₽</div>
            </div>
          ))}
        </div>
      </div>
      <Button type="primary" size="large" onClick={onSubmit}>
        <strong>{tariffPrice} ₽ </strong> в месяц
      </Button>
    </main>
  );
};

export default App;
