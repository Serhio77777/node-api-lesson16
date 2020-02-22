const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('eventTest', (a, b, c) => {
//   console.log('an event occurred!', a, b, c);
// });
// myEmitter.emit('eventTest', 'wdawdwd0', {test: 'dwad'}, 'sefsefsef');


// const ee1 = new EventEmitter({ captureRejections: true });
// ee1.on('something', async (value) => {
//   throw new Error('kaboom');
// });

// ee1.on('error', console.log);

// ee1.emit('something')

// const { PerformanceObserver, performance } = require('perf_hooks');
const fs = require('fs');

// const obs = new PerformanceObserver((items) => {
//   console.log(items.getEntries()[0].duration);
//   console.log(items.getEntries());
//   performance.clearMarks();
// });
// obs.observe({ entryTypes: ['measure'] });

// performance.mark('A');
// fs.readFile('./data.txt', () => {
//   performance.mark('B');
//   performance.measure('A to B', 'A', 'B');
// });

// performance.mark('C');
// fs.readFile('./data1.txt', () => {
//   performance.mark('D');
//   performance.measure('C to D', 'C', 'D');
// });

require('./async-hook')(['Timeout'])
setTimeout(() => {
  console.log('Timeout happened')
}, 0)
console.log('Registered timeout')
console.log('________________________________________')
require('./async-hook')(['PROMISE'])
Promise.resolve()
console.log('Registered Promise.resolve')
console.log('________________________________________')
require('./async-hook')(['PROMISE'])
Promise.reject()
  .catch(() => console.log('Promise.reject callback'))
console.log('Registered Promise.reject')