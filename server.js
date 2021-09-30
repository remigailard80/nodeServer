import express from "express";
import createHash from 'hash-generator'
import Identicon from "identicon.js";
import { hrtime } from 'process'

function hashAndAvatarGenerator(hashLength=15, number=1) {
    const hash=createHash(hashLength)
    return {id: hash, avatar: new Identicon(hash, 60).toString()}
}


const app = express();

app.get(
  "/post", (req, res) => {
      const start = hrtime();

      return res.json({...hashAndAvatarGenerator(), time: hrtime(start)})
  }
);

app.listen(8090, () => {
    console.log('8090 port listening')
});