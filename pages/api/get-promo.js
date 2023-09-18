import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet('1w4n-ROqgYeNRFeQ7T4c0QS5nf8mSHycsKnR13mhKGZs');


export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        
        const sheet = doc.sheetsByIndex[2];
        await sheet.loadCells('A2:B2');
    
        const mostrarPromocaoCell = sheet.getCell(1,0);
        const textCell = sheet.getCell(1,1);

        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value ==='VERDADEIRO',
            message: textCell.value
        }))
    
        } catch (err) {
            res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
        }


}