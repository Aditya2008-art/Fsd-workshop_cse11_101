
import {fs} from "node:fs";

const filepath = "userdata.txt";

async function createfile(content) {
    try {
        await fs.promises.writeFile(filepath, content);
        console.log("File created");
    } catch (error) {
        console.log("Error creating file");
    }
}

async function readfile() {
    try {
        const data = await fs.promises.readFile(filepath, "utf8");
        console.log(data);
    } catch (error) {
        console.log("Error reading file");
    }
}
// const fs = require('fs');

async function updateFile(filepath, newContent) {
  try {
    const data = await fs.promises.readFile(filepath, "utf8");
    console.log("Original content:", data);
    const updatedData = data + "\t" + newContent;
    await fs.promises.writeFile(filepath, updatedData, "utf8");
    console.log("File successfully updated!");

  } catch (error) {
    console.error("Error processing file:", error.message);
  }
}

async function deleteFile() {
    try {
        await fs.promises.unlink(filepath);
        console.log("File deleted");
    } catch (error) {
        console.log("Error deleting file");
    }
}
// await createfile("Hello world");
// await readfile();
// await updateFile(filepath, "This is the new content.");
// await readfile();
// await deleteFile();
async function run()
{
    await createfile("Hello world");
    await readfile();
    await updateFile(filepath, "This is the new content.");
    await readfile();
    await deleteFile(); 
}