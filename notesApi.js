class NotesApi {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  createNote(note) {
    // where to find the data
    const data = { content: note };
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // "User-Agent": "this_apparently_works",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  }
}

module.exports = NotesApi;
