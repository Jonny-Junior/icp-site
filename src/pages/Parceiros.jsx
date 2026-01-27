import React, { useLayoutEffect, useRef } from 'react';
import Template from './Template';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Handshake, ArrowRight } from 'lucide-react';

// Importação das imagens locais
import logo1 from '../assets/parceiros/logo-1.jpg';
import logo2 from '../assets/parceiros/logo-2.jpg';
import logo3 from '../assets/parceiros/logo-3.webp';
import logo4 from '../assets/parceiros/logo-4.jpeg';
import logo5 from '../assets/parceiros/logo-5.png';
import logo6 from '../assets/parceiros/logo-6.png';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Dados dos Parceiros com Descrição
const PARTNERS_DATA = [
    { 
        id: 1, 
        name: "Receita Federal", 
        logo: logo1, 
        url: "https://servicos.receitafederal.gov.br/",
        description: "Em breve, traremos detalhes sobre como esta parceria impacta diretamente as ações do ICP, fortalecendo nossa missão social e ampliando nosso alcance."
    },
    { 
        id: 2, 
        name: "UFRRJ", 
        logo: logo2, 
        url: "https://portal.ufrrj.br/",
        description: "Em breve, traremos detalhes sobre como esta parceria impacta diretamente as ações do ICP, fortalecendo nossa missão social e ampliando nosso alcance."
    },
    { 
        id: 3, 
        name: "RV Contabilidade", 
        logo: logo3, 
        url: "https://rvcontabilidade.com.br/",
        description: "Em breve, traremos detalhes sobre como esta parceria impacta diretamente as ações do ICP, fortalecendo nossa missão social e ampliando nosso alcance."
    },
    { 
        id: 4, 
        name: "Vale", 
        logo: logo4, 
        url: "https://www.vale.com/pt/home",
        description: "Em breve, traremos detalhes sobre como esta parceria impacta diretamente as ações do ICP, fortalecendo nossa missão social e ampliando nosso alcance."
    },
    { 
        id: 5, 
        name: "Governo do Estado do RJ", 
        logo: logo5, 
        url: "https://www.rj.gov.br/",
        description: "Em breve, traremos detalhes sobre como esta parceria impacta diretamente as ações do ICP, fortalecendo nossa missão social e ampliando nosso alcance."
    },
    { 
        id: 6, 
        name: "Governo Federal", 
        logo: logo6, 
        url: "https://www.gov.br/pt-br",
        description: "Em breve, traremos detalhes sobre como esta parceria impacta diretamente as ações do ICP, fortalecendo nossa missão social e ampliando nosso alcance."
    },
];

const Parceiros = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animação dos itens da lista
            const rows = gsap.utils.toArray('.partner-row');
            
            rows.forEach((row, index) => {
                const isEven = index % 2 === 0; // 0, 2, 4 (Visualmente 1º, 3º, 5º)
                // Se for par (imagem à esquerda), vem da esquerda (-50). Ímpar vem da direita (50).
                const xOffset = isEven ? -50 : 50;

                gsap.from(row, {
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%", // Começa quando o topo do elemento chega a 80% da viewport
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    },
                    x: xOffset,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });

            // Animação da CTA
            gsap.from(".cta-section", {
                scrollTrigger: {
                    trigger: ".cta-section",
                    start: "top 85%"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <Template title="Parceiros e Empresas">
            <div ref={containerRef} className="space-y-24 pb-12">
                {/* Intro Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-xl text-slate-600 leading-relaxed">
                        A transformação social é um esforço coletivo. Conheça as instituições que, lado a lado com o <strong>Instituto Casa do Pai</strong>, transformam vidas e constroem um futuro mais digno para nossa comunidade.
                    </p>
                </div>

                {/* Zig-Zag List */}
                <div className="flex flex-col gap-20">
                    {PARTNERS_DATA.map((partner, index) => {
                        const isEven = index % 2 === 0; // 1º (idx 0), 3º (idx 2), 5º (idx 4) -> Imagem Esquerda
                        // Se index é ímpar (1, 3, 5), queremos layout reverso (Imagem Direita)
                        
                        return (
                            <div 
                                key={partner.id} 
                                className={`partner-row flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Lado da Imagem */}
                                <div className="w-full md:w-1/2">
                                    <a 
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block bg-white rounded-[3rem] shadow-xl shadow-slate-100 p-12 aspect-[16/9] flex items-center justify-center group transition-transform duration-500 hover:-translate-y-2"
                                    >
                                        <img 
                                            src={partner.logo} 
                                            alt={`Logo ${partner.name}`} 
                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                        />
                                    </a>
                                </div>

                                {/* Lado do Texto */}
                                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                                    <h3 className="text-3xl md:text-4xl font-bold text-institutional-blue">
                                        {partner.name}
                                    </h3>
                                    <div className="w-20 h-1 bg-institutional-orange mx-auto md:mx-0 rounded-full" />
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {partner.description}
                                    </p>
                                    <a 
                                        href={partner.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-institutional-blue font-semibold hover:text-institutional-orange transition-colors group"
                                    >
                                        Visitar site oficial
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Banner */}
                <div className="cta-section mt-12 bg-institutional-blue rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                        <div className="max-w-2xl">
                            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
                                <Handshake className="w-10 h-10 text-institutional-orange" />
                                Construa o futuro conosco
                            </h3>
                            <p className="text-blue-100 text-lg">
                                Sua empresa também pode ser um agente de mudança. Junte-se à nossa rede e impacte vidas através de ações sociais efetivas.
                            </p>
                        </div>
                        <button className="bg-institutional-orange hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-full shadow-lg shadow-orange-900/20 transform transition-all duration-300 hover:scale-105 flex items-center gap-3 whitespace-nowrap text-lg">
                            Quero ser Parceiro
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default Parceiros;
