const express = require("express");
const Profile = require("../model/Profile");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let post = new Profile(req.body);
    post = await post.save();
    res.status(200).json({
      status: 200,
      data: post,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/list", async (req, res) => {
  try {
    let posts = await Profile.find();
    res.status(200).json({
      status: 200,
      data: posts,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    let post = await Profile.findOne({
      _id: req.params.postId,
    });
    if (post) {
      res.status(200).json({
        status: 200,
        data: post,
      });
    }
    res.status(400).json({
      status: 400,
      message: "No post found",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.put("/:postId", async (req, res) => {
  try {
    let post = await Profile.findByIdAndUpdate(req.params.postId, req.body, {
      new: true,
    });
    if (post) {
      res.status(200).json({
        status: 200,
        data: post,
      });
    }
    res.status(400).json({
      status: 400,
      message: "No post found",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    let post = await Profile.findByIdAndRemove(req.params.postId);
    if (post) {
      res.status(200).json({
        status: 200,
        message: "Post deleted successfully",
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "No post found",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.post("/delete", async (req, res) => {
  try {
    let arrayofids = req.body.ids;
    let post = await Profile.deleteMany({_id:{$in:arrayofids}});
    if (post) {
    res.status(200).json({
      status: 200,
      data: post,
    });
  }else{
    res.status(400).json({
      status: 400,
      message: "Something went wrong",
    });
  }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

module.exports = router;