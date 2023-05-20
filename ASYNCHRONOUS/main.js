// --------------------------------TASK1------------------------------
function getPromise(massage, delay) {
  return new Promise(massage, delay);
}
getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});


// --------------------------------TASK2------------------------------
