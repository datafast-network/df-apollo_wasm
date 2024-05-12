#!/usr/bin/env bash

# This script is used to build the protobuf files

# list all proto files in the proto directory
proto_files=$(find proto -name "*.proto")

mkdir -p src/types
# loop through all proto files

for file in $proto_files
do
  echo "Building $file"
  protoc --plugin=protoc-gen-as=./node_modules/.bin/as-proto-gen --as_out=src/types $file
  file_name=$(basename $file)
  echo "Done building $file_name"
done

echo "Done building proto files"

