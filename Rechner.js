var result = undefined;
            function calculate(){
                var a = document.getElementById("a").value;
                var b = document.getElementById("b").value;
                var c = document.getElementById("mult").value;
                console.log(c)
                switch (c) {
                    case "mult": result = a*b;
                    break;
                    case "divi": result = a/b;
                    break;
                    case "plus": result = Number(a)+Number(b);
                    break;
                    case "mins": result = a-b;
                    break;
                }
                
                //document.write(a);
                
                document.write(result);

            };
            
