class NotesModel {
  constructor() {
    this.list = [];
  }

  getNotes() {
    return this.list;
  }

  addNote(newNote) {
    this.list.push(newNote);
  }

  reset() {
    this.list = [];
  }

  setNotes(notes) {
    notes.forEach((note) => {
      this.addNote(note);
    });
  }
}

module.exports = NotesModel;
