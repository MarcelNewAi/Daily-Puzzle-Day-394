import { Star, Circle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

function App() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      generatedParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
        color: Math.random() > 0.5 ? '#ffffff' : '#6ecbff',
      });
    }
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-black">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s, twinkle ${particle.duration * 0.7}s ease-in-out infinite ${particle.delay}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4">
        {/* Top Section - Star with Side Circles */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {/* Left Circle */}
          <div className="animate-pulse">
            <Circle
              size={40}
              className="text-white"
              strokeWidth={2}
              style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
            />
          </div>

          {/* Center Star */}
          <div className="animate-pulse">
            <Star
              size={80}
              className="text-[#6ecbff] fill-[#6ecbff]"
              strokeWidth={2}
              style={{ animation: 'pulse-glow 2s ease-in-out infinite 0.3s' }}
            />
          </div>

          {/* Right Circle */}
          <div className="animate-pulse">
            <Circle
              size={40}
              className="text-white"
              strokeWidth={2}
              style={{ animation: 'pulse-glow 2s ease-in-out infinite 0.6s' }}
            />
          </div>
        </div>

        {/* Headline with Glow */}
        <div className="relative">
          {/* Glow Effect Background */}
          <div
            className="absolute inset-0 blur-3xl opacity-50"
            style={{
              background: 'radial-gradient(circle, rgba(110, 203, 255, 0.6) 0%, transparent 70%)',
              transform: 'scale(1.5)',
            }}
          />

          {/* Main Headline */}
          <h1
            className="relative text-5xl md:text-7xl lg:text-8xl font-black text-white text-center tracking-wider"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow: '0 0 30px rgba(110, 203, 255, 0.5)',
              animation: 'fade-in 1s ease-out',
            }}
          >
            AAA PUZZLE DONE
          </h1>
        </div>

        {/* Bottom Stars Row */}
        <div className="flex items-center gap-4 mt-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={32}
              className="text-white fill-white"
              strokeWidth={2}
              style={{
                filter: 'drop-shadow(0 0 12px rgba(110, 203, 255, 0.7))',
                animation: `pulse-glow 2s ease-in-out infinite ${index * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
