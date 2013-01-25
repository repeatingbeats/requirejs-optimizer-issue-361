This repository reproduces https://github.com/jrburke/r.js/issues/361 with the requirejs optimizer. I'm assuming the presence of node/npm on your system.

1. Clone me

        $ git clone git@github.com:repeatingbeats/requirejs-optimizer-issue-361

2. Install my dependency (requirejs@2.1.4)

        $ npm install

3. Run me

        $ node optimize.js

The error case here is that `c.js` is required by `main.js`, but the source for module `c` does not exist.

Expected result: The error callback is invoked with the relevant error

Actual result: The build response callback is invoked with the error
