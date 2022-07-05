/**
 * @jest-environment jsdom
 */

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const fs = require("fs");

describe("NotesView", () => {
  it("displays one note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("This is the first Note");

    view.displayNotes();
    expect(document.body.querySelectorAll("div.note").length).toStrictEqual(1);
  });

  it("displays multiple notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("This is the first Note");
    model.addNote("This is the second Note");
    model.addNote("This is the third Note");
    view.displayNotes();
    expect(document.body.querySelectorAll("div.note").length).toStrictEqual(3);
    expect(document.body.querySelectorAll("#Test").length).toStrictEqual(3);
  });
});
