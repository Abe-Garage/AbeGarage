const { query } = require("../config/db.config");
const fs = require("fs");
const path = require("path");

async function customers() {
  const sqlFilePath = path.join(__dirname, "sql/initial-queries.sql");
  let queries = [];
  let finalMessage = {};
  let tempLine = "";

  try {
    const fileContent = fs.readFileSync(sqlFilePath, "utf-8");
    const lines = fileContent.split("\n");

    lines.forEach((line) => {
      if (line.trim().startsWith("--") || line.trim() === "") {
        return;
      }
      tempLine += line;

      if (line.trim().endsWith(";")) {
        const sqlQuery = tempLine.trim();
        queries.push(sqlQuery);
        tempLine = "";
      }
    });

    for (let i = 0; i < queries.length; i++) {
      try {
        await query(queries[i]);
        console.log("Table Created");
      } catch (error) {
        finalMessage.message = "Not all tables were created";
        console.log("Error creating table:", error.message);
      }
    }

    if (!finalMessage.message) {
      finalMessage.message = "All tables are created successfully";
      finalMessage.status = 200;
    } else {
      finalMessage.status = 500;
    }
  } catch (error) {
    console.error("Error reading the SQL file:", error.message);
    finalMessage.message = "Error reading the SQL file";
    finalMessage.status = 500;
  }

  return finalMessage;
}

module.exports = {
  customers,
};
