const CallbackPage = () => {
   function orderPizza(name, callback){
    console.log("Zahialgiig hvleen avlaa");
    setTimeout(function(){
        let msg=`Tani ${name} pizza belen bolloo !Tani pizza hvrgeltend garlaa SinglePostPage`;
        callback(msg);
    } ,3000);
   }
orderPizza("Mahtai durlagsad", printDelivery);
function printDelivery(message){
    console.log(message);
}
return <div>Callback page</div>
};
export default CallbackPage;