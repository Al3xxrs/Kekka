import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import img1 from "./assets/your-image-1.jpg";
import img2 from "./assets/your-image-2.jpg";
import img3 from "./assets/your-image-3.jpg";
import img4 from "./assets/your-image-4.jpg";

export default function App() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prev) => {
                const next = [
                    ...prev,
                    {
                        id: Math.random(),
                        left: Math.random() * 95, // limitato a 95% per non uscire dallo schermo
                        size: 16 + Math.random() * 24,
                        duration: 3 + Math.random() * 2,
                    },
                ];
                if (next.length > 30) return next.slice(next.length - 30);
                return next;
            });
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen w-screen bg-gradient-to-b from-pink-100 via-rose-200 to-rose-300 text-rose-900 font-serif overflow-x-hidden">
            {/* Cuori in background */}
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: "-20px", opacity: 0 }}
                    animate={{ y: "calc(100vh + 20px)", opacity: [0, 1, 0] }}
                    transition={{ duration: heart.duration, ease: "linear" }}
                    className="absolute pointer-events-none z-0"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                    }}
                >
                    <Heart className="text-rose-400/80" />
                </motion.div>
            ))}

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 space-y-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold"
                >
                    Per la mia <span className="text-rose-600">Kekkina</span> Bellissima ❤️
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="max-w-2xl text-lg md:text-xl italic"
                >
                    "Da quando sei entrata nella mia vita, ogni giorno è una poesia scritta con il battito del mio cuore."
                </motion.p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 100 }}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-rose-400 flex items-center justify-center"
                >
                    <img src={img1} alt="Noi due" className="object-cover w-full h-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="max-w-xl text-center space-y-6"
                >
                    <p>Ogni tuo sorriso illumina il mio mondo come un’alba d’estate.</p>
                    <p>
                        Ti amo non solo per ciò che sei, ma per ciò che divento quando sono con te. Sei la mia casa, il mio sogno e la mia
                        verità.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="flex items-center space-x-3"
                >
                    <span className="text-2xl font-medium">Per sempre, Alex ❤️</span>
                </motion.div>
            </div>

            {/* I Nostri Momenti */}
            <div className="relative z-10 bg-white/30 backdrop-blur-md py-20 mt-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-4xl font-semibold mb-8"
                >
                    I Nostri Momenti 💞
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-20">
                    {[img1, img2, img3, img4].map((img, idx) => (
                        <div key={idx} className="w-full h-64 md:h-72 lg:h-80 relative rounded-2xl shadow-lg overflow-hidden group">
                            <img
                                src={img}
                                alt={`Ricordo ${idx + 1}`}
                                className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-bold">Momento {idx + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lettera d'amore */}
            <div className="relative z-10 bg-gradient-to-r from-rose-200 via-pink-100 to-rose-200 py-20 px-6 md:px-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-4xl font-semibold mb-8 text-rose-800"
                >
                    Una Lettera per Te 💌
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 text-left text-lg leading-relaxed text-rose-900 whitespace-pre-line"
                >
                    {`Amore mio,

So che ultimamente le cose non sono semplici: ti vedo stanca, con mille pensieri che si accavallano, e vorrei solo poterti stringere forte e farli sparire, anche solo per un po’. Non posso sistemare tutto, ma posso prometterti una cosa: io ci sono. Sempre.

Anche quando litighiamo, anche quando ci perdiamo un attimo di vista, anche quando sembra che il mondo ti crolli addosso io resto qui. Voglio che tu sappia che accanto a me hai un posto sicuro dove puoi essere te stessa senza dover fingere di essere forte. Puoi arrabbiarti, piangere, ridere, crollare… e io sarò lì, accanto a te, ad amarti in ogni tua forma.

Non dimenticare mai chi sei. Sei una persona magnifica, con un cuore che sa amare anche quando fa male, con una forza che nemmeno tu riconosci sempre. Sei la mia principessa, ma non nel senso fragile del termine: sei una principessa che ha imparato a rialzarsi, che brilla anche quando tutto intorno è buio.

Ogni tuo sorriso vale più di qualunque vittoria. Ogni volta che mi guardi, sento di essere nel posto giusto. E non importa quante volte il mondo proverà a spegnerti: io sarò lì, a ricordarti quanta luce c’è dentro di te.

Ti amo per la donna che sei, per la dolcezza che porti, per la tempesta che affronti e per la calma che sai donare. Ti amo perché rendi speciale anche l’ordinario.

E se mai dovessi dimenticarlo, rileggi queste parole: sei amata, sei unica, e sei la mia casa.

Con tutto l’amore che ho,
Il tuo AleAle ❤️`}
                </motion.div>
            </div>

            <footer className="relative z-10 text-center py-10 text-rose-700 italic">
                <p>"Ti amerò finché le stelle smetteranno di brillare."</p>
                <p className="mt-2">– Il tuo Alex 💫</p>
            </footer>
        </div>
    );
}
