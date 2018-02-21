const line =  require('line-api');
const notify = new line.Notify({
    token: 'mytoken'
});

notify.status().then(console.log);

module.exports.noti = function(message){
    notify.send({ message : message});
}