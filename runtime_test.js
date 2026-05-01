// Minimal DOM simulation to find the runtime crash
const fs = require('fs');

// Mock minimal browser APIs
global.window = {
  innerWidth: 375,
  innerHeight: 812,
  addEventListener: () => {},
  lucide: null,
  matchMedia: () => ({ matches: true }),
};
global.document = {
  readyState: 'complete',
  activeElement: { tagName: 'BODY' },
  title: '',
  createElement: (tag) => ({
    tagName: tag.toUpperCase(),
    className: '',
    style: {},
    dataset: {},
    textContent: '',
    innerHTML: '',
    appendChild: () => {},
    addEventListener: () => {},
    classList: { add:()=>{}, remove:()=>{}, toggle:()=>{}, contains:()=>false },
    getBoundingClientRect: () => ({left:0,top:0,width:100,height:100}),
    querySelectorAll: () => [],
    querySelector: () => null,
    remove: () => {},
    offsetTop: 0,
    clientHeight: 100,
    scrollTo: () => {},
  }),
  getElementById: (id) => {
    // Return a mock element for known IDs
    return {
      tagName: 'DIV',
      id: id,
      className: '',
      style: { display: '', width: '', backgroundImage: '' },
      dataset: {},
      textContent: id === 'am-debug-overlay' ? 'Waiting...' : '',
      innerHTML: '',
      value: '0.7',
      src: '',
      volume: 0.7,
      currentTime: 0,
      duration: 0,
      paused: true,
      muted: false,
      appendChild: () => {},
      addEventListener: (evt, fn) => {},
      classList: { add:()=>{}, remove:()=>{}, toggle:()=>{}, contains:()=>false },
      getBoundingClientRect: () => ({left:0,top:0,width:100,height:100}),
      querySelectorAll: () => [],
      querySelector: () => null,
      scrollTo: () => {},
      play: () => Promise.resolve(),
      pause: () => {},
      load: () => {},
      offsetTop: 0,
      clientHeight: 100,
    };
  },
  querySelector: (sel) => {
    return {
      classList: { add:()=>{}, remove:()=>{}, toggle:()=>{}, contains:()=>false },
      style: {},
      addEventListener: () => {},
      querySelectorAll: () => [],
      querySelector: () => null,
      appendChild: () => {},
    };
  },
  querySelectorAll: () => [],
  getElementsByTagName: () => [],
  addEventListener: (evt, fn) => {
    // Don't auto-fire DOMContentLoaded since readyState is 'complete'
  },
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
};
global.navigator = {
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)',
  mediaSession: { metadata: null, setActionHandler: ()=>{} },
  clipboard: { writeText: () => Promise.resolve() },
};
global.MediaMetadata = class { constructor(){} };
global.requestAnimationFrame = () => {};
global.setInterval = (fn, ms) => {
  // Run the interval callback once to test it
  try { fn(); } catch(e) { console.log('setInterval callback error:', e.message); }
  return 1;
};
global.setTimeout = (fn, ms) => { return 1; };
global.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({}) });
global.URL = { createObjectURL: () => 'blob:mock' };
global.HTMLCanvasElement = class {};
global.CanvasRenderingContext2D = class {};

// Now try to execute the script
const js = fs.readFileSync('d:/AI/MusicPlayer/temp_main.js', 'utf8');
try {
  eval(js);
  console.log('\n=== Script executed without fatal error ===');
} catch(e) {
  console.log('\n=== FATAL ERROR ===');
  console.log('Type:', e.constructor.name);
  console.log('Message:', e.message);
  console.log('Stack:', e.stack);
}
