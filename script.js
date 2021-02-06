duDatepicker('#calendar',{
      range:true,
      minDate:'today',
      theme:'dark',
      events: {
      dateChanged:function (data) {
      console.log('From: ' + data.dateFrom +'\nTo: ' + data.dateTo)
      },
      onRangeFormat:function (from, to) {
                  // do something
      },
             ready:null,
             shown:null,
             hidden:null
      }
        
      // options here
});
console.log ("This is messege form bardanis!")
