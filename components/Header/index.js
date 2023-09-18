import React from "react"
import styles from './styles.module.css'
import Link from "next/link"


const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className='container mx-auto'>
                <Link href='/'>    
                    <img className="mx-auto" src='/logo_palpitebox.png' alt='PalpiteBox' />
                </Link>
                </div>
            </div>
            <div className="bg-gray-300 p-4 shadow-md text-center">
                <Link href='/sobre'>
                    <p className={styles.pInline}>Sobre</p>
                </Link>
                <Link href='/contato'>
                    <p className={styles.pInline}>Contato</p>
                </Link>
                <Link href='/pesquisa'>
                    <p className={styles.pInline}>Pesquisa</p>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header