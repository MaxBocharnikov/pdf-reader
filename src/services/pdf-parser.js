
export default class PdfParser {

    static parse = file => {
        return new Promise((resolve, reject) => {
            if(!file) {
                reject('File was not selected');
            }
            if(file.type !== 'application/pdf') {
                reject('The selected file must be of type PDF');
            }
            const fileReader =  new FileReader();
            fileReader.onload = e => {
                resolve(e.target.result)
            };
            fileReader.readAsArrayBuffer(file);
        });
    }
}