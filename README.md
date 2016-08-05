# Song_Bot
Song_Bot is an easy to use application for quickly launching a personalized Twitch Bot.

## Launching the app
**Warning: Song_Bot has only been tested on Windows. We cannot confirm at this time if a stable version on Mac OS X or Linux exists.**

###### Pre-built app
We are working hard at finding a solution to building the desktop app, until then the only way to use Song_Bot is manually running a debug copy in a CLI.

###### Building Song_Bot
The only pre-requisite not included in the repo is Electrify (since it has to be used using CLI) which can be added onto your machine using `npm install -g electrify`. Well that and node.js and meteor.

Run a test build by running `meteor --settings settings.json` in CMD or Terminal. If that works run `electrify` in CMD or Terminal to launch a debug version of the desktop app.
