// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

import system from 'system';

export class About {
    path = system.programPath;
    argv = ARGV
    constructor(_dict) {
        this.path = _dict?.path ?? this.path;
        this.argv = _dict?.argv ?? this.argv;
    }
    toString() { return `${this.path} ${this.argv.join(' ')}`; }
}

export const me = new About();

