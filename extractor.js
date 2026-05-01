const fs = require('fs');
const html = fs.readFileSync('d:/AI/MusicPlayer/index.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  fs.writeFileSync('d:/AI/MusicPlayer/temp.js', scriptMatch[1]);
  console.log('Script extracted.');
} else {
  console.log('No script found.');
}
