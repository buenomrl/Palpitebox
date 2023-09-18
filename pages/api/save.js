import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';
import moment from 'moment/moment';

const doc = new GoogleSpreadsheet('1w4n-ROqgYeNRFeQ7T4c0QS5nf8mSHycsKnR13mhKGZs');


const genCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
    return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);
}


export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        console.log(doc.title);

        const sheet = doc.sheetsByIndex[1];
        const data = JSON.parse(req.body);

        const sheetConfig = doc.sheetsByIndex[2];
        await sheetConfig.loadCells('A2:B2');

        const mostrarPromocaoCell = sheetConfig.getCell(1, 0);
        const textCell = sheetConfig.getCell(1, 1);

        let Cupom = '';
        let Promo = '';

        if (mostrarPromocaoCell.value === 'VERDADEIRO') {

            Cupom = genCupom();
            Promo = textCell.value;

        }

        // Nome Email Whatsapp Cupom Promo

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
            Cupom,
            Promo,
            Nota: parseInt(data.Nota)

        })
        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }));

    } catch (err) {
        console.log("Error: ", err.message);
        res.end('error');
    }


}