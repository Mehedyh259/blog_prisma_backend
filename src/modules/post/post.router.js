"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
var express_1 = require("express");
var post_controller_js_1 = require("./post.controller.js");
var router = express_1.default.Router();
router.get("/", post_controller_js_1.PostController.getAllPosts);
router.post("/create", post_controller_js_1.PostController.createPost);
exports.postRouter = router;
