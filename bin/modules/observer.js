

// const Emitter = require('../helpers/events/event_emitter');
// const EventLogger = require('../helpers/events/event_logger');
// const myEmitter = Emitter.myEmitter;
// const sentryLog = require('../helpers/components/sentry/sentry_log');
// // const mockupEventHandler = require('./mockup/handlers/event_handler');

// const init = () => {
//   console.log('Observer is Running...');
//   initEventListener();
// };
// const initEventListener = () => {
//   myEmitter.on('mockupCreated', (payload) => {
//     setImmediate(() => {
//       //console.log(JSON.stringify(payload));
//       mockupEventHandler.mockupCreatedHandler(payload);
//       //console.log(`Listener Mockup Created`);
//     });
//   });
//   myEmitter.on('eventHandled', (receipt,sqs) => {
//     setImmediate(() => {
//       sqs.removeQueue(receipt);
//     });
//   });
//   myEmitter.on('eventLogger', (eventType,payload,aggregateType,description,priority=1,status=1) => {
//     const data = {
//       'eventType': eventType,
//       'payload': payload,
//       'aggregateType': aggregateType,
//       'description': description,
//       'priority': priority,
//       'status': status
//     };
//     setImmediate(async () => {
//       const logger = new EventLogger(data);
//       const result = await logger.createLog();
//       (result.err) ? Emitter.emitEvent('error', 'failed to create log') : console.log('Log Has Been Created');
//     });
//   });
//   myEmitter.on('error', (err) => {
//     console.error(`Error : ${err}`);
//   });
//   myEmitter.on('sendErrorToSentry', (errMessage) => {
//     console.log(errMessage);
//     //sentryLog.sendError(errMessage);
//   });
//   myEmitter.on('existed', (data) => {
//     console.error(`Data has been existed : ${data}`);
//   });
//   process.on('uncaughtException', (err) => {
//     console.log('whoops! There was an uncaught error', err);
//     process.exit(1);
//   });
//   myEmitter.on('queueBroker', (message,receipt,sqs) => {
//     let flag = false;
//     setImmediate(() => {
//       const msg = JSON.parse(message);
//       eventList.map((value) => {
//         if(msg.eventType===value){
//           flag = true;
//         }
//       });
//       (!flag) ? Emitter.emitEvent('eventHandled',receipt,sqs) : Emitter.emitEvent(msg.eventType, msg, receipt, sqs);
//     });
//   });
//   const eventList = myEmitter.eventNames();
// };

// module.exports = {
//   init: init
// };
