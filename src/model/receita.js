import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Receita = mongoose.Schema ({

     nomeID: {
        type: String,
        required: true,
        trim: false
    },
    loteID: {
        type: Number,
        required: true,
        trim: true
    },
    concentracao: {
        type: Number,
        required: true,
    },
    proporcao:{
        type:Number,
        required:true
    },
    concal:{
        type:Number,
        required:true	
    },
    peso:{
        type:Number,
	    required:true
     },
    custo:{
        type:Number,
        required:true
    },
    observacao:{
        type:String,
        required:false
    }	
});
module.exports = { ReceitaModel: mongoose.model('Receita', Receita) };
