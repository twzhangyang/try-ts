import moxios from "moxios";
import { testStore } from "./../testHelper";
import { fetchPosts } from "./../actions/index";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example title",
        body: "Some text",
      },
    ];

    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });

      return store.dispatch(fetchPosts()).then(() => {
        const newState = store.getState();
        expect(newState.posts).toBe(expectedState);
      });
      
    });
  });
});
