import bcrypt from 'bcrypt';
import * as hashHelper from '@/utils/hash';

describe('hash utils 테스트', () => {
  describe('generateHash() 함수 테스트', () => {
    const mockPW = 'testPassword';

    it('bcrypt를 사용해 암호화된 문자열이 반환되어야 합니다.', () => {
      const hashedPw = hashHelper.generateHash(mockPW);
      expect(hashedPw).toBeDefined();
    });

    it('암호화된 문자열과 암호화되지 않은 문자열을 bcrypt.compareSync로 비교했을 때 참이어야 합니다.', () => {
      const hashedPw = hashHelper.generateHash(mockPW);
      const isValid = bcrypt.compareSync(mockPW, hashedPw);
      expect(isValid).toBeTruthy();
    });

    it('암호화된 문자열과 원본과 다른 문자열을 bcrypt.compareSync로 비교했을 때 거짓이어야 합니다.', () => {
      const hashedPw = hashHelper.generateHash(mockPW);
      const isValid = bcrypt.compareSync(`DIFF_${mockPW}`, hashedPw);
      expect(isValid).toBeFalsy();
    });

    it('같은 문자열을 암호화해도 다른 결과물이 나와야 합니다.', () => {
      const hashedPw1 = hashHelper.generateHash(mockPW);
      const hashedPw2 = hashHelper.generateHash(mockPW);
      expect(hashedPw1).not.toBe(hashedPw2);
    });
  });

  describe('comparePassword() 함수 테스트', () => {
    const mockPW = 'testPassword';

    it('bcrypt를 사용해 암호화된 문자열과 원본 문자열을 비교했을 때 참을 반환해야 합니다.', () => {
      const salt = bcrypt.genSaltSync(10);
      const hashedPw = bcrypt.hashSync(mockPW, salt);
      const isValid = hashHelper.comparePassword(hashedPw, mockPW);
      expect(isValid).toBeTruthy();
    });

    it('bcrypt를 사용해 암호화된 문자열과 원본과 다른 문자열을 비교했을 때 거짓을 반환해야 합니다.', () => {
      const salt = bcrypt.genSaltSync(10);
      const hashedPw = bcrypt.hashSync(mockPW, salt);
      const isValid = hashHelper.comparePassword(hashedPw, `DIFF_${mockPW}`);
      expect(isValid).toBeFalsy();
    });

    it('bcrypt를 사용해 암호화된 문자열과 빈 문자열을 비교했을 때 거짓을 반환해야 합니다.', () => {
      const salt = bcrypt.genSaltSync(10);
      const hashedPw = bcrypt.hashSync(mockPW, salt);
      const isValid = hashHelper.comparePassword(hashedPw, '');
      expect(isValid).toBeFalsy();
    });
  });
});
