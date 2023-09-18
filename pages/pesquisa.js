import React, { useState } from 'react';

const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: ''
    })

    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json();
            console.log(data);
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
            <h1 className='font-bold text-center my-6 text-2xl'>Críticas e sugestões</h1>
            <p className='mt-6 text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'> Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded my-3' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}></input>
                <label className='font-bold'> Email:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded my-3' placeholder='Email' onChange={onChange} name='Email' value={form.Email}></input>
                <label className='font-bold'> Whatsapp:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded my-3' placeholder='DDD XXXXXXXXX' onChange={onChange} name='Whatsapp' value={form.Whatsapp}></input>

                <button className='bg-blue-400 font-bold rounded-lg shadow-lg hover:shadow p-5 my-3' onClick={save}>Salvar</button>

                <pre>
                    {JSON.stringify(form, null, 2)}
                </pre>

            </div>
        </div>
    )
}

export default Pesquisa;