#!/usr/bin/env -S gjs -m
// https://gjs-docs.gnome.org/gjs/esmodules.md

import system from 'system';
// https://gjs-docs.gnome.org/gjs/logging.md
console.log(system.programPath, ARGV);
console.log(system.programInvocationName);
system.exit(0);
