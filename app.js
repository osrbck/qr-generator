import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name: "url",
        message: "Please enter a URL: "
    }
  ])
  .then(({url}) => {
    // Use user feedback for... whatever!!
    
    const qr_png = qr.image(url, {size: 8});
    qr_png.pipe(fs.createWriteStream('littlepalm.png'));
 
})