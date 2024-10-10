#!/usr/bin/env -S gjs -m
// run { chmod a+x first+about.js && ./first+about.js; }
// debug { gdb --args gjs -m first+about.js; b start; }

import system from 'system';
import * as about from './about.gjs.js';

function start(path, args) {
    console.dir(about.me); // cannot export me?

    let self = new about.About();
    console.dir(self);
    
    let some_path = new about.About({path: "some/path", argv: ["x", "y", "z"]});
    console.dir(some_path);
}

start(system.programPath, ARGV);

