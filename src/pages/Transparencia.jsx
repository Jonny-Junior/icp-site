// Workflow GIT:
// Fazer o Fork.
// Criar a branch: git checkout -b feature/pagina-transparencia-nomedoaluno.
// Desenvolver apenas dentro do arquivo src/pages/Transparencia.jsx.
// Adicionar, comitar e fazer o Push.
// Fazer o Pull Request para o repositório original.

import React from 'react';
import Template from './Template';

import tabelaTransparencia from '../assets/tabela-transparencia.png';

const Transparencia = () => (
    <Template title="Transparência">
        <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
                O Instituto Casa do Pai, fundado em 2007, atua em Itaguaí – RJ com o compromisso de promover transformação social por meio de ações responsáveis e transparentes. Ao longo dos anos, o instituto consolidou seu trabalho em diversas áreas estratégicas, como Educação, Empreendedorismo, Esporte, Tecnologia, Meio Ambiente e Defesa Animal, sempre com foco no impacto positivo e duradouro para a comunidade. Nossa missão é gerar oportunidades reais, promover inclusão social e contribuir para o desenvolvimento humano e sustentável, pautando todas as atividades pela ética, integridade e respeito às pessoas.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
                A transparência é um dos pilares fundamentais do Instituto Casa do Pai. Por isso, mantemos uma gestão rigorosa e alinhada às melhores práticas de governança, com prestação de contas clara e acessível. Todas as ações e recursos são monitorados e registrados, garantindo que cada etapa dos projetos seja acompanhada de forma responsável e auditável. Além disso, contamos com certificações e conformidade legal que comprovam nossa seriedade institucional e o compromisso com a correta aplicação dos recursos recebidos.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
                A confiança da sociedade, parceiros, apoiadores e órgãos públicos é essencial para a continuidade do nosso trabalho. Por isso, reforçamos o compromisso de manter uma comunicação aberta e transparente sobre nossas atividades, resultados e investimentos. Ao disponibilizar informações completas sobre projetos, convênios e prestação de contas, buscamos fortalecer a credibilidade e demonstrar que cada contribuição é utilizada com responsabilidade, sempre em prol do bem-estar social e do desenvolvimento da comunidade de Itaguaí e região.
            </p>

            <div className="mt-12 w-full flex justify-center">
                <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                    <img
                        src={tabelaTransparencia}
                        alt="Tabela de Transparência e Prestação de Contas"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    </Template>
);


export default Transparencia;
