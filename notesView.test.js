/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesApi = require("./NotesApi");

require("jest-fetch-mock").enableMocks();
// jest.mock("./notesApi");

describe("NotesView", () => {
  it("displays one note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("This is the first Note");

    // 2. Clicks Add Notes button to call the displayNotes
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

  it("displays notes from the api", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    // const mockApi = {
    //   loadNotes: () => ["This note is coming from the server"],
    // };
    const mockApi = {
      loadNotes: () => {
        model.setNotes(["This note is coming from the server"]);
        view.displayNotes();
      },
    };
    const model = new NotesModel();
    const view = new NotesView(model, mockApi);
    // view.displayNotes();
    view.displayNotesFromApi();
    // view.displayNotesFromApi((notes) => {
    //   expect(notes.innerHTML).toEqual(["This is coming from the server"]);
    // });
    expect(document.body.querySelectorAll("div.note").length).toStrictEqual(1);
    expect(document.body.querySelectorAll("div.note")[0].innerHTML).toEqual(
      "This note is coming from the server"
    );
  });

  it("calls the createNote method when user clicks button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockApi = {
      loadNotes: () => {
        model.setNotes(["This note is coming from the server"]);
        view.displayNotes();
      },

      createNote: () => {
        return { content: "I'm working" };
      },
    };

    // const api = new NotesApi();
    const model = new NotesModel();
    const view = new NotesView(model, mockApi);

    const inputValue = document.querySelector("#new-note");
    inputValue.value = "checking if this works";
    const buttonEl = document.querySelector("#add-note-btn");
    buttonEl.click();

    expect(document.body.querySelectorAll("div.note").length).toStrictEqual(1);
    expect(document.body.querySelectorAll("div.note")[0].innerText).toEqual(
      "checking if this works"
    );
  });

  // mockApi.createNote("This note is new", (data) => {
  //   expect(data).toEqual("This note new");
  // });
});
