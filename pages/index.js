import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>

            <p className='mt-6 text-center'>O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>

            <div className='text-center my-12 container mx-auto px-4'>
                <Link href='/pesquisa'>
                    <p className='bg-blue-400 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</p>
                </Link>
            </div>
            <p className='my-6 text-center'>Mensagem do desconto</p>
        </div>
    )
}

export default Index