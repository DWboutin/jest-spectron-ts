const path = require("path");
const Application = require("spectron").Application;
const electron = require("electron");

jest.setTimeout(10000); // increase to 50000 on low spec laptop
let app: any = null;

beforeAll(function() {
  app = new Application({
    path: electron,
    args: [path.join(__dirname, "..", "src", "index.ts")]
  });

  return app.start();
});

afterAll(function() {
  if (app && app.isRunning()) {
    return app.stop();
  }
});

test("App Init", async function() {
  let isVisible = await app.browserWindow.isVisible();
  expect(isVisible).toBe(true);
  let count = await app.client.getWindowCount();
  expect(count).toEqual(1);
});
