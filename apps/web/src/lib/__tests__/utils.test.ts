import { sleep, capitalize } from '../utils';

describe('Utils', () => {
  describe('sleep', () => {
    it('should resolve after the specified time', async () => {
      const start = Date.now();
      await sleep(100);
      const end = Date.now();
      
      // Allow for some timing variance (at least 90ms)
      expect(end - start).toBeGreaterThanOrEqual(90);
    });
  });

  describe('capitalize', () => {
    it('should capitalize the first letter of a word', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle already capitalized words', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    it('should handle single letter words', () => {
      expect(capitalize('a')).toBe('A');
    });
  });
});