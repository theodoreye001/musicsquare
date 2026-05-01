const fs = require('fs');
const html = fs.readFileSync('d:/AI/MusicPlayer/index.html', 'utf8');

// Find ALL script blocks, take the LAST one (the main app script)
const matches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
console.log(`Found ${matches.length} inline script block(s).`);

if (matches.length === 0) {
  console.log('No inline script blocks found!');
  process.exit(1);
}

const lastScript = matches[matches.length - 1][1];
console.log(`Last script block length: ${lastScript.length} characters`);
fs.writeFileSync('d:/AI/MusicPlayer/temp_main.js', lastScript);
console.log('Wrote to temp_main.js. Running syntax check...');
