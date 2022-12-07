

const observer = require('../../../../bin/modules/observer');
const eventEmitter = require('../../../../bin/helpers/events/event_emitter');
const sinon = require('sinon');
const assert = require('assert');

describe('init observer', () => {

  it('Should create mockup view object', async () => {

    const eventSpy = sinon.spy();
    eventEmitter.emitEvent('eventHandled', eventSpy);
    observer.init();

  });

});

