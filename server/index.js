import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mail from "./SendEmail.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", async (req, res, next) => {
	var pemail = "vishnureddy8980@gmail.com";
    var text = "Send This as Body";
    var subject = "User credentials:";
    mail(pemail, text, subject);
	console.log("node email route");
	return res.send({name: "vishnu", age: "24"});
//   return res.redirect("https://vue-frontend-jcz9.onrender.com");
});

app.get("*", (req, res) => {
  res.status(200).send("url not found");
});




  const PORT = 8500;
  app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}/`);
  });
