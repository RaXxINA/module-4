var names =["Yaakov","John","Jen","Jason","Frank","Larry","Paula","Laura","Jim"]; 
names.forEach(function(name){ var firstLetter =name.charAt(0).toLowerCase();
if(firstLetter === 'j'){ console.log("Good Bye " + name); }else{ console.log("Hello" + name);}
                            });
