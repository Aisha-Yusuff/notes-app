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
}

module.exports = NotesModel;
