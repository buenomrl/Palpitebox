import React from 'react';

const Pesquisa = () => {

    const save = async () => {
        const form = {
            Nome: 'aaa',
            Email: 'bbb',
            Whatsapp: 'ccc'
        }
        try {
        const response = await fetch ('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })

        const data = await response.json();
        console.log(data);
        } catch(err) {}
    }

    return ( 
        <div className='pt-6'>
            <h1 className='font-bold text-center my-6 text-2xl'>Críticas e sugestões</h1>
            <p className='mt-6 text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'> Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded my-3'></input>
                <button className='bg-blue-400 font-bold rounded-lg shadow-lg hover:shadow p-5' onClick={save}>Salvar</button>
            </div>
        </div>
    )
}

export default Pesquisa;