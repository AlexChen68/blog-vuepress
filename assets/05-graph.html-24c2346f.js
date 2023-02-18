import{_ as e,W as a,X as i,a0 as t,Y as l,a1 as s}from"./framework-d9a58575.js";const p={},r=l("p",null,"数据结构之图",-1),n=s('<h4 id="图的概述" tabindex="-1"><a class="header-anchor" href="#图的概述" aria-hidden="true">#</a> 图的概述</h4><p><strong>图的定义</strong></p><p>图(Graph)是由顶点的有穷非空集合和顶点之间边的集合组成，通常表示为: G(V,E)，其中，G表示一个图，V是图G中顶点的集合，E是图G中边的集合。</p><p>和线性表，树的差异:</p><ul><li><p>线性表中我们把数据元素叫元素，树中将数据元素叫结点，在图中数据元素，我们则称之为顶点(Vertex)。</p></li><li><p>线性表可以没有元素，称为空表；树中可以没有节点，称为空树；但是，在图中不允许没有顶点(有穷非空性)。</p></li><li><p>线性表中的各元素是线性关系，树中的各元素是层次关系，而图中各顶点的关系是用边来表示(边集可以为空)。</p></li></ul><p><strong>图的分类</strong></p><ul><li><p>有向图：如果给图的每条边规定一个方向，那么得到的图称为<strong>有向图</strong>。</p></li><li><p>无向图：在有向图中，与一个节点相关联的边有出边和入边之分。相反，边没有方向的图称为<strong>无向图</strong>。</p></li><li><p>单图：一个图如果任意两顶点之间只有一条边（在有向图中为两顶点之间每个方向只有一条边）；边集中不含环，则称为<strong>单图</strong>。</p></li></ul><p><strong>基本术语</strong></p><ul><li><p>顶点的度：顶点Vi的度(Degree)是指在图中与Vi相关联的边的条数。对于有向图来说，有入度(In-degree)和出度(Out-degree)之分，有向图顶点的度等于该顶点的入度和出度之和。</p></li><li><p>邻接：</p><ul><li>若无向图中的两个顶点V1和V2存在一条边(V1,V2)，则称顶点V1和V2邻接(Adjacent)；</li><li>若有向图中存在一条边&lt;V3,V2&gt;，则称顶点V3与顶点V2邻接，且是V3邻接到V2或V2邻接到V3；</li></ul></li><li><p>路径：在无向图中，若从顶点Vi出发有一组边可到达顶点Vj，则称顶点Vi到顶点Vj的顶点序列为从顶点Vi到顶点Vj的路径(Path)。</p></li><li><p>连通：若从Vi到Vj有路径可通，则称顶点Vi和顶点Vj是连通(Connected)的。</p></li><li><p>权(Weight)：有些图的边或弧具有与它相关的数字，这种与图的边或弧相关的数叫做权(Weight)。</p></li><li><p>连通：如果从 V 到 W存在一条（无向）路径，则称 V 和 W是连通的；</p></li><li><p>路径 ： V 到 W的路径是一系列顶点{V, v 1, v 2, …, v n, W}的集合，其中任一对相邻的顶点间都有图中的边。路径的长度是路径中的边数（如果带 权，则是所有边的权重和）。如果 V 到 W之间的所有顶点都不同，则称简单路径；</p></li><li><p>回路：起点等于终点的路径；</p></li><li><p>连通图：图中任意两顶点均连通</p></li></ul><h4 id="图的表示" tabindex="-1"><a class="header-anchor" href="#图的表示" aria-hidden="true">#</a> 图的表示</h4><p><strong>邻接矩阵（数组存储）</strong></p><p>邻接矩阵G[N][N]——N个顶点从 0 到N-1编号，若结点 V<sub>i</sub> 和 结点 V<sub>j</sub> 是 G中的边，这 G[i][j] = 1，否则等于0，由此得出的 N * N 的矩阵为邻接矩阵。</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/images@master/blog/advanced/邻接矩阵.png" alt="邻接矩阵" loading="lazy"></p><p>表示无向图时：</p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/images@master/blog/advanced/邻接矩阵-无向图.png" alt="邻接矩阵" loading="lazy"></p><p>对于无向图来说，V<sub>i</sub> 和 V<sub>j</sub> 的结果和 V<sub>j</sub> 和 V<sub>i</sub> 的结果是对称的。</p><blockquote><p>不足: 由于存在n个顶点的图需要n*n个数组元素进行存储，当图为稀疏图时，使用邻接矩阵存储方法将会出现大量0元素，这会造成极大的空间浪费。这时，可以考虑使用邻接表表示法来存储图中的数据。</p></blockquote><p><strong>邻接表（链表存储）</strong></p><p><img src="https://cdn.staticaly.com/gh/AlexChen68/images@master/blog/advanced/邻接表.png" alt="邻接表" loading="lazy"></p><h4 id="图的遍历" tabindex="-1"><a class="header-anchor" href="#图的遍历" aria-hidden="true">#</a> <strong>图的遍历</strong></h4><h5 id="深度优先搜索-dfs" tabindex="-1"><a class="header-anchor" href="#深度优先搜索-dfs" aria-hidden="true">#</a> 深度优先搜索(DFS)</h5><blockquote><p>深度优先搜索(Depth First Search)</p></blockquote><h5 id="广度优先搜索-bfs" tabindex="-1"><a class="header-anchor" href="#广度优先搜索-bfs" aria-hidden="true">#</a> 广度优先搜索（BFS）</h5><blockquote><p>广度优先搜索（Breadth First Search）</p></blockquote>',24);function o(h,c){return a(),i("div",null,[r,t(" more "),n])}const g=e(p,[["render",o],["__file","05-graph.html.vue"]]);export{g as default};
