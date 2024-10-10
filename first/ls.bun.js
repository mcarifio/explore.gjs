#!/usr/bin/env -S bun

import { $, file } from "bun";
await $`ls *.js *.gjs`;

