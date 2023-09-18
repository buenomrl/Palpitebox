import React from 'react'

const Pesquisa = () => {
    return ( 
        <div className='pt-6'>
            <h1 className='font-bold text-center my-6 text-2xl'>Críticas e sugestões</h1>
            <p className='mt-6 text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'> Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded my-3'></input>

            </div>
        </div>
    )
}

export default Pesquisa