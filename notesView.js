class NotesView {
  constructor(model, api) {
    this.mainContainerEl = document.querySelector("#main-container");
    this.model = model;
    this.api = api;
    this.buttonEl = document.querySelector("#add-note-btn");
    this.buttonEl.addEventListener("click", () => {
      this.addNewNote();
      this.displayNotesFromApi();
    });
  }
  displayNotes() {
    this.mainContainerEl.querySelectorAll("div.note").forEach((element) => {
      element.remove();
    });
    this.model.getNotes().forEach((eachNote) => {
      let div = document.createElement("div");
      div.setAttribute("class", "note"); // div.className = "note"
      div.append(eachNote); // div.innerText = eachNote
      div.setAttribute("id", "Test");
      this.mainContainerEl.append(div);
    });
  }

  addNewNote(note) {
    const inputEl = document.querySelector("#new-note");
    // console.log(this.model);
    // console.log(this.model.addNote("hello"));
    // console.log(this.model.getNotes());
    // console.log(inputEl);
    // console.log(inputEl.value);
    this.api.createNote(note);
    this.model.addNote(note);
    this.displayNotes();
  }

  displayNotesFromApi() {
    this.api.loadNotes((notes) => {
      this.model.reset();
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }
}

module.exports = NotesView;
