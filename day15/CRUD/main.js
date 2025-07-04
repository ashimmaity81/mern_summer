const {
  getAllDataFromArrayFromFile,
  saveObjectToArrayInFile,
} = require("./file-helper.js");

const main = async () => {
  const filePath = "./my-data.json";

  saveObjectToArrayInFile(
    {
      name: "Likhilesh",
      city: "Delhi",
      score: 65,
    },
    filePath
  );
  const resp = await getAllDataFromArrayFromFile(filePath);
  console.log("all data --> ", resp);
};

main();
