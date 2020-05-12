import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  const { email, password } = req.body;
});

export { router as signinRouter };
