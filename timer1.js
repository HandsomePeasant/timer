let alarms = process.argv.slice(2);
alarms = alarms.map((item) => item = item * 1000);

for (let alarm of alarms) {
  if (typeof alarm === "number" && alarm > 0) {
    setTimeout(() => {
    process.stdout.write('\x07');
    }, alarm);
  }
}
