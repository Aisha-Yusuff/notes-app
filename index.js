const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesApi = require("./notesApi");

console.log("The notes app is running");

const api = new NotesApi();

const model = new NotesModel();
console.log(model.getNotes());

const view = new NotesView(model, api);
view.displayNotesFromApi();
view.addNewNote();
view.displayNotes();
