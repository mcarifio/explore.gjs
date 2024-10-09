#!/usr/bin/env -S gjs -m

import system from 'system';
import * as about from './about.js';

console.log(about.me); // cannot export me?

let self = new about.About();
console.log(self);

let some_path = new about.About({path: "some/path", argv: ["x", "y", "z"]});
console.log(some_path);


