import React from "react";

// Animated Breast Cancer Awareness Ribbon
export const AnimatedBreastCancerRibbon = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className="animate-pulse"
    >
      {/* Ribbon shape */}
      <path
        d="M30 5 L40 15 L40 35 L30 45 L20 35 L20 15 Z"
        fill="#e91e63"
        className="animate-ping"
        style={{ animationDuration: "2s" }}
      />
      {/* Inner ribbon detail */}
      <path
        d="M30 10 L35 15 L35 30 L30 35 L25 30 L25 15 Z"
        fill="#f06292"
      />
      {/* Awareness symbol */}
      <circle cx="30" cy="25" r="3" fill="white" className="animate-bounce" />
    </svg>
  </div>
);

// Animated Stethoscope Icon
export const AnimatedStethoscope = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className="animate-pulse"
    >
      {/* Stethoscope chest piece */}
      <circle cx="30" cy="30" r="12" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
      {/* Inner circle */}
      <circle cx="30" cy="30" r="6" fill="#60a5fa" />
      {/* Earpieces */}
      <path
        d="M18 30 Q15 25 18 20"
        stroke="#1e40af"
        strokeWidth="3"
        fill="none"
        className="animate-ping"
        style={{ animationDuration: "1.5s" }}
      />
      <path
        d="M42 30 Q45 25 42 20"
        stroke="#1e40af"
        strokeWidth="3"
        fill="none"
        className="animate-ping"
        style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
      />
      {/* Tubing */}
      <path
        d="M18 20 Q25 15 30 20 Q35 15 42 20"
        stroke="#1e40af"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>
);

// Floating Breast Cancer Awareness Ribbon
export const FloatingBreastCancerRibbon = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <div className="relative">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-bounce opacity-60">
        <path
          d="M10 2 L13 5 L13 12 L10 15 L7 12 L7 5 Z"
          fill="#e91e63"
        />
        <circle cx="10" cy="8" r="1" fill="white" />
      </svg>
    </div>
  </div>
);

// Floating Stethoscope
export const FloatingStethoscope = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <div className="relative">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-bounce opacity-60">
        <circle cx="10" cy="10" r="4" fill="#3b82f6" />
        <circle cx="10" cy="10" r="2" fill="#60a5fa" />
        <path d="M6 10 Q4 8 6 6" stroke="#1e40af" strokeWidth="1" fill="none" />
        <path d="M14 10 Q16 8 14 6" stroke="#1e40af" strokeWidth="1" fill="none" />
      </svg>
    </div>
  </div>
);

// DNA Helix Animation
export const DNAHelix = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 5 Q15 10 20 15 Q25 20 20 25 Q15 30 20 35"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        className="animate-spin"
        style={{ animationDuration: "3s" }}
      />
      <path
        d="M20 5 Q25 10 20 15 Q15 20 20 25 Q25 30 20 35"
        stroke="#60a5fa"
        strokeWidth="2"
        fill="none"
        className="animate-spin"
        style={{ animationDuration: "3s", animationDirection: "reverse" }}
      />
    </svg>
  </div>
);

// Breast Cancer Awareness Heart
export const BreastCancerHeart = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className="animate-pulse"
    >
      <path
        d="M15 25 C15 25, 5 15, 5 10 C5 7, 7 5, 10 5 C12 5, 15 8, 15 8 C15 8, 18 5, 20 5 C23 5, 25 7, 25 10 C25 15, 15 25, 15 25 Z"
        fill="#e91e63"
        className="animate-ping"
        style={{ animationDuration: "2s" }}
      />
      {/* Breast cancer ribbon on heart */}
      <path
        d="M15 12 L17 14 L17 18 L15 20 L13 18 L13 14 Z"
        fill="white"
        className="animate-bounce"
      />
    </svg>
  </div>
);

// Rotating Lab Flask
export const LabFlask = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      className="animate-spin"
      style={{ animationDuration: "4s" }}
    >
      <path
        d="M17.5 5 L17.5 15 L25 25 L25 30 L10 30 L10 25 L17.5 15 Z"
        fill="#3b82f6"
        opacity="0.8"
      />
      <circle cx="17.5" cy="8" r="2" fill="#60a5fa" />
    </svg>
  </div>
);

// Animated Loading Dots
export const LoadingDots = ({ className = "" }) => (
  <div className={`flex space-x-1 ${className}`}>
    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
  </div>
);

// Floating Particles Background
export const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

// Add custom keyframes for floating animation
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;
document.head.appendChild(style);
