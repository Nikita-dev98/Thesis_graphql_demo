import json
import matplotlib.pyplot as plt
import os

with open('memory_log.json') as f:
    data = [json.loads(line) for line in f]

rss = [entry['rss'] for entry in data]
heapTotal = [entry['heapTotal'] for entry in data]
heapUsed = [entry['heapUsed'] for entry in data]


plt.plot(rss, label='RSS')
plt.plot(heapTotal, label='Heap Total')
plt.plot(heapUsed, label='Heap Used')

plt.xlabel('Time (s)')
plt.ylabel('Memory (bytes)')
plt.legend()
plt.show()


