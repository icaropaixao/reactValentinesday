import { useState, useEffect } from 'react';

import { Heart, ChevronDown, X, Volume2, VolumeX } from 'lucide-react';

export default function ValentinesDayPage() {
  const [currentSection, setCurrentSection] = useState('landing');
  const [activePoem, setActivePoem] = useState(null);
  const [revealedVerses, setRevealedVerses] = useState({});
  const [activeLoveIndex, setActiveLoveIndex] = useState(0);
  const [showLoveModal, setShowLoveModal] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Função para controlar o áudio (simulação)
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // Aqui você adicionaria a lógica real para tocar/pausar música
  };

  // Função para revelar versos dos poemas
  const revealNextVerse = (poemId) => {
    setRevealedVerses(prev => ({
      ...prev,
      [poemId]: (prev[poemId] || 1) + 1
    }));
  };

  // Efeito para animação de entrada quando a página carrega
  useEffect(() => {
    // Simulando carregamento
    const timer = setTimeout(() => {
      document.getElementById('main-container').classList.remove('opacity-0');
      document.getElementById('main-container').classList.add('opacity-100');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Dados dos poemas
  const poems = [
    {
      id: 'poem1',
      title: 'Universo Em Seus Olhos',
      background: 'bg-gradient-to-r from-pink-200 to-rose-300',
      verses: [
        "Nos teus olhos encontrei",
        "Um universo todo meu",
        "Estrelas de sonhos a brilhar",
        "E o infinito amor que nasceu"
      ]
    },
    {
      id: 'poem2',
      title: 'Nossa História',
      background: 'bg-gradient-to-r from-purple-200 to-pink-200',
      verses: [
        "Cada página que escrevemos",
        "É mais bonita que a anterior",
        "Nossa história continua",
        "Em capítulos de puro amor"
      ]
    },
    {
      id: 'poem3',
      title: 'Meu Coração É Seu',
      background: 'bg-gradient-to-r from-red-200 to-rose-200',
      verses: [
        "Meu coração escolheu você",
        "Entre bilhões de estrelas",
        "Para ser meu porto seguro",
        "E minha eterna primavera"
      ]
    }
  ];

  // Dados das 10 coisas que mais amo
  const loveThings = [
    {
      title: "Seu sorriso",
      description: "Quando você sorri, o mundo inteiro parece mais bonito. Seu sorriso tem o poder de transformar meu dia, não importa o que esteja acontecendo.",
      imageAlt: "Seu lindo sorriso",
      background: "bg-gradient-to-br from-pink-100 to-red-200"
    },
    {
      title: "Sua inteligência",
      description: "A forma como você pensa, analisa as situações e encontra soluções me impressiona todos os dias. Sua mente brilhante é uma inspiração constante.",
      imageAlt: "Momento de reflexão",
      background: "bg-gradient-to-br from-purple-100 to-pink-200"
    },
    {
      title: "Sua risada",
      description: "O som da sua risada é a minha música favorita. Cada gargalhada sua enche meu coração de alegria e me faz querer ouvir esse som para sempre.",
      imageAlt: "Momento de alegria",
      background: "bg-gradient-to-br from-indigo-100 to-purple-200"
    },
    {
      title: "Seu carinho",
      description: "A delicadeza dos seus gestos, o toque suave das suas mãos, cada abraço que me dá... Seu carinho é o melhor lugar do mundo para estar.",
      imageAlt: "Momento de afeto",
      background: "bg-gradient-to-br from-rose-100 to-pink-200"
    },
    {
      title: "Sua força",
      description: "Admiro profundamente como você enfrenta os desafios da vida. Sua resiliência e determinação me mostram que não há obstáculo grande demais quando se tem coragem.",
      imageAlt: "Momento de superação",
      background: "bg-gradient-to-br from-amber-100 to-orange-200"
    },
    {
      title: "Seu olhar",
      description: "Há universos inteiros nos seus olhos. Quando nossos olhares se encontram, sinto que posso ver sua alma e me perco nessa conexão única que temos.",
      imageAlt: "Seu olhar cativante",
      background: "bg-gradient-to-br from-blue-100 to-cyan-200"
    },
    {
      title: "Sua paixão",
      description: "A intensidade com que você vive, se dedica ao que acredita e ama o que faz é contagiante. Sua paixão pela vida me inspira todos os dias.",
      imageAlt: "Momento de entusiasmo",
      background: "bg-gradient-to-br from-red-100 to-orange-200"
    },
    {
      title: "Sua lealdade",
      description: "A segurança que sinto ao seu lado vem da certeza do seu compromisso. Sua lealdade é uma das qualidades mais preciosas que encontrei em você.",
      imageAlt: "Momento de cumplicidade",
      background: "bg-gradient-to-br from-emerald-100 to-teal-200"
    },
    {
      title: "Sua singularidade",
      description: "Não há ninguém como você no mundo. A forma única como você vê a vida, suas manias, seus gostos... Cada detalhe que faz você ser quem é me encanta.",
      imageAlt: "Momento autêntico",
      background: "bg-gradient-to-br from-violet-100 to-purple-200"
    },
    {
      title: "Seu amor",
      description: "O modo como você me ama, me aceita completamente e me faz sentir especial todos os dias é o maior presente que já recebi. Seu amor me transforma e me completa.",
      imageAlt: "Nossa história de amor",
      background: "bg-gradient-to-br from-rose-200 to-red-300"
    }
  ];

  // Renderização da Landing Page inicial
  const renderLanding = () => (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 transition-all duration-700">
      <div className="animate-float">
        <Heart size={80} className="text-rose-500 mx-auto mb-6" fill="#f43f5e" />
      </div>
      <h1 className="text-4xl font-bold text-rose-600 mb-4 animate-fadeIn">Para Meu Amor Emanuele</h1>
      <p className="text-xl text-rose-500 mb-8 animate-fadeIn">Um pequeno presente para expressar o quanto você significa para mim</p>
      
      <div className="grid grid-cols-1 gap-8 w-full max-w-lg animate-fadeIn delay-300">
        <button 
          onClick={() => setCurrentSection('poems')}
          className="px-6 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Poemas para you
        </button>
        
        <button 
          onClick={() => setCurrentSection('tenThings')}
          className="px-6 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          TOP 10 coisas que amo em você
        </button>
      </div>
      
      <div className="absolute bottom-16 animate-bounce">
        <ChevronDown size={32} className="text-rose-400" />
      </div>
      
      <button 
        onClick={toggleMusic} 
        className="fixed top-6 right-6 p-3 bg-white/80 rounded-full shadow-md hover:bg-white transition-all"
        aria-label={isMusicPlaying ? "Pausar música" : "Tocar música"}
      >
        {isMusicPlaying ? <Volume2 size={20} className="text-rose-500" /> : <VolumeX size={20} className="text-gray-400" />}
      </button>
    </div>
  );

  // Renderização da seção de Poemas
  const renderPoems = () => (
    <div className="min-h-screen flex flex-col items-center p-6 transition-all duration-700">
      <h2 className="text-3xl font-bold text-rose-600 mb-8 animate-fadeIn">Poemas Para Você</h2>
      
      {activePoem ? (
        <div className={`w-full max-w-lg p-6 rounded-xl shadow-lg transition-all duration-500 ${poems.find(p => p.id === activePoem)?.background}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-rose-700">{poems.find(p => p.id === activePoem)?.title}</h3>
            <button onClick={() => setActivePoem(null)} className="p-1 rounded-full bg-white/50 hover:bg-white/80">
              <X size={20} className="text-rose-500" />
            </button>
          </div>
          
          <div className="space-y-4 my-6">
            {poems.find(p => p.id === activePoem)?.verses.slice(0, revealedVerses[activePoem] || 1).map((verse, idx) => (
              <p key={idx} className="text-lg text-rose-800 italic animate-fadeIn" style={{animationDelay: `${idx * 300}ms`}}>
                {verse}
              </p>
            ))}
          </div>
          
          {(revealedVerses[activePoem] || 1) < poems.find(p => p.id === activePoem)?.verses.length && (
            <button 
              onClick={() => revealNextVerse(activePoem)}
              className="w-full py-3 bg-white/50 hover:bg-white/80 text-rose-700 rounded-lg mt-4 transition-all duration-300"
            >
              Revelar próximo verso
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {poems.map((poem) => (
            <button
              key={poem.id}
              onClick={() => setActivePoem(poem.id)}
              className={`p-6 ${poem.background} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left`}
            >
              <Heart size={24} className="text-rose-600 mb-3" fill="#f43f5e" />
              <h3 className="text-xl font-semibold text-rose-700 mb-2">{poem.title}</h3>
              <p className="text-rose-600 italic">Clique para ler...</p>
            </button>
          ))}
        </div>
      )}
      
      <button 
        onClick={() => setCurrentSection('landing')}
        className="mt-10 px-6 py-3 bg-white text-rose-500 border border-rose-300 rounded-lg shadow hover:shadow-md transition-all"
      >
        Voltar ao Início
      </button>
    </div>
  );

  // Renderização da seção "10 coisas que amo em você"
  const renderTenThings = () => (
    <div className="min-h-screen flex flex-col items-center p-6 transition-all duration-700">
      <h2 className="text-3xl font-bold text-rose-600 mb-8 animate-fadeIn">10 Coisas Que Amo Em Você</h2>
      
      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {loveThings.map((thing, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveLoveIndex(index);
              setShowLoveModal(true);
            }}
            className={`aspect-square ${thing.background} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-4 transform hover:scale-105`}
          >
            <Heart size={24} className="text-rose-600 mb-2" fill="#f43f5e" />
            <span className="font-medium text-rose-700 text-center">{index + 1}</span>
          </button>
        ))}
      </div>
      
      {showLoveModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className={`w-full max-w-lg p-6 rounded-xl shadow-2xl ${loveThings[activeLoveIndex].background} animate-scaleIn`}>
            <div className="flex justify-between items-center mb-4">
              <div className="bg-white/80 w-8 h-8 rounded-full flex items-center justify-center font-bold text-rose-600">
                {activeLoveIndex + 1}
              </div>
              <h3 className="text-xl font-semibold text-rose-700">{loveThings[activeLoveIndex].title}</h3>
              <button onClick={() => setShowLoveModal(false)} className="p-1 rounded-full bg-white/50 hover:bg-white/80">
                <X size={20} className="text-rose-500" />
              </button>
            </div>
            
            <div className="h-48 bg-white/30 rounded-lg flex items-center justify-center mb-6">
              <img 
                src="/api/placeholder/400/320" 
                alt={loveThings[activeLoveIndex].imageAlt} 
                className="max-h-full max-w-full object-cover rounded-lg"
              />
            </div>
            
            <p className="text-rose-800 text-lg">{loveThings[activeLoveIndex].description}</p>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={() => setActiveLoveIndex(prev => prev === 0 ? loveThings.length - 1 : prev - 1)}
                className="px-4 py-2 bg-white/50 hover:bg-white/80 text-rose-700 rounded-lg transition-all"
              >
                Anterior
              </button>
              <button 
                onClick={() => setActiveLoveIndex(prev => prev === loveThings.length - 1 ? 0 : prev + 1)}
                className="px-4 py-2 bg-white/50 hover:bg-white/80 text-rose-700 rounded-lg transition-all"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setCurrentSection('landing')}
        className="mt-10 px-6 py-3 bg-white text-rose-500 border border-rose-300 rounded-lg shadow hover:shadow-md transition-all"
      >
        Voltar ao Início
      </button>
    </div>
  );

  return (
    <div 
      id="main-container"
      className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 opacity-0 transition-opacity duration-1000"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50C54.6 40 68 10 50 10 32 10 45.4 40 50 50 54.6 60 68 90 50 90 32 90 45.4 60 50 50z' fill='%23fecdd3' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '300px 300px'
      }}
    >
      {currentSection === 'landing' && renderLanding()}
      {currentSection === 'poems' && renderPoems()}
      {currentSection === 'tenThings' && renderTenThings()}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 