import {
  EntryExitAnimationBuilderI,
  EntryExitAnimationFunction,
} from '../animationBuilder/commonTypes';
import { BaseAnimationBuilder } from '../animationBuilder/BaseAnimationBuilder';

export class FlipInXUp
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipInXUp {
    return new FlipInXUp();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return (targetValues) => {
      'worklet';
      return {
        initialValues: {
          transform: [
            { perspective: 500 },
            { rotateX: '90deg' },
            { translateY: -targetValues.height },
          ],
        },
        animations: {
          transform: [
            { perspective: 500 },
            { rotateX: delayFunction(delay, animation('0deg', config)) },
            { translateY: delayFunction(delay, animation(0, config)) },
          ],
        },
      };
    };
  };
}

export class FlipInYLeft
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipInYLeft {
    return new FlipInYLeft();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return (targetValues) => {
      'worklet';
      return {
        initialValues: {
          transform: [
            { perspective: 500 },
            { rotateY: '-90deg' },
            { translateX: -targetValues.width },
          ],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateY: delayFunction(delay, animation('0deg', config)) },
            { translateX: delayFunction(delay, animation(0, config)) },
          ],
        },
      };
    };
  };
}

export class FlipInXDown
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipInXDown {
    return new FlipInXDown();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return (targetValues) => {
      'worklet';
      return {
        initialValues: {
          transform: [
            { perspective: 500 },
            { rotateX: '-90deg' },
            { translateY: targetValues.height },
          ],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateX: delayFunction(delay, animation('0deg', config)) },
            { translateY: delayFunction(delay, animation(0, config)) },
          ],
        },
      };
    };
  };
}

export class FlipInYRight
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipInYRight {
    return new FlipInYRight();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return (targetValues) => {
      'worklet';
      return {
        initialValues: {
          transform: [
            { perspective: 500 },
            { rotateY: '90deg' },
            { translateX: targetValues.width },
          ],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateY: delayFunction(delay, animation('0deg', config)) },
            { translateX: delayFunction(delay, animation(0, config)) },
          ],
        },
      };
    };
  };
}

export class FlipInEasyX
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipInEasyX {
    return new FlipInEasyX();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return () => {
      'worklet';
      return {
        initialValues: {
          transform: [{ perspective: 500 }, { rotateX: '90deg' }],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateX: delayFunction(delay, animation('0deg', config)) },
          ],
        },
      };
    };
  };
}

export class FlipInEasyY
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipInEasyY {
    return new FlipInEasyY();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return () => {
      'worklet';
      return {
        initialValues: {
          transform: [{ perspective: 500 }, { rotateY: '90deg' }],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateY: delayFunction(delay, animation('0deg', config)) },
          ],
        },
      };
    };
  };
}

export class FlipOutXUp
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipOutXUp {
    return new FlipOutXUp();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return (targetValues) => {
      'worklet';
      return {
        initialValues: {
          transform: [
            { perspective: 500 },
            { rotateX: '0deg' },
            { translateY: 0 },
          ],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateX: delayFunction(delay, animation('90deg', config)) },
            {
              translateY: delayFunction(
                delay,
                animation(-targetValues.height, config)
              ),
            },
          ],
        },
      };
    };
  };
}

export class FlipOutYLeft
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipOutYLeft {
    return new FlipOutYLeft();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return (targetValues) => {
      'worklet';
      return {
        initialValues: {
          transform: [
            { perspective: 500 },
            { rotateY: '0deg' },
            { translateX: 0 },
          ],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateY: delayFunction(delay, animation('-90deg', config)) },
            {
              translateX: delayFunction(
                delay,
                animation(-targetValues.width, config)
              ),
            },
          ],
        },
      };
    };
  };
}

export class FlipOutXDown
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipOutXDown {
    return new FlipOutXDown();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return (targetValues) => {
      'worklet';
      return {
        initialValues: {
          transform: [
            { perspective: 500 },
            { rotateX: '0deg' },
            { translateY: 0 },
          ],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateX: delayFunction(delay, animation('-90deg', config)) },
            {
              translateY: delayFunction(
                delay,
                animation(targetValues.height, config)
              ),
            },
          ],
        },
      };
    };
  };
}

export class FlipOutYRight
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipOutYRight {
    return new FlipOutYRight();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return (targetValues) => {
      'worklet';
      return {
        initialValues: {
          transform: [
            { perspective: 500 },
            { rotateY: '0deg' },
            { translateX: 0 },
          ],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateY: delayFunction(delay, animation('90deg', config)) },
            {
              translateX: delayFunction(
                delay,
                animation(targetValues.width, config)
              ),
            },
          ],
        },
      };
    };
  };
}

export class FlipOutEasyX
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipOutEasyX {
    return new FlipOutEasyX();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return () => {
      'worklet';
      return {
        initialValues: {
          transform: [{ perspective: 500 }, { rotateX: '0deg' }],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateX: delayFunction(delay, animation('90deg', config)) },
          ],
        },
      };
    };
  };
}

export class FlipOutEasyY
  extends BaseAnimationBuilder
  implements EntryExitAnimationBuilderI {
  static createInstance(): FlipOutEasyY {
    return new FlipOutEasyY();
  }

  build: () => EntryExitAnimationFunction = () => {
    const delayFunction = this.getDelayFunction();
    const [animation, config] = this.getAnimationAndConfig();
    const delay = this.delayV;

    return () => {
      'worklet';
      return {
        initialValues: {
          transform: [{ perspective: 500 }, { rotateY: '0deg' }],
        },
        animations: {
          transform: [
            { perspective: delayFunction(delay, animation(500, config)) },
            { rotateY: delayFunction(delay, animation('90deg', config)) },
          ],
        },
      };
    };
  };
}
