(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{230:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("p",[t._v("它支持多种类型的数据结构，如 "),a("a",{attrs:{href:"http://www.redis.cn/topics/data-types-intro.html#strings",target:"_blank",rel:"noopener noreferrer"}},[t._v("字符串（strings）"),a("OutboundLink")],1),t._v("， "),a("a",{attrs:{href:"http://www.redis.cn/topics/data-types-intro.html#hashes",target:"_blank",rel:"noopener noreferrer"}},[t._v("散列（hashes）"),a("OutboundLink")],1),t._v("， "),a("a",{attrs:{href:"http://www.redis.cn/topics/data-types-intro.html#lists",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表（lists）"),a("OutboundLink")],1),t._v("， "),a("a",{attrs:{href:"http://www.redis.cn/topics/data-types-intro.html#sets",target:"_blank",rel:"noopener noreferrer"}},[t._v("集合（sets）"),a("OutboundLink")],1),t._v("， "),a("a",{attrs:{href:"http://www.redis.cn/topics/data-types-intro.html#sorted-sets",target:"_blank",rel:"noopener noreferrer"}},[t._v("有序集合（sorted sets）"),a("OutboundLink")],1),t._v(" 与范围查询， "),a("a",{attrs:{href:"http://www.redis.cn/topics/data-types-intro.html#bitmaps",target:"_blank",rel:"noopener noreferrer"}},[t._v("bitmaps"),a("OutboundLink")],1),t._v("， "),a("a",{attrs:{href:"http://www.redis.cn/topics/data-types-intro.html#hyperloglogs",target:"_blank",rel:"noopener noreferrer"}},[t._v("hyperloglogs"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"http://www.redis.cn/commands/geoadd.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("地理空间（geospatial）"),a("OutboundLink")],1),t._v(" 索引半径查询")]),t._v(" "),a("h2",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("p",[t._v("Redis中的字符串是一个字节序列。Redis中的字符串是二进制安全的，意思是redis的string可以包含任何数据，比如jpg图片或者序列化的对象 。因此，"),a("strong",[t._v("可以在一个字符串中存储高达"),a("code",[t._v("512")]),t._v("兆字节的任何内容")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javachen.com"')]),t._v("\nOK\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" get name\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javachen.com"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("**注意：**一个键最大能存储512MB。")])]),t._v(" "),a("h2",{attrs:{id:"哈希"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希","aria-hidden":"true"}},[t._v("#")]),t._v(" 哈希")]),t._v(" "),a("p",[t._v("Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" HMSET user:1 username javachen.com password 123456\nOK\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" HGETALL user:1\n1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),t._v("\n2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javachen.com"')]),t._v("\n3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),t._v("\n4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v("\n")])])]),a("p",[t._v("以上实例中 hash 数据类型存储了包含用户脚本信息的用户对象。实例中我们使用了 Redis "),a("strong",[t._v("HMSET, HGETALL")]),t._v(" 命令，"),a("strong",[t._v("user:1")]),t._v(" 为键值。")]),t._v(" "),a("p",[t._v("每个 hash 可以存储 232 - 1")]),t._v(" "),a("h2",{attrs:{id:"列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表","aria-hidden":"true"}},[t._v("#")]),t._v(" 列表")]),t._v(" "),a("p",[t._v("Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lpush books java\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 1\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lpush books c\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 2\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lpush books c++\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 3\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lpush books python\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 4\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" lrange books 0 2\n1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),t._v("\n2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c++"')]),t._v("\n3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),t._v("\n")])])]),a("p",[t._v("列表最多可存储 232 - 1 元素 (4294967295, 每个列表可存储40多亿)。")]),t._v(" "),a("p",[t._v("lpush：")]),t._v(" "),a("p",[t._v("rpush：")]),t._v(" "),a("h2",{attrs:{id:"集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合","aria-hidden":"true"}},[t._v("#")]),t._v(" 集合")]),t._v(" "),a("p",[t._v("Redis的Set是string类型的无序集合。集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。")]),t._v(" "),a("p",[t._v("添加一个string元素到，key对应的set集合中，成功返回1，如果元素以及在集合中返回0，key对应的set不存在返回错误。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sadd "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" 1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 1\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sadd "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" 1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sadd "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" 2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 1\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sadd "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" 3\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 1\n")])])]),a("blockquote",[a("p",[t._v("**注意：**以上实例中 rabitmq 添加了两次，但根据集合内元素的唯一性，第二次插入的元素将被忽略。")])]),t._v(" "),a("p",[t._v("集合中最大的成员数为 232 - 1 (4294967295, 每个集合可存储40多亿个成员)。")]),t._v(" "),a("p",[t._v("查看元素：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('127.0.0.1:6379> smembers test\n1) "1"\n2) "2"\n3) "3"\n')])])]),a("h3",{attrs:{id:"有序集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有序集合","aria-hidden":"true"}},[t._v("#")]),t._v(" 有序集合")]),t._v(" "),a("p",[t._v("Redis zset 和 set 一样也是string类型元素的集合，且不允许重复的成员。")]),t._v(" "),a("p",[t._v("不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。")]),t._v(" "),a("p",[t._v("zset的成员是唯一的，但分数(score)却可以重复。")]),t._v(" "),a("h4",{attrs:{id:"zadd-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zadd-命令","aria-hidden":"true"}},[t._v("#")]),t._v(" zadd 命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" zadd test1  0 java\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 1\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" zadd test1  0 java\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 0\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" zadd test1  0 c\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 1\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" zadd test1  0 python\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 1\n127.0.0.1:6379"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ZRANGEBYSCORE test1 0 100\n1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),t._v("\n2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java"')]),t._v("\n3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);