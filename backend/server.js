
import dotenv from "dotenv";

// Load environment variables before importing application modules
dotenv.config({ path: "./config/config.env" });

const startServer = async () => {
  try {
    const { app } = await import("./app.js");
    const { connectDB } = await import("./database/db.js");
    const { notifyUser } = await import("./services/notifyUser.js");
    const { removeUnverifiedUser } = await import(
      "./services/removeUnverifiedUsers.js"
    );

    await connectDB();

    notifyUser();
    removeUnverifiedUser();

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();

