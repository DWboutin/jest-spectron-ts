const path = require("path");
const Application = require("spectron").Application;
const electron = require("electron");

jest.setTimeout(10000); // increase to 50000 on low spec laptop

let app: any = new Application({
  path: electron,
  args: [path.join(__dirname, "..", ".webpack", "main", "index.js")]
});

describe("test", () => {
  beforeAll(async () => {
    await app.start();
  });

  afterAll(async () => {
    if (app && app.isRunning()) {
      await app.stop();
    }
  });

  it("shows an initial window", async () => {
    const windowCount = await app.client.getWindowCount();

    expect(windowCount).toBe(1);
  });

  it("should have correct text", async () => {
    const h1Text = await app.client.getText("h1");

    expect(h1Text).toEqual("💖 Hello World!");
  });
});
