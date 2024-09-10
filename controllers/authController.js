const { createUser, findUserByEmail } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

// Register a new user
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: "Email is already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUser(name, email, hashedPassword);
    res.status(201).json({ message: "User registered successfully", userId });
  } catch (error) {
    console.error("Register error:", error.message);
    res
      .status(500)
      .json({ error: "User registration failed. Please try again." });
  }
};

// User login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found. Please check your email." });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ error: "Incorrect password. Please try again." });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
};

// Generate a password reset token
const generateResetToken = (email) => {
  return jwt.sign({ email }, config.jwtSecret, { expiresIn: "1h" });
};

// Forgot password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const resetToken = generateResetToken(email);

    // Configure email transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: config.emailUser,
        pass: config.emailPass,
      },
    });

    // Send reset email
    const resetUrl = `${config.frontendUrl}/reset-password?token=${resetToken}`;
    await transporter.sendMail({
      to: email,
      subject: "Password Reset Request",
      html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
    });

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error("Forgot Password error:", error.message);
    res
      .status(500)
      .json({ error: "Failed to process request. Please try again." });
  }
};

// Reset password
const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res
      .status(400)
      .json({ error: "Token and new password are required" });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    const { email } = decoded;

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await updateUser(user.id, user.name, user.email, hashedPassword, user.role);

    res.status(200).json({ message: "Password has been reset" });
  } catch (error) {
    console.error("Reset Password error:", error.message);
    res
      .status(500)
      .json({ error: "Failed to reset password. Please try again." });
  }
};

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
};
