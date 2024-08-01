const Tesseract = require('tesseract.js');
const path = require('path');

const imagePath = path.join(__dirname, 'images', 'idcard_image.jpg');

(async () => {
    const worker = await Tesseract.createWorker('eng');
    const ret = await worker.recognize(imagePath);
    console.log("Unstructured OCR Data: ",ret.data.text)
    await worker.terminate();

    function parseText(text) {
        const namePattern = /Name\s*:\s*([A-Z\s]+)/i;
        const regNoPattern = /Reg No\s*:\s*([A-Z0-9\s]+)/i;
        const branchPattern = /Branch\s*:\s*([A-Z\s-.]+)/i;
        const acdYrPattern = /Acd Yr\s*1\s*(\d{4}\s*-\s*\d{4})/i;
        const dobPattern = /DoB\s*([\dA-Za-z-]+)/i;
        const contactPattern = /Pmer9®n<Y\s*1([\d,\s]+)/i;

        const nameMatch = text.match(namePattern);
        // console.log("nameMatch", nameMatch)
        const regNoMatch = text.match(regNoPattern);
        const branchMatch = text.match(branchPattern);
        const acdYrMatch = text.match(acdYrPattern);
        const dobMatch = text.match(dobPattern);
        const contactMatch = text.match(contactPattern);

        const structuredData = {
            Name: nameMatch ? nameMatch[1].trim() : null,
            Reg_No: regNoMatch ? regNoMatch[1].trim().split(" ").join("") : null,
            Branch: branchMatch ? branchMatch[1].trim() : null,
            Acd_Yr: acdYrMatch ? acdYrMatch[1].trim() : null,
            DoB: dobMatch ? dobMatch[1].trim() : null,
            Contact: contactMatch ? contactMatch[1].trim().split(", ") : null
        };

    return structuredData;
    }

  const structuredData = parseText(ret.data.text);
  console.log("Structured Data:");
  console.log(structuredData);
})();

