const fs = require('fs');
const os = require('os');
const v8 = require('v8');
const { Trace } = require('trace_events');
const logFile = '../memory_log.json';  // Adjust path if necessary

// Enable GC tracing
const tracer = new Trace({
  categories: ['v8.gc']
});
tracer.enable();

// Event listener for GC events
tracer.on('traceEvents', events => {
  events.forEach(event => {
    if (event.cat === 'v8.gc') {
      logData({
        type: 'GC_Event',
        time: new Date(event.ts / 1000), // Convert timestamp from microseconds
        gcInfo: event
      });
    }
  });
});


function logMemoryUsage() {
  const memoryUsage = process.memoryUsage();
  const cpuUsage = os.cpus();
  const systemMemory = {
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
  };
  const heapStats = v8.getHeapStatistics();
  const logEntry = {
    type: 'Memory_Usage',
    time: new Date(),
    processMemory: memoryUsage,
    heapStats: heapStats,
    systemMemory: systemMemory,
    cpuUsage: cpuUsage.map(cpu => ({ model: cpu.model, speed: cpu.speed, times: cpu.times }))
  };
  logData(logEntry);
}

function logData(data) {
  fs.appendFileSync(logFile, JSON.stringify(data) + '\n');
}

setInterval(logMemoryUsage, 1000); // Log every second
