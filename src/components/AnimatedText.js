import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const AnimatedContainer = styled.div`
  font-weight: bold;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
`;

const Line = styled.div`
  display: block;
  margin-bottom: 1vw;
  white-space: pre-wrap; /* Preserves line breaks */
`;

const Letter = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(2vw);
`;

export default function AnimatedText({ lines }) {
  const textRef = useRef(null);

  const runAnimation = () => {
    if (!textRef.current) return;

    const lines = textRef.current.querySelectorAll(".line");

    lines.forEach((line, index) => {
      const letters = line.querySelectorAll(".letter");

      anime.timeline({ loop: false })
        .add({
          targets: letters,
          translateY: [100, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: (el, i) => 20 * i, // Delays each letter animation by 20ms
        });
    });
  };

  useEffect(() => {
    const textElement = textRef.current; // Store ref in a variable
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(runAnimation, 200); // 200ms delay to ensure elements are rendered
        }
      },
      { threshold: 0.1 } // Adjust visibility threshold
    );
  
    if (textElement) {
      observer.observe(textElement);
    }
  
    return () => {
      if (textElement) {
        observer.unobserve(textElement);
      }
    };
  }, []);
  

  return (
    <AnimatedContainer>
      <div ref={textRef}>
        {lines.map((line, index) => (
          <Line className="line" key={index}>
            {line.split("").map((letter, idx) => (
              <Letter className="letter" key={`${index}-${idx}`}>
                {letter === " " ? "\u00A0" : letter}
              </Letter>
            ))}
          </Line>
        ))}
      </div>
    </AnimatedContainer>
  );
}
