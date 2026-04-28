/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import SnakeGame from './components/SnakeGame';
import MusicPlayer from './components/MusicPlayer';
import { Trophy, Gamepad2, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleScoreUpdate = (newScore: number) => {
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-pink selection:text-white font-sans overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-pink/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[40%] bg-neon-purple/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative h-screen flex flex-col items-center justify-between p-6 lg:p-12 z-10">
        {/* Header */}
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-neon-blue rounded-lg flex items-center justify-center neon-glow-blue rotate-3">
              <Gamepad2 className="text-black" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter leading-none italic uppercase">Neon Rhythm</h1>
              <span className="text-[10px] text-white/40 tracking-[0.3em] font-mono uppercase">System 1.0.4</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-12 text-sm font-mono tracking-widest text-white/50">
            <div className="flex flex-col items-end">
              <span className="text-[10px] mb-1">SCORE</span>
              <span className="text-neon-blue neon-text-blue font-bold text-lg">{score.toString().padStart(4, '0')}</span>
            </div>
            <div className="flex flex-col items-end border-l border-white/10 pl-6">
              <span className="text-[10px] mb-1">BEST</span>
              <span className="text-neon-pink neon-text-pink font-bold text-lg">{highScore.toString().padStart(4, '0')}</span>
            </div>
          </div>
        </motion.header>

        {/* Main Section */}
        <main className="flex-1 w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Game Window */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 max-w-lg w-full"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/60 text-xs font-mono">
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                LIVE_FEED_STREAM
              </div>
              <p className="text-[10px] text-white/30 font-mono uppercase italic">Use Arrows to Move | Space to Pause</p>
            </div>
            <SnakeGame onScoreUpdate={handleScoreUpdate} />
          </motion.div>

          {/* Music Controller Overlay / Side */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:w-[400px] w-full"
          >
            <MusicPlayer />
          </motion.div>
        </main>

        {/* Footer info for mobile score */}
        <div className="sm:hidden w-full flex justify-around p-4 border-t border-white/5 backdrop-blur-md bg-black/40">
           <div className="text-center">
              <p className="text-[10px] text-white/40 mb-1 tracking-tighter">SCORE</p>
              <p className="text-neon-blue font-bold">{score}</p>
           </div>
           <div className="text-center">
              <p className="text-[10px] text-white/40 mb-1 tracking-tighter">BEST</p>
              <p className="text-neon-pink font-bold">{highScore}</p>
           </div>
        </div>

        {/* Technical Label */}
        <motion.footer 
          initial={{ y: 20, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="hidden sm:block text-[10px] font-mono text-white/20 tracking-widest uppercase mt-4"
        >
          &copy; 2026 DEEPMIND_ANTIGRAVITY_SYSTEMS. ALL_RIGHTS_RESERVED.
        </motion.footer>
      </div>
    </div>
  );
}

