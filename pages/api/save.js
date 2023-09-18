import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';
import moment from 'moment/moment';

const doc = new GoogleSpreadsheet('1w4n-ROqgYeNRFeQ7T4c0QS5nf8mSHycsKnR13mhKGZs');

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        console.log(doc.title);
    
        const sheet = doc.sheetsByIndex[1];
        const data = JSON.parse(req.body);

        const sheetConfig = doc.sheetsByIndex[2];
        await sheetConfig.loadCells('A2:B2');
    
        const mostrarPromocaoCell = sheetConfig.getCell(1,0);
        const textCell = sheetConfig.getCell(1,1);

        let Cupom ='';
        let Promo ='';
        
        if (mostrarPromocaoCell.value === 'VERDADEIRO') {

            Cupom = 'Temporario';
            Promo = textCell.value;

        }

        // Nome Email Whatsapp Cupom Promo
    
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: 5,
            'Data Preenchimento': moment().format('MMMM Do YYYY, h:mm:ss a'),
            Cupom,
            Promo
    
        })
        res.end(req.body);
    
        } catch (err) {
            console.log("Error: ", err.message);
            res.end('error');
        }


}