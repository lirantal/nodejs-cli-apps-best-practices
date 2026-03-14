#!/usr/local/bin/node

const https = require('https');
const fs = require('fs');

const args = process.argv.slice(2);

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

const CONFIG_DIR = __dirname + '/../.config/weather-cli';
const CONFIG_FILE = CONFIG_DIR + '/config.json';

function showHelp() {
  console.log('Usage: weather-cli fetch CITY [saveFile=FILEPATH]');
  console.log('       weather-cli config set KEY VALUE');
  process.exit();
}

function handleError(msg) {
  console.error('Something went wrong: ' + msg);
  process.exit();
}

function loadConfig() {
  try {
    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  } catch (e) {
    return {};
  }
}

function saveConfig(config) {
  const dir = __dirname + '/../.config/weather-cli';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config));
}

function fetchWeather(city, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      if (res.statusCode !== 200) {
        handleError('API call failed');
        return;
      }

      const weather = JSON.parse(data);

      console.log(`${GREEN}Weather in ${weather.name}:${RESET}`);
      console.log(`  Temperature: ${weather.main.temp}K`);
      console.log(`  Condition: ${weather.weather[0].description}`);
      console.log(`  Humidity: ${weather.main.humidity}%`);
      process.exit();
    });
  }).on('error', (e) => {
    handleError(e.message);
  });
}

if (args.length === 0 || args[0] === 'help') {
  showHelp();
}

if (args[0] === 'fetch') {
  const city = args[1];
  if (!city) {
    handleError('Please provide a city name');
  }

  const config = loadConfig();
  if (!config.apiKey) {
    handleError('No API key configured');
  }

  const saveArg = args.find(a => a.startsWith('saveFile='));
  const savePath = saveArg ? saveArg.split('=')[1] : null;

  fetchWeather(city, config.apiKey, savePath);

} else if (args[0] === 'config') {
  if (args[1] === 'set') {
    const key = args[2];
    const value = args[3];
    if (!key || !value) {
      handleError('Provide key and value');
    }
    const config = loadConfig();
    config[key] = value;
    saveConfig(config);
    console.log(`${GREEN}Config saved${RESET}`);
    process.exit();
  }
} else {
  showHelp();
}
