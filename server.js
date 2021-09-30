import express from "express";
import createHash from 'hash-generator'
import Identicon from "identicon.js";

function hashAndAvatarGenerator(hashLength=15, number=1) {
    const hash=createHash(hashLength)
    return {id: hash, avatar: new Identicon(hash, 60).toString()}
}


const app = express();

app.get(
  "/post", (req, res) => {
      return res.json(hashAndAvatarGenerator())
  }
);

app.listen(8080, () => {
    console.log('8080 port listening')
});