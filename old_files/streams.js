const fs = require("fs");
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   console.log("--- NEW CHUNK ---");
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// Piping
readStream.pipe(writeStream);
