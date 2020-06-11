const express = require("express");
const cheerio = require("cheerio");
const dotenv = require('dotenv')
dotenv.config()
const axios = require("axios");
const app = express();

app.get("/api/scrap", async (req, res) => {
  // 작업
  const {
    url
  } = req.query;
  const obj = await getOgObj(url);
  res.json(obj);
});

const getOgObj = async url => {
  try {
    const html = await getHTML(url);

    let obj = {};
    const $ = cheerio.load(html.data);
    const metaList = $("meta");
    metaList.each((i, el) => {
      if (
        el.attribs.property === "og:title" ||
        el.attribs.property === "og:image" ||
        el.attribs.property === "og:description"
      ) {
        const key = el.attribs.property.replace("og:", "");
        obj[key] = el.attribs.content;
      }
    });
    return obj;
  } catch (err) {
    console.log(err);
    return {};
  }
};

const getHTML = async url => {
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err);
  }
};
console.log(process.env.PORT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server start port : ${PORT}`);
});