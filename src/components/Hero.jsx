import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroGif from '../assets/images/hero/hero_gif.gif';

const heroTexts = [
  'Remote Medical & Dental Talent',
  'Optimized RCM Solutions',
  'Comprehensive Audit Services',
];

// Simple MorphingText Component
const MorphingText = ({ text, loop = true, holdDelay = 3000, onTextChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % text.length;
        setCurrentIndex(nextIndex);
        if (onTextChange) onTextChange(nextIndex);
        setIsAnimating(false);
      }, 300);
    }, holdDelay);

    return () => clearInterval(interval);
  }, [currentIndex, text.length, holdDelay, onTextChange]);

  return (
    <span style={{
      display: 'inline-block',
      transition: 'opacity 0.3s ease',
      opacity: isAnimating ? 0 : 1,
    }}>
      {text[currentIndex]}
    </span>
  );
};

const Squares = ({
  direction = 'diagonal',
  speed = 0.5,
  borderColor = 'rgba(255, 255, 255, 0.1)',
  squareSize = 40,
  hoverFillColor = 'rgba(255, 255, 255, 0.05)',
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef();
  const numSquaresY = useRef();
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (hoveredSquare.current) {
            const elapsedTime = Date.now() - hoveredSquare.current.timestamp;
            const fadeOutDuration = 1000; // 1 second fade
            const opacity = Math.max(0, 1 - (elapsedTime / fadeOutDuration));
            
            if (
              Math.floor((x - startX) / squareSize) === hoveredSquare.current.x &&
              Math.floor((y - startY) / squareSize) === hoveredSquare.current.y
            ) {
              // Create hover effect with glow
              const [r, g, b] = [255, 255, 255]; // White glow
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`;
              ctx.fillRect(squareX - 1, squareY - 1, squareSize + 2, squareSize + 2);
              
              // Inner fill
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
              ctx.fillRect(squareX, squareY, squareSize, squareSize);
            }
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = event => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Calculate relative grid position
      const relativeX = mouseX + (gridOffset.current.x % squareSize);
      const relativeY = mouseY + (gridOffset.current.y % squareSize);

      // Calculate square coordinates
      const hoveredSquareX = Math.floor(relativeX / squareSize);
      const hoveredSquareY = Math.floor(relativeY / squareSize);

      if (
        !hoveredSquare.current ||
        hoveredSquare.current.x !== hoveredSquareX ||
        hoveredSquare.current.y !== hoveredSquareY
      ) {
        hoveredSquare.current = { 
          x: hoveredSquareX, 
          y: hoveredSquareY,
          timestamp: Date.now() // Add timestamp for fade effect
        };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquare.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'all',
        cursor: 'default',
      }}
    />
  );
};

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating] = useState(false);
  const [headerPad, setHeaderPad] = useState('9px');
  // const isRemoteStaffing = activeIndex === heroTexts.length - 1;

  return (
    <section
      className="hero_section"
      style={{ position: 'relative', overflow: 'hidden', paddingTop: headerPad }}
    >
      {/* Animated Squares Background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        pointerEvents: 'auto', // Changed to allow mouse interactions
        zIndex: 0, // Ensure it stays behind content
      }}>
        <Squares 
          direction="diagonal"
          speed={0.5} // Reduced speed for smoother animation
          borderColor="rgba(255, 255, 255, 0.12)" // Increased visibility
          squareSize={40} // Smaller squares for better detail
          hoverFillColor="rgba(255, 255, 255, 0.1)" // More visible hover effect
        />
      </div>
      
      {/* Original Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero_content">
              <div className="hero_badge">
                <i className="fas fa-dollar-sign"></i>
                <span>Starting at $10/hour</span>
              </div>
              
              <h1 className="hero_title">
                <MorphingText
                  text={heroTexts}
                  loop={true}
                  holdDelay={3000}
                  onTextChange={(index) => setActiveIndex(index)}
                />
                <br />
                <strong>On Your Schedule</strong>
              </h1>
              
              <p className="hero_description">
                Eligibility, recalls, prior auths, claim follow-ups, and scribing—done inside your EHR by remote talent.
              </p>
              
              <div className="hero_buttons">
                <Link to="/contact" className="btn btn-primary">
                  <span className="btn_label" data-text="Hire Talent">Hire Talent</span>
                  <i className="btn_icon fas fa-arrow-right"></i>
                </Link>
                <Link to="/services" className="btn btn-outline-light">
                  <span className="btn_label" style={{color:'white'}} data-text="Our Services">Our Services</span>
                </Link>
              </div>
              
              <div className="hero_trust_indicator">
                <div className="trust_badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>HIPAA Compliant</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="col-lg-6">
            <div className="hero_cards_wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '450px' }}>
              {!isAnimating && (
                <img
                  key={activeIndex}
                  src={heroGif}
                  alt="hero visual"
                  style={{
                    width: '100%',
                    maxWidth: '800px',
                    height: 'auto',
                    borderRadius: '20px',
                    objectFit: 'cover',
                  }}
                />
              )}
              <div className="floating_shapes">
                <div className="shape shape_1"></div>
                <div className="shape shape_2"></div>
                <div className="shape shape_3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;