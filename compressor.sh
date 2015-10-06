#!/usr/bin/env bash
java -jar yuicompressor-2.4.7.jar  "scripts/effects.js" -o "scripts/effects.min.js"
java -jar yuicompressor-2.4.7.jar  "css/style.css" -o "css/style.min.css"
exit 0;
