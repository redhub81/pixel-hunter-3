/** @module game/models/game-state-model */

import GameAnswerModel from './game-answer-model';
import {raiseEvent} from '../../helpers/event-helper';


export default class GameStateModel {
  get player() {
    return this._player;
  }
  get livesCount() {
    return this._livesCount;
  }
  set livesCount(value) {
    this._livesCount = value;
  }
  get levelNumber() {
    return this._levelNumber;
  }
  set levelNumber(value) {
    this._levelNumber = value;
  }
  get time() {
    return this._time;
  }
  set time(value) {
    if (this._time !== value) {
      this._time = value;
      this._raiseOnChanged({target: `time`});
    }
  }
  get answers() {
    return this._answers;
  }
  set canNotify(value) {
    this._canNotify = value;
  }
  _raiseOnChanged(data) {
    if (this._needNotify) {
      raiseEvent(this.onChanged, data);
    }
  }
  update(state, needNotify = true) {
    this._player = {
      name: state.playerName
    };
    this._needNotify = needNotify;
    this._livesCount = state.livesCount;
    this._levelNumber = state.levelNumber;
    this._time = state.time;
    this._answers = [];
    if (state.answers) {
      state.answers
          .forEach(({isRight, time, answerCode}) => {
            const answer = GameAnswerModel.create(isRight, time, answerCode);
            this._answers.push(answer);
          });
    }
    this._needNotify = true;
  }
  addAnswer(isRight) {
    const time = this._time;
    const answer = GameAnswerModel.create({isRight, time});
    this.answers.push(answer);
  }
  onChanged() {
  }
}
