const yargs = require("yargs");
const notes = require("./noteController");
const chalk = require("chalk");


// To record a new Note
yargs.command({
    command: "record",
    describe:
        "Record a new note : usage - node app.js record --topic='The topic' --title='The title' --body='The Note body' ",
    builder: {
        topic: {
            describe: "Topic",
            type: "string",
            demandOption: true,
        },
        title: {
            describe: "Note title",
            type: "string",
            demandOption: true,
        },
        body: {
            describe: "Note Body",
            type: "string",
            demandOption: true,
        },
    },
    handler: function (argv) {
        notes.recordNote(argv.topic, argv.title, argv.body);
    },
});

// To read Note
yargs.command({
    command: "read",
    describe:
        "Read a note  : usage - node app.js read --topic='The topic' --title='The title' ",
    handler: function (argv) {
        notes.readNote(argv.topic, argv.title);
    },
});

yargs.parse();
