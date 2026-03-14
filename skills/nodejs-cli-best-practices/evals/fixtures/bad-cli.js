#!/usr/local/bin/node
// §4.4 VIOLATION: hardcoded node path — breaks if node is installed elsewhere

// weather-cli: fetch and display weather data
// This file intentionally demonstrates multiple Node.js CLI best practice violations

const https = require('https');
const fs = require('fs');

// §1.1 VIOLATION: parsing process.argv manually with non-POSIX syntax
// Arguments use KEY=VALUE style instead of --key value
const args = process.argv.slice(2);

// §9.1 VIOLATION: no --version / -V flag at all

// §6.4 VIOLATION: process.exit() called without an exit code
function showHelp() {
  console.log('Usage: weather-cli fetch CITY [saveFile=FILEPATH]');
  console.log('       weather-cli config set KEY VALUE');
  process.exit(); // exits with undefined code, treated as 0 even on "error"
}

// §6.1 VIOLATION: no error codes in error messages
// §6.2 VIOLATION: error message says what's wrong but not what to do
// §6.4 VIOLATION: process.exit() without code
function handleError(msg) {
  console.error('Something went wrong: ' + msg);
  process.exit();
}

// §7.2 VIOLATION: using __dirname for a user-relative path (wrong)
// §3.3 VIOLATION: path concatenation with string literals instead of path.join
const CONFIG_DIR = __dirname + '/../.config/weather-cli';
const CONFIG_FILE = CONFIG_DIR + '/config.json';

// §1.4 VIOLATION: hardcoded ANSI escape codes with no NO_COLOR check,
// no TTY detection, no graceful degradation for non-color terminals
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

function loadConfig() {
  try {
    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  } catch (e) {
    return {};
  }
}

// §3.3 VIOLATION: path concatenation again
function saveConfig(config) {
  const dir = __dirname + '/../.config/weather-cli';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config));
}

// §6.3 VIOLATION: no debug mode — impossible to diagnose failures
// §3.1 VIOLATION: no STDIN support — can't pipe data in
// §3.2 VIOLATION: no --json flag for structured/machine-readable output
// §4.2 VIOLATION: no graceful degradation — always outputs color regardless of terminal
function fetchWeather(city, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      if (res.statusCode !== 200) {
        // §6.1 VIOLATION: no error code
        // §6.2 VIOLATION: "API call failed" tells the user nothing actionable
        handleError('API call failed');
        return;
      }

      const weather = JSON.parse(data);

      // Only human-readable output — no --json flag for scripting/CI use
      console.log(`${GREEN}Weather in ${weather.name}:${RESET}`);
      console.log(`  Temperature: ${weather.main.temp}K`);
      console.log(`  Condition: ${weather.weather[0].description}`);
      console.log(`  Humidity: ${weather.main.humidity}%`);
      process.exit(); // §6.4 VIOLATION: no exit code
    });
  }).on('error', (e) => {
    handleError(e.message);
  });
}

// --- main ---

if (args.length === 0 || args[0] === 'help') {
  showHelp();
}

// §1.1 VIOLATION: positional subcommands with KEY=VALUE args, not POSIX flags
if (args[0] === 'fetch') {
  const city = args[1];
  if (!city) {
    // §1.2 VIOLATION: errors out instead of interactively prompting for the city
    handleError('Please provide a city name');
  }

  const config = loadConfig();
  if (!config.apiKey) {
    // §6.2 VIOLATION: doesn't tell user how to set the API key
    handleError('No API key configured');
  }

  // §1.1 VIOLATION: non-POSIX KEY=VALUE argument style
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
    process.exit(); // §6.4 VIOLATION: no exit code
  }
} else {
  showHelp();
}
