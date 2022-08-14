import { MemoryStorageService } from './memory-storage.service';

describe('MemoryStorageService', () => {
  let service: MemoryStorageService;
  const key = 'ver1';
  const value = 'New Value';

  beforeEach(() => {
    service = new MemoryStorageService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return value', () => {
    service.setItem(key, value);
    expect(service.getItem(key)).toBe(value);
  });

  it('should return correct length', () => {
    expect(service.length).toBe(0);
    service.setItem(key, value);
    expect(service.length).toBe(1);
  });

  it('should return remove item', () => {
    service.setItem(key, value);
    expect(service.getItem(key)).toBe(value);
    service.removeItem(key);
    expect(service.getItem(key)).toBeNull();
  });

  it('should clear storage', () => {
    service.setItem(key, value);
    service.clear();
    expect(service.length).toBe(0);
  });
});
