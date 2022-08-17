const Api = require("./notesApi");

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require("jest-fetch-mock").enableMocks();

describe("NotesApi", () => {
  it("calls fetch and loads data", async () => {
    // 1. Instantiate the class
    const api = new Api();

    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(
      JSON.stringify({
        name: "This a note from the server",
      })
    );

    // 3. We call the method, and use `expect`
    // to assert the values we get back contain
    // what we expect.
    api.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("This a note from the server");
    });
  });

  it("create a new note by making a post request to the backend", async () => {
    const api = new Api();
    api.createNote("A new note has been created");
    expect(fetch).toHaveBeenCalledWith("'http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: '{"content" : "This is a new note"}',
    });
  });
  //  const mockNote = fetch.mockResponseOnce(
  //     JSON.stringify({
  //       name: "This is a new note",
  //     })
  //   );

  //   api.createNote(mockNote, (data) => {
  //     expect(data.name).toEqual("This is a new note");
  //   });
});
