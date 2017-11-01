/** @module config/game-conventions */

/** Типы уровней.
 * @enum {number}
 */
const LevelType = {
  /** Требуется указать тип одного изображения. */
  TYPE_OF_ONE_IMAGE: 1,
  /** Требуется указать тип каждого из двух изображений. */
  TYPE_OF_TWO_IMAGES: 2,
  /** Требуется указать одно фото среди 3 изображений. */
  PHOTO_AMONG_THREE_IMAGES: 3,
  /** Требуется указать один рисунок среди 3 изображений. */
  PAINTING_AMONG_THREE_IMAGES: 4,
};

/** Типы изображений.
 * @enum {string}
 */
const ImageType = {
  /** Фото */
  PHOTO: `PHOTO`,
  PAINTING: `PAINTING`,
};

/** Коды изображений.
 * @enum {number}
 */
const ImageCode = {
  PHOTO: 0,
  PAINTING: 1,
};

/** Количество очков при завершении игры.
 * @enum {number}
 */
const ScoreLimits = {
  /** Количество очков в случае проигрыша. */
  FAILED: -1,
  /** Минимальное количество очков. */
  MINIMUM: 0,
};

/** Типы результатов игры.
 * @enum {string}
 */
const ResultType = {
  /** Правильный результат. */
  RIGHT: `RIGHT`,
  /** Неверный результат. */
  WRONG: `WRONG`,
};

const ResultCode = {
  WRONG: 0,
  CORRECT: 1,
  FAST: 2,
  SLOW: 3,
};

/** Скорость ответа.
 * @enum {string}
 */
const SpeedType = {
  /** Cкорость неизвестна. */
  UNKNOWN: `UNKNOWN`,
  /** Нормальная скорость. */
  NORMAL: `NORMAL`,
  /** Быстрый ответ. */
  FAST: `FAST`,
  /** Медленный ответ. */
  SLOW: `SLOW`,
};

const SpeedCode = {
  /** Нормальная скорость. */
  NORMAL: 1,
  /** Быстрый ответ. */
  FAST: 2,
  /** Медленный ответ. */
  SLOW: 3,
};

const ScreenId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`,
};

export default {
  ScoreLimits,
  ResultType,
  ResultCode,
  SpeedType,
  SpeedCode,
  ImageType,
  LevelType,
  ImageCode,
  ScreenId,
};
