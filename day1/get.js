
    var customObject = {
        getSetGen: function () {
           for(var key in this ){
            if(typeof this [key] ==! "function"){
                var n = this[key];
                var self = this;
                (function(){
                    Object.defineProperty(self,key,{
                        get:function(){
                            return n;
                        },
                        set: function (){
                            n=value;
                        },
                    });

                })();
            }
           }
        }
    };
    
    var user = { name: "Ali", age: 10 };
    
console.log(user);
    customObject.getSetGen.call(user);

    
    console.log(user.name); // Output: Ali
    console.log(user.age); // Output: 10
    
