class NotesView {
  constructor(model) {
    this.mainContainerEl = document.querySelector("#main-container");
    this.model = model;
  }
  displayNotes() {
    this.model.getNotes().forEach((eachNote) => {
      let div = document.createElement("div");
      div.setAttribute("class", "note"); // div.className = "note"
      div.append(eachNote); // div.innerText = eachNote
      div.setAttribute("id", "Test");
      this.mainContainerEl.append(div);
    });
  }
}

module.exports = NotesView;
