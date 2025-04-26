
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model OculosSol
 * 
 */
export type OculosSol = $Result.DefaultSelection<Prisma.$OculosSolPayload>
/**
 * Model MarcaOculosSol
 * 
 */
export type MarcaOculosSol = $Result.DefaultSelection<Prisma.$MarcaOculosSolPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OculosSols
 * const oculosSols = await prisma.oculosSol.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more OculosSols
   * const oculosSols = await prisma.oculosSol.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.oculosSol`: Exposes CRUD operations for the **OculosSol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OculosSols
    * const oculosSols = await prisma.oculosSol.findMany()
    * ```
    */
  get oculosSol(): Prisma.OculosSolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marcaOculosSol`: Exposes CRUD operations for the **MarcaOculosSol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarcaOculosSols
    * const marcaOculosSols = await prisma.marcaOculosSol.findMany()
    * ```
    */
  get marcaOculosSol(): Prisma.MarcaOculosSolDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    OculosSol: 'OculosSol',
    MarcaOculosSol: 'MarcaOculosSol'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "oculosSol" | "marcaOculosSol"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      OculosSol: {
        payload: Prisma.$OculosSolPayload<ExtArgs>
        fields: Prisma.OculosSolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OculosSolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OculosSolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload>
          }
          findFirst: {
            args: Prisma.OculosSolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OculosSolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload>
          }
          findMany: {
            args: Prisma.OculosSolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload>[]
          }
          create: {
            args: Prisma.OculosSolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload>
          }
          createMany: {
            args: Prisma.OculosSolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OculosSolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload>[]
          }
          delete: {
            args: Prisma.OculosSolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload>
          }
          update: {
            args: Prisma.OculosSolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload>
          }
          deleteMany: {
            args: Prisma.OculosSolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OculosSolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OculosSolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload>[]
          }
          upsert: {
            args: Prisma.OculosSolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OculosSolPayload>
          }
          aggregate: {
            args: Prisma.OculosSolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOculosSol>
          }
          groupBy: {
            args: Prisma.OculosSolGroupByArgs<ExtArgs>
            result: $Utils.Optional<OculosSolGroupByOutputType>[]
          }
          count: {
            args: Prisma.OculosSolCountArgs<ExtArgs>
            result: $Utils.Optional<OculosSolCountAggregateOutputType> | number
          }
        }
      }
      MarcaOculosSol: {
        payload: Prisma.$MarcaOculosSolPayload<ExtArgs>
        fields: Prisma.MarcaOculosSolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarcaOculosSolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarcaOculosSolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload>
          }
          findFirst: {
            args: Prisma.MarcaOculosSolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarcaOculosSolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload>
          }
          findMany: {
            args: Prisma.MarcaOculosSolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload>[]
          }
          create: {
            args: Prisma.MarcaOculosSolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload>
          }
          createMany: {
            args: Prisma.MarcaOculosSolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarcaOculosSolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload>[]
          }
          delete: {
            args: Prisma.MarcaOculosSolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload>
          }
          update: {
            args: Prisma.MarcaOculosSolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload>
          }
          deleteMany: {
            args: Prisma.MarcaOculosSolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarcaOculosSolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarcaOculosSolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload>[]
          }
          upsert: {
            args: Prisma.MarcaOculosSolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaOculosSolPayload>
          }
          aggregate: {
            args: Prisma.MarcaOculosSolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarcaOculosSol>
          }
          groupBy: {
            args: Prisma.MarcaOculosSolGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcaOculosSolGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarcaOculosSolCountArgs<ExtArgs>
            result: $Utils.Optional<MarcaOculosSolCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    oculosSol?: OculosSolOmit
    marcaOculosSol?: MarcaOculosSolOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MarcaOculosSolCountOutputType
   */

  export type MarcaOculosSolCountOutputType = {
    OculosSol: number
  }

  export type MarcaOculosSolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OculosSol?: boolean | MarcaOculosSolCountOutputTypeCountOculosSolArgs
  }

  // Custom InputTypes
  /**
   * MarcaOculosSolCountOutputType without action
   */
  export type MarcaOculosSolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSolCountOutputType
     */
    select?: MarcaOculosSolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarcaOculosSolCountOutputType without action
   */
  export type MarcaOculosSolCountOutputTypeCountOculosSolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OculosSolWhereInput
  }


  /**
   * Models
   */

  /**
   * Model OculosSol
   */

  export type AggregateOculosSol = {
    _count: OculosSolCountAggregateOutputType | null
    _min: OculosSolMinAggregateOutputType | null
    _max: OculosSolMaxAggregateOutputType | null
  }

  export type OculosSolMinAggregateOutputType = {
    codigo: string | null
    descricao: string | null
    marcaOculosSolId: string | null
  }

  export type OculosSolMaxAggregateOutputType = {
    codigo: string | null
    descricao: string | null
    marcaOculosSolId: string | null
  }

  export type OculosSolCountAggregateOutputType = {
    codigo: number
    descricao: number
    marcaOculosSolId: number
    _all: number
  }


  export type OculosSolMinAggregateInputType = {
    codigo?: true
    descricao?: true
    marcaOculosSolId?: true
  }

  export type OculosSolMaxAggregateInputType = {
    codigo?: true
    descricao?: true
    marcaOculosSolId?: true
  }

  export type OculosSolCountAggregateInputType = {
    codigo?: true
    descricao?: true
    marcaOculosSolId?: true
    _all?: true
  }

  export type OculosSolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OculosSol to aggregate.
     */
    where?: OculosSolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OculosSols to fetch.
     */
    orderBy?: OculosSolOrderByWithRelationInput | OculosSolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OculosSolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OculosSols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OculosSols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OculosSols
    **/
    _count?: true | OculosSolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OculosSolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OculosSolMaxAggregateInputType
  }

  export type GetOculosSolAggregateType<T extends OculosSolAggregateArgs> = {
        [P in keyof T & keyof AggregateOculosSol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOculosSol[P]>
      : GetScalarType<T[P], AggregateOculosSol[P]>
  }




  export type OculosSolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OculosSolWhereInput
    orderBy?: OculosSolOrderByWithAggregationInput | OculosSolOrderByWithAggregationInput[]
    by: OculosSolScalarFieldEnum[] | OculosSolScalarFieldEnum
    having?: OculosSolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OculosSolCountAggregateInputType | true
    _min?: OculosSolMinAggregateInputType
    _max?: OculosSolMaxAggregateInputType
  }

  export type OculosSolGroupByOutputType = {
    codigo: string
    descricao: string
    marcaOculosSolId: string
    _count: OculosSolCountAggregateOutputType | null
    _min: OculosSolMinAggregateOutputType | null
    _max: OculosSolMaxAggregateOutputType | null
  }

  type GetOculosSolGroupByPayload<T extends OculosSolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OculosSolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OculosSolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OculosSolGroupByOutputType[P]>
            : GetScalarType<T[P], OculosSolGroupByOutputType[P]>
        }
      >
    >


  export type OculosSolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    descricao?: boolean
    marcaOculosSolId?: boolean
    marcaOculosSol?: boolean | MarcaOculosSolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oculosSol"]>

  export type OculosSolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    descricao?: boolean
    marcaOculosSolId?: boolean
    marcaOculosSol?: boolean | MarcaOculosSolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oculosSol"]>

  export type OculosSolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    descricao?: boolean
    marcaOculosSolId?: boolean
    marcaOculosSol?: boolean | MarcaOculosSolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oculosSol"]>

  export type OculosSolSelectScalar = {
    codigo?: boolean
    descricao?: boolean
    marcaOculosSolId?: boolean
  }

  export type OculosSolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "descricao" | "marcaOculosSolId", ExtArgs["result"]["oculosSol"]>
  export type OculosSolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marcaOculosSol?: boolean | MarcaOculosSolDefaultArgs<ExtArgs>
  }
  export type OculosSolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marcaOculosSol?: boolean | MarcaOculosSolDefaultArgs<ExtArgs>
  }
  export type OculosSolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marcaOculosSol?: boolean | MarcaOculosSolDefaultArgs<ExtArgs>
  }

  export type $OculosSolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OculosSol"
    objects: {
      marcaOculosSol: Prisma.$MarcaOculosSolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: string
      descricao: string
      marcaOculosSolId: string
    }, ExtArgs["result"]["oculosSol"]>
    composites: {}
  }

  type OculosSolGetPayload<S extends boolean | null | undefined | OculosSolDefaultArgs> = $Result.GetResult<Prisma.$OculosSolPayload, S>

  type OculosSolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OculosSolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OculosSolCountAggregateInputType | true
    }

  export interface OculosSolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OculosSol'], meta: { name: 'OculosSol' } }
    /**
     * Find zero or one OculosSol that matches the filter.
     * @param {OculosSolFindUniqueArgs} args - Arguments to find a OculosSol
     * @example
     * // Get one OculosSol
     * const oculosSol = await prisma.oculosSol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OculosSolFindUniqueArgs>(args: SelectSubset<T, OculosSolFindUniqueArgs<ExtArgs>>): Prisma__OculosSolClient<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OculosSol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OculosSolFindUniqueOrThrowArgs} args - Arguments to find a OculosSol
     * @example
     * // Get one OculosSol
     * const oculosSol = await prisma.oculosSol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OculosSolFindUniqueOrThrowArgs>(args: SelectSubset<T, OculosSolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OculosSolClient<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OculosSol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OculosSolFindFirstArgs} args - Arguments to find a OculosSol
     * @example
     * // Get one OculosSol
     * const oculosSol = await prisma.oculosSol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OculosSolFindFirstArgs>(args?: SelectSubset<T, OculosSolFindFirstArgs<ExtArgs>>): Prisma__OculosSolClient<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OculosSol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OculosSolFindFirstOrThrowArgs} args - Arguments to find a OculosSol
     * @example
     * // Get one OculosSol
     * const oculosSol = await prisma.oculosSol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OculosSolFindFirstOrThrowArgs>(args?: SelectSubset<T, OculosSolFindFirstOrThrowArgs<ExtArgs>>): Prisma__OculosSolClient<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OculosSols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OculosSolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OculosSols
     * const oculosSols = await prisma.oculosSol.findMany()
     * 
     * // Get first 10 OculosSols
     * const oculosSols = await prisma.oculosSol.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const oculosSolWithCodigoOnly = await prisma.oculosSol.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends OculosSolFindManyArgs>(args?: SelectSubset<T, OculosSolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OculosSol.
     * @param {OculosSolCreateArgs} args - Arguments to create a OculosSol.
     * @example
     * // Create one OculosSol
     * const OculosSol = await prisma.oculosSol.create({
     *   data: {
     *     // ... data to create a OculosSol
     *   }
     * })
     * 
     */
    create<T extends OculosSolCreateArgs>(args: SelectSubset<T, OculosSolCreateArgs<ExtArgs>>): Prisma__OculosSolClient<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OculosSols.
     * @param {OculosSolCreateManyArgs} args - Arguments to create many OculosSols.
     * @example
     * // Create many OculosSols
     * const oculosSol = await prisma.oculosSol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OculosSolCreateManyArgs>(args?: SelectSubset<T, OculosSolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OculosSols and returns the data saved in the database.
     * @param {OculosSolCreateManyAndReturnArgs} args - Arguments to create many OculosSols.
     * @example
     * // Create many OculosSols
     * const oculosSol = await prisma.oculosSol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OculosSols and only return the `codigo`
     * const oculosSolWithCodigoOnly = await prisma.oculosSol.createManyAndReturn({
     *   select: { codigo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OculosSolCreateManyAndReturnArgs>(args?: SelectSubset<T, OculosSolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OculosSol.
     * @param {OculosSolDeleteArgs} args - Arguments to delete one OculosSol.
     * @example
     * // Delete one OculosSol
     * const OculosSol = await prisma.oculosSol.delete({
     *   where: {
     *     // ... filter to delete one OculosSol
     *   }
     * })
     * 
     */
    delete<T extends OculosSolDeleteArgs>(args: SelectSubset<T, OculosSolDeleteArgs<ExtArgs>>): Prisma__OculosSolClient<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OculosSol.
     * @param {OculosSolUpdateArgs} args - Arguments to update one OculosSol.
     * @example
     * // Update one OculosSol
     * const oculosSol = await prisma.oculosSol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OculosSolUpdateArgs>(args: SelectSubset<T, OculosSolUpdateArgs<ExtArgs>>): Prisma__OculosSolClient<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OculosSols.
     * @param {OculosSolDeleteManyArgs} args - Arguments to filter OculosSols to delete.
     * @example
     * // Delete a few OculosSols
     * const { count } = await prisma.oculosSol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OculosSolDeleteManyArgs>(args?: SelectSubset<T, OculosSolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OculosSols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OculosSolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OculosSols
     * const oculosSol = await prisma.oculosSol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OculosSolUpdateManyArgs>(args: SelectSubset<T, OculosSolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OculosSols and returns the data updated in the database.
     * @param {OculosSolUpdateManyAndReturnArgs} args - Arguments to update many OculosSols.
     * @example
     * // Update many OculosSols
     * const oculosSol = await prisma.oculosSol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OculosSols and only return the `codigo`
     * const oculosSolWithCodigoOnly = await prisma.oculosSol.updateManyAndReturn({
     *   select: { codigo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OculosSolUpdateManyAndReturnArgs>(args: SelectSubset<T, OculosSolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OculosSol.
     * @param {OculosSolUpsertArgs} args - Arguments to update or create a OculosSol.
     * @example
     * // Update or create a OculosSol
     * const oculosSol = await prisma.oculosSol.upsert({
     *   create: {
     *     // ... data to create a OculosSol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OculosSol we want to update
     *   }
     * })
     */
    upsert<T extends OculosSolUpsertArgs>(args: SelectSubset<T, OculosSolUpsertArgs<ExtArgs>>): Prisma__OculosSolClient<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OculosSols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OculosSolCountArgs} args - Arguments to filter OculosSols to count.
     * @example
     * // Count the number of OculosSols
     * const count = await prisma.oculosSol.count({
     *   where: {
     *     // ... the filter for the OculosSols we want to count
     *   }
     * })
    **/
    count<T extends OculosSolCountArgs>(
      args?: Subset<T, OculosSolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OculosSolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OculosSol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OculosSolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OculosSolAggregateArgs>(args: Subset<T, OculosSolAggregateArgs>): Prisma.PrismaPromise<GetOculosSolAggregateType<T>>

    /**
     * Group by OculosSol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OculosSolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OculosSolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OculosSolGroupByArgs['orderBy'] }
        : { orderBy?: OculosSolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OculosSolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOculosSolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OculosSol model
   */
  readonly fields: OculosSolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OculosSol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OculosSolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marcaOculosSol<T extends MarcaOculosSolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarcaOculosSolDefaultArgs<ExtArgs>>): Prisma__MarcaOculosSolClient<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OculosSol model
   */
  interface OculosSolFieldRefs {
    readonly codigo: FieldRef<"OculosSol", 'String'>
    readonly descricao: FieldRef<"OculosSol", 'String'>
    readonly marcaOculosSolId: FieldRef<"OculosSol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OculosSol findUnique
   */
  export type OculosSolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    /**
     * Filter, which OculosSol to fetch.
     */
    where: OculosSolWhereUniqueInput
  }

  /**
   * OculosSol findUniqueOrThrow
   */
  export type OculosSolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    /**
     * Filter, which OculosSol to fetch.
     */
    where: OculosSolWhereUniqueInput
  }

  /**
   * OculosSol findFirst
   */
  export type OculosSolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    /**
     * Filter, which OculosSol to fetch.
     */
    where?: OculosSolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OculosSols to fetch.
     */
    orderBy?: OculosSolOrderByWithRelationInput | OculosSolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OculosSols.
     */
    cursor?: OculosSolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OculosSols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OculosSols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OculosSols.
     */
    distinct?: OculosSolScalarFieldEnum | OculosSolScalarFieldEnum[]
  }

  /**
   * OculosSol findFirstOrThrow
   */
  export type OculosSolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    /**
     * Filter, which OculosSol to fetch.
     */
    where?: OculosSolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OculosSols to fetch.
     */
    orderBy?: OculosSolOrderByWithRelationInput | OculosSolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OculosSols.
     */
    cursor?: OculosSolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OculosSols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OculosSols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OculosSols.
     */
    distinct?: OculosSolScalarFieldEnum | OculosSolScalarFieldEnum[]
  }

  /**
   * OculosSol findMany
   */
  export type OculosSolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    /**
     * Filter, which OculosSols to fetch.
     */
    where?: OculosSolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OculosSols to fetch.
     */
    orderBy?: OculosSolOrderByWithRelationInput | OculosSolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OculosSols.
     */
    cursor?: OculosSolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OculosSols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OculosSols.
     */
    skip?: number
    distinct?: OculosSolScalarFieldEnum | OculosSolScalarFieldEnum[]
  }

  /**
   * OculosSol create
   */
  export type OculosSolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    /**
     * The data needed to create a OculosSol.
     */
    data: XOR<OculosSolCreateInput, OculosSolUncheckedCreateInput>
  }

  /**
   * OculosSol createMany
   */
  export type OculosSolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OculosSols.
     */
    data: OculosSolCreateManyInput | OculosSolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OculosSol createManyAndReturn
   */
  export type OculosSolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * The data used to create many OculosSols.
     */
    data: OculosSolCreateManyInput | OculosSolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OculosSol update
   */
  export type OculosSolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    /**
     * The data needed to update a OculosSol.
     */
    data: XOR<OculosSolUpdateInput, OculosSolUncheckedUpdateInput>
    /**
     * Choose, which OculosSol to update.
     */
    where: OculosSolWhereUniqueInput
  }

  /**
   * OculosSol updateMany
   */
  export type OculosSolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OculosSols.
     */
    data: XOR<OculosSolUpdateManyMutationInput, OculosSolUncheckedUpdateManyInput>
    /**
     * Filter which OculosSols to update
     */
    where?: OculosSolWhereInput
    /**
     * Limit how many OculosSols to update.
     */
    limit?: number
  }

  /**
   * OculosSol updateManyAndReturn
   */
  export type OculosSolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * The data used to update OculosSols.
     */
    data: XOR<OculosSolUpdateManyMutationInput, OculosSolUncheckedUpdateManyInput>
    /**
     * Filter which OculosSols to update
     */
    where?: OculosSolWhereInput
    /**
     * Limit how many OculosSols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OculosSol upsert
   */
  export type OculosSolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    /**
     * The filter to search for the OculosSol to update in case it exists.
     */
    where: OculosSolWhereUniqueInput
    /**
     * In case the OculosSol found by the `where` argument doesn't exist, create a new OculosSol with this data.
     */
    create: XOR<OculosSolCreateInput, OculosSolUncheckedCreateInput>
    /**
     * In case the OculosSol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OculosSolUpdateInput, OculosSolUncheckedUpdateInput>
  }

  /**
   * OculosSol delete
   */
  export type OculosSolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    /**
     * Filter which OculosSol to delete.
     */
    where: OculosSolWhereUniqueInput
  }

  /**
   * OculosSol deleteMany
   */
  export type OculosSolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OculosSols to delete
     */
    where?: OculosSolWhereInput
    /**
     * Limit how many OculosSols to delete.
     */
    limit?: number
  }

  /**
   * OculosSol without action
   */
  export type OculosSolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
  }


  /**
   * Model MarcaOculosSol
   */

  export type AggregateMarcaOculosSol = {
    _count: MarcaOculosSolCountAggregateOutputType | null
    _min: MarcaOculosSolMinAggregateOutputType | null
    _max: MarcaOculosSolMaxAggregateOutputType | null
  }

  export type MarcaOculosSolMinAggregateOutputType = {
    id: string | null
    marca: string | null
  }

  export type MarcaOculosSolMaxAggregateOutputType = {
    id: string | null
    marca: string | null
  }

  export type MarcaOculosSolCountAggregateOutputType = {
    id: number
    marca: number
    _all: number
  }


  export type MarcaOculosSolMinAggregateInputType = {
    id?: true
    marca?: true
  }

  export type MarcaOculosSolMaxAggregateInputType = {
    id?: true
    marca?: true
  }

  export type MarcaOculosSolCountAggregateInputType = {
    id?: true
    marca?: true
    _all?: true
  }

  export type MarcaOculosSolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarcaOculosSol to aggregate.
     */
    where?: MarcaOculosSolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcaOculosSols to fetch.
     */
    orderBy?: MarcaOculosSolOrderByWithRelationInput | MarcaOculosSolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarcaOculosSolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcaOculosSols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcaOculosSols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarcaOculosSols
    **/
    _count?: true | MarcaOculosSolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcaOculosSolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcaOculosSolMaxAggregateInputType
  }

  export type GetMarcaOculosSolAggregateType<T extends MarcaOculosSolAggregateArgs> = {
        [P in keyof T & keyof AggregateMarcaOculosSol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarcaOculosSol[P]>
      : GetScalarType<T[P], AggregateMarcaOculosSol[P]>
  }




  export type MarcaOculosSolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcaOculosSolWhereInput
    orderBy?: MarcaOculosSolOrderByWithAggregationInput | MarcaOculosSolOrderByWithAggregationInput[]
    by: MarcaOculosSolScalarFieldEnum[] | MarcaOculosSolScalarFieldEnum
    having?: MarcaOculosSolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcaOculosSolCountAggregateInputType | true
    _min?: MarcaOculosSolMinAggregateInputType
    _max?: MarcaOculosSolMaxAggregateInputType
  }

  export type MarcaOculosSolGroupByOutputType = {
    id: string
    marca: string
    _count: MarcaOculosSolCountAggregateOutputType | null
    _min: MarcaOculosSolMinAggregateOutputType | null
    _max: MarcaOculosSolMaxAggregateOutputType | null
  }

  type GetMarcaOculosSolGroupByPayload<T extends MarcaOculosSolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcaOculosSolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcaOculosSolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcaOculosSolGroupByOutputType[P]>
            : GetScalarType<T[P], MarcaOculosSolGroupByOutputType[P]>
        }
      >
    >


  export type MarcaOculosSolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    OculosSol?: boolean | MarcaOculosSol$OculosSolArgs<ExtArgs>
    _count?: boolean | MarcaOculosSolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marcaOculosSol"]>

  export type MarcaOculosSolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
  }, ExtArgs["result"]["marcaOculosSol"]>

  export type MarcaOculosSolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
  }, ExtArgs["result"]["marcaOculosSol"]>

  export type MarcaOculosSolSelectScalar = {
    id?: boolean
    marca?: boolean
  }

  export type MarcaOculosSolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marca", ExtArgs["result"]["marcaOculosSol"]>
  export type MarcaOculosSolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OculosSol?: boolean | MarcaOculosSol$OculosSolArgs<ExtArgs>
    _count?: boolean | MarcaOculosSolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarcaOculosSolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarcaOculosSolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarcaOculosSolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarcaOculosSol"
    objects: {
      OculosSol: Prisma.$OculosSolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marca: string
    }, ExtArgs["result"]["marcaOculosSol"]>
    composites: {}
  }

  type MarcaOculosSolGetPayload<S extends boolean | null | undefined | MarcaOculosSolDefaultArgs> = $Result.GetResult<Prisma.$MarcaOculosSolPayload, S>

  type MarcaOculosSolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarcaOculosSolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcaOculosSolCountAggregateInputType | true
    }

  export interface MarcaOculosSolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarcaOculosSol'], meta: { name: 'MarcaOculosSol' } }
    /**
     * Find zero or one MarcaOculosSol that matches the filter.
     * @param {MarcaOculosSolFindUniqueArgs} args - Arguments to find a MarcaOculosSol
     * @example
     * // Get one MarcaOculosSol
     * const marcaOculosSol = await prisma.marcaOculosSol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarcaOculosSolFindUniqueArgs>(args: SelectSubset<T, MarcaOculosSolFindUniqueArgs<ExtArgs>>): Prisma__MarcaOculosSolClient<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarcaOculosSol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarcaOculosSolFindUniqueOrThrowArgs} args - Arguments to find a MarcaOculosSol
     * @example
     * // Get one MarcaOculosSol
     * const marcaOculosSol = await prisma.marcaOculosSol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarcaOculosSolFindUniqueOrThrowArgs>(args: SelectSubset<T, MarcaOculosSolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarcaOculosSolClient<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarcaOculosSol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaOculosSolFindFirstArgs} args - Arguments to find a MarcaOculosSol
     * @example
     * // Get one MarcaOculosSol
     * const marcaOculosSol = await prisma.marcaOculosSol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarcaOculosSolFindFirstArgs>(args?: SelectSubset<T, MarcaOculosSolFindFirstArgs<ExtArgs>>): Prisma__MarcaOculosSolClient<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarcaOculosSol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaOculosSolFindFirstOrThrowArgs} args - Arguments to find a MarcaOculosSol
     * @example
     * // Get one MarcaOculosSol
     * const marcaOculosSol = await prisma.marcaOculosSol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarcaOculosSolFindFirstOrThrowArgs>(args?: SelectSubset<T, MarcaOculosSolFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarcaOculosSolClient<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarcaOculosSols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaOculosSolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarcaOculosSols
     * const marcaOculosSols = await prisma.marcaOculosSol.findMany()
     * 
     * // Get first 10 MarcaOculosSols
     * const marcaOculosSols = await prisma.marcaOculosSol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcaOculosSolWithIdOnly = await prisma.marcaOculosSol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarcaOculosSolFindManyArgs>(args?: SelectSubset<T, MarcaOculosSolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarcaOculosSol.
     * @param {MarcaOculosSolCreateArgs} args - Arguments to create a MarcaOculosSol.
     * @example
     * // Create one MarcaOculosSol
     * const MarcaOculosSol = await prisma.marcaOculosSol.create({
     *   data: {
     *     // ... data to create a MarcaOculosSol
     *   }
     * })
     * 
     */
    create<T extends MarcaOculosSolCreateArgs>(args: SelectSubset<T, MarcaOculosSolCreateArgs<ExtArgs>>): Prisma__MarcaOculosSolClient<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarcaOculosSols.
     * @param {MarcaOculosSolCreateManyArgs} args - Arguments to create many MarcaOculosSols.
     * @example
     * // Create many MarcaOculosSols
     * const marcaOculosSol = await prisma.marcaOculosSol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarcaOculosSolCreateManyArgs>(args?: SelectSubset<T, MarcaOculosSolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarcaOculosSols and returns the data saved in the database.
     * @param {MarcaOculosSolCreateManyAndReturnArgs} args - Arguments to create many MarcaOculosSols.
     * @example
     * // Create many MarcaOculosSols
     * const marcaOculosSol = await prisma.marcaOculosSol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarcaOculosSols and only return the `id`
     * const marcaOculosSolWithIdOnly = await prisma.marcaOculosSol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarcaOculosSolCreateManyAndReturnArgs>(args?: SelectSubset<T, MarcaOculosSolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarcaOculosSol.
     * @param {MarcaOculosSolDeleteArgs} args - Arguments to delete one MarcaOculosSol.
     * @example
     * // Delete one MarcaOculosSol
     * const MarcaOculosSol = await prisma.marcaOculosSol.delete({
     *   where: {
     *     // ... filter to delete one MarcaOculosSol
     *   }
     * })
     * 
     */
    delete<T extends MarcaOculosSolDeleteArgs>(args: SelectSubset<T, MarcaOculosSolDeleteArgs<ExtArgs>>): Prisma__MarcaOculosSolClient<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarcaOculosSol.
     * @param {MarcaOculosSolUpdateArgs} args - Arguments to update one MarcaOculosSol.
     * @example
     * // Update one MarcaOculosSol
     * const marcaOculosSol = await prisma.marcaOculosSol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarcaOculosSolUpdateArgs>(args: SelectSubset<T, MarcaOculosSolUpdateArgs<ExtArgs>>): Prisma__MarcaOculosSolClient<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarcaOculosSols.
     * @param {MarcaOculosSolDeleteManyArgs} args - Arguments to filter MarcaOculosSols to delete.
     * @example
     * // Delete a few MarcaOculosSols
     * const { count } = await prisma.marcaOculosSol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarcaOculosSolDeleteManyArgs>(args?: SelectSubset<T, MarcaOculosSolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarcaOculosSols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaOculosSolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarcaOculosSols
     * const marcaOculosSol = await prisma.marcaOculosSol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarcaOculosSolUpdateManyArgs>(args: SelectSubset<T, MarcaOculosSolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarcaOculosSols and returns the data updated in the database.
     * @param {MarcaOculosSolUpdateManyAndReturnArgs} args - Arguments to update many MarcaOculosSols.
     * @example
     * // Update many MarcaOculosSols
     * const marcaOculosSol = await prisma.marcaOculosSol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarcaOculosSols and only return the `id`
     * const marcaOculosSolWithIdOnly = await prisma.marcaOculosSol.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarcaOculosSolUpdateManyAndReturnArgs>(args: SelectSubset<T, MarcaOculosSolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarcaOculosSol.
     * @param {MarcaOculosSolUpsertArgs} args - Arguments to update or create a MarcaOculosSol.
     * @example
     * // Update or create a MarcaOculosSol
     * const marcaOculosSol = await prisma.marcaOculosSol.upsert({
     *   create: {
     *     // ... data to create a MarcaOculosSol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarcaOculosSol we want to update
     *   }
     * })
     */
    upsert<T extends MarcaOculosSolUpsertArgs>(args: SelectSubset<T, MarcaOculosSolUpsertArgs<ExtArgs>>): Prisma__MarcaOculosSolClient<$Result.GetResult<Prisma.$MarcaOculosSolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarcaOculosSols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaOculosSolCountArgs} args - Arguments to filter MarcaOculosSols to count.
     * @example
     * // Count the number of MarcaOculosSols
     * const count = await prisma.marcaOculosSol.count({
     *   where: {
     *     // ... the filter for the MarcaOculosSols we want to count
     *   }
     * })
    **/
    count<T extends MarcaOculosSolCountArgs>(
      args?: Subset<T, MarcaOculosSolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcaOculosSolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarcaOculosSol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaOculosSolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarcaOculosSolAggregateArgs>(args: Subset<T, MarcaOculosSolAggregateArgs>): Prisma.PrismaPromise<GetMarcaOculosSolAggregateType<T>>

    /**
     * Group by MarcaOculosSol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaOculosSolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarcaOculosSolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcaOculosSolGroupByArgs['orderBy'] }
        : { orderBy?: MarcaOculosSolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarcaOculosSolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcaOculosSolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarcaOculosSol model
   */
  readonly fields: MarcaOculosSolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarcaOculosSol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarcaOculosSolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OculosSol<T extends MarcaOculosSol$OculosSolArgs<ExtArgs> = {}>(args?: Subset<T, MarcaOculosSol$OculosSolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OculosSolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarcaOculosSol model
   */
  interface MarcaOculosSolFieldRefs {
    readonly id: FieldRef<"MarcaOculosSol", 'String'>
    readonly marca: FieldRef<"MarcaOculosSol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MarcaOculosSol findUnique
   */
  export type MarcaOculosSolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
    /**
     * Filter, which MarcaOculosSol to fetch.
     */
    where: MarcaOculosSolWhereUniqueInput
  }

  /**
   * MarcaOculosSol findUniqueOrThrow
   */
  export type MarcaOculosSolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
    /**
     * Filter, which MarcaOculosSol to fetch.
     */
    where: MarcaOculosSolWhereUniqueInput
  }

  /**
   * MarcaOculosSol findFirst
   */
  export type MarcaOculosSolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
    /**
     * Filter, which MarcaOculosSol to fetch.
     */
    where?: MarcaOculosSolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcaOculosSols to fetch.
     */
    orderBy?: MarcaOculosSolOrderByWithRelationInput | MarcaOculosSolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarcaOculosSols.
     */
    cursor?: MarcaOculosSolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcaOculosSols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcaOculosSols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarcaOculosSols.
     */
    distinct?: MarcaOculosSolScalarFieldEnum | MarcaOculosSolScalarFieldEnum[]
  }

  /**
   * MarcaOculosSol findFirstOrThrow
   */
  export type MarcaOculosSolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
    /**
     * Filter, which MarcaOculosSol to fetch.
     */
    where?: MarcaOculosSolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcaOculosSols to fetch.
     */
    orderBy?: MarcaOculosSolOrderByWithRelationInput | MarcaOculosSolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarcaOculosSols.
     */
    cursor?: MarcaOculosSolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcaOculosSols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcaOculosSols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarcaOculosSols.
     */
    distinct?: MarcaOculosSolScalarFieldEnum | MarcaOculosSolScalarFieldEnum[]
  }

  /**
   * MarcaOculosSol findMany
   */
  export type MarcaOculosSolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
    /**
     * Filter, which MarcaOculosSols to fetch.
     */
    where?: MarcaOculosSolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcaOculosSols to fetch.
     */
    orderBy?: MarcaOculosSolOrderByWithRelationInput | MarcaOculosSolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarcaOculosSols.
     */
    cursor?: MarcaOculosSolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcaOculosSols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcaOculosSols.
     */
    skip?: number
    distinct?: MarcaOculosSolScalarFieldEnum | MarcaOculosSolScalarFieldEnum[]
  }

  /**
   * MarcaOculosSol create
   */
  export type MarcaOculosSolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
    /**
     * The data needed to create a MarcaOculosSol.
     */
    data: XOR<MarcaOculosSolCreateInput, MarcaOculosSolUncheckedCreateInput>
  }

  /**
   * MarcaOculosSol createMany
   */
  export type MarcaOculosSolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarcaOculosSols.
     */
    data: MarcaOculosSolCreateManyInput | MarcaOculosSolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarcaOculosSol createManyAndReturn
   */
  export type MarcaOculosSolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * The data used to create many MarcaOculosSols.
     */
    data: MarcaOculosSolCreateManyInput | MarcaOculosSolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarcaOculosSol update
   */
  export type MarcaOculosSolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
    /**
     * The data needed to update a MarcaOculosSol.
     */
    data: XOR<MarcaOculosSolUpdateInput, MarcaOculosSolUncheckedUpdateInput>
    /**
     * Choose, which MarcaOculosSol to update.
     */
    where: MarcaOculosSolWhereUniqueInput
  }

  /**
   * MarcaOculosSol updateMany
   */
  export type MarcaOculosSolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarcaOculosSols.
     */
    data: XOR<MarcaOculosSolUpdateManyMutationInput, MarcaOculosSolUncheckedUpdateManyInput>
    /**
     * Filter which MarcaOculosSols to update
     */
    where?: MarcaOculosSolWhereInput
    /**
     * Limit how many MarcaOculosSols to update.
     */
    limit?: number
  }

  /**
   * MarcaOculosSol updateManyAndReturn
   */
  export type MarcaOculosSolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * The data used to update MarcaOculosSols.
     */
    data: XOR<MarcaOculosSolUpdateManyMutationInput, MarcaOculosSolUncheckedUpdateManyInput>
    /**
     * Filter which MarcaOculosSols to update
     */
    where?: MarcaOculosSolWhereInput
    /**
     * Limit how many MarcaOculosSols to update.
     */
    limit?: number
  }

  /**
   * MarcaOculosSol upsert
   */
  export type MarcaOculosSolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
    /**
     * The filter to search for the MarcaOculosSol to update in case it exists.
     */
    where: MarcaOculosSolWhereUniqueInput
    /**
     * In case the MarcaOculosSol found by the `where` argument doesn't exist, create a new MarcaOculosSol with this data.
     */
    create: XOR<MarcaOculosSolCreateInput, MarcaOculosSolUncheckedCreateInput>
    /**
     * In case the MarcaOculosSol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarcaOculosSolUpdateInput, MarcaOculosSolUncheckedUpdateInput>
  }

  /**
   * MarcaOculosSol delete
   */
  export type MarcaOculosSolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
    /**
     * Filter which MarcaOculosSol to delete.
     */
    where: MarcaOculosSolWhereUniqueInput
  }

  /**
   * MarcaOculosSol deleteMany
   */
  export type MarcaOculosSolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarcaOculosSols to delete
     */
    where?: MarcaOculosSolWhereInput
    /**
     * Limit how many MarcaOculosSols to delete.
     */
    limit?: number
  }

  /**
   * MarcaOculosSol.OculosSol
   */
  export type MarcaOculosSol$OculosSolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OculosSol
     */
    select?: OculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OculosSol
     */
    omit?: OculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OculosSolInclude<ExtArgs> | null
    where?: OculosSolWhereInput
    orderBy?: OculosSolOrderByWithRelationInput | OculosSolOrderByWithRelationInput[]
    cursor?: OculosSolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OculosSolScalarFieldEnum | OculosSolScalarFieldEnum[]
  }

  /**
   * MarcaOculosSol without action
   */
  export type MarcaOculosSolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaOculosSol
     */
    select?: MarcaOculosSolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaOculosSol
     */
    omit?: MarcaOculosSolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaOculosSolInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OculosSolScalarFieldEnum: {
    codigo: 'codigo',
    descricao: 'descricao',
    marcaOculosSolId: 'marcaOculosSolId'
  };

  export type OculosSolScalarFieldEnum = (typeof OculosSolScalarFieldEnum)[keyof typeof OculosSolScalarFieldEnum]


  export const MarcaOculosSolScalarFieldEnum: {
    id: 'id',
    marca: 'marca'
  };

  export type MarcaOculosSolScalarFieldEnum = (typeof MarcaOculosSolScalarFieldEnum)[keyof typeof MarcaOculosSolScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OculosSolWhereInput = {
    AND?: OculosSolWhereInput | OculosSolWhereInput[]
    OR?: OculosSolWhereInput[]
    NOT?: OculosSolWhereInput | OculosSolWhereInput[]
    codigo?: StringFilter<"OculosSol"> | string
    descricao?: StringFilter<"OculosSol"> | string
    marcaOculosSolId?: StringFilter<"OculosSol"> | string
    marcaOculosSol?: XOR<MarcaOculosSolScalarRelationFilter, MarcaOculosSolWhereInput>
  }

  export type OculosSolOrderByWithRelationInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    marcaOculosSolId?: SortOrder
    marcaOculosSol?: MarcaOculosSolOrderByWithRelationInput
  }

  export type OculosSolWhereUniqueInput = Prisma.AtLeast<{
    codigo?: string
    AND?: OculosSolWhereInput | OculosSolWhereInput[]
    OR?: OculosSolWhereInput[]
    NOT?: OculosSolWhereInput | OculosSolWhereInput[]
    descricao?: StringFilter<"OculosSol"> | string
    marcaOculosSolId?: StringFilter<"OculosSol"> | string
    marcaOculosSol?: XOR<MarcaOculosSolScalarRelationFilter, MarcaOculosSolWhereInput>
  }, "codigo">

  export type OculosSolOrderByWithAggregationInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    marcaOculosSolId?: SortOrder
    _count?: OculosSolCountOrderByAggregateInput
    _max?: OculosSolMaxOrderByAggregateInput
    _min?: OculosSolMinOrderByAggregateInput
  }

  export type OculosSolScalarWhereWithAggregatesInput = {
    AND?: OculosSolScalarWhereWithAggregatesInput | OculosSolScalarWhereWithAggregatesInput[]
    OR?: OculosSolScalarWhereWithAggregatesInput[]
    NOT?: OculosSolScalarWhereWithAggregatesInput | OculosSolScalarWhereWithAggregatesInput[]
    codigo?: StringWithAggregatesFilter<"OculosSol"> | string
    descricao?: StringWithAggregatesFilter<"OculosSol"> | string
    marcaOculosSolId?: StringWithAggregatesFilter<"OculosSol"> | string
  }

  export type MarcaOculosSolWhereInput = {
    AND?: MarcaOculosSolWhereInput | MarcaOculosSolWhereInput[]
    OR?: MarcaOculosSolWhereInput[]
    NOT?: MarcaOculosSolWhereInput | MarcaOculosSolWhereInput[]
    id?: StringFilter<"MarcaOculosSol"> | string
    marca?: StringFilter<"MarcaOculosSol"> | string
    OculosSol?: OculosSolListRelationFilter
  }

  export type MarcaOculosSolOrderByWithRelationInput = {
    id?: SortOrder
    marca?: SortOrder
    OculosSol?: OculosSolOrderByRelationAggregateInput
  }

  export type MarcaOculosSolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarcaOculosSolWhereInput | MarcaOculosSolWhereInput[]
    OR?: MarcaOculosSolWhereInput[]
    NOT?: MarcaOculosSolWhereInput | MarcaOculosSolWhereInput[]
    marca?: StringFilter<"MarcaOculosSol"> | string
    OculosSol?: OculosSolListRelationFilter
  }, "id">

  export type MarcaOculosSolOrderByWithAggregationInput = {
    id?: SortOrder
    marca?: SortOrder
    _count?: MarcaOculosSolCountOrderByAggregateInput
    _max?: MarcaOculosSolMaxOrderByAggregateInput
    _min?: MarcaOculosSolMinOrderByAggregateInput
  }

  export type MarcaOculosSolScalarWhereWithAggregatesInput = {
    AND?: MarcaOculosSolScalarWhereWithAggregatesInput | MarcaOculosSolScalarWhereWithAggregatesInput[]
    OR?: MarcaOculosSolScalarWhereWithAggregatesInput[]
    NOT?: MarcaOculosSolScalarWhereWithAggregatesInput | MarcaOculosSolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarcaOculosSol"> | string
    marca?: StringWithAggregatesFilter<"MarcaOculosSol"> | string
  }

  export type OculosSolCreateInput = {
    codigo?: string
    descricao: string
    marcaOculosSol: MarcaOculosSolCreateNestedOneWithoutOculosSolInput
  }

  export type OculosSolUncheckedCreateInput = {
    codigo?: string
    descricao: string
    marcaOculosSolId: string
  }

  export type OculosSolUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    marcaOculosSol?: MarcaOculosSolUpdateOneRequiredWithoutOculosSolNestedInput
  }

  export type OculosSolUncheckedUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    marcaOculosSolId?: StringFieldUpdateOperationsInput | string
  }

  export type OculosSolCreateManyInput = {
    codigo?: string
    descricao: string
    marcaOculosSolId: string
  }

  export type OculosSolUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type OculosSolUncheckedUpdateManyInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    marcaOculosSolId?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaOculosSolCreateInput = {
    id?: string
    marca: string
    OculosSol?: OculosSolCreateNestedManyWithoutMarcaOculosSolInput
  }

  export type MarcaOculosSolUncheckedCreateInput = {
    id?: string
    marca: string
    OculosSol?: OculosSolUncheckedCreateNestedManyWithoutMarcaOculosSolInput
  }

  export type MarcaOculosSolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    OculosSol?: OculosSolUpdateManyWithoutMarcaOculosSolNestedInput
  }

  export type MarcaOculosSolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    OculosSol?: OculosSolUncheckedUpdateManyWithoutMarcaOculosSolNestedInput
  }

  export type MarcaOculosSolCreateManyInput = {
    id?: string
    marca: string
  }

  export type MarcaOculosSolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaOculosSolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MarcaOculosSolScalarRelationFilter = {
    is?: MarcaOculosSolWhereInput
    isNot?: MarcaOculosSolWhereInput
  }

  export type OculosSolCountOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    marcaOculosSolId?: SortOrder
  }

  export type OculosSolMaxOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    marcaOculosSolId?: SortOrder
  }

  export type OculosSolMinOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    marcaOculosSolId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type OculosSolListRelationFilter = {
    every?: OculosSolWhereInput
    some?: OculosSolWhereInput
    none?: OculosSolWhereInput
  }

  export type OculosSolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarcaOculosSolCountOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
  }

  export type MarcaOculosSolMaxOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
  }

  export type MarcaOculosSolMinOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
  }

  export type MarcaOculosSolCreateNestedOneWithoutOculosSolInput = {
    create?: XOR<MarcaOculosSolCreateWithoutOculosSolInput, MarcaOculosSolUncheckedCreateWithoutOculosSolInput>
    connectOrCreate?: MarcaOculosSolCreateOrConnectWithoutOculosSolInput
    connect?: MarcaOculosSolWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MarcaOculosSolUpdateOneRequiredWithoutOculosSolNestedInput = {
    create?: XOR<MarcaOculosSolCreateWithoutOculosSolInput, MarcaOculosSolUncheckedCreateWithoutOculosSolInput>
    connectOrCreate?: MarcaOculosSolCreateOrConnectWithoutOculosSolInput
    upsert?: MarcaOculosSolUpsertWithoutOculosSolInput
    connect?: MarcaOculosSolWhereUniqueInput
    update?: XOR<XOR<MarcaOculosSolUpdateToOneWithWhereWithoutOculosSolInput, MarcaOculosSolUpdateWithoutOculosSolInput>, MarcaOculosSolUncheckedUpdateWithoutOculosSolInput>
  }

  export type OculosSolCreateNestedManyWithoutMarcaOculosSolInput = {
    create?: XOR<OculosSolCreateWithoutMarcaOculosSolInput, OculosSolUncheckedCreateWithoutMarcaOculosSolInput> | OculosSolCreateWithoutMarcaOculosSolInput[] | OculosSolUncheckedCreateWithoutMarcaOculosSolInput[]
    connectOrCreate?: OculosSolCreateOrConnectWithoutMarcaOculosSolInput | OculosSolCreateOrConnectWithoutMarcaOculosSolInput[]
    createMany?: OculosSolCreateManyMarcaOculosSolInputEnvelope
    connect?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
  }

  export type OculosSolUncheckedCreateNestedManyWithoutMarcaOculosSolInput = {
    create?: XOR<OculosSolCreateWithoutMarcaOculosSolInput, OculosSolUncheckedCreateWithoutMarcaOculosSolInput> | OculosSolCreateWithoutMarcaOculosSolInput[] | OculosSolUncheckedCreateWithoutMarcaOculosSolInput[]
    connectOrCreate?: OculosSolCreateOrConnectWithoutMarcaOculosSolInput | OculosSolCreateOrConnectWithoutMarcaOculosSolInput[]
    createMany?: OculosSolCreateManyMarcaOculosSolInputEnvelope
    connect?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
  }

  export type OculosSolUpdateManyWithoutMarcaOculosSolNestedInput = {
    create?: XOR<OculosSolCreateWithoutMarcaOculosSolInput, OculosSolUncheckedCreateWithoutMarcaOculosSolInput> | OculosSolCreateWithoutMarcaOculosSolInput[] | OculosSolUncheckedCreateWithoutMarcaOculosSolInput[]
    connectOrCreate?: OculosSolCreateOrConnectWithoutMarcaOculosSolInput | OculosSolCreateOrConnectWithoutMarcaOculosSolInput[]
    upsert?: OculosSolUpsertWithWhereUniqueWithoutMarcaOculosSolInput | OculosSolUpsertWithWhereUniqueWithoutMarcaOculosSolInput[]
    createMany?: OculosSolCreateManyMarcaOculosSolInputEnvelope
    set?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
    disconnect?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
    delete?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
    connect?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
    update?: OculosSolUpdateWithWhereUniqueWithoutMarcaOculosSolInput | OculosSolUpdateWithWhereUniqueWithoutMarcaOculosSolInput[]
    updateMany?: OculosSolUpdateManyWithWhereWithoutMarcaOculosSolInput | OculosSolUpdateManyWithWhereWithoutMarcaOculosSolInput[]
    deleteMany?: OculosSolScalarWhereInput | OculosSolScalarWhereInput[]
  }

  export type OculosSolUncheckedUpdateManyWithoutMarcaOculosSolNestedInput = {
    create?: XOR<OculosSolCreateWithoutMarcaOculosSolInput, OculosSolUncheckedCreateWithoutMarcaOculosSolInput> | OculosSolCreateWithoutMarcaOculosSolInput[] | OculosSolUncheckedCreateWithoutMarcaOculosSolInput[]
    connectOrCreate?: OculosSolCreateOrConnectWithoutMarcaOculosSolInput | OculosSolCreateOrConnectWithoutMarcaOculosSolInput[]
    upsert?: OculosSolUpsertWithWhereUniqueWithoutMarcaOculosSolInput | OculosSolUpsertWithWhereUniqueWithoutMarcaOculosSolInput[]
    createMany?: OculosSolCreateManyMarcaOculosSolInputEnvelope
    set?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
    disconnect?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
    delete?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
    connect?: OculosSolWhereUniqueInput | OculosSolWhereUniqueInput[]
    update?: OculosSolUpdateWithWhereUniqueWithoutMarcaOculosSolInput | OculosSolUpdateWithWhereUniqueWithoutMarcaOculosSolInput[]
    updateMany?: OculosSolUpdateManyWithWhereWithoutMarcaOculosSolInput | OculosSolUpdateManyWithWhereWithoutMarcaOculosSolInput[]
    deleteMany?: OculosSolScalarWhereInput | OculosSolScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MarcaOculosSolCreateWithoutOculosSolInput = {
    id?: string
    marca: string
  }

  export type MarcaOculosSolUncheckedCreateWithoutOculosSolInput = {
    id?: string
    marca: string
  }

  export type MarcaOculosSolCreateOrConnectWithoutOculosSolInput = {
    where: MarcaOculosSolWhereUniqueInput
    create: XOR<MarcaOculosSolCreateWithoutOculosSolInput, MarcaOculosSolUncheckedCreateWithoutOculosSolInput>
  }

  export type MarcaOculosSolUpsertWithoutOculosSolInput = {
    update: XOR<MarcaOculosSolUpdateWithoutOculosSolInput, MarcaOculosSolUncheckedUpdateWithoutOculosSolInput>
    create: XOR<MarcaOculosSolCreateWithoutOculosSolInput, MarcaOculosSolUncheckedCreateWithoutOculosSolInput>
    where?: MarcaOculosSolWhereInput
  }

  export type MarcaOculosSolUpdateToOneWithWhereWithoutOculosSolInput = {
    where?: MarcaOculosSolWhereInput
    data: XOR<MarcaOculosSolUpdateWithoutOculosSolInput, MarcaOculosSolUncheckedUpdateWithoutOculosSolInput>
  }

  export type MarcaOculosSolUpdateWithoutOculosSolInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaOculosSolUncheckedUpdateWithoutOculosSolInput = {
    id?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
  }

  export type OculosSolCreateWithoutMarcaOculosSolInput = {
    codigo?: string
    descricao: string
  }

  export type OculosSolUncheckedCreateWithoutMarcaOculosSolInput = {
    codigo?: string
    descricao: string
  }

  export type OculosSolCreateOrConnectWithoutMarcaOculosSolInput = {
    where: OculosSolWhereUniqueInput
    create: XOR<OculosSolCreateWithoutMarcaOculosSolInput, OculosSolUncheckedCreateWithoutMarcaOculosSolInput>
  }

  export type OculosSolCreateManyMarcaOculosSolInputEnvelope = {
    data: OculosSolCreateManyMarcaOculosSolInput | OculosSolCreateManyMarcaOculosSolInput[]
    skipDuplicates?: boolean
  }

  export type OculosSolUpsertWithWhereUniqueWithoutMarcaOculosSolInput = {
    where: OculosSolWhereUniqueInput
    update: XOR<OculosSolUpdateWithoutMarcaOculosSolInput, OculosSolUncheckedUpdateWithoutMarcaOculosSolInput>
    create: XOR<OculosSolCreateWithoutMarcaOculosSolInput, OculosSolUncheckedCreateWithoutMarcaOculosSolInput>
  }

  export type OculosSolUpdateWithWhereUniqueWithoutMarcaOculosSolInput = {
    where: OculosSolWhereUniqueInput
    data: XOR<OculosSolUpdateWithoutMarcaOculosSolInput, OculosSolUncheckedUpdateWithoutMarcaOculosSolInput>
  }

  export type OculosSolUpdateManyWithWhereWithoutMarcaOculosSolInput = {
    where: OculosSolScalarWhereInput
    data: XOR<OculosSolUpdateManyMutationInput, OculosSolUncheckedUpdateManyWithoutMarcaOculosSolInput>
  }

  export type OculosSolScalarWhereInput = {
    AND?: OculosSolScalarWhereInput | OculosSolScalarWhereInput[]
    OR?: OculosSolScalarWhereInput[]
    NOT?: OculosSolScalarWhereInput | OculosSolScalarWhereInput[]
    codigo?: StringFilter<"OculosSol"> | string
    descricao?: StringFilter<"OculosSol"> | string
    marcaOculosSolId?: StringFilter<"OculosSol"> | string
  }

  export type OculosSolCreateManyMarcaOculosSolInput = {
    codigo?: string
    descricao: string
  }

  export type OculosSolUpdateWithoutMarcaOculosSolInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type OculosSolUncheckedUpdateWithoutMarcaOculosSolInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type OculosSolUncheckedUpdateManyWithoutMarcaOculosSolInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}