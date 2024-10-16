import './App.css';
import { useState } from 'react';
import Select from 'react-select';
import en from "./locales/en.json";
import ua from "./locales/ua.json";
import ru from "./locales/ru.json";

const options = [
  {
    value: "en",
    label: 'English',
    language: en
  },
  {
    value: "ua",
    label: 'Українська',
    language: ua
  },
  {
    value: "ru",
    label: 'Русский',
    language: ru
  }
];
function App() {
  const [language, setLanguage] = useState(options[0])

  return (
    <div className="App">
      <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', }}>
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{language.language.language}:</p>
        <div style={{ width: '200px' }}>
          <Select
            value={language}
            onChange={(value) => setLanguage(value)}
            options={options}
          />
        </div>
      </div>
      <h1>{language.language["1"]}</h1>
      <p><strong>{language.language["2"]}</strong> 16.10.2024</p>

      <p>{language.language["3"]}</p>

      <h2>{language.language["4"]}</h2>
      <p>{language.language["5"]}</p>
      <ul>
        <li><strong>{language.language["6"]}</strong>{language.language["7"]}</li>
        <li><strong>{language.language["8"]}</strong>{language.language["9"]}</li>
        <li><strong>{language.language["10"]}</strong>{language.language["11"]}</li>
        <li><strong>{language.language["38"]}</strong>{language.language["39"]}</li>

      </ul>
      <p>{language.language["12"]}</p>

      <h2>{language.language["13"]}</h2>
      <p>{language.language["14"]}</p>
      <p>{language.language["15"]}</p>

      <h2>{language.language["16"]}</h2>
      <p>{language.language["17"]}</p>
      <ul>
        <li><a href="https://policies.google.com/privacy" target="_blank">{language.language["18"]}</a></li>
      </ul>

      <h2>{language.language["19"]}</h2>
      <p>{language.language["20"]}</p>
      <ul>
        <li>{language.language["21"]}</li>
        <li>{language.language["22"]}</li>
        <li>{language.language["23"]}</li>
        <li>{language.language["24"]}</li>
        <li>{language.language["25"]}</li>
        <li>{language.language["26"]}</li>
      </ul>
      <p>{language.language["27"]}</p>

      <h2>{language.language["28"]}</h2>
      <p>{language.language["29"]}</p>

      <h2>{language.language["32"]}</h2>
      <p>{language.language["33"]}</p>

      <h2>{language.language["34"]}</h2>
      <p>{language.language["35"]}</p>

      <h2>{language.language["36"]}</h2>
      <p>{language.language["37"]}</p>

      <h2>{language.language["40"]}</h2>
      <p>{language.language["41"]}</p>
      <ul>
        <li>{language.language["42"]}</li>
        <li>{language.language["43"]}</li>
        <li>{language.language["44"]}</li>
        <li>{language.language["46"]}</li>
      </ul>
      <p>{language.language["45"]}</p>

    </div>
  );
}

export default App;
