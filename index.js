const app = require("express")();

const { RandomStatefulGuy } = require("./models");
const { delay } = require("./utils");

const PORT = process.env.PORT || 3000;

// it is actually mutable, just not reassignable
const sharedObject = new RandomStatefulGuy();

app.get("/:a", async (req, res) => {
  // set a value for a
  sharedObject.a = req.params.a;

  // wait 3s and send the current state back
  await delay(3000, () => {
    res.send(sharedObject.a);
  });
});

app.listen(PORT);
