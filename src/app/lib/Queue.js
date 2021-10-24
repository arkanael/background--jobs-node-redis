import Queue from "bull";
import redisConfig from  "../../config/redis";

import RegistrationMail from "./../jobs/RegistrationMail";

const mailQueue = new Queue(RegistrationMail.key, redisConfig);

mailQueue.on('failed', (job, err) => { 
      console.log("job failed", job.data);
      console.log(err);
});


export default mailQueue;
