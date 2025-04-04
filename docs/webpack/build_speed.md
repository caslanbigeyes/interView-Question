
使用 speed-measure-webpack-plugin(opens in a new tab) 可评估每个 loader/plugin 的执行耗时。
更快的 loader: swc
在 webpack 中耗时最久的当属负责 AST 转换的 loader。
当 loader 进行编译时的 AST 操作均为 CPU 密集型任务，使用 Javascript 性能低下，此时可采用高性能语言 rust 编写的 swc。
比如 Javascript 转化由 babel 转化为更快的 swc(opens in a new tab)。

module: {  rules: [    {      test: /\.m?js$/,      exclude: /(node_modules)/,      use: {        loader: "swc-loader",      },    },  ];}
持久化缓存: cache
webpack5 内置了关于缓存的插件，可通过 cache 字段(opens in a new tab)配置开启。
它将 Module、Chunk、ModuleChunk 等信息序列化到磁盘中，二次构建避免重复编译计算，编译速度得到很大提升。

{  cache: {    type: "filesystem";  }}
如对一个 JS 文件配置了 eslint、typescript、babel 等 loader，他将有可能执行五次编译，被五次解析为 AST
1. acorn: 用以依赖分析，解析为 acorn 的 AST
2. eslint-parser: 用以 lint，解析为 espree 的 AST
3. typescript: 用以 ts，解析为 typescript 的 AST
4. babel: 用以转化为低版本，解析为 @babel/parser 的 AST
5. terser: 用以压缩混淆，解析为 acorn 的 AST
而当开启了持久化缓存功能，最耗时的 AST 解析将能够从磁盘的缓存中获取，再次编译时无需再次进行解析 AST。
得益于持久化缓存，二次编译甚至可得到与 Unbundle 的 vite 等相近的开发体验
在 webpack4 中，可使用 cache-loader(opens in a new tab) 仅仅对 loader 进行缓存。需要注意的是该 loader 目前已是 @deprecated 状态。

module.exports = {  module: {    rules: [      {        test: /\.ext$/,        use: ["cache-loader", ...loaders],        include: path.resolve("src"),      },    ],  },};

多进程: thread-loader
thread-loader(opens in a new tab) 为官方推荐的开启多进程的 loader，可对 babel 解析 AST 时开启多线程处理，提升编译的性能。

module.exports = {  module: {    rules: [      {        test: /\.js$/,        use: [          {            loader: "thread-loader",            options: {              workers: 8,            },          },          "babel-loader",        ],      },    ],  },};
在 webpack4 中，可使用 happypack plugin(opens in a new tab)，但需要注意的是 happypack 已经久不维护了。