import "dotenv/config";
import { prisma } from "./lib/prisma";
import app from "./app.js";

const PORT = process.env.PORT || 5000;



async function main() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Startup failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();


