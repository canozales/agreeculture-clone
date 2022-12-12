

// const SNS = require('../components/aws-sns/sns');
// const wrapper = require('../utils/wrapper');
// const Emitter = require('./event_emitter');

// class EventPublisher{
//   constructor(eventType,data,version,aggregateId,aggregateType,description,priority=1,status=1,topicARN=null){
//     this.eventType = eventType;
//     this.data = data;
//     this.version = version;
//     this.aggregateId = aggregateId;
//     this.aggregateType = aggregateType;
//     this.description = description;
//     this.priority = priority;
//     this.status = status;
//     this.topicARN = topicARN;
//   }

//   getEventPayload(){
//     const payload =  {
//       'timestamp':new Date().toISOString(),
//       'eventType':this.eventType,
//       'payload':this.data,
//       'version':this.version,
//       'aggregateId':this.data._id,
//       'aggregateType':this.aggregateType,
//       'priority':this.priority,
//       'description':this.description,
//       'status':this.status
//     };
//     return payload;
//   }

//   async publishEvent(topicARN=this.topicARN,payload=this.getEventPayload()) {
//     const sns = new SNS(topicARN);
//     sns.init();
//     const result = await sns.publishTopic(payload,topicARN).then(data =>{
//       return wrapper.data(payload);
//     }).catch(err =>{
//       return wrapper.error(err,err.message,503);
//     });
//     return result;
//   }
// }

// module.exports = EventPublisher;
