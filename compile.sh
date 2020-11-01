#!/bin/bash

java -client -jar closure-compiler.jar \
  --js js-lib/**.js \
  --js js-lib/**/*.js \
  --warning_level=VERBOSE --formatting=PRETTY_PRINT --language_in=ECMASCRIPT6 --compilation_level=ADVANCED_OPTIMIZATIONS \
  --externs=jquery-3.1-externs.js \
  > public/js-compiled.js

cp index.html public/
cp jquery-3.1.1.min.js public/
cp addtohomescreen.css public/
cp addtohomescreen.min.js public/ 
cp -aR images public/
