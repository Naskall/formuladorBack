import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';
import moment from 'moment';
import crypto from 'crypto';

import RootResponse from './person';
import User from './user';
import Receita from './receita';

import {PersonModel} from './../model/person';
import {UserModel} from './../model/user';
import {ReceitaModel} from './../model/receita';

const Mutation = new GraphQLObjectType(
    {
        name: 'Mutation',
        fields: {
            addPerson: {
                type: RootResponse,
                args: {
                    name: { type: new GraphQLNonNull(GraphQLString) },
                    email: { type: new GraphQLNonNull(GraphQLString) },
                    birthDate: { type: GraphQLString },
                    role: { type: GraphQLString },
                    sector: { type: GraphQLString },
                    phoneNumber: { type: GraphQLInt },
                    address: { type: GraphQLString },
                    cpf: { type: GraphQLInt }
                },
                resolve(parentValue, {name, email, birthDate, role, sector, phoneNumber, address, cpf}){
                    const newPerson = new PersonModel({
                        name,
                        email,
                        birthDate: new Date(moment(birthDate, 'MM-DD-YYYY').format('YYYY-MM-DD')),
                        role,
                        sector,
                        phoneNumber,
                        address,
                        cpf
                    });
                    return newPerson.save()
                }
           },
            addUser: {
                type: User,
                args: {
                    email: { type: new GraphQLNonNull(GraphQLString) },
                    password: { type: new GraphQLNonNull(GraphQLString) },
                    type: { type: GraphQLString },
                },
                resolve(parentValue, {email, password, type}){
                    const newUser = new UserModel({
                        email,
                        password: crypto.createHash('sha256').update("asIASnd213a'1" + password).digest('hex'),
                        type
                    });
                    return newUser.save()
                }
            },
            addReceita:{
                type:Receita,
                 args:{
                     nomeID:{ type: new GraphQLNonNull(GraphQLString) },
                     loteID:{ type: new GraphQLNonNull(GraphQLString) },
                     proporcao:{ type: new GraphQLNonNull(GraphQLString) },
                     concentracao:{ type: new GraphQLNonNull(GraphQLString) },
                     concal:{ type: new GraphQLNonNull(GraphQLString) },
                     peso:{ type: new GraphQLNonNull(GraphQLString) },
                     custo:{ type: new GraphQLNonNull(GraphQLString) },
                     observacao:{type:GraphQLString}
                 },
                 resolve(parentValue,{nomeID,loteID,proporcao,concentracao,concal,peso,custo,observacao}){
                     console.log(nomeID);
                     const newReceita = new ReceitaModel({
                        nomeID,
                        loteID,
                        proporcao,
                        concentracao,
                        concal,
                        peso,
                        custo,
                        observacao
                     });
                     return newReceita.save();
                 }
            }
        }
    } 
    
)
module.exports =  Mutation ;