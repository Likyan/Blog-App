const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use("/images", express.static(path.join(__dirname,"/images")))

// for mongoose{
//     useNewUrlPraser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// }

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  const storage = multer.diskStorage({
    destination:(req,file,cb) => {
      cb(null, "images")
    },filename:(req,file,cb) => { 
      // cb(null, "Hello.jpg");
      cb(null,req.body.name);
    }
  });
 
const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"),(req,res)=>{
  res.status(200).json("file Has Been Upload");
});

// app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });