# Express.js Port Conflict Bug

This repository demonstrates a potential issue in Express.js applications where the server fails to start if the specified port is already in use. This is not a typical error, but can be difficult to debug when it occurs.

## Bug Description

The `bug.js` file contains a simple Express.js server that attempts to listen on port 3000. If another application is already using this port, the server will fail to start without a clear error message.

## Solution

The `bugSolution.js` file provides a solution that gracefully handles the port conflict by attempting to listen on alternative ports. This makes the application more robust.