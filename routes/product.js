const router = require("express").Router();
const Flower = require("../models/flower");

//add
router.post("/flower", async (req, res) => {
  try {
    const flower = await Flower.create(req.body);
    res.status(201).json({ msg: `Created ${flower.name}`, flower });
  } catch (error) {
    console.log(error);
  }
});

//list all
router.get("/flower", async (req, res) => {
  try {
    res.status(200).json(await Flower.findAll({}));
  } catch (error) {
    console.log(error);
  }
});

//list One by id
router.get("/flower/:id", async (req, res, next) => {
  try {
    res
      .status(200)
      .json(await Flower.findOne({ where: { id: req.params.id } }));
  } catch (error) {
    console.log(error);
  }
});
// delete all flower
router.delete("/flower", async (req, res) => {
  try {
    const deleted = await Flower.destroy({ where: {} });
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ msg: "Deleted all flowers", deleted });
});

//delete one
router.delete("/flower/:id", async (req, res) => {
  try {
    const deleted = await Flower.destroy({ where: { id: req.params.id } });
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ msg: "Deleted one flower", deleted });
});

//update
router.put("/flower/:id", async (req, res) => {
  try {
    const updated = await Flower.update(
      {
        name: req.body.name,
        colour: req.body.colour,
        indication: req.body.indication,
        price: req.body.price,
      },
      {
        where: { id: req.params.id },
      }
    );
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ msg: "Updated one flower", updated });
});

module.exports = router;
