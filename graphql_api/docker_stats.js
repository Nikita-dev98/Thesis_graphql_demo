const { exec } = require('child_process');
const fs = require('fs');
const promClient = require('prom-client');

// Path to the output file for logging
const logFilePath = './docker_stats.log';

// Prometheus metrics
const dockerCpuGauge = new promClient.Gauge({
  name: 'docker_container_cpu_usage_percent',
  help: 'CPU usage percent of the Docker container',
  labelNames: ['container'],
});

const dockerMemoryGauge = new promClient.Gauge({
  name: 'docker_container_memory_usage_bytes',
  help: 'Memory usage in bytes of the Docker container',
  labelNames: ['container'],
});

// Function to collect Docker stats and log them
function collectDockerStats(register) {
  exec('docker stats --no-stream --format "{{.Name}} {{.CPUPerc}} {{.MemUsage}}"', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error fetching Docker stats: ${stderr}`);
      return;
    }

    const timestamp = new Date().toISOString();
    const logs = [];

    stdout.split('\n').forEach(line => {
      if (line.trim()) {
        const [name, cpu, mem] = line.split(' ');
        const cpuValue = parseFloat(cpu.replace('%', ''));
        const memValue = parseFloat(mem.split('/')[0].replace(/MiB|GiB/, '')) * 1024 * 1024;

        dockerCpuGauge.set({ container: name }, cpuValue);
        dockerMemoryGauge.set({ container: name }, memValue);

        logs.push(`${timestamp},${name},${cpuValue},${memValue}`);
      }
    });

    if (logs.length > 0) {
      fs.appendFile(logFilePath, logs.join('\n') + '\n', (err) => {
        if (err) {
          console.error(`Error writing to log file: ${err}`);
        }
      });
    }
  });

  // Register the metrics with Prometheus
  if (register) {
    register.registerMetric(dockerCpuGauge);
    register.registerMetric(dockerMemoryGauge);
  }
}

// Export the function to be used in the main index file
module.exports = {
  collectDockerStats,
};
