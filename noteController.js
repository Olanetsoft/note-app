const fs = require("fs");
const chalk = require("chalk");

// Records a Note
const recordNote = (noteTopic, noteTitle, noteBody) => {
    saveNotes(noteTopic, noteTitle, noteBody);

    // Log message after creating Note
    console.log(chalk.green(`${noteTopic} Note created successfully`));
};


// Reads Note from FIle
const readNote = (noteTopic, noteTitle) => {
    try {
        const note = fs.readFileSync(`${noteTopic}/${noteTitle}.txt`);
        console.log(chalk.green(`Reading ${noteTopic} Note`));

        // Logs the note content to console
        console.log(note.toString());
    } catch (e) {
        // Show required field
        console.log(chalk.red("Topic is required"));
        console.log(chalk.red("Title is required"));
        console.log(chalk.white("------------------------------"));
        console.log(chalk.red("Run node app.js --help to check usage"));
    }
};

// To save Note
const saveNotes = (noteTopic, noteTitle, noteBody) => {

    try {
        fs.access(`./${noteTopic}`, (err) => {
            if (err) {
                fs.mkdirSync(noteTopic);
                fs.writeFileSync(`${noteTopic}/${noteTitle}.txt`, noteBody);
            } else {
                fs.writeFileSync(`${noteTopic}/${noteTitle}.txt`, noteBody);
            }
        });
    } catch (e) {
        console.log(chalk.red("Topic is required"));
        console.log(chalk.red("Title is required"));
        console.log(chalk.red("Body is required"));
        console.log(chalk.white("------------------------------"));
        console.log(chalk.red("Run node app.js --help to check usage"));
    }
};

module.exports = {
    recordNote,
    readNote,
};
