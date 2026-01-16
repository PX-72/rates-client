# rates-client

TUI client for the rates server using Ink.

## Requirements

- Node.js 18+
- The rates server running at http://localhost:8080

## Installation

```bash
npm install
```

## Running

```bash
npm start
```

Or run directly:

```bash
./index.tsx
```

## What it does

The client connects to the rates server at http://localhost:8080/, calls GET on the root endpoint, and displays the returned text in a Terminal UI.
