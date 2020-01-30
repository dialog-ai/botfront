import { mergeTypes } from 'merge-graphql-schemas';

import conversationResolvers from './conversations/resolvers';
import conversationTypes from './conversations/schemas';
import activityResolver from './activity/resolvers/activityResolver';
import activityTypes from './activity/schemas';
import commonResolver from './common/commonResolver';
import commonTypes from './common/common.types.graphql';
import botResponsesResolvers from './botResponses/resolvers';
import botResponsesTypes from './botResponses/schemas';
import configResolver from './config/configResolver';
import configTypes from './config/config.types.graphql';
import nluResolvers from './nlu/resolvers';
import nluTypes from './nlu/schemas';


export const resolvers = [
    ...conversationResolvers,
    ...nluResolvers,
    ...botResponsesResolvers,
    ...nluResolvers,
    activityResolver,
    commonResolver,
    configResolver,
];

export const typeDefs = mergeTypes([
    ...conversationTypes,
    ...botResponsesTypes,
    ...nluTypes,
    ...activityTypes,
    ...nluTypes,
    commonTypes,
    configTypes,
], { all: true });

export const schemaDirectives = {
};
