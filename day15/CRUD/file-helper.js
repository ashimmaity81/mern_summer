const fsPromises = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

// Save an entire array to a file
const saveArrayToFile = async (arr, filePath) => {
  try {
    const stringifiedArr = JSON.stringify(arr, null, 2); // Pretty print
    await fsPromises.writeFile(filePath, stringifiedArr, "utf-8");
  } catch (err) {
    console.error("🔴 Error saving the file:", err.message);
    return null;
  }
};

// Add an object with UUID to array and save
const saveObjectToArrayInFile = async (obj, filePath) => {
  const arr = await getAllDataFromArrayFromFile(filePath);
  obj.id = uuidv4();
  arr.push(obj);
  await saveArrayToFile(arr, filePath);
};

// Get all objects from file
const getAllDataFromArrayFromFile = async (filePath) => {
  try {
    const txt = await fsPromises.readFile(filePath, "utf-8");
    try {
      return JSON.parse(txt);
    } catch (err) {
      console.warn("⚠️ File content is corrupted. Resetting file.");
      await fsPromises.writeFile(filePath, "[]", "utf-8");
      return [];
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      await fsPromises.writeFile(filePath, "[]", "utf-8");
      return [];
    }
    console.error("🔴 Error reading the file:", err.message);
    return null;
  }
};

// difficult (****)
const editObjectFromArrayFromFile = async (newObj, idx, filePath) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> show the error in the console ---> object does not exists
  // if it is able to parse --> get the particular from array using index
  //                        --> change the object as you want
  //                        --> ::save to the file::
};

// difficult (***)
const deleteObjectFromArrayFromFile = async (idx, filePath) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> show the error in the console ---> object does not exists
  // if it is able to parse --> delete the object from the array
  //                        --> ::save the new array to the file::
};

module.exports = {
  saveObjectToArrayInFile,
  getAllDataFromArrayFromFile,
  editObjectFromArrayFromFile,
  deleteObjectFromArrayFromFile,
};

// // Edit object at given index
// const editObjectFromArrayFromFile = async (newObj, idx, filePath) => {
//   const arr = await getAllDataFromArrayFromFile(filePath);
//   if (!Array.isArray(arr) || idx < 0 || idx >= arr.length) {
//     console.error("❌ Cannot edit: Invalid index or file content");
//     return false;
//   }

//   // Preserve the ID if it exists
//   newObj.id = arr[idx].id || uuidv4();
//   arr[idx] = newObj;

//   await saveArrayToFile(arr, filePath);
//   return true;
// };

// // Delete object at given index
// const deleteObjectFromArrayFromFile = async (idx, filePath) => {
//   const arr = await getAllDataFromArrayFromFile(filePath);
//   if (!Array.isArray(arr) || idx < 0 || idx >= arr.length) {
//     console.error("❌ Cannot delete: Invalid index or file content");
//     return false;
//   }

//   arr.splice(idx, 1);
//   await saveArrayToFile(arr, filePath);
//   return true;
// };
