// Chrome DevTools Performance Tracker
export class PerformanceMonitor {
  constructor() {
    this.marks = new Map();
    this.measures = [];
  }

  // Mark critical timing points
  mark(name) {
    performance.mark(name);
    this.marks.set(name, performance.now());
  }

  // Measure between marks
  measure(name, startMark, endMark) {
    performance.measure(name, startMark, endMark);
    const measure = performance.getEntriesByName(name)[0];
    this.measures.push(measure);
    
    // Warn if exceeding thresholds
    if (name === 'initial-load' && measure.duration > 500) {
      console.warn(`⚠️ PERFORMANCE WARNING: Initial load exceeded 500ms (${measure.duration.toFixed(2)}ms)`);
    }
    
    return measure.duration;
  }

  // Check for layout thrashing
  detectLayoutThrashing() {
    const entries = performance.getEntriesByType('layout-shift');
    const cls = entries.reduce((sum, entry) => sum + entry.value, 0);
    
    if (cls > 0.1) {
      console.error(`❌ LAYOUT SHIFT DETECTED: CLS = ${cls.toFixed(4)}`);
    }
    
    return cls;
  }

  // Time to Interactive check
  checkTTI() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            const tti = entry.startTime;
            console.log(`✅ Time to Interactive: ${tti.toFixed(2)}ms`);
            
            if (tti > 500) {
              console.error('❌ TTI EXCEEDS 500ms THRESHOLD');
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });
    }
  }

  // Report all metrics
  report() {
    console.group('📊 PERFORMANCE REPORT');
    console.table(this.measures);
    console.log('Layout Thrashing:', this.detectLayoutThrashing());
    console.groupEnd();
  }
}

// Global instance
export const perfMonitor = new PerformanceMonitor();