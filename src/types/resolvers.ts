import type { Context } from './dataSources';

type ResolverFunction = (parent: any, args: any, ctx: Context) => Promise<any> | any;

type ResolversMap = {
  [filedname: string]: ResolverFunction;
};

export interface Resolvers {
  [fieldname: string]: ResolversMap;
}
