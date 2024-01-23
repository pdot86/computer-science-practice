# computer-science-practice

This is a repo that conatains information, common data structures, algorithms, and interview style problems. I put this repo together to help refresh, learn, and study for interviews. Included is answers to specific questions from common Data Structures and Algorithms practice sites like [LeetCode](./src/leetcode/), [HackerRank](./src/hackerrank/), and [Codility](./src/codility/).

## Repo Contents

- [Data Structures and Algorithms](./src/dataStructuresAlgorithms/)
- [Common Problems](./src/problems/)
- [LeetCode Solutions](./src/leetcode/)
- [Codility Solutions](./src/codility/)
- [Cloud Computing](./src/cloud/)
- [Fundamentals](./src/fundamentals/)
- [System Design](./src/systems-design/)

## Setup

This project uses the [Bun](https://bun.sh/) runtime to execute the [TypeScript](https://www.typescriptlang.org/) files directly.

### To install dependencies:

```bash
bun install
```

### To install dependencies + generate an npm package-lock.json:

```bash
bun install && npm i --package-lock-only
```

### To install dependencies + generate a yarn yarn.lock:

```bash
bun install --yarn
```

### To install dependencies + generate both npm and yarn lockfiles:
```bash
bun install && bun run lockfiles
```

### To run a dependency scan:
```bash
bun run depscan
```

### To update packages:
```bash
bun run update
```

### To run:

```bash
bun run index.ts
```