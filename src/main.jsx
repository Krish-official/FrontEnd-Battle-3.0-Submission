import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { perfMonitor } from './utils/performanceMonitor.js';

// Start performance tracking
perfMonitor.mark('app-start');

console.log('%c🚀 ARMORY AI PLATFORM - PERFORMANCE MODE', 'color: #FFC801; font-size: 16px; font-weight: bold;');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Measure initial load
window.addEventListener('load', () => {
  perfMonitor.mark('app-loaded');
  const loadTime = perfMonitor.measure('initial-load', 'app-start', 'app-loaded');
  
  console.group('📊 HACKATHON PERFORMANCE METRICS');
  console.log(`✅ Initial Load: ${loadTime.toFixed(2)}ms ${loadTime < 500 ? '(PASS)' : '(FAIL)'}`);
  
  perfMonitor.checkTTI();
  
  // Check paint metrics
  const paintEntries = performance.getEntriesByType('paint');
  paintEntries.forEach(entry => {
    console.log(`🎨 ${entry.name}: ${entry.startTime.toFixed(2)}ms`);
  });
  
  console.groupEnd();
  
  // Full report after animations
  setTimeout(() => {
    perfMonitor.report();
  }, 600);
});

// Listen for re-renders (should be ZERO on currency change)
let renderCount = 0;
const originalConsoleLog = console.log;
console.log = function(...args) {
  if (args[0]?.includes?.('render')) {
    renderCount++;
    console.warn(`⚠️ Render detected (#${renderCount})`);
  }
  originalConsoleLog.apply(console, args);
};