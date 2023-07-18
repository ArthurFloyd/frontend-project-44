import { generatesAnswerAndQuestionForEvenGame } from './game-logic.js';
import comparesCorrectAnswerAndPlayer from './general-logic.js';

export default () => {
  comparesCorrectAnswerAndPlayer(generatesAnswerAndQuestionForEvenGame);
};
