import React from "react"

const Footer = () => {
    return (
        <div className="bg-gray-700 p-4 text-center font-bold text-white">
            <div className="container mx-auto">
                <a className="inline">Projeto desenvolvido por: Murillo Bueno /</a>
                <a className="hover:underline" href="https://www.linkedin.com/in/buenomrl/" target="_blank">Linkedin</a> /
                <a className="hover:underline" href="https://github.com/buenomrl" target="_blank">Github</a>
                <div className="block mt-4">
                <img className="inline px-6" src="/logo_semana_fsm.png"></img>
                <img className="inline px-6" src="/logo_devpleno.png"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer