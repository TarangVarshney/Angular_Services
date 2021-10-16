export class LoggingService{
    logStstusChange(status: String){
        console.log('A server status changed, new status: ' + status);
    }
}