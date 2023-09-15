//jshint esversion:6
const express = require("express");
const mongodb = require("mongodb").MongoClient;
// const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use("/", express.static(path.join(__dirname, "")));
app.get("/pizzas", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("pizzas");
      coll.find({}).toArray((err, docs) => {
        if (err) throw err;
        res.send(docs);
      });
    }
  );
});
app.get("/ingredients", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("ingredients");
      coll.find({}).toArray((err, docs) => {
        if (err) throw err;
        res.send(docs);
      });
    }
  );
});
// app.post("/cart", (req, res) => {
//   mongodb.connect(
//     "mongodb://localhost:27017",
//     { useUnifiedTopology: true },
//     (err, conn) => {
//       if (err) throw err;
//       const db = conn.db("Pizzeria");
//       const coll = db.collection("cart");
//       data = req.body;
//       coll.insertOne(req.body, (err, docs) => {
//         if (err) throw err;
//         console.log(req.body);
//       });
//     }
//   );
// });
app.post("/cart", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("cart");
      id = req.body._id;
      coll.find({ _id: id }).count(function (err, count1) {
        if (count1 > 0) {
          coll.findOne({ _id: id }, (err, docs) => {
            if (err) throw err;
            const quantity = docs.quantity + 1;
            coll.updateOne(
              { _id: id },
              { $set: { quantity: quantity } },
              (err, docs) => {
                if (err) throw err;
                //  console.log(req.body);
              }
            );
          });
        } else {
          const _id = req.body._id;
          const id = +req.body.id;
          const name = req.body.name;
          const price = +req.body.price;
          const type = req.body.type;
          const image = req.body.image;
          const description = req.body.description;
          const ingredients = req.body.ingredients;
          const topping = req.body.topping;

          coll.insertOne(
            {
              _id: _id,
              id: id,
              name: name,
              price: price,
              type: type,
              image: image,
              description: description,
              ingredients: ingredients,
              topping: topping,
              quantity: 1,
            },
            (err, docs) => {
              if (err) throw err;
              // console.log(docs);
            }
          );
          console.log("added item");
        }
      });
    }
  );
});

app.post("/increaseQuantity", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("cart");
      id = req.body._id;
      // console.log(req.body);

      coll.findOne({ _id: id }, (err, docs) => {
        if (err) throw err;
        const quantity = docs.quantity + 1;
        coll.updateOne(
          { _id: id },
          { $set: { quantity: quantity } },
          (err, docs) => {
            if (err) throw err;
            //  console.log(req.body);
          }
        );
      });
    }
  );
});

app.post("/decreaseQuantity", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("cart");
      id = req.body._id;
      // console.log(req.body);

      coll.findOne({ _id: id }, (err, docs) => {
        if (err) throw err;
        const quantity = docs.quantity - 1;
        if (quantity == 0) {
          coll.deleteOne({ _id: id }, (err, docs) => {
            if (err) throw err;
            //console.log(req.body._id);
          });
        } else {
          coll.updateOne(
            { _id: id },
            { $set: { quantity: quantity } },
            (err, docs) => {
              if (err) throw err;
              //  console.log(req.body);
            }
          );
        }
      });
    }
  );
});

app.post("/orderingredients", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("carting");
      //   const id = +req.body.id;
      //   const tname = req.body.tname;
      //   const price = +req.body.price;
      //   const image = req.body.image;
      data = req.body;
      coll.insertMany(req.body, (err, docs) => {
        if (err) throw err;
        // console.log(docs);
      });
    }
  );
});
app.get("/displaycarting", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("carting");
      coll.find({}).toArray((err, docs) => {
        if (err) throw err;
        res.send(docs);
      });
    }
  );
});
app.post("/delete", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("cart");
      //   data = req.body;
      const id = +req.body.id;
      const name = req.body.name;
      const tname = req.body.tname;
      const price = req.body.price;
      const type = req.body.type;
      const image = req.body.image;
      const description = req.body.description;
      const ingredients = req.body.ingredients;
      const topping = req.body.topping;
      coll.deleteOne(
        {
          id: id,
          name: name,
          tname: tname,
          price: price,
          type: type,
          image: image,
          description: description,
          ingredients: ingredients,
          topping: topping,
        },
        (err, docs) => {
          if (err) throw err;
          // console.log(req.body);
          console.log("Item deleted");
        }
      );
    }
  );
});
app.post("/emptycarting", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("carting");
      coll.drop(function (err, docs) {
        if (err) throw err;
        if (docs) console.log("Collection deleted");
      });
    }
  );
});
app.post("/emptycart", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("cart");
      coll.drop(function (err, docs) {
        if (err) throw err;
        if (docs) console.log("Collection deleted");
      });
    }
  );
});
app.get("/displaycart", (req, res) => {
  mongodb.connect(
    "mongodb://localhost:27017",
    { useUnifiedTopology: true },
    (err, conn) => {
      if (err) throw err;
      const db = conn.db("Pizzeria");
      const coll = db.collection("cart");
      coll.find({}).toArray((err, docs) => {
        if (err) throw err;
        res.send(docs);
      });
    }
  );
});
app.listen(4000, () => {
  console.log("server is running at 4000");
});
