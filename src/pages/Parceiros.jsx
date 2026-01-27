import React, { useLayoutEffect, useRef } from 'react';
import Template from './Template';
import gsap from 'gsap';
import { Handshake, Users, HeartHandshake, ArrowRight } from 'lucide-react';

// Importação das imagens locais
import logo1 from '../assets/parceiros/logo-1.jpg';
import logo2 from '../assets/parceiros/logo-2.jpg';
import logo3 from '../assets/parceiros/logo-3.webp';
import logo4 from '../assets/parceiros/logo-4.jpeg';
import logo5 from '../assets/parceiros/logo-5.png';
import logo6 from '../assets/parceiros/logo-6.png';

const PartnerCard = ({ name, logo, tier }) => {
    // Ajuste de tamanho baseado no tier, mas mantendo aspect-video para todos
    const tierStyles = {
        mantenedor: "col-span-1 md:col-span-1", // Mantenedores ocupam espaço padrão no grid definido pelo pai
        parceiro: "col-span-1", 
        apoio: "col-span-1"
    };

    return (
        <div className={`partner-card bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-md group cursor-pointer aspect-video relative overflow-hidden ${tierStyles[tier]}`}>
           <div className="w-full h-full flex items-center justify-center">
               <img 
                src={logo} 
                alt={`Logo ${name}`} 
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
               />
           </div>
        </div>
    );
};

const Parceiros = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".partner-section", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.from(".partner-card", {
                y: 20,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.2)",
                delay: 0.4
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Definição dos parceiros com suas respectivas logos
    const mantenedores = [
        { id: 1, name: "Empresa 1", logo: logo1 },
        { id: 2, name: "Empresa 2", logo: logo2 },
    ];

    const parceiros = [
        { id: 1, name: "Parceiro 1", logo: logo1 },
        { id: 2, name: "Parceiro 2", logo: logo2 },
        { id: 3, name: "Parceiro 3", logo: logo3 },
        { id: 4, name: "Parceiro 4", logo: logo4 },
        { id: 5, name: "Parceiro 5", logo: logo5 },
        { id: 6, name: "Parceiro 6", logo: logo6 },
    ];

    const apoio = [
        { id: 6, name: "Apoio 6", logo: logo6 },
        // Reutilizando logos para preencher a seção de apoio como exemplo
        { id: 7, name: "Apoio 7", logo: logo1 }, 
        { id: 8, name: "Apoio 8", logo: logo2 },
        { id: 9, name: "Apoio 9", logo: logo3 },
    ];

    return (
        <Template title="Parceiros e Empresas">
            <div ref={containerRef} className="space-y-16 pb-12">
                {/* Intro Section */}
                <div className="partner-section max-w-3xl">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        A transformação social é um esforço coletivo. O <strong>Instituto Casa do Pai</strong> une forças com empresas e organizações visionárias que entendem seu papel na construção de uma comunidade mais justa e acolhedora. Juntos, criamos oportunidades e mudamos realidades.
                    </p>
                </div>

                {/* Mantenedores - Logos Maiores */}
                <div className="partner-section space-y-6">
                    <div className="flex items-center gap-3 text-institutional-blue">
                        <HeartHandshake size={28} />
                        <h2 className="text-2xl font-bold">Mantenedores</h2>
                    </div>
                    {/* Grid ajustado para logos maiores: 2 colunas no desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl">
                        {mantenedores.map(p => (
                            <PartnerCard key={p.id} name={p.name} logo={p.logo} tier="mantenedor" />
                        ))}
                    </div>
                </div>

                {/* Parceiros - Logos Médios */}
                <div className="partner-section space-y-6">
                    <div className="flex items-center gap-3 text-institutional-blue opacity-90">
                        <Handshake size={24} />
                        <h2 className="text-xl font-bold">Parceiros</h2>
                    </div>
                     {/* Grid 3 colunas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {parceiros.map(p => (
                            <PartnerCard key={p.id} name={p.name} logo={p.logo} tier="parceiro" />
                        ))}
                    </div>
                </div>

                {/* Apoio - Logos Menores */}
                <div className="partner-section space-y-6">
                    <div className="flex items-center gap-3 text-slate-600">
                        <Users size={20} />
                        <h2 className="text-lg font-semibold">Rede de Apoio</h2>
                    </div>
                    {/* Grid 4 colunas */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {apoio.map(p => (
                            <PartnerCard key={p.id} name={p.name} logo={p.logo} tier="apoio" />
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="partner-section mt-16">
                    <div className="bg-institutional-blue rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">Sua empresa pode ser um agente de transformação</h3>
                                <p className="text-blue-100 text-lg leading-relaxed">
                                    Associe sua marca a projetos de impacto social real. Junte-se à nossa rede de parceiros e faça parte dessa história.
                                </p>
                            </div>
                            <button className="whitespace-nowrap bg-institutional-orange hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/20 flex items-center gap-2 group transform hover:-translate-y-1">
                                Seja um Parceiro
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default Parceiros;
