import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px; /* Size of the cursor */
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease, background-color 0.3s ease;
  will-change: transform;
  filter: blur(9px);
`;

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // Update cursor position
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Add hover effects
  useEffect(() => {
    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    document.querySelectorAll('.hover-target').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('.hover-target').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <CursorWrapper
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: hovering ? 'scale(1.5)' : 'translate(-50%, -50%)',
        backgroundColor: hovering ? 'white' : '',
      }}
    />
  );
};

export default CustomCursor;
