const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  it("initializes with empty notes", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toStrictEqual([]);
  });

  it("adds notes to an array", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toStrictEqual(["Buy milk", "Go to the gym"]);
  });

  it("removes all the notes in the list", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    model.reset();
    expect(model.getNotes()).toStrictEqual([]);
  });
});
