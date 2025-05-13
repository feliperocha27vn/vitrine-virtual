
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
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Marca
 * 
 */
export type Marca = $Result.DefaultSelection<Prisma.$MarcaPayload>
/**
 * Model Vendedora
 * 
 */
export type Vendedora = $Result.DefaultSelection<Prisma.$VendedoraPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
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
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marca`: Exposes CRUD operations for the **Marca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marcas
    * const marcas = await prisma.marca.findMany()
    * ```
    */
  get marca(): Prisma.MarcaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendedora`: Exposes CRUD operations for the **Vendedora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendedoras
    * const vendedoras = await prisma.vendedora.findMany()
    * ```
    */
  get vendedora(): Prisma.VendedoraDelegate<ExtArgs, ClientOptions>;
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
    Categoria: 'Categoria',
    Produto: 'Produto',
    Marca: 'Marca',
    Vendedora: 'Vendedora'
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
      modelProps: "categoria" | "produto" | "marca" | "vendedora"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Marca: {
        payload: Prisma.$MarcaPayload<ExtArgs>
        fields: Prisma.MarcaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarcaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarcaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          findFirst: {
            args: Prisma.MarcaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarcaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          findMany: {
            args: Prisma.MarcaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          create: {
            args: Prisma.MarcaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          createMany: {
            args: Prisma.MarcaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarcaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          delete: {
            args: Prisma.MarcaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          update: {
            args: Prisma.MarcaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          deleteMany: {
            args: Prisma.MarcaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarcaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarcaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          upsert: {
            args: Prisma.MarcaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          aggregate: {
            args: Prisma.MarcaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarca>
          }
          groupBy: {
            args: Prisma.MarcaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarcaCountArgs<ExtArgs>
            result: $Utils.Optional<MarcaCountAggregateOutputType> | number
          }
        }
      }
      Vendedora: {
        payload: Prisma.$VendedoraPayload<ExtArgs>
        fields: Prisma.VendedoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendedoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendedoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload>
          }
          findFirst: {
            args: Prisma.VendedoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendedoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload>
          }
          findMany: {
            args: Prisma.VendedoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload>[]
          }
          create: {
            args: Prisma.VendedoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload>
          }
          createMany: {
            args: Prisma.VendedoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendedoraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload>[]
          }
          delete: {
            args: Prisma.VendedoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload>
          }
          update: {
            args: Prisma.VendedoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload>
          }
          deleteMany: {
            args: Prisma.VendedoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendedoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendedoraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload>[]
          }
          upsert: {
            args: Prisma.VendedoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoraPayload>
          }
          aggregate: {
            args: Prisma.VendedoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendedora>
          }
          groupBy: {
            args: Prisma.VendedoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendedoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendedoraCountArgs<ExtArgs>
            result: $Utils.Optional<VendedoraCountAggregateOutputType> | number
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
    categoria?: CategoriaOmit
    produto?: ProdutoOmit
    marca?: MarcaOmit
    vendedora?: VendedoraOmit
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
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    Produto: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | CategoriaCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Count Type MarcaCountOutputType
   */

  export type MarcaCountOutputType = {
    Produto: number
  }

  export type MarcaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | MarcaCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * MarcaCountOutputType without action
   */
  export type MarcaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaCountOutputType
     */
    select?: MarcaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarcaCountOutputType without action
   */
  export type MarcaCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    descricao: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    descricao: string
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    Produto?: boolean | Categoria$ProdutoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | Categoria$ProdutoArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      Produto: Prisma.$ProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Produto<T extends Categoria$ProdutoArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$ProdutoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.Produto
   */
  export type Categoria$ProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sku: string | null
    descricao: string | null
    url_imagem: string | null
    categoriaId: string | null
    marcaId: string | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sku: string | null
    descricao: string | null
    url_imagem: string | null
    categoriaId: string | null
    marcaId: string | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    sku: number
    descricao: number
    url_imagem: number
    categoriaId: number
    marcaId: number
    _all: number
  }


  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    sku?: true
    descricao?: true
    url_imagem?: true
    categoriaId?: true
    marcaId?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    sku?: true
    descricao?: true
    url_imagem?: true
    categoriaId?: true
    marcaId?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    sku?: true
    descricao?: true
    url_imagem?: true
    categoriaId?: true
    marcaId?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: string
    nome: string
    sku: string
    descricao: string | null
    url_imagem: string
    categoriaId: string
    marcaId: string
    _count: ProdutoCountAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sku?: boolean
    descricao?: boolean
    url_imagem?: boolean
    categoriaId?: boolean
    marcaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sku?: boolean
    descricao?: boolean
    url_imagem?: boolean
    categoriaId?: boolean
    marcaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sku?: boolean
    descricao?: boolean
    url_imagem?: boolean
    categoriaId?: boolean
    marcaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    sku?: boolean
    descricao?: boolean
    url_imagem?: boolean
    categoriaId?: boolean
    marcaId?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sku" | "descricao" | "url_imagem" | "categoriaId" | "marcaId", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      marca: Prisma.$MarcaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sku: string
      descricao: string | null
      url_imagem: string
      categoriaId: string
      marcaId: string
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    marca<T extends MarcaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarcaDefaultArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'String'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly sku: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly url_imagem: FieldRef<"Produto", 'String'>
    readonly categoriaId: FieldRef<"Produto", 'String'>
    readonly marcaId: FieldRef<"Produto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Marca
   */

  export type AggregateMarca = {
    _count: MarcaCountAggregateOutputType | null
    _min: MarcaMinAggregateOutputType | null
    _max: MarcaMaxAggregateOutputType | null
  }

  export type MarcaMinAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type MarcaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type MarcaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type MarcaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type MarcaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type MarcaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type MarcaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marca to aggregate.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marcas
    **/
    _count?: true | MarcaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcaMaxAggregateInputType
  }

  export type GetMarcaAggregateType<T extends MarcaAggregateArgs> = {
        [P in keyof T & keyof AggregateMarca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarca[P]>
      : GetScalarType<T[P], AggregateMarca[P]>
  }




  export type MarcaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcaWhereInput
    orderBy?: MarcaOrderByWithAggregationInput | MarcaOrderByWithAggregationInput[]
    by: MarcaScalarFieldEnum[] | MarcaScalarFieldEnum
    having?: MarcaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcaCountAggregateInputType | true
    _min?: MarcaMinAggregateInputType
    _max?: MarcaMaxAggregateInputType
  }

  export type MarcaGroupByOutputType = {
    id: string
    nome: string
    _count: MarcaCountAggregateOutputType | null
    _min: MarcaMinAggregateOutputType | null
    _max: MarcaMaxAggregateOutputType | null
  }

  type GetMarcaGroupByPayload<T extends MarcaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcaGroupByOutputType[P]>
            : GetScalarType<T[P], MarcaGroupByOutputType[P]>
        }
      >
    >


  export type MarcaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    Produto?: boolean | Marca$ProdutoArgs<ExtArgs>
    _count?: boolean | MarcaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type MarcaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["marca"]>
  export type MarcaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produto?: boolean | Marca$ProdutoArgs<ExtArgs>
    _count?: boolean | MarcaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarcaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarcaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarcaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marca"
    objects: {
      Produto: Prisma.$ProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
    }, ExtArgs["result"]["marca"]>
    composites: {}
  }

  type MarcaGetPayload<S extends boolean | null | undefined | MarcaDefaultArgs> = $Result.GetResult<Prisma.$MarcaPayload, S>

  type MarcaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarcaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcaCountAggregateInputType | true
    }

  export interface MarcaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marca'], meta: { name: 'Marca' } }
    /**
     * Find zero or one Marca that matches the filter.
     * @param {MarcaFindUniqueArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarcaFindUniqueArgs>(args: SelectSubset<T, MarcaFindUniqueArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarcaFindUniqueOrThrowArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarcaFindUniqueOrThrowArgs>(args: SelectSubset<T, MarcaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindFirstArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarcaFindFirstArgs>(args?: SelectSubset<T, MarcaFindFirstArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindFirstOrThrowArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarcaFindFirstOrThrowArgs>(args?: SelectSubset<T, MarcaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marcas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marcas
     * const marcas = await prisma.marca.findMany()
     * 
     * // Get first 10 Marcas
     * const marcas = await prisma.marca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcaWithIdOnly = await prisma.marca.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarcaFindManyArgs>(args?: SelectSubset<T, MarcaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marca.
     * @param {MarcaCreateArgs} args - Arguments to create a Marca.
     * @example
     * // Create one Marca
     * const Marca = await prisma.marca.create({
     *   data: {
     *     // ... data to create a Marca
     *   }
     * })
     * 
     */
    create<T extends MarcaCreateArgs>(args: SelectSubset<T, MarcaCreateArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marcas.
     * @param {MarcaCreateManyArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marca = await prisma.marca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarcaCreateManyArgs>(args?: SelectSubset<T, MarcaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marcas and returns the data saved in the database.
     * @param {MarcaCreateManyAndReturnArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marca = await prisma.marca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marcas and only return the `id`
     * const marcaWithIdOnly = await prisma.marca.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarcaCreateManyAndReturnArgs>(args?: SelectSubset<T, MarcaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marca.
     * @param {MarcaDeleteArgs} args - Arguments to delete one Marca.
     * @example
     * // Delete one Marca
     * const Marca = await prisma.marca.delete({
     *   where: {
     *     // ... filter to delete one Marca
     *   }
     * })
     * 
     */
    delete<T extends MarcaDeleteArgs>(args: SelectSubset<T, MarcaDeleteArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marca.
     * @param {MarcaUpdateArgs} args - Arguments to update one Marca.
     * @example
     * // Update one Marca
     * const marca = await prisma.marca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarcaUpdateArgs>(args: SelectSubset<T, MarcaUpdateArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marcas.
     * @param {MarcaDeleteManyArgs} args - Arguments to filter Marcas to delete.
     * @example
     * // Delete a few Marcas
     * const { count } = await prisma.marca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarcaDeleteManyArgs>(args?: SelectSubset<T, MarcaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marcas
     * const marca = await prisma.marca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarcaUpdateManyArgs>(args: SelectSubset<T, MarcaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas and returns the data updated in the database.
     * @param {MarcaUpdateManyAndReturnArgs} args - Arguments to update many Marcas.
     * @example
     * // Update many Marcas
     * const marca = await prisma.marca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marcas and only return the `id`
     * const marcaWithIdOnly = await prisma.marca.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarcaUpdateManyAndReturnArgs>(args: SelectSubset<T, MarcaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marca.
     * @param {MarcaUpsertArgs} args - Arguments to update or create a Marca.
     * @example
     * // Update or create a Marca
     * const marca = await prisma.marca.upsert({
     *   create: {
     *     // ... data to create a Marca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marca we want to update
     *   }
     * })
     */
    upsert<T extends MarcaUpsertArgs>(args: SelectSubset<T, MarcaUpsertArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaCountArgs} args - Arguments to filter Marcas to count.
     * @example
     * // Count the number of Marcas
     * const count = await prisma.marca.count({
     *   where: {
     *     // ... the filter for the Marcas we want to count
     *   }
     * })
    **/
    count<T extends MarcaCountArgs>(
      args?: Subset<T, MarcaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarcaAggregateArgs>(args: Subset<T, MarcaAggregateArgs>): Prisma.PrismaPromise<GetMarcaAggregateType<T>>

    /**
     * Group by Marca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaGroupByArgs} args - Group by arguments.
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
      T extends MarcaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcaGroupByArgs['orderBy'] }
        : { orderBy?: MarcaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarcaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marca model
   */
  readonly fields: MarcaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarcaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Produto<T extends Marca$ProdutoArgs<ExtArgs> = {}>(args?: Subset<T, Marca$ProdutoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Marca model
   */
  interface MarcaFieldRefs {
    readonly id: FieldRef<"Marca", 'String'>
    readonly nome: FieldRef<"Marca", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Marca findUnique
   */
  export type MarcaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca findUniqueOrThrow
   */
  export type MarcaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca findFirst
   */
  export type MarcaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcas.
     */
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca findFirstOrThrow
   */
  export type MarcaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcas.
     */
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca findMany
   */
  export type MarcaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marcas to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca create
   */
  export type MarcaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * The data needed to create a Marca.
     */
    data: XOR<MarcaCreateInput, MarcaUncheckedCreateInput>
  }

  /**
   * Marca createMany
   */
  export type MarcaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marcas.
     */
    data: MarcaCreateManyInput | MarcaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marca createManyAndReturn
   */
  export type MarcaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data used to create many Marcas.
     */
    data: MarcaCreateManyInput | MarcaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marca update
   */
  export type MarcaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * The data needed to update a Marca.
     */
    data: XOR<MarcaUpdateInput, MarcaUncheckedUpdateInput>
    /**
     * Choose, which Marca to update.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca updateMany
   */
  export type MarcaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marcas.
     */
    data: XOR<MarcaUpdateManyMutationInput, MarcaUncheckedUpdateManyInput>
    /**
     * Filter which Marcas to update
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to update.
     */
    limit?: number
  }

  /**
   * Marca updateManyAndReturn
   */
  export type MarcaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data used to update Marcas.
     */
    data: XOR<MarcaUpdateManyMutationInput, MarcaUncheckedUpdateManyInput>
    /**
     * Filter which Marcas to update
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to update.
     */
    limit?: number
  }

  /**
   * Marca upsert
   */
  export type MarcaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * The filter to search for the Marca to update in case it exists.
     */
    where: MarcaWhereUniqueInput
    /**
     * In case the Marca found by the `where` argument doesn't exist, create a new Marca with this data.
     */
    create: XOR<MarcaCreateInput, MarcaUncheckedCreateInput>
    /**
     * In case the Marca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarcaUpdateInput, MarcaUncheckedUpdateInput>
  }

  /**
   * Marca delete
   */
  export type MarcaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter which Marca to delete.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca deleteMany
   */
  export type MarcaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marcas to delete
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to delete.
     */
    limit?: number
  }

  /**
   * Marca.Produto
   */
  export type Marca$ProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Marca without action
   */
  export type MarcaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
  }


  /**
   * Model Vendedora
   */

  export type AggregateVendedora = {
    _count: VendedoraCountAggregateOutputType | null
    _min: VendedoraMinAggregateOutputType | null
    _max: VendedoraMaxAggregateOutputType | null
  }

  export type VendedoraMinAggregateOutputType = {
    id: string | null
    nome: string | null
    senha_hash: string | null
  }

  export type VendedoraMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    senha_hash: string | null
  }

  export type VendedoraCountAggregateOutputType = {
    id: number
    nome: number
    senha_hash: number
    _all: number
  }


  export type VendedoraMinAggregateInputType = {
    id?: true
    nome?: true
    senha_hash?: true
  }

  export type VendedoraMaxAggregateInputType = {
    id?: true
    nome?: true
    senha_hash?: true
  }

  export type VendedoraCountAggregateInputType = {
    id?: true
    nome?: true
    senha_hash?: true
    _all?: true
  }

  export type VendedoraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedora to aggregate.
     */
    where?: VendedoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedoras to fetch.
     */
    orderBy?: VendedoraOrderByWithRelationInput | VendedoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendedoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendedoras
    **/
    _count?: true | VendedoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendedoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendedoraMaxAggregateInputType
  }

  export type GetVendedoraAggregateType<T extends VendedoraAggregateArgs> = {
        [P in keyof T & keyof AggregateVendedora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendedora[P]>
      : GetScalarType<T[P], AggregateVendedora[P]>
  }




  export type VendedoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendedoraWhereInput
    orderBy?: VendedoraOrderByWithAggregationInput | VendedoraOrderByWithAggregationInput[]
    by: VendedoraScalarFieldEnum[] | VendedoraScalarFieldEnum
    having?: VendedoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendedoraCountAggregateInputType | true
    _min?: VendedoraMinAggregateInputType
    _max?: VendedoraMaxAggregateInputType
  }

  export type VendedoraGroupByOutputType = {
    id: string
    nome: string
    senha_hash: string
    _count: VendedoraCountAggregateOutputType | null
    _min: VendedoraMinAggregateOutputType | null
    _max: VendedoraMaxAggregateOutputType | null
  }

  type GetVendedoraGroupByPayload<T extends VendedoraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendedoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendedoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendedoraGroupByOutputType[P]>
            : GetScalarType<T[P], VendedoraGroupByOutputType[P]>
        }
      >
    >


  export type VendedoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha_hash?: boolean
  }, ExtArgs["result"]["vendedora"]>

  export type VendedoraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha_hash?: boolean
  }, ExtArgs["result"]["vendedora"]>

  export type VendedoraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha_hash?: boolean
  }, ExtArgs["result"]["vendedora"]>

  export type VendedoraSelectScalar = {
    id?: boolean
    nome?: boolean
    senha_hash?: boolean
  }

  export type VendedoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "senha_hash", ExtArgs["result"]["vendedora"]>

  export type $VendedoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendedora"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      senha_hash: string
    }, ExtArgs["result"]["vendedora"]>
    composites: {}
  }

  type VendedoraGetPayload<S extends boolean | null | undefined | VendedoraDefaultArgs> = $Result.GetResult<Prisma.$VendedoraPayload, S>

  type VendedoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendedoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendedoraCountAggregateInputType | true
    }

  export interface VendedoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendedora'], meta: { name: 'Vendedora' } }
    /**
     * Find zero or one Vendedora that matches the filter.
     * @param {VendedoraFindUniqueArgs} args - Arguments to find a Vendedora
     * @example
     * // Get one Vendedora
     * const vendedora = await prisma.vendedora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendedoraFindUniqueArgs>(args: SelectSubset<T, VendedoraFindUniqueArgs<ExtArgs>>): Prisma__VendedoraClient<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendedora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendedoraFindUniqueOrThrowArgs} args - Arguments to find a Vendedora
     * @example
     * // Get one Vendedora
     * const vendedora = await prisma.vendedora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendedoraFindUniqueOrThrowArgs>(args: SelectSubset<T, VendedoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendedoraClient<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoraFindFirstArgs} args - Arguments to find a Vendedora
     * @example
     * // Get one Vendedora
     * const vendedora = await prisma.vendedora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendedoraFindFirstArgs>(args?: SelectSubset<T, VendedoraFindFirstArgs<ExtArgs>>): Prisma__VendedoraClient<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoraFindFirstOrThrowArgs} args - Arguments to find a Vendedora
     * @example
     * // Get one Vendedora
     * const vendedora = await prisma.vendedora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendedoraFindFirstOrThrowArgs>(args?: SelectSubset<T, VendedoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendedoraClient<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendedoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendedoras
     * const vendedoras = await prisma.vendedora.findMany()
     * 
     * // Get first 10 Vendedoras
     * const vendedoras = await prisma.vendedora.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendedoraWithIdOnly = await prisma.vendedora.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendedoraFindManyArgs>(args?: SelectSubset<T, VendedoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendedora.
     * @param {VendedoraCreateArgs} args - Arguments to create a Vendedora.
     * @example
     * // Create one Vendedora
     * const Vendedora = await prisma.vendedora.create({
     *   data: {
     *     // ... data to create a Vendedora
     *   }
     * })
     * 
     */
    create<T extends VendedoraCreateArgs>(args: SelectSubset<T, VendedoraCreateArgs<ExtArgs>>): Prisma__VendedoraClient<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendedoras.
     * @param {VendedoraCreateManyArgs} args - Arguments to create many Vendedoras.
     * @example
     * // Create many Vendedoras
     * const vendedora = await prisma.vendedora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendedoraCreateManyArgs>(args?: SelectSubset<T, VendedoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendedoras and returns the data saved in the database.
     * @param {VendedoraCreateManyAndReturnArgs} args - Arguments to create many Vendedoras.
     * @example
     * // Create many Vendedoras
     * const vendedora = await prisma.vendedora.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendedoras and only return the `id`
     * const vendedoraWithIdOnly = await prisma.vendedora.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendedoraCreateManyAndReturnArgs>(args?: SelectSubset<T, VendedoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendedora.
     * @param {VendedoraDeleteArgs} args - Arguments to delete one Vendedora.
     * @example
     * // Delete one Vendedora
     * const Vendedora = await prisma.vendedora.delete({
     *   where: {
     *     // ... filter to delete one Vendedora
     *   }
     * })
     * 
     */
    delete<T extends VendedoraDeleteArgs>(args: SelectSubset<T, VendedoraDeleteArgs<ExtArgs>>): Prisma__VendedoraClient<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendedora.
     * @param {VendedoraUpdateArgs} args - Arguments to update one Vendedora.
     * @example
     * // Update one Vendedora
     * const vendedora = await prisma.vendedora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendedoraUpdateArgs>(args: SelectSubset<T, VendedoraUpdateArgs<ExtArgs>>): Prisma__VendedoraClient<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendedoras.
     * @param {VendedoraDeleteManyArgs} args - Arguments to filter Vendedoras to delete.
     * @example
     * // Delete a few Vendedoras
     * const { count } = await prisma.vendedora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendedoraDeleteManyArgs>(args?: SelectSubset<T, VendedoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendedoras
     * const vendedora = await prisma.vendedora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendedoraUpdateManyArgs>(args: SelectSubset<T, VendedoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedoras and returns the data updated in the database.
     * @param {VendedoraUpdateManyAndReturnArgs} args - Arguments to update many Vendedoras.
     * @example
     * // Update many Vendedoras
     * const vendedora = await prisma.vendedora.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendedoras and only return the `id`
     * const vendedoraWithIdOnly = await prisma.vendedora.updateManyAndReturn({
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
    updateManyAndReturn<T extends VendedoraUpdateManyAndReturnArgs>(args: SelectSubset<T, VendedoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendedora.
     * @param {VendedoraUpsertArgs} args - Arguments to update or create a Vendedora.
     * @example
     * // Update or create a Vendedora
     * const vendedora = await prisma.vendedora.upsert({
     *   create: {
     *     // ... data to create a Vendedora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendedora we want to update
     *   }
     * })
     */
    upsert<T extends VendedoraUpsertArgs>(args: SelectSubset<T, VendedoraUpsertArgs<ExtArgs>>): Prisma__VendedoraClient<$Result.GetResult<Prisma.$VendedoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendedoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoraCountArgs} args - Arguments to filter Vendedoras to count.
     * @example
     * // Count the number of Vendedoras
     * const count = await prisma.vendedora.count({
     *   where: {
     *     // ... the filter for the Vendedoras we want to count
     *   }
     * })
    **/
    count<T extends VendedoraCountArgs>(
      args?: Subset<T, VendedoraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendedoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendedora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendedoraAggregateArgs>(args: Subset<T, VendedoraAggregateArgs>): Prisma.PrismaPromise<GetVendedoraAggregateType<T>>

    /**
     * Group by Vendedora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoraGroupByArgs} args - Group by arguments.
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
      T extends VendedoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendedoraGroupByArgs['orderBy'] }
        : { orderBy?: VendedoraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendedoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendedoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendedora model
   */
  readonly fields: VendedoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendedora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendedoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Vendedora model
   */
  interface VendedoraFieldRefs {
    readonly id: FieldRef<"Vendedora", 'String'>
    readonly nome: FieldRef<"Vendedora", 'String'>
    readonly senha_hash: FieldRef<"Vendedora", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vendedora findUnique
   */
  export type VendedoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * Filter, which Vendedora to fetch.
     */
    where: VendedoraWhereUniqueInput
  }

  /**
   * Vendedora findUniqueOrThrow
   */
  export type VendedoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * Filter, which Vendedora to fetch.
     */
    where: VendedoraWhereUniqueInput
  }

  /**
   * Vendedora findFirst
   */
  export type VendedoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * Filter, which Vendedora to fetch.
     */
    where?: VendedoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedoras to fetch.
     */
    orderBy?: VendedoraOrderByWithRelationInput | VendedoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedoras.
     */
    cursor?: VendedoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedoras.
     */
    distinct?: VendedoraScalarFieldEnum | VendedoraScalarFieldEnum[]
  }

  /**
   * Vendedora findFirstOrThrow
   */
  export type VendedoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * Filter, which Vendedora to fetch.
     */
    where?: VendedoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedoras to fetch.
     */
    orderBy?: VendedoraOrderByWithRelationInput | VendedoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedoras.
     */
    cursor?: VendedoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedoras.
     */
    distinct?: VendedoraScalarFieldEnum | VendedoraScalarFieldEnum[]
  }

  /**
   * Vendedora findMany
   */
  export type VendedoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * Filter, which Vendedoras to fetch.
     */
    where?: VendedoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedoras to fetch.
     */
    orderBy?: VendedoraOrderByWithRelationInput | VendedoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendedoras.
     */
    cursor?: VendedoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedoras.
     */
    skip?: number
    distinct?: VendedoraScalarFieldEnum | VendedoraScalarFieldEnum[]
  }

  /**
   * Vendedora create
   */
  export type VendedoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * The data needed to create a Vendedora.
     */
    data: XOR<VendedoraCreateInput, VendedoraUncheckedCreateInput>
  }

  /**
   * Vendedora createMany
   */
  export type VendedoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendedoras.
     */
    data: VendedoraCreateManyInput | VendedoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendedora createManyAndReturn
   */
  export type VendedoraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * The data used to create many Vendedoras.
     */
    data: VendedoraCreateManyInput | VendedoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendedora update
   */
  export type VendedoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * The data needed to update a Vendedora.
     */
    data: XOR<VendedoraUpdateInput, VendedoraUncheckedUpdateInput>
    /**
     * Choose, which Vendedora to update.
     */
    where: VendedoraWhereUniqueInput
  }

  /**
   * Vendedora updateMany
   */
  export type VendedoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendedoras.
     */
    data: XOR<VendedoraUpdateManyMutationInput, VendedoraUncheckedUpdateManyInput>
    /**
     * Filter which Vendedoras to update
     */
    where?: VendedoraWhereInput
    /**
     * Limit how many Vendedoras to update.
     */
    limit?: number
  }

  /**
   * Vendedora updateManyAndReturn
   */
  export type VendedoraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * The data used to update Vendedoras.
     */
    data: XOR<VendedoraUpdateManyMutationInput, VendedoraUncheckedUpdateManyInput>
    /**
     * Filter which Vendedoras to update
     */
    where?: VendedoraWhereInput
    /**
     * Limit how many Vendedoras to update.
     */
    limit?: number
  }

  /**
   * Vendedora upsert
   */
  export type VendedoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * The filter to search for the Vendedora to update in case it exists.
     */
    where: VendedoraWhereUniqueInput
    /**
     * In case the Vendedora found by the `where` argument doesn't exist, create a new Vendedora with this data.
     */
    create: XOR<VendedoraCreateInput, VendedoraUncheckedCreateInput>
    /**
     * In case the Vendedora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendedoraUpdateInput, VendedoraUncheckedUpdateInput>
  }

  /**
   * Vendedora delete
   */
  export type VendedoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
    /**
     * Filter which Vendedora to delete.
     */
    where: VendedoraWhereUniqueInput
  }

  /**
   * Vendedora deleteMany
   */
  export type VendedoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedoras to delete
     */
    where?: VendedoraWhereInput
    /**
     * Limit how many Vendedoras to delete.
     */
    limit?: number
  }

  /**
   * Vendedora without action
   */
  export type VendedoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedora
     */
    select?: VendedoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedora
     */
    omit?: VendedoraOmit<ExtArgs> | null
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


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sku: 'sku',
    descricao: 'descricao',
    url_imagem: 'url_imagem',
    categoriaId: 'categoriaId',
    marcaId: 'marcaId'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const MarcaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type MarcaScalarFieldEnum = (typeof MarcaScalarFieldEnum)[keyof typeof MarcaScalarFieldEnum]


  export const VendedoraScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    senha_hash: 'senha_hash'
  };

  export type VendedoraScalarFieldEnum = (typeof VendedoraScalarFieldEnum)[keyof typeof VendedoraScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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


  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    descricao?: StringFilter<"Categoria"> | string
    Produto?: ProdutoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    Produto?: ProdutoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descricao?: StringFilter<"Categoria"> | string
    Produto?: ProdutoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: StringFilter<"Produto"> | string
    nome?: StringFilter<"Produto"> | string
    sku?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    url_imagem?: StringFilter<"Produto"> | string
    categoriaId?: StringFilter<"Produto"> | string
    marcaId?: StringFilter<"Produto"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    marca?: XOR<MarcaScalarRelationFilter, MarcaWhereInput>
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    descricao?: SortOrderInput | SortOrder
    url_imagem?: SortOrder
    categoriaId?: SortOrder
    marcaId?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    marca?: MarcaOrderByWithRelationInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    sku?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    url_imagem?: StringFilter<"Produto"> | string
    categoriaId?: StringFilter<"Produto"> | string
    marcaId?: StringFilter<"Produto"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    marca?: XOR<MarcaScalarRelationFilter, MarcaWhereInput>
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    descricao?: SortOrderInput | SortOrder
    url_imagem?: SortOrder
    categoriaId?: SortOrder
    marcaId?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produto"> | string
    nome?: StringWithAggregatesFilter<"Produto"> | string
    sku?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    url_imagem?: StringWithAggregatesFilter<"Produto"> | string
    categoriaId?: StringWithAggregatesFilter<"Produto"> | string
    marcaId?: StringWithAggregatesFilter<"Produto"> | string
  }

  export type MarcaWhereInput = {
    AND?: MarcaWhereInput | MarcaWhereInput[]
    OR?: MarcaWhereInput[]
    NOT?: MarcaWhereInput | MarcaWhereInput[]
    id?: StringFilter<"Marca"> | string
    nome?: StringFilter<"Marca"> | string
    Produto?: ProdutoListRelationFilter
  }

  export type MarcaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    Produto?: ProdutoOrderByRelationAggregateInput
  }

  export type MarcaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarcaWhereInput | MarcaWhereInput[]
    OR?: MarcaWhereInput[]
    NOT?: MarcaWhereInput | MarcaWhereInput[]
    nome?: StringFilter<"Marca"> | string
    Produto?: ProdutoListRelationFilter
  }, "id">

  export type MarcaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: MarcaCountOrderByAggregateInput
    _max?: MarcaMaxOrderByAggregateInput
    _min?: MarcaMinOrderByAggregateInput
  }

  export type MarcaScalarWhereWithAggregatesInput = {
    AND?: MarcaScalarWhereWithAggregatesInput | MarcaScalarWhereWithAggregatesInput[]
    OR?: MarcaScalarWhereWithAggregatesInput[]
    NOT?: MarcaScalarWhereWithAggregatesInput | MarcaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Marca"> | string
    nome?: StringWithAggregatesFilter<"Marca"> | string
  }

  export type VendedoraWhereInput = {
    AND?: VendedoraWhereInput | VendedoraWhereInput[]
    OR?: VendedoraWhereInput[]
    NOT?: VendedoraWhereInput | VendedoraWhereInput[]
    id?: StringFilter<"Vendedora"> | string
    nome?: StringFilter<"Vendedora"> | string
    senha_hash?: StringFilter<"Vendedora"> | string
  }

  export type VendedoraOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrder
  }

  export type VendedoraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VendedoraWhereInput | VendedoraWhereInput[]
    OR?: VendedoraWhereInput[]
    NOT?: VendedoraWhereInput | VendedoraWhereInput[]
    nome?: StringFilter<"Vendedora"> | string
    senha_hash?: StringFilter<"Vendedora"> | string
  }, "id">

  export type VendedoraOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrder
    _count?: VendedoraCountOrderByAggregateInput
    _max?: VendedoraMaxOrderByAggregateInput
    _min?: VendedoraMinOrderByAggregateInput
  }

  export type VendedoraScalarWhereWithAggregatesInput = {
    AND?: VendedoraScalarWhereWithAggregatesInput | VendedoraScalarWhereWithAggregatesInput[]
    OR?: VendedoraScalarWhereWithAggregatesInput[]
    NOT?: VendedoraScalarWhereWithAggregatesInput | VendedoraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendedora"> | string
    nome?: StringWithAggregatesFilter<"Vendedora"> | string
    senha_hash?: StringWithAggregatesFilter<"Vendedora"> | string
  }

  export type CategoriaCreateInput = {
    id?: string
    descricao: string
    Produto?: ProdutoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    descricao: string
    Produto?: ProdutoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    descricao: string
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoCreateInput = {
    id: string
    nome: string
    sku: string
    descricao?: string | null
    url_imagem: string
    categoria: CategoriaCreateNestedOneWithoutProdutoInput
    marca: MarcaCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id: string
    nome: string
    sku: string
    descricao?: string | null
    url_imagem: string
    categoriaId: string
    marcaId: string
  }

  export type ProdutoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProdutoNestedInput
    marca?: MarcaUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    marcaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoCreateManyInput = {
    id: string
    nome: string
    sku: string
    descricao?: string | null
    url_imagem: string
    categoriaId: string
    marcaId: string
  }

  export type ProdutoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    marcaId?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaCreateInput = {
    id?: string
    nome: string
    Produto?: ProdutoCreateNestedManyWithoutMarcaInput
  }

  export type MarcaUncheckedCreateInput = {
    id?: string
    nome: string
    Produto?: ProdutoUncheckedCreateNestedManyWithoutMarcaInput
  }

  export type MarcaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Produto?: ProdutoUncheckedUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaCreateManyInput = {
    id?: string
    nome: string
  }

  export type MarcaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VendedoraCreateInput = {
    id?: string
    nome: string
    senha_hash: string
  }

  export type VendedoraUncheckedCreateInput = {
    id?: string
    nome: string
    senha_hash: string
  }

  export type VendedoraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
  }

  export type VendedoraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
  }

  export type VendedoraCreateManyInput = {
    id?: string
    nome: string
    senha_hash: string
  }

  export type VendedoraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
  }

  export type VendedoraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
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

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type MarcaScalarRelationFilter = {
    is?: MarcaWhereInput
    isNot?: MarcaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    descricao?: SortOrder
    url_imagem?: SortOrder
    categoriaId?: SortOrder
    marcaId?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    descricao?: SortOrder
    url_imagem?: SortOrder
    categoriaId?: SortOrder
    marcaId?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sku?: SortOrder
    descricao?: SortOrder
    url_imagem?: SortOrder
    categoriaId?: SortOrder
    marcaId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MarcaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type MarcaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type MarcaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type VendedoraCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrder
  }

  export type VendedoraMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrder
  }

  export type VendedoraMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha_hash?: SortOrder
  }

  export type ProdutoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProdutoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutCategoriaInput | ProdutoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutCategoriaInput | ProdutoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutCategoriaInput | ProdutoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutCategoriaInput | ProdutoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutCategoriaInput | ProdutoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutCategoriaInput | ProdutoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutProdutoInput = {
    create?: XOR<CategoriaCreateWithoutProdutoInput, CategoriaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProdutoInput
    connect?: CategoriaWhereUniqueInput
  }

  export type MarcaCreateNestedOneWithoutProdutoInput = {
    create?: XOR<MarcaCreateWithoutProdutoInput, MarcaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: MarcaCreateOrConnectWithoutProdutoInput
    connect?: MarcaWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoriaUpdateOneRequiredWithoutProdutoNestedInput = {
    create?: XOR<CategoriaCreateWithoutProdutoInput, CategoriaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProdutoInput
    upsert?: CategoriaUpsertWithoutProdutoInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProdutoInput, CategoriaUpdateWithoutProdutoInput>, CategoriaUncheckedUpdateWithoutProdutoInput>
  }

  export type MarcaUpdateOneRequiredWithoutProdutoNestedInput = {
    create?: XOR<MarcaCreateWithoutProdutoInput, MarcaUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: MarcaCreateOrConnectWithoutProdutoInput
    upsert?: MarcaUpsertWithoutProdutoInput
    connect?: MarcaWhereUniqueInput
    update?: XOR<XOR<MarcaUpdateToOneWithWhereWithoutProdutoInput, MarcaUpdateWithoutProdutoInput>, MarcaUncheckedUpdateWithoutProdutoInput>
  }

  export type ProdutoCreateNestedManyWithoutMarcaInput = {
    create?: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput> | ProdutoCreateWithoutMarcaInput[] | ProdutoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutMarcaInput | ProdutoCreateOrConnectWithoutMarcaInput[]
    createMany?: ProdutoCreateManyMarcaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutMarcaInput = {
    create?: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput> | ProdutoCreateWithoutMarcaInput[] | ProdutoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutMarcaInput | ProdutoCreateOrConnectWithoutMarcaInput[]
    createMany?: ProdutoCreateManyMarcaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput> | ProdutoCreateWithoutMarcaInput[] | ProdutoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutMarcaInput | ProdutoCreateOrConnectWithoutMarcaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutMarcaInput | ProdutoUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: ProdutoCreateManyMarcaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutMarcaInput | ProdutoUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutMarcaInput | ProdutoUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput> | ProdutoCreateWithoutMarcaInput[] | ProdutoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutMarcaInput | ProdutoCreateOrConnectWithoutMarcaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutMarcaInput | ProdutoUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: ProdutoCreateManyMarcaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutMarcaInput | ProdutoUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutMarcaInput | ProdutoUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProdutoCreateWithoutCategoriaInput = {
    id: string
    nome: string
    sku: string
    descricao?: string | null
    url_imagem: string
    marca: MarcaCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutCategoriaInput = {
    id: string
    nome: string
    sku: string
    descricao?: string | null
    url_imagem: string
    marcaId: string
  }

  export type ProdutoCreateOrConnectWithoutCategoriaInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProdutoCreateManyCategoriaInputEnvelope = {
    data: ProdutoCreateManyCategoriaInput | ProdutoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutCategoriaInput, ProdutoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutCategoriaInput, ProdutoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: StringFilter<"Produto"> | string
    nome?: StringFilter<"Produto"> | string
    sku?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    url_imagem?: StringFilter<"Produto"> | string
    categoriaId?: StringFilter<"Produto"> | string
    marcaId?: StringFilter<"Produto"> | string
  }

  export type CategoriaCreateWithoutProdutoInput = {
    id?: string
    descricao: string
  }

  export type CategoriaUncheckedCreateWithoutProdutoInput = {
    id?: string
    descricao: string
  }

  export type CategoriaCreateOrConnectWithoutProdutoInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProdutoInput, CategoriaUncheckedCreateWithoutProdutoInput>
  }

  export type MarcaCreateWithoutProdutoInput = {
    id?: string
    nome: string
  }

  export type MarcaUncheckedCreateWithoutProdutoInput = {
    id?: string
    nome: string
  }

  export type MarcaCreateOrConnectWithoutProdutoInput = {
    where: MarcaWhereUniqueInput
    create: XOR<MarcaCreateWithoutProdutoInput, MarcaUncheckedCreateWithoutProdutoInput>
  }

  export type CategoriaUpsertWithoutProdutoInput = {
    update: XOR<CategoriaUpdateWithoutProdutoInput, CategoriaUncheckedUpdateWithoutProdutoInput>
    create: XOR<CategoriaCreateWithoutProdutoInput, CategoriaUncheckedCreateWithoutProdutoInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProdutoInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProdutoInput, CategoriaUncheckedUpdateWithoutProdutoInput>
  }

  export type CategoriaUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaUpsertWithoutProdutoInput = {
    update: XOR<MarcaUpdateWithoutProdutoInput, MarcaUncheckedUpdateWithoutProdutoInput>
    create: XOR<MarcaCreateWithoutProdutoInput, MarcaUncheckedCreateWithoutProdutoInput>
    where?: MarcaWhereInput
  }

  export type MarcaUpdateToOneWithWhereWithoutProdutoInput = {
    where?: MarcaWhereInput
    data: XOR<MarcaUpdateWithoutProdutoInput, MarcaUncheckedUpdateWithoutProdutoInput>
  }

  export type MarcaUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaUncheckedUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoCreateWithoutMarcaInput = {
    id: string
    nome: string
    sku: string
    descricao?: string | null
    url_imagem: string
    categoria: CategoriaCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutMarcaInput = {
    id: string
    nome: string
    sku: string
    descricao?: string | null
    url_imagem: string
    categoriaId: string
  }

  export type ProdutoCreateOrConnectWithoutMarcaInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput>
  }

  export type ProdutoCreateManyMarcaInputEnvelope = {
    data: ProdutoCreateManyMarcaInput | ProdutoCreateManyMarcaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoUpsertWithWhereUniqueWithoutMarcaInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutMarcaInput, ProdutoUncheckedUpdateWithoutMarcaInput>
    create: XOR<ProdutoCreateWithoutMarcaInput, ProdutoUncheckedCreateWithoutMarcaInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutMarcaInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutMarcaInput, ProdutoUncheckedUpdateWithoutMarcaInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutMarcaInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutMarcaInput>
  }

  export type ProdutoCreateManyCategoriaInput = {
    id: string
    nome: string
    sku: string
    descricao?: string | null
    url_imagem: string
    marcaId: string
  }

  export type ProdutoUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
    marca?: MarcaUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
    marcaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
    marcaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoCreateManyMarcaInput = {
    id: string
    nome: string
    sku: string
    descricao?: string | null
    url_imagem: string
    categoriaId: string
  }

  export type ProdutoUpdateWithoutMarcaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutMarcaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoUncheckedUpdateManyWithoutMarcaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagem?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
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