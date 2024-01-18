import { access, constants } from 'node:fs/promises';

const [bin, runner, ...argvs] = process.argv;

const [runnerType, runnerFile, ...runnerArgs] = argvs;
const runnerTypeMap = new Map([
  ['cloud', './src/cloud/'],
  ['dsa', './src/dataStructuresAlgorithms/'],
  ['dataStructuresAlgorithms', './src/dataStructuresAlgorithms/'],
  ['fundamentals', './src/fundamentals'],
  ['problem', './src/problems/'],
  ['problems', './src/problems/'],
]);

if (argvs.length <= 1 || argvs[0] === 'help') {
  printHelp();
}

if (argvs.length < 2) {
  console.log(`[runner error] No file path provided.`);
  printHelp();
}

if (!runnerTypeMap.has(runnerType)) {
  console.log(`[runner error] No runner type ${runnerType} found.`);
}

const runPath = `${runnerTypeMap.get(runnerType)}${runnerFile}.ts`;

try {
  const r = await import(runPath);
  const runnee = r.default;
  const output = runnee.apply(null, normalizeArgs(...runnerArgs));

  console.log(output);
} catch (err) {
  console.error(err);
}

function printHelp() {
  const itemTypes = [];

  for (let key of runnerTypeMap.keys()) {
    itemTypes.push(key);
  }

  console.log(
    `
bun run [item-type] [item-name] {...arguments}

item-type: ${itemTypes}
    `
  );
}

function normalizeArgs(...args: string[]): any[] {
  return args.map((val) => {
    if (!isNaN(parseInt(val as any))) {
      return parseInt(val);
    }

    if (val === 'true' || val === 'false') {
      return val === 'true';
    }

    if (val[0] === '{' || val[0] === '[') {
      return JSON.parse(val);
    }

    return JSON.parse(JSON.stringify(val));
  });
}
