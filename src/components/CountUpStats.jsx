import React, { useRef, useEffect, useState } from 'react';
import './CountUpStats.css';

const stats = [
  {
    value: 1000,
    suffix: '$+',
    label: 'Our customers have hired over 1,000 remote talent with Hired Billing Support.'
  },
  {
    value: 40,
    suffix: 'M+',
    label: 'Hired Billing Support has saved clients $40M+ in staffing costs - and counting.'
  },
  {
    value: 300,
    suffix: '+',
    label: 'Over 300 businesses trust Hired Billing Support with their remote staffing needs.'
  }
];

function formatValue(val, prefix = '', suffix = '', statIdx = 0) {
  // For $50M, show as $50M+
  if (statIdx === 1) {
    return `${prefix}${val}${suffix}`;
  }
  // For others, use comma formatting
  return prefix + val.toLocaleString() + (suffix || '');
}

const CountUpStats = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!visible && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [visible]);

  useEffect(() => {
    if (visible) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 1200;
        const frameRate = 60;
        const totalFrames = Math.round((duration / 1000) * frameRate);
        let frame = 0;
        function animate() {
          frame++;
          const progress = Math.min(frame / totalFrames, 1);
          const current = Math.round(progress * end);
          setCounts(c => {
            const copy = [...c];
            copy[i] = current;
            return copy;
          });
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCounts(c => {
              const copy = [...c];
              copy[i] = end;
              return copy;
            });
          }
        }
        animate();
      });
    }
  }, [visible]);

  return (
    <section className="countup-stats-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title text-center">
          <h2>OUR NUMBER OF ACCOMPLISHMENTS</h2>
        </div>
        <div className="countup-stats-container">
          {stats.map((stat, i) => (
            <div className="countup-stat" key={i}>
              <span className="countup-value">
                {formatValue(counts[i] >= stat.value ? stat.value : counts[i], stat.prefix, stat.suffix, i)}
              </span>
              <div className="countup-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountUpStats;
