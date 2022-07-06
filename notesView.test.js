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

  it("clicks button and adds new notes title", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector("#new-note");
    inputEl.value = "Hello World";

    const buttonEl = document.querySelector("#add-note-btn");
    buttonEl.click();

    expect(document.body.querySelectorAll("div.note").length).toStrictEqual(1);
    expect(document.body.querySelector("div.note").innerHTML).toEqual(
      "Hello World"
    );
  });

  it("displays the correct number of notes when click button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector("#new-note");
    inputEl.value = "Hello World";

    const buttonEl = document.querySelector("#add-note-btn");
    buttonEl.click();

    view.displayNotes;
    view.displayNotes;
    expect(document.body.querySelectorAll("div.note").length).toStrictEqual(1);
  });
});
