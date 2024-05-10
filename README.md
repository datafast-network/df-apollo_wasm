Wasm Module for Apollo Service
==============================

This is a simple example of a Wasm module that can be used with Apollo Service.

## Usage
```bash
pnpm install
```

## Build
- Build schema from proto file (Use **protoc** to generate schema from proto file)
  - Install protoc from [here](https://google.github.io/proto-lens/installing-protoc.html)
```bash
pnpm build:schema
```

- Build Wasm module
```bash
pnpm build
```