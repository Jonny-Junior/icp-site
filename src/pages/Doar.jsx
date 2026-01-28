import React, { useState } from 'react';
import Template from './Template';
// import imgEdu from '../assets/edu.png';
// import imgSport from '../assets/sport.png';
// import imgAnimal from '../assets/animal.png';
import qrMensal from '../assets/qrcode.png';
import collageAtividades from '../assets/collage-atividades.png';

const Doar = () => {
    const [copied, setCopied] = useState(false);
    const pixKey = "08913297000198";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(pixKey).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <Template title="Gesto Solidário">
            <div className="space-y-16">
                {/* Visual Context Section - Featured Collage Enlarged */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/3 lg:pr-8 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-institutional-blue leading-tight tracking-tighter">
                            Sua generosidade <br />
                            <span className="text-institutional-orange">transforma o agora.</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-institutional-orange pl-6">
                            "A caridade é o único tesouro que se aumenta ao ser dividido."
                        </p>
                        <div className="space-y-4 text-slate-500 text-lg leading-relaxed">
                            <p>
                                No <strong>Instituto Casa do Pai</strong>, cada doação é convertida em oportunidades reais.
                                Atuamos desde 2007 como um pilar de apoio, educação e bem-estar para quem mais precisa.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full relative group">
                        <div className="absolute -inset-4 bg-institutional-blue/5 rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                        <img
                            src={collageAtividades}
                            alt="Nossas Atividades"
                            className="relative rounded-3xl shadow-2xl shadow-slate-300 w-full h-[500px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>

                {/* Donation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 items-stretch">
                    {/* Pix */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-blue-50 text-institutional-blue rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                            ⚡
                        </div>
                        <h3 className="text-2xl font-bold text-institutional-blue mb-3 font-sans">Doe via Pix</h3>
                        <p className="text-slate-500 mb-8 text-sm">Ajuda imediata e segura. Copie a chave abaixo.</p>

                        <div
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6 cursor-pointer hover:bg-slate-100 transition-colors"
                            onClick={copyToClipboard}
                        >
                            <span className="block text-sm font-mono text-slate-700 break-all font-bold tracking-tight">{pixKey}</span>
                        </div>

                        <button
                            onClick={copyToClipboard}
                            className={`w-full py-4 rounded-xl font-bold tracking-widest transition-all ${copied ? 'bg-green-500 text-white' : 'bg-institutional-blue text-white hover:bg-blue-900 shadow-xl shadow-blue-100'}`}
                        >
                            {copied ? '✓ COPIADO!' : 'COPIAR CHAVE PIX'}
                        </button>
                    </div>

                    {/* Card - QR Code Mensal - Seja a Mudança */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group">
                        <img
                            src={qrMensal}
                            alt="QR Code Assinatura Mensal"
                            className="w-64 h-64 mb-8 group-hover:scale-105 transition-transform rounded-xl shadow-md border border-slate-100"
                        />
                        <h3 className="text-2xl font-bold text-institutional-blue mb-3 font-sans uppercase tracking-tighter italic">Seja a Mudança</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">Sua constância é o que nos permite sonhar mais alto. Apoie nossas causas mensalmente e ajude a transformar realidades dia após dia.</p>
                        <div className="mt-auto pt-4 w-full border-t border-slate-50 text-xs text-slate-400 italic">
                            Escaneie para se tornar um mantenedor.
                        </div>
                    </div>

                    {/* Bank */}
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                            🏦
                        </div>
                        <h3 className="text-2xl font-bold text-institutional-blue mb-3 font-sans">Dados Bancários</h3>
                        <p className="text-slate-500 mb-8 text-sm">Depósitos diretos para nossa conta corrente institucional.</p>

                        <div className="w-full text-left bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-2 text-[10px] font-bold text-slate-700 uppercase tracking-widest leading-none">
                            <div className="flex justify-between border-b border-slate-200 pb-2"><span>Banco:</span> <span>Mercado Pago</span></div>
                            <div className="flex justify-between border-b border-slate-200 pb-2"><span>Agência:</span> <span>0001</span></div>
                            <div className="flex justify-between border-b border-slate-200 pb-2"><span>Conta:</span> <span>47668811805</span></div>
                            <div className="flex justify-between"><span>CNPJ:</span> <span>08.913.297/0001-98</span></div>
                        </div>
                    </div>
                </div>

                {/* Transparency Footnote */}
                <div className="text-center pt-12 border-t border-slate-100">
                    <p className="text-slate-400 text-sm max-w-3xl mx-auto leading-relaxed">
                        O Instituto Casa do Pai preza pela transparência absoluta. Todas as doações são auditadas
                        e destinadas integralmente aos nossos projetos sociais e de cuidado animal.
                    </p>
                </div>
            </div>
        </Template>
    );
};

export default Doar;
