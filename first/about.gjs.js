// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

import system from 'system';

export class About {
    path = system.programPath;
    argv = ARGV

    constructor(_dict={}) {
        for (var k of Object.keys(this)) {
            if (k in _dict) this[k] = _dict[k];
        }
    }

    toString() { return `${this.path} ${this.argv.join(' ')}`; }
    
}

export const me = new About();

