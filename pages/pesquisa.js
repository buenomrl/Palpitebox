import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })

    const notas = [0, 1, 2, 3, 4, 5];
    const [success, setSuccess] = useState(false);
    const [retorno, setRetorno] = useState({});

    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json();

            setSuccess(true);
            setRetorno(data);

        } catch (err) {

        }
    }


    const onChange = evt => {
        const value = evt.target.value;
        const key = evt.target.name;

        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='pt-6'>
            
            <PageTitle title ='Pesquisa'></PageTitle>

            <h1 className='font-bold text-center my-6 text-2xl'>Críticas e sugestões</h1>
            <p className='mt-6 text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            {!success && <div className='w-1/5 mx-auto'>
                <label className='font-bold'> Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded my-3' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}></input>
                <label className='font-bold'> Email:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded my-3' placeholder='Email' onChange={onChange} name='Email' value={form.Email}></input>
                <label className='font-bold'> Whatsapp:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded my-3' placeholder='DDD XXXXXXXXX' onChange={onChange} name='Whatsapp' value={form.Whatsapp}></input>

                <label className='font-bold'> Nota:</label>
                <div className='flex py-3'>
                {notas.map(nota => {
                    return (<label className='block w-1/6 text-center'>{nota}<br/><input type='radio' name='Nota' value={nota} onChange={onChange}></input></label>)
                })}
                </div>

                <button className='block bg-blue-400 font-bold rounded-lg shadow-lg hover:shadow p-5 my-3' onClick={save}>Salvar</button>
            </div>}
            {success && <div className='w-1/5 mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica!</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        Seu cupom: <br />
                        <span className='font-bold text-2xl'>{retorno.Cupom}</span></div>

                }
                {
                    retorno.showCoupon && <div className='text-center p-4 mb-8'>
                        <span className='font-bold block mb-2'>{retorno.Promo}</span>
                        <br />
                        <span className='italic'>Tire um print ou foto desta tela e apresente ao estabelecimento!</span>
                    </div>

                }
            </div>}
        </div>
    )
}

export default Pesquisa;