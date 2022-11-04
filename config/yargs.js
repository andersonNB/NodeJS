const argv = require('yargs')
   .option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
   })
   .option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Muestra la tabla de multiplicar'
   })
   .check((argv,option)=>{
     if(isNaN(argv.b)){
        throw 'La base debe ser un número'
     }
     return true
   })
   .argv;