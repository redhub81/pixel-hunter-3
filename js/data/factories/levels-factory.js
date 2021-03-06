/** @module data/factories/levels-factory */

import gameConventions from '../../config/game-conventions';

const {LevelType} = gameConventions;


export const createImage = function (imageType, location, width = 0, height = 0) {
  return {
    imageType,
    imageSize: {
      width: 0,
      height: 0
    },
    location,
    width,
    height,
  };
};

export const createLevel = function (type = LevelType.UNDEFINED) {
  return {
    type,
    description: ``,
    images: [],
    answerCode: -1,
  };
};
