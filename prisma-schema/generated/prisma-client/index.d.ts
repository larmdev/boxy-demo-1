
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type AccountPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Account"
  objects: {
    Post: PostPayload<ExtArgs>[]
    PostHistory: PostHistoryPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    accountId: string
    username: string
    firstName: string | null
    lastName: string | null
    email: string | null
    faculty: string | null
    branch: string | null
    passwordHash: string
    passwordSalt: string
    role: string
    isDelete: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["account"]>
  composites: {}
}

/**
 * Model Account
 * 
 */
export type Account = runtime.Types.DefaultSelection<AccountPayload>
export type PostPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Post"
  objects: {
    PostHistory: PostHistoryPayload<ExtArgs>[]
    Image: ImagePayload<ExtArgs>[]
    Account: AccountPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    postId: string
    accountId: string | null
    name: string
    detail: string | null
    point: number | null
    isDelete: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    startDateBkk: string | null
    startTimeBkk: string | null
    endDateBkk: string | null
    endTimeBkk: string | null
    type: string | null
    limit: number
    isLimit: boolean
    startPostBkk: number | null
    endPostBkk: number | null
    startDate: Date | null
    endDate: Date | null
  }, ExtArgs["result"]["post"]>
  composites: {}
}

/**
 * Model Post
 * 
 */
export type Post = runtime.Types.DefaultSelection<PostPayload>
export type PostHistoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "PostHistory"
  objects: {
    Account: AccountPayload<ExtArgs> | null
    Post: PostPayload<ExtArgs> | null
    ImagePostHistory: ImagePostHistoryPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    postHistoryId: string
    accountId: string | null
    postId: string | null
    isCancel: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    status: string | null
    details: string | null
  }, ExtArgs["result"]["postHistory"]>
  composites: {}
}

/**
 * Model PostHistory
 * 
 */
export type PostHistory = runtime.Types.DefaultSelection<PostHistoryPayload>
export type ImagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Image"
  objects: {
    Post: PostPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    imageId: string
    postId: string
    imageUrl: string
    createdAt: Date
  }, ExtArgs["result"]["image"]>
  composites: {}
}

/**
 * Model Image
 * 
 */
export type Image = runtime.Types.DefaultSelection<ImagePayload>
export type ImagePostHistoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ImagePostHistory"
  objects: {
    PostHistory: PostHistoryPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    imagePostHistoryId: string
    postHistoryId: string
    imageUrl: string | null
    createdAt: Date
  }, ExtArgs["result"]["imagePostHistory"]>
  composites: {}
}

/**
 * Model ImagePostHistory
 * 
 */
export type ImagePostHistory = runtime.Types.DefaultSelection<ImagePostHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.postHistory`: Exposes CRUD operations for the **PostHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostHistories
    * const postHistories = await prisma.postHistory.findMany()
    * ```
    */
  get postHistory(): Prisma.PostHistoryDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.imagePostHistory`: Exposes CRUD operations for the **ImagePostHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImagePostHistories
    * const imagePostHistories = await prisma.imagePostHistory.findMany()
    * ```
    */
  get imagePostHistory(): Prisma.ImagePostHistoryDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Account: 'Account',
    Post: 'Post',
    PostHistory: 'PostHistory',
    Image: 'Image',
    ImagePostHistory: 'ImagePostHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'post' | 'postHistory' | 'image' | 'imagePostHistory'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostHistory: {
        payload: PostHistoryPayload<ExtArgs>
        fields: Prisma.PostHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostHistoryPayload>
          }
          findFirst: {
            args: Prisma.PostHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostHistoryPayload>
          }
          findMany: {
            args: Prisma.PostHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostHistoryPayload>[]
          }
          create: {
            args: Prisma.PostHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostHistoryPayload>
          }
          createMany: {
            args: Prisma.PostHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostHistoryPayload>
          }
          update: {
            args: Prisma.PostHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PostHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PostHistoryPayload>
          }
          aggregate: {
            args: Prisma.PostHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePostHistory>
          }
          groupBy: {
            args: Prisma.PostHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<PostHistoryCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      ImagePostHistory: {
        payload: ImagePostHistoryPayload<ExtArgs>
        fields: Prisma.ImagePostHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagePostHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePostHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagePostHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePostHistoryPayload>
          }
          findFirst: {
            args: Prisma.ImagePostHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePostHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagePostHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePostHistoryPayload>
          }
          findMany: {
            args: Prisma.ImagePostHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePostHistoryPayload>[]
          }
          create: {
            args: Prisma.ImagePostHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePostHistoryPayload>
          }
          createMany: {
            args: Prisma.ImagePostHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImagePostHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePostHistoryPayload>
          }
          update: {
            args: Prisma.ImagePostHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePostHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ImagePostHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImagePostHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImagePostHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ImagePostHistoryPayload>
          }
          aggregate: {
            args: Prisma.ImagePostHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImagePostHistory>
          }
          groupBy: {
            args: Prisma.ImagePostHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImagePostHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagePostHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ImagePostHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type AccountCountOutputType
   */


  export type AccountCountOutputType = {
    Post: number
    PostHistory: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Post?: boolean | AccountCountOutputTypeCountPostArgs
    PostHistory?: boolean | AccountCountOutputTypeCountPostHistoryArgs
  }

  // Custom InputTypes

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountPostHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PostHistoryWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    PostHistory: number
    Image: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    PostHistory?: boolean | PostCountOutputTypeCountPostHistoryArgs
    Image?: boolean | PostCountOutputTypeCountImageArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PostHistoryWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountImageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }



  /**
   * Count Type PostHistoryCountOutputType
   */


  export type PostHistoryCountOutputType = {
    ImagePostHistory: number
  }

  export type PostHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ImagePostHistory?: boolean | PostHistoryCountOutputTypeCountImagePostHistoryArgs
  }

  // Custom InputTypes

  /**
   * PostHistoryCountOutputType without action
   */
  export type PostHistoryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistoryCountOutputType
     */
    select?: PostHistoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostHistoryCountOutputType without action
   */
  export type PostHistoryCountOutputTypeCountImagePostHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ImagePostHistoryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    accountId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    faculty: string | null
    branch: string | null
    passwordHash: string | null
    passwordSalt: string | null
    role: string | null
    isDelete: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    accountId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    faculty: string | null
    branch: string | null
    passwordHash: string | null
    passwordSalt: string | null
    role: string | null
    isDelete: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    accountId: number
    username: number
    firstName: number
    lastName: number
    email: number
    faculty: number
    branch: number
    passwordHash: number
    passwordSalt: number
    role: number
    isDelete: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    accountId?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    faculty?: true
    branch?: true
    passwordHash?: true
    passwordSalt?: true
    role?: true
    isDelete?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    accountId?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    faculty?: true
    branch?: true
    passwordHash?: true
    passwordSalt?: true
    role?: true
    isDelete?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    accountId?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    faculty?: true
    branch?: true
    passwordHash?: true
    passwordSalt?: true
    role?: true
    isDelete?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    accountId: string
    username: string
    firstName: string | null
    lastName: string | null
    email: string | null
    faculty: string | null
    branch: string | null
    passwordHash: string
    passwordSalt: string
    role: string
    isDelete: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    faculty?: boolean
    branch?: boolean
    passwordHash?: boolean
    passwordSalt?: boolean
    role?: boolean
    isDelete?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Post?: boolean | Account$PostArgs<ExtArgs>
    PostHistory?: boolean | Account$PostHistoryArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    accountId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    faculty?: boolean
    branch?: boolean
    passwordHash?: boolean
    passwordSalt?: boolean
    role?: boolean
    isDelete?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Post?: boolean | Account$PostArgs<ExtArgs>
    PostHistory?: boolean | Account$PostHistoryArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeArgs<ExtArgs>
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> = $Types.GetResult<AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `accountId`
     * const accountWithAccountIdOnly = await prisma.account.findMany({ select: { accountId: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Post<T extends Account$PostArgs<ExtArgs> = {}>(args?: Subset<T, Account$PostArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PostPayload<ExtArgs>, T, 'findMany'>| Null>;

    PostHistory<T extends Account$PostHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Account$PostHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly accountId: FieldRef<"Account", 'String'>
    readonly username: FieldRef<"Account", 'String'>
    readonly firstName: FieldRef<"Account", 'String'>
    readonly lastName: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly faculty: FieldRef<"Account", 'String'>
    readonly branch: FieldRef<"Account", 'String'>
    readonly passwordHash: FieldRef<"Account", 'String'>
    readonly passwordSalt: FieldRef<"Account", 'String'>
    readonly role: FieldRef<"Account", 'String'>
    readonly isDelete: FieldRef<"Account", 'Boolean'>
    readonly isActive: FieldRef<"Account", 'Boolean'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account.Post
   */
  export type Account$PostArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Account.PostHistory
   */
  export type Account$PostHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    where?: PostHistoryWhereInput
    orderBy?: PostHistoryOrderByWithRelationInput | PostHistoryOrderByWithRelationInput[]
    cursor?: PostHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHistoryScalarFieldEnum | PostHistoryScalarFieldEnum[]
  }


  /**
   * Account without action
   */
  export type AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    point: number | null
    limit: number | null
    startPostBkk: number | null
    endPostBkk: number | null
  }

  export type PostSumAggregateOutputType = {
    point: number | null
    limit: number | null
    startPostBkk: number | null
    endPostBkk: number | null
  }

  export type PostMinAggregateOutputType = {
    postId: string | null
    accountId: string | null
    name: string | null
    detail: string | null
    point: number | null
    isDelete: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    startDateBkk: string | null
    startTimeBkk: string | null
    endDateBkk: string | null
    endTimeBkk: string | null
    type: string | null
    limit: number | null
    isLimit: boolean | null
    startPostBkk: number | null
    endPostBkk: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type PostMaxAggregateOutputType = {
    postId: string | null
    accountId: string | null
    name: string | null
    detail: string | null
    point: number | null
    isDelete: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    startDateBkk: string | null
    startTimeBkk: string | null
    endDateBkk: string | null
    endTimeBkk: string | null
    type: string | null
    limit: number | null
    isLimit: boolean | null
    startPostBkk: number | null
    endPostBkk: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type PostCountAggregateOutputType = {
    postId: number
    accountId: number
    name: number
    detail: number
    point: number
    isDelete: number
    isActive: number
    createdAt: number
    updatedAt: number
    startDateBkk: number
    startTimeBkk: number
    endDateBkk: number
    endTimeBkk: number
    type: number
    limit: number
    isLimit: number
    startPostBkk: number
    endPostBkk: number
    startDate: number
    endDate: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    point?: true
    limit?: true
    startPostBkk?: true
    endPostBkk?: true
  }

  export type PostSumAggregateInputType = {
    point?: true
    limit?: true
    startPostBkk?: true
    endPostBkk?: true
  }

  export type PostMinAggregateInputType = {
    postId?: true
    accountId?: true
    name?: true
    detail?: true
    point?: true
    isDelete?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    startDateBkk?: true
    startTimeBkk?: true
    endDateBkk?: true
    endTimeBkk?: true
    type?: true
    limit?: true
    isLimit?: true
    startPostBkk?: true
    endPostBkk?: true
    startDate?: true
    endDate?: true
  }

  export type PostMaxAggregateInputType = {
    postId?: true
    accountId?: true
    name?: true
    detail?: true
    point?: true
    isDelete?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    startDateBkk?: true
    startTimeBkk?: true
    endDateBkk?: true
    endTimeBkk?: true
    type?: true
    limit?: true
    isLimit?: true
    startPostBkk?: true
    endPostBkk?: true
    startDate?: true
    endDate?: true
  }

  export type PostCountAggregateInputType = {
    postId?: true
    accountId?: true
    name?: true
    detail?: true
    point?: true
    isDelete?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    startDateBkk?: true
    startTimeBkk?: true
    endDateBkk?: true
    endTimeBkk?: true
    type?: true
    limit?: true
    isLimit?: true
    startPostBkk?: true
    endPostBkk?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    postId: string
    accountId: string | null
    name: string
    detail: string | null
    point: number | null
    isDelete: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    startDateBkk: string | null
    startTimeBkk: string | null
    endDateBkk: string | null
    endTimeBkk: string | null
    type: string | null
    limit: number
    isLimit: boolean
    startPostBkk: number | null
    endPostBkk: number | null
    startDate: Date | null
    endDate: Date | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    accountId?: boolean
    name?: boolean
    detail?: boolean
    point?: boolean
    isDelete?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startDateBkk?: boolean
    startTimeBkk?: boolean
    endDateBkk?: boolean
    endTimeBkk?: boolean
    type?: boolean
    limit?: boolean
    isLimit?: boolean
    startPostBkk?: boolean
    endPostBkk?: boolean
    startDate?: boolean
    endDate?: boolean
    PostHistory?: boolean | Post$PostHistoryArgs<ExtArgs>
    Image?: boolean | Post$ImageArgs<ExtArgs>
    Account?: boolean | Post$AccountArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    postId?: boolean
    accountId?: boolean
    name?: boolean
    detail?: boolean
    point?: boolean
    isDelete?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startDateBkk?: boolean
    startTimeBkk?: boolean
    endDateBkk?: boolean
    endTimeBkk?: boolean
    type?: boolean
    limit?: boolean
    isLimit?: boolean
    startPostBkk?: boolean
    endPostBkk?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    PostHistory?: boolean | Post$PostHistoryArgs<ExtArgs>
    Image?: boolean | Post$ImageArgs<ExtArgs>
    Account?: boolean | Post$AccountArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeArgs<ExtArgs>
  }


  type PostGetPayload<S extends boolean | null | undefined | PostArgs> = $Types.GetResult<PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postWithPostIdOnly = await prisma.post.findMany({ select: { postId: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    PostHistory<T extends Post$PostHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Post$PostHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'findMany'>| Null>;

    Image<T extends Post$ImageArgs<ExtArgs> = {}>(args?: Subset<T, Post$ImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findMany'>| Null>;

    Account<T extends Post$AccountArgs<ExtArgs> = {}>(args?: Subset<T, Post$AccountArgs<ExtArgs>>): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly postId: FieldRef<"Post", 'String'>
    readonly accountId: FieldRef<"Post", 'String'>
    readonly name: FieldRef<"Post", 'String'>
    readonly detail: FieldRef<"Post", 'String'>
    readonly point: FieldRef<"Post", 'Int'>
    readonly isDelete: FieldRef<"Post", 'Boolean'>
    readonly isActive: FieldRef<"Post", 'Boolean'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly startDateBkk: FieldRef<"Post", 'String'>
    readonly startTimeBkk: FieldRef<"Post", 'String'>
    readonly endDateBkk: FieldRef<"Post", 'String'>
    readonly endTimeBkk: FieldRef<"Post", 'String'>
    readonly type: FieldRef<"Post", 'String'>
    readonly limit: FieldRef<"Post", 'Int'>
    readonly isLimit: FieldRef<"Post", 'Boolean'>
    readonly startPostBkk: FieldRef<"Post", 'Int'>
    readonly endPostBkk: FieldRef<"Post", 'Int'>
    readonly startDate: FieldRef<"Post", 'DateTime'>
    readonly endDate: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.PostHistory
   */
  export type Post$PostHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    where?: PostHistoryWhereInput
    orderBy?: PostHistoryOrderByWithRelationInput | PostHistoryOrderByWithRelationInput[]
    cursor?: PostHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostHistoryScalarFieldEnum | PostHistoryScalarFieldEnum[]
  }


  /**
   * Post.Image
   */
  export type Post$ImageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Post.Account
   */
  export type Post$AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model PostHistory
   */


  export type AggregatePostHistory = {
    _count: PostHistoryCountAggregateOutputType | null
    _min: PostHistoryMinAggregateOutputType | null
    _max: PostHistoryMaxAggregateOutputType | null
  }

  export type PostHistoryMinAggregateOutputType = {
    postHistoryId: string | null
    accountId: string | null
    postId: string | null
    isCancel: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    details: string | null
  }

  export type PostHistoryMaxAggregateOutputType = {
    postHistoryId: string | null
    accountId: string | null
    postId: string | null
    isCancel: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    details: string | null
  }

  export type PostHistoryCountAggregateOutputType = {
    postHistoryId: number
    accountId: number
    postId: number
    isCancel: number
    isActive: number
    createdAt: number
    updatedAt: number
    status: number
    details: number
    _all: number
  }


  export type PostHistoryMinAggregateInputType = {
    postHistoryId?: true
    accountId?: true
    postId?: true
    isCancel?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    details?: true
  }

  export type PostHistoryMaxAggregateInputType = {
    postHistoryId?: true
    accountId?: true
    postId?: true
    isCancel?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    details?: true
  }

  export type PostHistoryCountAggregateInputType = {
    postHistoryId?: true
    accountId?: true
    postId?: true
    isCancel?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    details?: true
    _all?: true
  }

  export type PostHistoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHistory to aggregate.
     */
    where?: PostHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHistories to fetch.
     */
    orderBy?: PostHistoryOrderByWithRelationInput | PostHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostHistories
    **/
    _count?: true | PostHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostHistoryMaxAggregateInputType
  }

  export type GetPostHistoryAggregateType<T extends PostHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePostHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostHistory[P]>
      : GetScalarType<T[P], AggregatePostHistory[P]>
  }




  export type PostHistoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PostHistoryWhereInput
    orderBy?: PostHistoryOrderByWithAggregationInput | PostHistoryOrderByWithAggregationInput[]
    by: PostHistoryScalarFieldEnum[] | PostHistoryScalarFieldEnum
    having?: PostHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostHistoryCountAggregateInputType | true
    _min?: PostHistoryMinAggregateInputType
    _max?: PostHistoryMaxAggregateInputType
  }


  export type PostHistoryGroupByOutputType = {
    postHistoryId: string
    accountId: string | null
    postId: string | null
    isCancel: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    status: string | null
    details: string | null
    _count: PostHistoryCountAggregateOutputType | null
    _min: PostHistoryMinAggregateOutputType | null
    _max: PostHistoryMaxAggregateOutputType | null
  }

  type GetPostHistoryGroupByPayload<T extends PostHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PostHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PostHistorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postHistoryId?: boolean
    accountId?: boolean
    postId?: boolean
    isCancel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    details?: boolean
    Account?: boolean | PostHistory$AccountArgs<ExtArgs>
    Post?: boolean | PostHistory$PostArgs<ExtArgs>
    ImagePostHistory?: boolean | PostHistory$ImagePostHistoryArgs<ExtArgs>
    _count?: boolean | PostHistoryCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["postHistory"]>

  export type PostHistorySelectScalar = {
    postHistoryId?: boolean
    accountId?: boolean
    postId?: boolean
    isCancel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    details?: boolean
  }

  export type PostHistoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Account?: boolean | PostHistory$AccountArgs<ExtArgs>
    Post?: boolean | PostHistory$PostArgs<ExtArgs>
    ImagePostHistory?: boolean | PostHistory$ImagePostHistoryArgs<ExtArgs>
    _count?: boolean | PostHistoryCountOutputTypeArgs<ExtArgs>
  }


  type PostHistoryGetPayload<S extends boolean | null | undefined | PostHistoryArgs> = $Types.GetResult<PostHistoryPayload, S>

  type PostHistoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PostHistoryFindManyArgs, 'select' | 'include'> & {
      select?: PostHistoryCountAggregateInputType | true
    }

  export interface PostHistoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostHistory'], meta: { name: 'PostHistory' } }
    /**
     * Find zero or one PostHistory that matches the filter.
     * @param {PostHistoryFindUniqueArgs} args - Arguments to find a PostHistory
     * @example
     * // Get one PostHistory
     * const postHistory = await prisma.postHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__PostHistoryClient<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PostHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostHistoryFindUniqueOrThrowArgs} args - Arguments to find a PostHistory
     * @example
     * // Get one PostHistory
     * const postHistory = await prisma.postHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostHistoryClient<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PostHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHistoryFindFirstArgs} args - Arguments to find a PostHistory
     * @example
     * // Get one PostHistory
     * const postHistory = await prisma.postHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__PostHistoryClient<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PostHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHistoryFindFirstOrThrowArgs} args - Arguments to find a PostHistory
     * @example
     * // Get one PostHistory
     * const postHistory = await prisma.postHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostHistoryClient<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PostHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostHistories
     * const postHistories = await prisma.postHistory.findMany()
     * 
     * // Get first 10 PostHistories
     * const postHistories = await prisma.postHistory.findMany({ take: 10 })
     * 
     * // Only select the `postHistoryId`
     * const postHistoryWithPostHistoryIdOnly = await prisma.postHistory.findMany({ select: { postHistoryId: true } })
     * 
    **/
    findMany<T extends PostHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PostHistory.
     * @param {PostHistoryCreateArgs} args - Arguments to create a PostHistory.
     * @example
     * // Create one PostHistory
     * const PostHistory = await prisma.postHistory.create({
     *   data: {
     *     // ... data to create a PostHistory
     *   }
     * })
     * 
    **/
    create<T extends PostHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostHistoryCreateArgs<ExtArgs>>
    ): Prisma__PostHistoryClient<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PostHistories.
     *     @param {PostHistoryCreateManyArgs} args - Arguments to create many PostHistories.
     *     @example
     *     // Create many PostHistories
     *     const postHistory = await prisma.postHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostHistory.
     * @param {PostHistoryDeleteArgs} args - Arguments to delete one PostHistory.
     * @example
     * // Delete one PostHistory
     * const PostHistory = await prisma.postHistory.delete({
     *   where: {
     *     // ... filter to delete one PostHistory
     *   }
     * })
     * 
    **/
    delete<T extends PostHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostHistoryDeleteArgs<ExtArgs>>
    ): Prisma__PostHistoryClient<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PostHistory.
     * @param {PostHistoryUpdateArgs} args - Arguments to update one PostHistory.
     * @example
     * // Update one PostHistory
     * const postHistory = await prisma.postHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostHistoryUpdateArgs<ExtArgs>>
    ): Prisma__PostHistoryClient<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PostHistories.
     * @param {PostHistoryDeleteManyArgs} args - Arguments to filter PostHistories to delete.
     * @example
     * // Delete a few PostHistories
     * const { count } = await prisma.postHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostHistories
     * const postHistory = await prisma.postHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostHistory.
     * @param {PostHistoryUpsertArgs} args - Arguments to update or create a PostHistory.
     * @example
     * // Update or create a PostHistory
     * const postHistory = await prisma.postHistory.upsert({
     *   create: {
     *     // ... data to create a PostHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostHistory we want to update
     *   }
     * })
    **/
    upsert<T extends PostHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostHistoryUpsertArgs<ExtArgs>>
    ): Prisma__PostHistoryClient<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PostHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHistoryCountArgs} args - Arguments to filter PostHistories to count.
     * @example
     * // Count the number of PostHistories
     * const count = await prisma.postHistory.count({
     *   where: {
     *     // ... the filter for the PostHistories we want to count
     *   }
     * })
    **/
    count<T extends PostHistoryCountArgs>(
      args?: Subset<T, PostHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostHistoryAggregateArgs>(args: Subset<T, PostHistoryAggregateArgs>): Prisma.PrismaPromise<GetPostHistoryAggregateType<T>>

    /**
     * Group by PostHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostHistoryGroupByArgs} args - Group by arguments.
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
      T extends PostHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PostHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostHistory model
   */
  readonly fields: PostHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostHistoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Account<T extends PostHistory$AccountArgs<ExtArgs> = {}>(args?: Subset<T, PostHistory$AccountArgs<ExtArgs>>): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    Post<T extends PostHistory$PostArgs<ExtArgs> = {}>(args?: Subset<T, PostHistory$PostArgs<ExtArgs>>): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    ImagePostHistory<T extends PostHistory$ImagePostHistoryArgs<ExtArgs> = {}>(args?: Subset<T, PostHistory$ImagePostHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the PostHistory model
   */ 
  interface PostHistoryFieldRefs {
    readonly postHistoryId: FieldRef<"PostHistory", 'String'>
    readonly accountId: FieldRef<"PostHistory", 'String'>
    readonly postId: FieldRef<"PostHistory", 'String'>
    readonly isCancel: FieldRef<"PostHistory", 'Boolean'>
    readonly isActive: FieldRef<"PostHistory", 'Boolean'>
    readonly createdAt: FieldRef<"PostHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"PostHistory", 'DateTime'>
    readonly status: FieldRef<"PostHistory", 'String'>
    readonly details: FieldRef<"PostHistory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PostHistory findUnique
   */
  export type PostHistoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PostHistory to fetch.
     */
    where: PostHistoryWhereUniqueInput
  }


  /**
   * PostHistory findUniqueOrThrow
   */
  export type PostHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PostHistory to fetch.
     */
    where: PostHistoryWhereUniqueInput
  }


  /**
   * PostHistory findFirst
   */
  export type PostHistoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PostHistory to fetch.
     */
    where?: PostHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHistories to fetch.
     */
    orderBy?: PostHistoryOrderByWithRelationInput | PostHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHistories.
     */
    cursor?: PostHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHistories.
     */
    distinct?: PostHistoryScalarFieldEnum | PostHistoryScalarFieldEnum[]
  }


  /**
   * PostHistory findFirstOrThrow
   */
  export type PostHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PostHistory to fetch.
     */
    where?: PostHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHistories to fetch.
     */
    orderBy?: PostHistoryOrderByWithRelationInput | PostHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostHistories.
     */
    cursor?: PostHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostHistories.
     */
    distinct?: PostHistoryScalarFieldEnum | PostHistoryScalarFieldEnum[]
  }


  /**
   * PostHistory findMany
   */
  export type PostHistoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PostHistories to fetch.
     */
    where?: PostHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostHistories to fetch.
     */
    orderBy?: PostHistoryOrderByWithRelationInput | PostHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostHistories.
     */
    cursor?: PostHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostHistories.
     */
    skip?: number
    distinct?: PostHistoryScalarFieldEnum | PostHistoryScalarFieldEnum[]
  }


  /**
   * PostHistory create
   */
  export type PostHistoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PostHistory.
     */
    data: XOR<PostHistoryCreateInput, PostHistoryUncheckedCreateInput>
  }


  /**
   * PostHistory createMany
   */
  export type PostHistoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostHistories.
     */
    data: PostHistoryCreateManyInput | PostHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PostHistory update
   */
  export type PostHistoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PostHistory.
     */
    data: XOR<PostHistoryUpdateInput, PostHistoryUncheckedUpdateInput>
    /**
     * Choose, which PostHistory to update.
     */
    where: PostHistoryWhereUniqueInput
  }


  /**
   * PostHistory updateMany
   */
  export type PostHistoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostHistories.
     */
    data: XOR<PostHistoryUpdateManyMutationInput, PostHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PostHistories to update
     */
    where?: PostHistoryWhereInput
  }


  /**
   * PostHistory upsert
   */
  export type PostHistoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PostHistory to update in case it exists.
     */
    where: PostHistoryWhereUniqueInput
    /**
     * In case the PostHistory found by the `where` argument doesn't exist, create a new PostHistory with this data.
     */
    create: XOR<PostHistoryCreateInput, PostHistoryUncheckedCreateInput>
    /**
     * In case the PostHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostHistoryUpdateInput, PostHistoryUncheckedUpdateInput>
  }


  /**
   * PostHistory delete
   */
  export type PostHistoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
    /**
     * Filter which PostHistory to delete.
     */
    where: PostHistoryWhereUniqueInput
  }


  /**
   * PostHistory deleteMany
   */
  export type PostHistoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostHistories to delete
     */
    where?: PostHistoryWhereInput
  }


  /**
   * PostHistory.Account
   */
  export type PostHistory$AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }


  /**
   * PostHistory.Post
   */
  export type PostHistory$PostArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }


  /**
   * PostHistory.ImagePostHistory
   */
  export type PostHistory$ImagePostHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    where?: ImagePostHistoryWhereInput
    orderBy?: ImagePostHistoryOrderByWithRelationInput | ImagePostHistoryOrderByWithRelationInput[]
    cursor?: ImagePostHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagePostHistoryScalarFieldEnum | ImagePostHistoryScalarFieldEnum[]
  }


  /**
   * PostHistory without action
   */
  export type PostHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostHistory
     */
    select?: PostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostHistoryInclude<ExtArgs> | null
  }



  /**
   * Model Image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    imageId: string | null
    postId: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    imageId: string | null
    postId: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    imageId: number
    postId: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    imageId?: true
    postId?: true
    imageUrl?: true
    createdAt?: true
  }

  export type ImageMaxAggregateInputType = {
    imageId?: true
    postId?: true
    imageUrl?: true
    createdAt?: true
  }

  export type ImageCountAggregateInputType = {
    imageId?: true
    postId?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    imageId: string
    postId: string
    imageUrl: string
    createdAt: Date
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    imageId?: boolean
    postId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    Post?: boolean | PostArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    imageId?: boolean
    postId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type ImageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Post?: boolean | PostArgs<ExtArgs>
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageArgs> = $Types.GetResult<ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `imageId`
     * const imageWithImageIdOnly = await prisma.image.findMany({ select: { imageId: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Types.GetResult<ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Post<T extends PostArgs<ExtArgs> = {}>(args?: Subset<T, PostArgs<ExtArgs>>): Prisma__PostClient<$Types.GetResult<PostPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly imageId: FieldRef<"Image", 'String'>
    readonly postId: FieldRef<"Image", 'String'>
    readonly imageUrl: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image without action
   */
  export type ImageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
  }



  /**
   * Model ImagePostHistory
   */


  export type AggregateImagePostHistory = {
    _count: ImagePostHistoryCountAggregateOutputType | null
    _min: ImagePostHistoryMinAggregateOutputType | null
    _max: ImagePostHistoryMaxAggregateOutputType | null
  }

  export type ImagePostHistoryMinAggregateOutputType = {
    imagePostHistoryId: string | null
    postHistoryId: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type ImagePostHistoryMaxAggregateOutputType = {
    imagePostHistoryId: string | null
    postHistoryId: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type ImagePostHistoryCountAggregateOutputType = {
    imagePostHistoryId: number
    postHistoryId: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type ImagePostHistoryMinAggregateInputType = {
    imagePostHistoryId?: true
    postHistoryId?: true
    imageUrl?: true
    createdAt?: true
  }

  export type ImagePostHistoryMaxAggregateInputType = {
    imagePostHistoryId?: true
    postHistoryId?: true
    imageUrl?: true
    createdAt?: true
  }

  export type ImagePostHistoryCountAggregateInputType = {
    imagePostHistoryId?: true
    postHistoryId?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ImagePostHistoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagePostHistory to aggregate.
     */
    where?: ImagePostHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagePostHistories to fetch.
     */
    orderBy?: ImagePostHistoryOrderByWithRelationInput | ImagePostHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagePostHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagePostHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagePostHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImagePostHistories
    **/
    _count?: true | ImagePostHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagePostHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagePostHistoryMaxAggregateInputType
  }

  export type GetImagePostHistoryAggregateType<T extends ImagePostHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateImagePostHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagePostHistory[P]>
      : GetScalarType<T[P], AggregateImagePostHistory[P]>
  }




  export type ImagePostHistoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ImagePostHistoryWhereInput
    orderBy?: ImagePostHistoryOrderByWithAggregationInput | ImagePostHistoryOrderByWithAggregationInput[]
    by: ImagePostHistoryScalarFieldEnum[] | ImagePostHistoryScalarFieldEnum
    having?: ImagePostHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagePostHistoryCountAggregateInputType | true
    _min?: ImagePostHistoryMinAggregateInputType
    _max?: ImagePostHistoryMaxAggregateInputType
  }


  export type ImagePostHistoryGroupByOutputType = {
    imagePostHistoryId: string
    postHistoryId: string
    imageUrl: string | null
    createdAt: Date
    _count: ImagePostHistoryCountAggregateOutputType | null
    _min: ImagePostHistoryMinAggregateOutputType | null
    _max: ImagePostHistoryMaxAggregateOutputType | null
  }

  type GetImagePostHistoryGroupByPayload<T extends ImagePostHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagePostHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagePostHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagePostHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ImagePostHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ImagePostHistorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    imagePostHistoryId?: boolean
    postHistoryId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    PostHistory?: boolean | PostHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["imagePostHistory"]>

  export type ImagePostHistorySelectScalar = {
    imagePostHistoryId?: boolean
    postHistoryId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type ImagePostHistoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    PostHistory?: boolean | PostHistoryArgs<ExtArgs>
  }


  type ImagePostHistoryGetPayload<S extends boolean | null | undefined | ImagePostHistoryArgs> = $Types.GetResult<ImagePostHistoryPayload, S>

  type ImagePostHistoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ImagePostHistoryFindManyArgs, 'select' | 'include'> & {
      select?: ImagePostHistoryCountAggregateInputType | true
    }

  export interface ImagePostHistoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImagePostHistory'], meta: { name: 'ImagePostHistory' } }
    /**
     * Find zero or one ImagePostHistory that matches the filter.
     * @param {ImagePostHistoryFindUniqueArgs} args - Arguments to find a ImagePostHistory
     * @example
     * // Get one ImagePostHistory
     * const imagePostHistory = await prisma.imagePostHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImagePostHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImagePostHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__ImagePostHistoryClient<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ImagePostHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImagePostHistoryFindUniqueOrThrowArgs} args - Arguments to find a ImagePostHistory
     * @example
     * // Get one ImagePostHistory
     * const imagePostHistory = await prisma.imagePostHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImagePostHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagePostHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImagePostHistoryClient<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ImagePostHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePostHistoryFindFirstArgs} args - Arguments to find a ImagePostHistory
     * @example
     * // Get one ImagePostHistory
     * const imagePostHistory = await prisma.imagePostHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImagePostHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagePostHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__ImagePostHistoryClient<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ImagePostHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePostHistoryFindFirstOrThrowArgs} args - Arguments to find a ImagePostHistory
     * @example
     * // Get one ImagePostHistory
     * const imagePostHistory = await prisma.imagePostHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImagePostHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagePostHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImagePostHistoryClient<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ImagePostHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePostHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImagePostHistories
     * const imagePostHistories = await prisma.imagePostHistory.findMany()
     * 
     * // Get first 10 ImagePostHistories
     * const imagePostHistories = await prisma.imagePostHistory.findMany({ take: 10 })
     * 
     * // Only select the `imagePostHistoryId`
     * const imagePostHistoryWithImagePostHistoryIdOnly = await prisma.imagePostHistory.findMany({ select: { imagePostHistoryId: true } })
     * 
    **/
    findMany<T extends ImagePostHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagePostHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ImagePostHistory.
     * @param {ImagePostHistoryCreateArgs} args - Arguments to create a ImagePostHistory.
     * @example
     * // Create one ImagePostHistory
     * const ImagePostHistory = await prisma.imagePostHistory.create({
     *   data: {
     *     // ... data to create a ImagePostHistory
     *   }
     * })
     * 
    **/
    create<T extends ImagePostHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImagePostHistoryCreateArgs<ExtArgs>>
    ): Prisma__ImagePostHistoryClient<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ImagePostHistories.
     *     @param {ImagePostHistoryCreateManyArgs} args - Arguments to create many ImagePostHistories.
     *     @example
     *     // Create many ImagePostHistories
     *     const imagePostHistory = await prisma.imagePostHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImagePostHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagePostHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImagePostHistory.
     * @param {ImagePostHistoryDeleteArgs} args - Arguments to delete one ImagePostHistory.
     * @example
     * // Delete one ImagePostHistory
     * const ImagePostHistory = await prisma.imagePostHistory.delete({
     *   where: {
     *     // ... filter to delete one ImagePostHistory
     *   }
     * })
     * 
    **/
    delete<T extends ImagePostHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImagePostHistoryDeleteArgs<ExtArgs>>
    ): Prisma__ImagePostHistoryClient<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ImagePostHistory.
     * @param {ImagePostHistoryUpdateArgs} args - Arguments to update one ImagePostHistory.
     * @example
     * // Update one ImagePostHistory
     * const imagePostHistory = await prisma.imagePostHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImagePostHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImagePostHistoryUpdateArgs<ExtArgs>>
    ): Prisma__ImagePostHistoryClient<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ImagePostHistories.
     * @param {ImagePostHistoryDeleteManyArgs} args - Arguments to filter ImagePostHistories to delete.
     * @example
     * // Delete a few ImagePostHistories
     * const { count } = await prisma.imagePostHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImagePostHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagePostHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagePostHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePostHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImagePostHistories
     * const imagePostHistory = await prisma.imagePostHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImagePostHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImagePostHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImagePostHistory.
     * @param {ImagePostHistoryUpsertArgs} args - Arguments to update or create a ImagePostHistory.
     * @example
     * // Update or create a ImagePostHistory
     * const imagePostHistory = await prisma.imagePostHistory.upsert({
     *   create: {
     *     // ... data to create a ImagePostHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImagePostHistory we want to update
     *   }
     * })
    **/
    upsert<T extends ImagePostHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImagePostHistoryUpsertArgs<ExtArgs>>
    ): Prisma__ImagePostHistoryClient<$Types.GetResult<ImagePostHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ImagePostHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePostHistoryCountArgs} args - Arguments to filter ImagePostHistories to count.
     * @example
     * // Count the number of ImagePostHistories
     * const count = await prisma.imagePostHistory.count({
     *   where: {
     *     // ... the filter for the ImagePostHistories we want to count
     *   }
     * })
    **/
    count<T extends ImagePostHistoryCountArgs>(
      args?: Subset<T, ImagePostHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagePostHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImagePostHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePostHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagePostHistoryAggregateArgs>(args: Subset<T, ImagePostHistoryAggregateArgs>): Prisma.PrismaPromise<GetImagePostHistoryAggregateType<T>>

    /**
     * Group by ImagePostHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagePostHistoryGroupByArgs} args - Group by arguments.
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
      T extends ImagePostHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagePostHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ImagePostHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagePostHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagePostHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImagePostHistory model
   */
  readonly fields: ImagePostHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImagePostHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImagePostHistoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    PostHistory<T extends PostHistoryArgs<ExtArgs> = {}>(args?: Subset<T, PostHistoryArgs<ExtArgs>>): Prisma__PostHistoryClient<$Types.GetResult<PostHistoryPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the ImagePostHistory model
   */ 
  interface ImagePostHistoryFieldRefs {
    readonly imagePostHistoryId: FieldRef<"ImagePostHistory", 'String'>
    readonly postHistoryId: FieldRef<"ImagePostHistory", 'String'>
    readonly imageUrl: FieldRef<"ImagePostHistory", 'String'>
    readonly createdAt: FieldRef<"ImagePostHistory", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ImagePostHistory findUnique
   */
  export type ImagePostHistoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ImagePostHistory to fetch.
     */
    where: ImagePostHistoryWhereUniqueInput
  }


  /**
   * ImagePostHistory findUniqueOrThrow
   */
  export type ImagePostHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ImagePostHistory to fetch.
     */
    where: ImagePostHistoryWhereUniqueInput
  }


  /**
   * ImagePostHistory findFirst
   */
  export type ImagePostHistoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ImagePostHistory to fetch.
     */
    where?: ImagePostHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagePostHistories to fetch.
     */
    orderBy?: ImagePostHistoryOrderByWithRelationInput | ImagePostHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagePostHistories.
     */
    cursor?: ImagePostHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagePostHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagePostHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagePostHistories.
     */
    distinct?: ImagePostHistoryScalarFieldEnum | ImagePostHistoryScalarFieldEnum[]
  }


  /**
   * ImagePostHistory findFirstOrThrow
   */
  export type ImagePostHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ImagePostHistory to fetch.
     */
    where?: ImagePostHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagePostHistories to fetch.
     */
    orderBy?: ImagePostHistoryOrderByWithRelationInput | ImagePostHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagePostHistories.
     */
    cursor?: ImagePostHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagePostHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagePostHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagePostHistories.
     */
    distinct?: ImagePostHistoryScalarFieldEnum | ImagePostHistoryScalarFieldEnum[]
  }


  /**
   * ImagePostHistory findMany
   */
  export type ImagePostHistoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ImagePostHistories to fetch.
     */
    where?: ImagePostHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagePostHistories to fetch.
     */
    orderBy?: ImagePostHistoryOrderByWithRelationInput | ImagePostHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImagePostHistories.
     */
    cursor?: ImagePostHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagePostHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagePostHistories.
     */
    skip?: number
    distinct?: ImagePostHistoryScalarFieldEnum | ImagePostHistoryScalarFieldEnum[]
  }


  /**
   * ImagePostHistory create
   */
  export type ImagePostHistoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ImagePostHistory.
     */
    data: XOR<ImagePostHistoryCreateInput, ImagePostHistoryUncheckedCreateInput>
  }


  /**
   * ImagePostHistory createMany
   */
  export type ImagePostHistoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImagePostHistories.
     */
    data: ImagePostHistoryCreateManyInput | ImagePostHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ImagePostHistory update
   */
  export type ImagePostHistoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ImagePostHistory.
     */
    data: XOR<ImagePostHistoryUpdateInput, ImagePostHistoryUncheckedUpdateInput>
    /**
     * Choose, which ImagePostHistory to update.
     */
    where: ImagePostHistoryWhereUniqueInput
  }


  /**
   * ImagePostHistory updateMany
   */
  export type ImagePostHistoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImagePostHistories.
     */
    data: XOR<ImagePostHistoryUpdateManyMutationInput, ImagePostHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ImagePostHistories to update
     */
    where?: ImagePostHistoryWhereInput
  }


  /**
   * ImagePostHistory upsert
   */
  export type ImagePostHistoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ImagePostHistory to update in case it exists.
     */
    where: ImagePostHistoryWhereUniqueInput
    /**
     * In case the ImagePostHistory found by the `where` argument doesn't exist, create a new ImagePostHistory with this data.
     */
    create: XOR<ImagePostHistoryCreateInput, ImagePostHistoryUncheckedCreateInput>
    /**
     * In case the ImagePostHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagePostHistoryUpdateInput, ImagePostHistoryUncheckedUpdateInput>
  }


  /**
   * ImagePostHistory delete
   */
  export type ImagePostHistoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
    /**
     * Filter which ImagePostHistory to delete.
     */
    where: ImagePostHistoryWhereUniqueInput
  }


  /**
   * ImagePostHistory deleteMany
   */
  export type ImagePostHistoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagePostHistories to delete
     */
    where?: ImagePostHistoryWhereInput
  }


  /**
   * ImagePostHistory without action
   */
  export type ImagePostHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagePostHistory
     */
    select?: ImagePostHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagePostHistoryInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    accountId: 'accountId',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    faculty: 'faculty',
    branch: 'branch',
    passwordHash: 'passwordHash',
    passwordSalt: 'passwordSalt',
    role: 'role',
    isDelete: 'isDelete',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const PostScalarFieldEnum: {
    postId: 'postId',
    accountId: 'accountId',
    name: 'name',
    detail: 'detail',
    point: 'point',
    isDelete: 'isDelete',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    startDateBkk: 'startDateBkk',
    startTimeBkk: 'startTimeBkk',
    endDateBkk: 'endDateBkk',
    endTimeBkk: 'endTimeBkk',
    type: 'type',
    limit: 'limit',
    isLimit: 'isLimit',
    startPostBkk: 'startPostBkk',
    endPostBkk: 'endPostBkk',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostHistoryScalarFieldEnum: {
    postHistoryId: 'postHistoryId',
    accountId: 'accountId',
    postId: 'postId',
    isCancel: 'isCancel',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    details: 'details'
  };

  export type PostHistoryScalarFieldEnum = (typeof PostHistoryScalarFieldEnum)[keyof typeof PostHistoryScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    imageId: 'imageId',
    postId: 'postId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ImagePostHistoryScalarFieldEnum: {
    imagePostHistoryId: 'imagePostHistoryId',
    postHistoryId: 'postHistoryId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type ImagePostHistoryScalarFieldEnum = (typeof ImagePostHistoryScalarFieldEnum)[keyof typeof ImagePostHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    username?: StringFilter<"Account"> | string
    firstName?: StringNullableFilter<"Account"> | string | null
    lastName?: StringNullableFilter<"Account"> | string | null
    email?: StringNullableFilter<"Account"> | string | null
    faculty?: StringNullableFilter<"Account"> | string | null
    branch?: StringNullableFilter<"Account"> | string | null
    passwordHash?: StringFilter<"Account"> | string
    passwordSalt?: StringFilter<"Account"> | string
    role?: StringFilter<"Account"> | string
    isDelete?: BoolFilter<"Account"> | boolean
    isActive?: BoolFilter<"Account"> | boolean
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    Post?: PostListRelationFilter
    PostHistory?: PostHistoryListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    accountId?: SortOrder
    username?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    faculty?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    passwordSalt?: SortOrder
    role?: SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Post?: PostOrderByRelationAggregateInput
    PostHistory?: PostHistoryOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    accountId?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    username?: StringFilter<"Account"> | string
    firstName?: StringNullableFilter<"Account"> | string | null
    lastName?: StringNullableFilter<"Account"> | string | null
    email?: StringNullableFilter<"Account"> | string | null
    faculty?: StringNullableFilter<"Account"> | string | null
    branch?: StringNullableFilter<"Account"> | string | null
    passwordHash?: StringFilter<"Account"> | string
    passwordSalt?: StringFilter<"Account"> | string
    role?: StringFilter<"Account"> | string
    isDelete?: BoolFilter<"Account"> | boolean
    isActive?: BoolFilter<"Account"> | boolean
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    Post?: PostListRelationFilter
    PostHistory?: PostHistoryListRelationFilter
  }, "accountId">

  export type AccountOrderByWithAggregationInput = {
    accountId?: SortOrder
    username?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    faculty?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    passwordSalt?: SortOrder
    role?: SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    accountId?: StringWithAggregatesFilter<"Account"> | string
    username?: StringWithAggregatesFilter<"Account"> | string
    firstName?: StringNullableWithAggregatesFilter<"Account"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Account"> | string | null
    email?: StringNullableWithAggregatesFilter<"Account"> | string | null
    faculty?: StringNullableWithAggregatesFilter<"Account"> | string | null
    branch?: StringNullableWithAggregatesFilter<"Account"> | string | null
    passwordHash?: StringWithAggregatesFilter<"Account"> | string
    passwordSalt?: StringWithAggregatesFilter<"Account"> | string
    role?: StringWithAggregatesFilter<"Account"> | string
    isDelete?: BoolWithAggregatesFilter<"Account"> | boolean
    isActive?: BoolWithAggregatesFilter<"Account"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    postId?: StringFilter<"Post"> | string
    accountId?: StringNullableFilter<"Post"> | string | null
    name?: StringFilter<"Post"> | string
    detail?: StringNullableFilter<"Post"> | string | null
    point?: IntNullableFilter<"Post"> | number | null
    isDelete?: BoolFilter<"Post"> | boolean
    isActive?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    startDateBkk?: StringNullableFilter<"Post"> | string | null
    startTimeBkk?: StringNullableFilter<"Post"> | string | null
    endDateBkk?: StringNullableFilter<"Post"> | string | null
    endTimeBkk?: StringNullableFilter<"Post"> | string | null
    type?: StringNullableFilter<"Post"> | string | null
    limit?: IntFilter<"Post"> | number
    isLimit?: BoolFilter<"Post"> | boolean
    startPostBkk?: IntNullableFilter<"Post"> | number | null
    endPostBkk?: IntNullableFilter<"Post"> | number | null
    startDate?: DateTimeNullableFilter<"Post"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Post"> | Date | string | null
    PostHistory?: PostHistoryListRelationFilter
    Image?: ImageListRelationFilter
    Account?: XOR<AccountNullableRelationFilter, AccountWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    postId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    name?: SortOrder
    detail?: SortOrderInput | SortOrder
    point?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDateBkk?: SortOrderInput | SortOrder
    startTimeBkk?: SortOrderInput | SortOrder
    endDateBkk?: SortOrderInput | SortOrder
    endTimeBkk?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    limit?: SortOrder
    isLimit?: SortOrder
    startPostBkk?: SortOrderInput | SortOrder
    endPostBkk?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    PostHistory?: PostHistoryOrderByRelationAggregateInput
    Image?: ImageOrderByRelationAggregateInput
    Account?: AccountOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    postId?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    accountId?: StringNullableFilter<"Post"> | string | null
    name?: StringFilter<"Post"> | string
    detail?: StringNullableFilter<"Post"> | string | null
    point?: IntNullableFilter<"Post"> | number | null
    isDelete?: BoolFilter<"Post"> | boolean
    isActive?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    startDateBkk?: StringNullableFilter<"Post"> | string | null
    startTimeBkk?: StringNullableFilter<"Post"> | string | null
    endDateBkk?: StringNullableFilter<"Post"> | string | null
    endTimeBkk?: StringNullableFilter<"Post"> | string | null
    type?: StringNullableFilter<"Post"> | string | null
    limit?: IntFilter<"Post"> | number
    isLimit?: BoolFilter<"Post"> | boolean
    startPostBkk?: IntNullableFilter<"Post"> | number | null
    endPostBkk?: IntNullableFilter<"Post"> | number | null
    startDate?: DateTimeNullableFilter<"Post"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Post"> | Date | string | null
    PostHistory?: PostHistoryListRelationFilter
    Image?: ImageListRelationFilter
    Account?: XOR<AccountNullableRelationFilter, AccountWhereInput> | null
  }, "postId">

  export type PostOrderByWithAggregationInput = {
    postId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    name?: SortOrder
    detail?: SortOrderInput | SortOrder
    point?: SortOrderInput | SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDateBkk?: SortOrderInput | SortOrder
    startTimeBkk?: SortOrderInput | SortOrder
    endDateBkk?: SortOrderInput | SortOrder
    endTimeBkk?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    limit?: SortOrder
    isLimit?: SortOrder
    startPostBkk?: SortOrderInput | SortOrder
    endPostBkk?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"Post"> | string
    accountId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    name?: StringWithAggregatesFilter<"Post"> | string
    detail?: StringNullableWithAggregatesFilter<"Post"> | string | null
    point?: IntNullableWithAggregatesFilter<"Post"> | number | null
    isDelete?: BoolWithAggregatesFilter<"Post"> | boolean
    isActive?: BoolWithAggregatesFilter<"Post"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    startDateBkk?: StringNullableWithAggregatesFilter<"Post"> | string | null
    startTimeBkk?: StringNullableWithAggregatesFilter<"Post"> | string | null
    endDateBkk?: StringNullableWithAggregatesFilter<"Post"> | string | null
    endTimeBkk?: StringNullableWithAggregatesFilter<"Post"> | string | null
    type?: StringNullableWithAggregatesFilter<"Post"> | string | null
    limit?: IntWithAggregatesFilter<"Post"> | number
    isLimit?: BoolWithAggregatesFilter<"Post"> | boolean
    startPostBkk?: IntNullableWithAggregatesFilter<"Post"> | number | null
    endPostBkk?: IntNullableWithAggregatesFilter<"Post"> | number | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
  }

  export type PostHistoryWhereInput = {
    AND?: PostHistoryWhereInput | PostHistoryWhereInput[]
    OR?: PostHistoryWhereInput[]
    NOT?: PostHistoryWhereInput | PostHistoryWhereInput[]
    postHistoryId?: StringFilter<"PostHistory"> | string
    accountId?: StringNullableFilter<"PostHistory"> | string | null
    postId?: StringNullableFilter<"PostHistory"> | string | null
    isCancel?: BoolFilter<"PostHistory"> | boolean
    isActive?: BoolFilter<"PostHistory"> | boolean
    createdAt?: DateTimeFilter<"PostHistory"> | Date | string
    updatedAt?: DateTimeFilter<"PostHistory"> | Date | string
    status?: StringNullableFilter<"PostHistory"> | string | null
    details?: StringNullableFilter<"PostHistory"> | string | null
    Account?: XOR<AccountNullableRelationFilter, AccountWhereInput> | null
    Post?: XOR<PostNullableRelationFilter, PostWhereInput> | null
    ImagePostHistory?: ImagePostHistoryListRelationFilter
  }

  export type PostHistoryOrderByWithRelationInput = {
    postHistoryId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    isCancel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    Account?: AccountOrderByWithRelationInput
    Post?: PostOrderByWithRelationInput
    ImagePostHistory?: ImagePostHistoryOrderByRelationAggregateInput
  }

  export type PostHistoryWhereUniqueInput = Prisma.AtLeast<{
    postHistoryId?: string
    AND?: PostHistoryWhereInput | PostHistoryWhereInput[]
    OR?: PostHistoryWhereInput[]
    NOT?: PostHistoryWhereInput | PostHistoryWhereInput[]
    accountId?: StringNullableFilter<"PostHistory"> | string | null
    postId?: StringNullableFilter<"PostHistory"> | string | null
    isCancel?: BoolFilter<"PostHistory"> | boolean
    isActive?: BoolFilter<"PostHistory"> | boolean
    createdAt?: DateTimeFilter<"PostHistory"> | Date | string
    updatedAt?: DateTimeFilter<"PostHistory"> | Date | string
    status?: StringNullableFilter<"PostHistory"> | string | null
    details?: StringNullableFilter<"PostHistory"> | string | null
    Account?: XOR<AccountNullableRelationFilter, AccountWhereInput> | null
    Post?: XOR<PostNullableRelationFilter, PostWhereInput> | null
    ImagePostHistory?: ImagePostHistoryListRelationFilter
  }, "postHistoryId">

  export type PostHistoryOrderByWithAggregationInput = {
    postHistoryId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    isCancel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    _count?: PostHistoryCountOrderByAggregateInput
    _max?: PostHistoryMaxOrderByAggregateInput
    _min?: PostHistoryMinOrderByAggregateInput
  }

  export type PostHistoryScalarWhereWithAggregatesInput = {
    AND?: PostHistoryScalarWhereWithAggregatesInput | PostHistoryScalarWhereWithAggregatesInput[]
    OR?: PostHistoryScalarWhereWithAggregatesInput[]
    NOT?: PostHistoryScalarWhereWithAggregatesInput | PostHistoryScalarWhereWithAggregatesInput[]
    postHistoryId?: StringWithAggregatesFilter<"PostHistory"> | string
    accountId?: StringNullableWithAggregatesFilter<"PostHistory"> | string | null
    postId?: StringNullableWithAggregatesFilter<"PostHistory"> | string | null
    isCancel?: BoolWithAggregatesFilter<"PostHistory"> | boolean
    isActive?: BoolWithAggregatesFilter<"PostHistory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PostHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostHistory"> | Date | string
    status?: StringNullableWithAggregatesFilter<"PostHistory"> | string | null
    details?: StringNullableWithAggregatesFilter<"PostHistory"> | string | null
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    imageId?: StringFilter<"Image"> | string
    postId?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    Post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    imageId?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    Post?: PostOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    imageId?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    postId?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    Post?: XOR<PostRelationFilter, PostWhereInput>
  }, "imageId">

  export type ImageOrderByWithAggregationInput = {
    imageId?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    imageId?: StringWithAggregatesFilter<"Image"> | string
    postId?: StringWithAggregatesFilter<"Image"> | string
    imageUrl?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type ImagePostHistoryWhereInput = {
    AND?: ImagePostHistoryWhereInput | ImagePostHistoryWhereInput[]
    OR?: ImagePostHistoryWhereInput[]
    NOT?: ImagePostHistoryWhereInput | ImagePostHistoryWhereInput[]
    imagePostHistoryId?: StringFilter<"ImagePostHistory"> | string
    postHistoryId?: StringFilter<"ImagePostHistory"> | string
    imageUrl?: StringNullableFilter<"ImagePostHistory"> | string | null
    createdAt?: DateTimeFilter<"ImagePostHistory"> | Date | string
    PostHistory?: XOR<PostHistoryRelationFilter, PostHistoryWhereInput>
  }

  export type ImagePostHistoryOrderByWithRelationInput = {
    imagePostHistoryId?: SortOrder
    postHistoryId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    PostHistory?: PostHistoryOrderByWithRelationInput
  }

  export type ImagePostHistoryWhereUniqueInput = Prisma.AtLeast<{
    imagePostHistoryId?: string
    AND?: ImagePostHistoryWhereInput | ImagePostHistoryWhereInput[]
    OR?: ImagePostHistoryWhereInput[]
    NOT?: ImagePostHistoryWhereInput | ImagePostHistoryWhereInput[]
    postHistoryId?: StringFilter<"ImagePostHistory"> | string
    imageUrl?: StringNullableFilter<"ImagePostHistory"> | string | null
    createdAt?: DateTimeFilter<"ImagePostHistory"> | Date | string
    PostHistory?: XOR<PostHistoryRelationFilter, PostHistoryWhereInput>
  }, "imagePostHistoryId">

  export type ImagePostHistoryOrderByWithAggregationInput = {
    imagePostHistoryId?: SortOrder
    postHistoryId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ImagePostHistoryCountOrderByAggregateInput
    _max?: ImagePostHistoryMaxOrderByAggregateInput
    _min?: ImagePostHistoryMinOrderByAggregateInput
  }

  export type ImagePostHistoryScalarWhereWithAggregatesInput = {
    AND?: ImagePostHistoryScalarWhereWithAggregatesInput | ImagePostHistoryScalarWhereWithAggregatesInput[]
    OR?: ImagePostHistoryScalarWhereWithAggregatesInput[]
    NOT?: ImagePostHistoryScalarWhereWithAggregatesInput | ImagePostHistoryScalarWhereWithAggregatesInput[]
    imagePostHistoryId?: StringWithAggregatesFilter<"ImagePostHistory"> | string
    postHistoryId?: StringWithAggregatesFilter<"ImagePostHistory"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"ImagePostHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ImagePostHistory"> | Date | string
  }

  export type AccountCreateInput = {
    accountId?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    faculty?: string | null
    branch?: string | null
    passwordHash: string
    passwordSalt: string
    role: string
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Post?: PostCreateNestedManyWithoutAccountInput
    PostHistory?: PostHistoryCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    accountId?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    faculty?: string | null
    branch?: string | null
    passwordHash: string
    passwordSalt: string
    role: string
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutAccountInput
    PostHistory?: PostHistoryUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutAccountNestedInput
    PostHistory?: PostHistoryUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutAccountNestedInput
    PostHistory?: PostHistoryUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    accountId?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    faculty?: string | null
    branch?: string | null
    passwordHash: string
    passwordSalt: string
    role: string
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    postId?: string
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    PostHistory?: PostHistoryCreateNestedManyWithoutPostInput
    Image?: ImageCreateNestedManyWithoutPostInput
    Account?: AccountCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    postId?: string
    accountId?: string | null
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    PostHistory?: PostHistoryUncheckedCreateNestedManyWithoutPostInput
    Image?: ImageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PostHistory?: PostHistoryUpdateManyWithoutPostNestedInput
    Image?: ImageUpdateManyWithoutPostNestedInput
    Account?: AccountUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PostHistory?: PostHistoryUncheckedUpdateManyWithoutPostNestedInput
    Image?: ImageUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    postId?: string
    accountId?: string | null
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type PostUpdateManyMutationInput = {
    postId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostHistoryCreateInput = {
    postHistoryId?: string
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
    Account?: AccountCreateNestedOneWithoutPostHistoryInput
    Post?: PostCreateNestedOneWithoutPostHistoryInput
    ImagePostHistory?: ImagePostHistoryCreateNestedManyWithoutPostHistoryInput
  }

  export type PostHistoryUncheckedCreateInput = {
    postHistoryId?: string
    accountId?: string | null
    postId?: string | null
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
    ImagePostHistory?: ImagePostHistoryUncheckedCreateNestedManyWithoutPostHistoryInput
  }

  export type PostHistoryUpdateInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: AccountUpdateOneWithoutPostHistoryNestedInput
    Post?: PostUpdateOneWithoutPostHistoryNestedInput
    ImagePostHistory?: ImagePostHistoryUpdateManyWithoutPostHistoryNestedInput
  }

  export type PostHistoryUncheckedUpdateInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ImagePostHistory?: ImagePostHistoryUncheckedUpdateManyWithoutPostHistoryNestedInput
  }

  export type PostHistoryCreateManyInput = {
    postHistoryId?: string
    accountId?: string | null
    postId?: string | null
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
  }

  export type PostHistoryUpdateManyMutationInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostHistoryUncheckedUpdateManyInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateInput = {
    imageId?: string
    imageUrl: string
    createdAt?: Date | string
    Post: PostCreateNestedOneWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    imageId?: string
    postId: string
    imageUrl: string
    createdAt?: Date | string
  }

  export type ImageUpdateInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateOneRequiredWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    imageId?: string
    postId: string
    imageUrl: string
    createdAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagePostHistoryCreateInput = {
    imagePostHistoryId?: string
    imageUrl?: string | null
    createdAt?: Date | string
    PostHistory: PostHistoryCreateNestedOneWithoutImagePostHistoryInput
  }

  export type ImagePostHistoryUncheckedCreateInput = {
    imagePostHistoryId?: string
    postHistoryId: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ImagePostHistoryUpdateInput = {
    imagePostHistoryId?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostHistory?: PostHistoryUpdateOneRequiredWithoutImagePostHistoryNestedInput
  }

  export type ImagePostHistoryUncheckedUpdateInput = {
    imagePostHistoryId?: StringFieldUpdateOperationsInput | string
    postHistoryId?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagePostHistoryCreateManyInput = {
    imagePostHistoryId?: string
    postHistoryId: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ImagePostHistoryUpdateManyMutationInput = {
    imagePostHistoryId?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagePostHistoryUncheckedUpdateManyInput = {
    imagePostHistoryId?: StringFieldUpdateOperationsInput | string
    postHistoryId?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostHistoryListRelationFilter = {
    every?: PostHistoryWhereInput
    some?: PostHistoryWhereInput
    none?: PostHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    accountId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    faculty?: SortOrder
    branch?: SortOrder
    passwordHash?: SortOrder
    passwordSalt?: SortOrder
    role?: SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    accountId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    faculty?: SortOrder
    branch?: SortOrder
    passwordHash?: SortOrder
    passwordSalt?: SortOrder
    role?: SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    accountId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    faculty?: SortOrder
    branch?: SortOrder
    passwordHash?: SortOrder
    passwordSalt?: SortOrder
    role?: SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type AccountNullableRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    postId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    point?: SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDateBkk?: SortOrder
    startTimeBkk?: SortOrder
    endDateBkk?: SortOrder
    endTimeBkk?: SortOrder
    type?: SortOrder
    limit?: SortOrder
    isLimit?: SortOrder
    startPostBkk?: SortOrder
    endPostBkk?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    point?: SortOrder
    limit?: SortOrder
    startPostBkk?: SortOrder
    endPostBkk?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    postId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    point?: SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDateBkk?: SortOrder
    startTimeBkk?: SortOrder
    endDateBkk?: SortOrder
    endTimeBkk?: SortOrder
    type?: SortOrder
    limit?: SortOrder
    isLimit?: SortOrder
    startPostBkk?: SortOrder
    endPostBkk?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    postId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    point?: SortOrder
    isDelete?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startDateBkk?: SortOrder
    startTimeBkk?: SortOrder
    endDateBkk?: SortOrder
    endTimeBkk?: SortOrder
    type?: SortOrder
    limit?: SortOrder
    isLimit?: SortOrder
    startPostBkk?: SortOrder
    endPostBkk?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    point?: SortOrder
    limit?: SortOrder
    startPostBkk?: SortOrder
    endPostBkk?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PostNullableRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type ImagePostHistoryListRelationFilter = {
    every?: ImagePostHistoryWhereInput
    some?: ImagePostHistoryWhereInput
    none?: ImagePostHistoryWhereInput
  }

  export type ImagePostHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostHistoryCountOrderByAggregateInput = {
    postHistoryId?: SortOrder
    accountId?: SortOrder
    postId?: SortOrder
    isCancel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    details?: SortOrder
  }

  export type PostHistoryMaxOrderByAggregateInput = {
    postHistoryId?: SortOrder
    accountId?: SortOrder
    postId?: SortOrder
    isCancel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    details?: SortOrder
  }

  export type PostHistoryMinOrderByAggregateInput = {
    postHistoryId?: SortOrder
    accountId?: SortOrder
    postId?: SortOrder
    isCancel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    details?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    imageId?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    imageId?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    imageId?: SortOrder
    postId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type PostHistoryRelationFilter = {
    is?: PostHistoryWhereInput
    isNot?: PostHistoryWhereInput
  }

  export type ImagePostHistoryCountOrderByAggregateInput = {
    imagePostHistoryId?: SortOrder
    postHistoryId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ImagePostHistoryMaxOrderByAggregateInput = {
    imagePostHistoryId?: SortOrder
    postHistoryId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ImagePostHistoryMinOrderByAggregateInput = {
    imagePostHistoryId?: SortOrder
    postHistoryId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type PostCreateNestedManyWithoutAccountInput = {
    create?: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput> | PostCreateWithoutAccountInput[] | PostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAccountInput | PostCreateOrConnectWithoutAccountInput[]
    createMany?: PostCreateManyAccountInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostHistoryCreateNestedManyWithoutAccountInput = {
    create?: XOR<PostHistoryCreateWithoutAccountInput, PostHistoryUncheckedCreateWithoutAccountInput> | PostHistoryCreateWithoutAccountInput[] | PostHistoryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostHistoryCreateOrConnectWithoutAccountInput | PostHistoryCreateOrConnectWithoutAccountInput[]
    createMany?: PostHistoryCreateManyAccountInputEnvelope
    connect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput> | PostCreateWithoutAccountInput[] | PostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAccountInput | PostCreateOrConnectWithoutAccountInput[]
    createMany?: PostCreateManyAccountInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostHistoryUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<PostHistoryCreateWithoutAccountInput, PostHistoryUncheckedCreateWithoutAccountInput> | PostHistoryCreateWithoutAccountInput[] | PostHistoryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostHistoryCreateOrConnectWithoutAccountInput | PostHistoryCreateOrConnectWithoutAccountInput[]
    createMany?: PostHistoryCreateManyAccountInputEnvelope
    connect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput> | PostCreateWithoutAccountInput[] | PostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAccountInput | PostCreateOrConnectWithoutAccountInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAccountInput | PostUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PostCreateManyAccountInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAccountInput | PostUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAccountInput | PostUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostHistoryUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PostHistoryCreateWithoutAccountInput, PostHistoryUncheckedCreateWithoutAccountInput> | PostHistoryCreateWithoutAccountInput[] | PostHistoryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostHistoryCreateOrConnectWithoutAccountInput | PostHistoryCreateOrConnectWithoutAccountInput[]
    upsert?: PostHistoryUpsertWithWhereUniqueWithoutAccountInput | PostHistoryUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PostHistoryCreateManyAccountInputEnvelope
    set?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    disconnect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    delete?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    connect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    update?: PostHistoryUpdateWithWhereUniqueWithoutAccountInput | PostHistoryUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PostHistoryUpdateManyWithWhereWithoutAccountInput | PostHistoryUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PostHistoryScalarWhereInput | PostHistoryScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput> | PostCreateWithoutAccountInput[] | PostUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAccountInput | PostCreateOrConnectWithoutAccountInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAccountInput | PostUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PostCreateManyAccountInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAccountInput | PostUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAccountInput | PostUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostHistoryUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PostHistoryCreateWithoutAccountInput, PostHistoryUncheckedCreateWithoutAccountInput> | PostHistoryCreateWithoutAccountInput[] | PostHistoryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PostHistoryCreateOrConnectWithoutAccountInput | PostHistoryCreateOrConnectWithoutAccountInput[]
    upsert?: PostHistoryUpsertWithWhereUniqueWithoutAccountInput | PostHistoryUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PostHistoryCreateManyAccountInputEnvelope
    set?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    disconnect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    delete?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    connect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    update?: PostHistoryUpdateWithWhereUniqueWithoutAccountInput | PostHistoryUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PostHistoryUpdateManyWithWhereWithoutAccountInput | PostHistoryUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PostHistoryScalarWhereInput | PostHistoryScalarWhereInput[]
  }

  export type PostHistoryCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHistoryCreateWithoutPostInput, PostHistoryUncheckedCreateWithoutPostInput> | PostHistoryCreateWithoutPostInput[] | PostHistoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHistoryCreateOrConnectWithoutPostInput | PostHistoryCreateOrConnectWithoutPostInput[]
    createMany?: PostHistoryCreateManyPostInputEnvelope
    connect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutPostInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type AccountCreateNestedOneWithoutPostInput = {
    create?: XOR<AccountCreateWithoutPostInput, AccountUncheckedCreateWithoutPostInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPostInput
    connect?: AccountWhereUniqueInput
  }

  export type PostHistoryUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostHistoryCreateWithoutPostInput, PostHistoryUncheckedCreateWithoutPostInput> | PostHistoryCreateWithoutPostInput[] | PostHistoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHistoryCreateOrConnectWithoutPostInput | PostHistoryCreateOrConnectWithoutPostInput[]
    createMany?: PostHistoryCreateManyPostInputEnvelope
    connect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PostHistoryUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostHistoryCreateWithoutPostInput, PostHistoryUncheckedCreateWithoutPostInput> | PostHistoryCreateWithoutPostInput[] | PostHistoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHistoryCreateOrConnectWithoutPostInput | PostHistoryCreateOrConnectWithoutPostInput[]
    upsert?: PostHistoryUpsertWithWhereUniqueWithoutPostInput | PostHistoryUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostHistoryCreateManyPostInputEnvelope
    set?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    disconnect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    delete?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    connect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    update?: PostHistoryUpdateWithWhereUniqueWithoutPostInput | PostHistoryUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostHistoryUpdateManyWithWhereWithoutPostInput | PostHistoryUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostHistoryScalarWhereInput | PostHistoryScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPostInput | ImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPostInput | ImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPostInput | ImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type AccountUpdateOneWithoutPostNestedInput = {
    create?: XOR<AccountCreateWithoutPostInput, AccountUncheckedCreateWithoutPostInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPostInput
    upsert?: AccountUpsertWithoutPostInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPostInput, AccountUpdateWithoutPostInput>, AccountUncheckedUpdateWithoutPostInput>
  }

  export type PostHistoryUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostHistoryCreateWithoutPostInput, PostHistoryUncheckedCreateWithoutPostInput> | PostHistoryCreateWithoutPostInput[] | PostHistoryUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostHistoryCreateOrConnectWithoutPostInput | PostHistoryCreateOrConnectWithoutPostInput[]
    upsert?: PostHistoryUpsertWithWhereUniqueWithoutPostInput | PostHistoryUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostHistoryCreateManyPostInputEnvelope
    set?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    disconnect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    delete?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    connect?: PostHistoryWhereUniqueInput | PostHistoryWhereUniqueInput[]
    update?: PostHistoryUpdateWithWhereUniqueWithoutPostInput | PostHistoryUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostHistoryUpdateManyWithWhereWithoutPostInput | PostHistoryUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostHistoryScalarWhereInput | PostHistoryScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPostInput | ImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPostInput | ImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPostInput | ImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutPostHistoryInput = {
    create?: XOR<AccountCreateWithoutPostHistoryInput, AccountUncheckedCreateWithoutPostHistoryInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPostHistoryInput
    connect?: AccountWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutPostHistoryInput = {
    create?: XOR<PostCreateWithoutPostHistoryInput, PostUncheckedCreateWithoutPostHistoryInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostHistoryInput
    connect?: PostWhereUniqueInput
  }

  export type ImagePostHistoryCreateNestedManyWithoutPostHistoryInput = {
    create?: XOR<ImagePostHistoryCreateWithoutPostHistoryInput, ImagePostHistoryUncheckedCreateWithoutPostHistoryInput> | ImagePostHistoryCreateWithoutPostHistoryInput[] | ImagePostHistoryUncheckedCreateWithoutPostHistoryInput[]
    connectOrCreate?: ImagePostHistoryCreateOrConnectWithoutPostHistoryInput | ImagePostHistoryCreateOrConnectWithoutPostHistoryInput[]
    createMany?: ImagePostHistoryCreateManyPostHistoryInputEnvelope
    connect?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
  }

  export type ImagePostHistoryUncheckedCreateNestedManyWithoutPostHistoryInput = {
    create?: XOR<ImagePostHistoryCreateWithoutPostHistoryInput, ImagePostHistoryUncheckedCreateWithoutPostHistoryInput> | ImagePostHistoryCreateWithoutPostHistoryInput[] | ImagePostHistoryUncheckedCreateWithoutPostHistoryInput[]
    connectOrCreate?: ImagePostHistoryCreateOrConnectWithoutPostHistoryInput | ImagePostHistoryCreateOrConnectWithoutPostHistoryInput[]
    createMany?: ImagePostHistoryCreateManyPostHistoryInputEnvelope
    connect?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
  }

  export type AccountUpdateOneWithoutPostHistoryNestedInput = {
    create?: XOR<AccountCreateWithoutPostHistoryInput, AccountUncheckedCreateWithoutPostHistoryInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPostHistoryInput
    upsert?: AccountUpsertWithoutPostHistoryInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPostHistoryInput, AccountUpdateWithoutPostHistoryInput>, AccountUncheckedUpdateWithoutPostHistoryInput>
  }

  export type PostUpdateOneWithoutPostHistoryNestedInput = {
    create?: XOR<PostCreateWithoutPostHistoryInput, PostUncheckedCreateWithoutPostHistoryInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostHistoryInput
    upsert?: PostUpsertWithoutPostHistoryInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostHistoryInput, PostUpdateWithoutPostHistoryInput>, PostUncheckedUpdateWithoutPostHistoryInput>
  }

  export type ImagePostHistoryUpdateManyWithoutPostHistoryNestedInput = {
    create?: XOR<ImagePostHistoryCreateWithoutPostHistoryInput, ImagePostHistoryUncheckedCreateWithoutPostHistoryInput> | ImagePostHistoryCreateWithoutPostHistoryInput[] | ImagePostHistoryUncheckedCreateWithoutPostHistoryInput[]
    connectOrCreate?: ImagePostHistoryCreateOrConnectWithoutPostHistoryInput | ImagePostHistoryCreateOrConnectWithoutPostHistoryInput[]
    upsert?: ImagePostHistoryUpsertWithWhereUniqueWithoutPostHistoryInput | ImagePostHistoryUpsertWithWhereUniqueWithoutPostHistoryInput[]
    createMany?: ImagePostHistoryCreateManyPostHistoryInputEnvelope
    set?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
    disconnect?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
    delete?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
    connect?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
    update?: ImagePostHistoryUpdateWithWhereUniqueWithoutPostHistoryInput | ImagePostHistoryUpdateWithWhereUniqueWithoutPostHistoryInput[]
    updateMany?: ImagePostHistoryUpdateManyWithWhereWithoutPostHistoryInput | ImagePostHistoryUpdateManyWithWhereWithoutPostHistoryInput[]
    deleteMany?: ImagePostHistoryScalarWhereInput | ImagePostHistoryScalarWhereInput[]
  }

  export type ImagePostHistoryUncheckedUpdateManyWithoutPostHistoryNestedInput = {
    create?: XOR<ImagePostHistoryCreateWithoutPostHistoryInput, ImagePostHistoryUncheckedCreateWithoutPostHistoryInput> | ImagePostHistoryCreateWithoutPostHistoryInput[] | ImagePostHistoryUncheckedCreateWithoutPostHistoryInput[]
    connectOrCreate?: ImagePostHistoryCreateOrConnectWithoutPostHistoryInput | ImagePostHistoryCreateOrConnectWithoutPostHistoryInput[]
    upsert?: ImagePostHistoryUpsertWithWhereUniqueWithoutPostHistoryInput | ImagePostHistoryUpsertWithWhereUniqueWithoutPostHistoryInput[]
    createMany?: ImagePostHistoryCreateManyPostHistoryInputEnvelope
    set?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
    disconnect?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
    delete?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
    connect?: ImagePostHistoryWhereUniqueInput | ImagePostHistoryWhereUniqueInput[]
    update?: ImagePostHistoryUpdateWithWhereUniqueWithoutPostHistoryInput | ImagePostHistoryUpdateWithWhereUniqueWithoutPostHistoryInput[]
    updateMany?: ImagePostHistoryUpdateManyWithWhereWithoutPostHistoryInput | ImagePostHistoryUpdateManyWithWhereWithoutPostHistoryInput[]
    deleteMany?: ImagePostHistoryScalarWhereInput | ImagePostHistoryScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutImageInput = {
    create?: XOR<PostCreateWithoutImageInput, PostUncheckedCreateWithoutImageInput>
    connectOrCreate?: PostCreateOrConnectWithoutImageInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutImageNestedInput = {
    create?: XOR<PostCreateWithoutImageInput, PostUncheckedCreateWithoutImageInput>
    connectOrCreate?: PostCreateOrConnectWithoutImageInput
    upsert?: PostUpsertWithoutImageInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutImageInput, PostUpdateWithoutImageInput>, PostUncheckedUpdateWithoutImageInput>
  }

  export type PostHistoryCreateNestedOneWithoutImagePostHistoryInput = {
    create?: XOR<PostHistoryCreateWithoutImagePostHistoryInput, PostHistoryUncheckedCreateWithoutImagePostHistoryInput>
    connectOrCreate?: PostHistoryCreateOrConnectWithoutImagePostHistoryInput
    connect?: PostHistoryWhereUniqueInput
  }

  export type PostHistoryUpdateOneRequiredWithoutImagePostHistoryNestedInput = {
    create?: XOR<PostHistoryCreateWithoutImagePostHistoryInput, PostHistoryUncheckedCreateWithoutImagePostHistoryInput>
    connectOrCreate?: PostHistoryCreateOrConnectWithoutImagePostHistoryInput
    upsert?: PostHistoryUpsertWithoutImagePostHistoryInput
    connect?: PostHistoryWhereUniqueInput
    update?: XOR<XOR<PostHistoryUpdateToOneWithWhereWithoutImagePostHistoryInput, PostHistoryUpdateWithoutImagePostHistoryInput>, PostHistoryUncheckedUpdateWithoutImagePostHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PostCreateWithoutAccountInput = {
    postId?: string
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    PostHistory?: PostHistoryCreateNestedManyWithoutPostInput
    Image?: ImageCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAccountInput = {
    postId?: string
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    PostHistory?: PostHistoryUncheckedCreateNestedManyWithoutPostInput
    Image?: ImageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAccountInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput>
  }

  export type PostCreateManyAccountInputEnvelope = {
    data: PostCreateManyAccountInput | PostCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type PostHistoryCreateWithoutAccountInput = {
    postHistoryId?: string
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
    Post?: PostCreateNestedOneWithoutPostHistoryInput
    ImagePostHistory?: ImagePostHistoryCreateNestedManyWithoutPostHistoryInput
  }

  export type PostHistoryUncheckedCreateWithoutAccountInput = {
    postHistoryId?: string
    postId?: string | null
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
    ImagePostHistory?: ImagePostHistoryUncheckedCreateNestedManyWithoutPostHistoryInput
  }

  export type PostHistoryCreateOrConnectWithoutAccountInput = {
    where: PostHistoryWhereUniqueInput
    create: XOR<PostHistoryCreateWithoutAccountInput, PostHistoryUncheckedCreateWithoutAccountInput>
  }

  export type PostHistoryCreateManyAccountInputEnvelope = {
    data: PostHistoryCreateManyAccountInput | PostHistoryCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAccountInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAccountInput, PostUncheckedUpdateWithoutAccountInput>
    create: XOR<PostCreateWithoutAccountInput, PostUncheckedCreateWithoutAccountInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAccountInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAccountInput, PostUncheckedUpdateWithoutAccountInput>
  }

  export type PostUpdateManyWithWhereWithoutAccountInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAccountInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    postId?: StringFilter<"Post"> | string
    accountId?: StringNullableFilter<"Post"> | string | null
    name?: StringFilter<"Post"> | string
    detail?: StringNullableFilter<"Post"> | string | null
    point?: IntNullableFilter<"Post"> | number | null
    isDelete?: BoolFilter<"Post"> | boolean
    isActive?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    startDateBkk?: StringNullableFilter<"Post"> | string | null
    startTimeBkk?: StringNullableFilter<"Post"> | string | null
    endDateBkk?: StringNullableFilter<"Post"> | string | null
    endTimeBkk?: StringNullableFilter<"Post"> | string | null
    type?: StringNullableFilter<"Post"> | string | null
    limit?: IntFilter<"Post"> | number
    isLimit?: BoolFilter<"Post"> | boolean
    startPostBkk?: IntNullableFilter<"Post"> | number | null
    endPostBkk?: IntNullableFilter<"Post"> | number | null
    startDate?: DateTimeNullableFilter<"Post"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Post"> | Date | string | null
  }

  export type PostHistoryUpsertWithWhereUniqueWithoutAccountInput = {
    where: PostHistoryWhereUniqueInput
    update: XOR<PostHistoryUpdateWithoutAccountInput, PostHistoryUncheckedUpdateWithoutAccountInput>
    create: XOR<PostHistoryCreateWithoutAccountInput, PostHistoryUncheckedCreateWithoutAccountInput>
  }

  export type PostHistoryUpdateWithWhereUniqueWithoutAccountInput = {
    where: PostHistoryWhereUniqueInput
    data: XOR<PostHistoryUpdateWithoutAccountInput, PostHistoryUncheckedUpdateWithoutAccountInput>
  }

  export type PostHistoryUpdateManyWithWhereWithoutAccountInput = {
    where: PostHistoryScalarWhereInput
    data: XOR<PostHistoryUpdateManyMutationInput, PostHistoryUncheckedUpdateManyWithoutAccountInput>
  }

  export type PostHistoryScalarWhereInput = {
    AND?: PostHistoryScalarWhereInput | PostHistoryScalarWhereInput[]
    OR?: PostHistoryScalarWhereInput[]
    NOT?: PostHistoryScalarWhereInput | PostHistoryScalarWhereInput[]
    postHistoryId?: StringFilter<"PostHistory"> | string
    accountId?: StringNullableFilter<"PostHistory"> | string | null
    postId?: StringNullableFilter<"PostHistory"> | string | null
    isCancel?: BoolFilter<"PostHistory"> | boolean
    isActive?: BoolFilter<"PostHistory"> | boolean
    createdAt?: DateTimeFilter<"PostHistory"> | Date | string
    updatedAt?: DateTimeFilter<"PostHistory"> | Date | string
    status?: StringNullableFilter<"PostHistory"> | string | null
    details?: StringNullableFilter<"PostHistory"> | string | null
  }

  export type PostHistoryCreateWithoutPostInput = {
    postHistoryId?: string
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
    Account?: AccountCreateNestedOneWithoutPostHistoryInput
    ImagePostHistory?: ImagePostHistoryCreateNestedManyWithoutPostHistoryInput
  }

  export type PostHistoryUncheckedCreateWithoutPostInput = {
    postHistoryId?: string
    accountId?: string | null
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
    ImagePostHistory?: ImagePostHistoryUncheckedCreateNestedManyWithoutPostHistoryInput
  }

  export type PostHistoryCreateOrConnectWithoutPostInput = {
    where: PostHistoryWhereUniqueInput
    create: XOR<PostHistoryCreateWithoutPostInput, PostHistoryUncheckedCreateWithoutPostInput>
  }

  export type PostHistoryCreateManyPostInputEnvelope = {
    data: PostHistoryCreateManyPostInput | PostHistoryCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutPostInput = {
    imageId?: string
    imageUrl: string
    createdAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutPostInput = {
    imageId?: string
    imageUrl: string
    createdAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutPostInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput>
  }

  export type ImageCreateManyPostInputEnvelope = {
    data: ImageCreateManyPostInput | ImageCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutPostInput = {
    accountId?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    faculty?: string | null
    branch?: string | null
    passwordHash: string
    passwordSalt: string
    role: string
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    PostHistory?: PostHistoryCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutPostInput = {
    accountId?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    faculty?: string | null
    branch?: string | null
    passwordHash: string
    passwordSalt: string
    role: string
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    PostHistory?: PostHistoryUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutPostInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPostInput, AccountUncheckedCreateWithoutPostInput>
  }

  export type PostHistoryUpsertWithWhereUniqueWithoutPostInput = {
    where: PostHistoryWhereUniqueInput
    update: XOR<PostHistoryUpdateWithoutPostInput, PostHistoryUncheckedUpdateWithoutPostInput>
    create: XOR<PostHistoryCreateWithoutPostInput, PostHistoryUncheckedCreateWithoutPostInput>
  }

  export type PostHistoryUpdateWithWhereUniqueWithoutPostInput = {
    where: PostHistoryWhereUniqueInput
    data: XOR<PostHistoryUpdateWithoutPostInput, PostHistoryUncheckedUpdateWithoutPostInput>
  }

  export type PostHistoryUpdateManyWithWhereWithoutPostInput = {
    where: PostHistoryScalarWhereInput
    data: XOR<PostHistoryUpdateManyMutationInput, PostHistoryUncheckedUpdateManyWithoutPostInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutPostInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutPostInput, ImageUncheckedUpdateWithoutPostInput>
    create: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutPostInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutPostInput, ImageUncheckedUpdateWithoutPostInput>
  }

  export type ImageUpdateManyWithWhereWithoutPostInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutPostInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    imageId?: StringFilter<"Image"> | string
    postId?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type AccountUpsertWithoutPostInput = {
    update: XOR<AccountUpdateWithoutPostInput, AccountUncheckedUpdateWithoutPostInput>
    create: XOR<AccountCreateWithoutPostInput, AccountUncheckedCreateWithoutPostInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPostInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPostInput, AccountUncheckedUpdateWithoutPostInput>
  }

  export type AccountUpdateWithoutPostInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostHistory?: PostHistoryUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutPostInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostHistory?: PostHistoryUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutPostHistoryInput = {
    accountId?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    faculty?: string | null
    branch?: string | null
    passwordHash: string
    passwordSalt: string
    role: string
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Post?: PostCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutPostHistoryInput = {
    accountId?: string
    username: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    faculty?: string | null
    branch?: string | null
    passwordHash: string
    passwordSalt: string
    role: string
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutPostHistoryInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPostHistoryInput, AccountUncheckedCreateWithoutPostHistoryInput>
  }

  export type PostCreateWithoutPostHistoryInput = {
    postId?: string
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    Image?: ImageCreateNestedManyWithoutPostInput
    Account?: AccountCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostHistoryInput = {
    postId?: string
    accountId?: string | null
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    Image?: ImageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostHistoryInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostHistoryInput, PostUncheckedCreateWithoutPostHistoryInput>
  }

  export type ImagePostHistoryCreateWithoutPostHistoryInput = {
    imagePostHistoryId?: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ImagePostHistoryUncheckedCreateWithoutPostHistoryInput = {
    imagePostHistoryId?: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ImagePostHistoryCreateOrConnectWithoutPostHistoryInput = {
    where: ImagePostHistoryWhereUniqueInput
    create: XOR<ImagePostHistoryCreateWithoutPostHistoryInput, ImagePostHistoryUncheckedCreateWithoutPostHistoryInput>
  }

  export type ImagePostHistoryCreateManyPostHistoryInputEnvelope = {
    data: ImagePostHistoryCreateManyPostHistoryInput | ImagePostHistoryCreateManyPostHistoryInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutPostHistoryInput = {
    update: XOR<AccountUpdateWithoutPostHistoryInput, AccountUncheckedUpdateWithoutPostHistoryInput>
    create: XOR<AccountCreateWithoutPostHistoryInput, AccountUncheckedCreateWithoutPostHistoryInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPostHistoryInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPostHistoryInput, AccountUncheckedUpdateWithoutPostHistoryInput>
  }

  export type AccountUpdateWithoutPostHistoryInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutPostHistoryInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type PostUpsertWithoutPostHistoryInput = {
    update: XOR<PostUpdateWithoutPostHistoryInput, PostUncheckedUpdateWithoutPostHistoryInput>
    create: XOR<PostCreateWithoutPostHistoryInput, PostUncheckedCreateWithoutPostHistoryInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostHistoryInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostHistoryInput, PostUncheckedUpdateWithoutPostHistoryInput>
  }

  export type PostUpdateWithoutPostHistoryInput = {
    postId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Image?: ImageUpdateManyWithoutPostNestedInput
    Account?: AccountUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostHistoryInput = {
    postId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Image?: ImageUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ImagePostHistoryUpsertWithWhereUniqueWithoutPostHistoryInput = {
    where: ImagePostHistoryWhereUniqueInput
    update: XOR<ImagePostHistoryUpdateWithoutPostHistoryInput, ImagePostHistoryUncheckedUpdateWithoutPostHistoryInput>
    create: XOR<ImagePostHistoryCreateWithoutPostHistoryInput, ImagePostHistoryUncheckedCreateWithoutPostHistoryInput>
  }

  export type ImagePostHistoryUpdateWithWhereUniqueWithoutPostHistoryInput = {
    where: ImagePostHistoryWhereUniqueInput
    data: XOR<ImagePostHistoryUpdateWithoutPostHistoryInput, ImagePostHistoryUncheckedUpdateWithoutPostHistoryInput>
  }

  export type ImagePostHistoryUpdateManyWithWhereWithoutPostHistoryInput = {
    where: ImagePostHistoryScalarWhereInput
    data: XOR<ImagePostHistoryUpdateManyMutationInput, ImagePostHistoryUncheckedUpdateManyWithoutPostHistoryInput>
  }

  export type ImagePostHistoryScalarWhereInput = {
    AND?: ImagePostHistoryScalarWhereInput | ImagePostHistoryScalarWhereInput[]
    OR?: ImagePostHistoryScalarWhereInput[]
    NOT?: ImagePostHistoryScalarWhereInput | ImagePostHistoryScalarWhereInput[]
    imagePostHistoryId?: StringFilter<"ImagePostHistory"> | string
    postHistoryId?: StringFilter<"ImagePostHistory"> | string
    imageUrl?: StringNullableFilter<"ImagePostHistory"> | string | null
    createdAt?: DateTimeFilter<"ImagePostHistory"> | Date | string
  }

  export type PostCreateWithoutImageInput = {
    postId?: string
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    PostHistory?: PostHistoryCreateNestedManyWithoutPostInput
    Account?: AccountCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutImageInput = {
    postId?: string
    accountId?: string | null
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    PostHistory?: PostHistoryUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutImageInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutImageInput, PostUncheckedCreateWithoutImageInput>
  }

  export type PostUpsertWithoutImageInput = {
    update: XOR<PostUpdateWithoutImageInput, PostUncheckedUpdateWithoutImageInput>
    create: XOR<PostCreateWithoutImageInput, PostUncheckedCreateWithoutImageInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutImageInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutImageInput, PostUncheckedUpdateWithoutImageInput>
  }

  export type PostUpdateWithoutImageInput = {
    postId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PostHistory?: PostHistoryUpdateManyWithoutPostNestedInput
    Account?: AccountUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutImageInput = {
    postId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PostHistory?: PostHistoryUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostHistoryCreateWithoutImagePostHistoryInput = {
    postHistoryId?: string
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
    Account?: AccountCreateNestedOneWithoutPostHistoryInput
    Post?: PostCreateNestedOneWithoutPostHistoryInput
  }

  export type PostHistoryUncheckedCreateWithoutImagePostHistoryInput = {
    postHistoryId?: string
    accountId?: string | null
    postId?: string | null
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
  }

  export type PostHistoryCreateOrConnectWithoutImagePostHistoryInput = {
    where: PostHistoryWhereUniqueInput
    create: XOR<PostHistoryCreateWithoutImagePostHistoryInput, PostHistoryUncheckedCreateWithoutImagePostHistoryInput>
  }

  export type PostHistoryUpsertWithoutImagePostHistoryInput = {
    update: XOR<PostHistoryUpdateWithoutImagePostHistoryInput, PostHistoryUncheckedUpdateWithoutImagePostHistoryInput>
    create: XOR<PostHistoryCreateWithoutImagePostHistoryInput, PostHistoryUncheckedCreateWithoutImagePostHistoryInput>
    where?: PostHistoryWhereInput
  }

  export type PostHistoryUpdateToOneWithWhereWithoutImagePostHistoryInput = {
    where?: PostHistoryWhereInput
    data: XOR<PostHistoryUpdateWithoutImagePostHistoryInput, PostHistoryUncheckedUpdateWithoutImagePostHistoryInput>
  }

  export type PostHistoryUpdateWithoutImagePostHistoryInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: AccountUpdateOneWithoutPostHistoryNestedInput
    Post?: PostUpdateOneWithoutPostHistoryNestedInput
  }

  export type PostHistoryUncheckedUpdateWithoutImagePostHistoryInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyAccountInput = {
    postId?: string
    name: string
    detail?: string | null
    point?: number | null
    isDelete?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startDateBkk?: string | null
    startTimeBkk?: string | null
    endDateBkk?: string | null
    endTimeBkk?: string | null
    type?: string | null
    limit?: number
    isLimit?: boolean
    startPostBkk?: number | null
    endPostBkk?: number | null
    startDate?: Date | string | null
    endDate?: Date | string | null
  }

  export type PostHistoryCreateManyAccountInput = {
    postHistoryId?: string
    postId?: string | null
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
  }

  export type PostUpdateWithoutAccountInput = {
    postId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PostHistory?: PostHistoryUpdateManyWithoutPostNestedInput
    Image?: ImageUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAccountInput = {
    postId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PostHistory?: PostHistoryUncheckedUpdateManyWithoutPostNestedInput
    Image?: ImageUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAccountInput = {
    postId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    point?: NullableIntFieldUpdateOperationsInput | number | null
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    startTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endDateBkk?: NullableStringFieldUpdateOperationsInput | string | null
    endTimeBkk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    limit?: IntFieldUpdateOperationsInput | number
    isLimit?: BoolFieldUpdateOperationsInput | boolean
    startPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    endPostBkk?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostHistoryUpdateWithoutAccountInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    Post?: PostUpdateOneWithoutPostHistoryNestedInput
    ImagePostHistory?: ImagePostHistoryUpdateManyWithoutPostHistoryNestedInput
  }

  export type PostHistoryUncheckedUpdateWithoutAccountInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ImagePostHistory?: ImagePostHistoryUncheckedUpdateManyWithoutPostHistoryNestedInput
  }

  export type PostHistoryUncheckedUpdateManyWithoutAccountInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostHistoryCreateManyPostInput = {
    postHistoryId?: string
    accountId?: string | null
    isCancel?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string | null
    details?: string | null
  }

  export type ImageCreateManyPostInput = {
    imageId?: string
    imageUrl: string
    createdAt?: Date | string
  }

  export type PostHistoryUpdateWithoutPostInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    Account?: AccountUpdateOneWithoutPostHistoryNestedInput
    ImagePostHistory?: ImagePostHistoryUpdateManyWithoutPostHistoryNestedInput
  }

  export type PostHistoryUncheckedUpdateWithoutPostInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ImagePostHistory?: ImagePostHistoryUncheckedUpdateManyWithoutPostHistoryNestedInput
  }

  export type PostHistoryUncheckedUpdateManyWithoutPostInput = {
    postHistoryId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    isCancel?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUpdateWithoutPostInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutPostInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutPostInput = {
    imageId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagePostHistoryCreateManyPostHistoryInput = {
    imagePostHistoryId?: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ImagePostHistoryUpdateWithoutPostHistoryInput = {
    imagePostHistoryId?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagePostHistoryUncheckedUpdateWithoutPostHistoryInput = {
    imagePostHistoryId?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagePostHistoryUncheckedUpdateManyWithoutPostHistoryInput = {
    imagePostHistoryId?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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