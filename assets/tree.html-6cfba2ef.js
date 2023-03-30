import{_ as l,W as i,X as o,a2 as n,Y as e,a1 as t}from"./framework-d3200c61.js";const p={},r=e("p",null,"数据结构之树",-1),s=t('<h2 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h2><p><strong>定义</strong></p><p>树： n(n&gt;=0)个节点构成的有限集合。 当 n=0 时，称为空树； 对于任一棵非空树(n&gt;0)，它具备以下性质：</p><ol><li>树中有一个称为“根”的特殊结点，用 r 表示；</li><li>其余结点可分为 m(m&gt;0) 个<strong>互不相交</strong>的有限集，其中每个集合本身又是一颗树，称为原来树的“子树”；</li><li>除了根结点外，每个节点有且仅有一个父结点；</li><li>一颗 N 个结点的树有 N-1 条边；</li></ol><p><strong>树的一些术语</strong></p><ol><li>结点的度(Degree):结点的子树个数</li><li>树的度:树的所有结点中最大的度数</li><li>叶结点(Leaf):度为0的结点</li><li>父结点(Parent):有子树的结点是其子树的根结点的父结点</li><li>子结点(Child):若A结点是B结点的父结 L点，则称B结点是A结点的子结点;子结点也称孩子结点。</li><li>兄弟结点(Sibling):具有同一父结点的各结点彼此是兄弟结点。</li><li>路径和路径的长度： 从结点n1到nk的路径为一 个结点序列n1 , n2 ,... , nk , ni是 ni+1的父结 点，路径所包含边的个数为路径的长度；</li><li>祖先结点(Ancestor)：沿树根到某一结点路 径上的所有结点都是这个结点的祖先结点；</li><li>子孙结点(Descendant):某一结点的子树 中的所有结点是这个结点的子孙；</li><li>结点的层次(Level):规定根结点在1层， 其它任一结点的层数是其父结点的层数加1；</li><li>树的深度(Depth):树中所有结点中的最 大层次是这棵树的深度。</li></ol><h4 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h4><blockquote><p>二叉树T：一个有穷的结点集合。 这个集合可以为空； 若不为空，则它是由根结点和称为其左子树TL和右子树TR的两个不相交的二叉树组成（度为2）； 子树有左右之分。</p></blockquote><p><strong>斜二叉树</strong></p><p>所有节点都只有左子树的二叉树叫做左斜树，所有节点都只有右子树的二叉树叫做右斜树。(本质就是链表)。</p><p><strong>满二叉树</strong></p><p>二叉树中所有非叶子结点的度都是2，且叶子结点都在同一层次上。</p><p><strong>完全二叉树</strong></p><p>有n个结点的二叉树，对树中结点按从上至下、从左到右顺序进行编号， 编号为i(1 ≤ i ≤ n)结点与满二叉树 中编号为 i 结点在二叉树中位置相同（即允许缺失最后的多个结点，缺中间的不算），称为完全二叉树。</p><p><strong>二叉树的重要性质</strong></p><ol><li>一个二叉树的第 i 层的最大结点数为 2^(i-1)，i&gt;=1;</li><li>深度为 k 的二叉树有最大结点总数为 2^k - 1, k&gt;=1;</li><li>对任何非空二叉树 T，若n0表示叶结点的个数、n2是 度为2的非叶结点个数，那么两者满足关系n0 = n2 +1。</li></ol><p><strong>二叉树的存储结构</strong></p><ol><li><p>二叉树可以非常方便的使用<strong>链式存储结构</strong>存储（主要存储方式），每个节点包含数据及两个指针，分别指向左子树和右子树。</p></li><li><p><strong>完全二叉树</strong>可以使用<strong>顺序存储结构</strong>存储，可以使用数组按从上至下、从左到右顺序存储n个结点的完全二叉树的结点父子关系；其具备以下特定：</p><ul><li><p>非根结点(序号 i &gt; 1)的父结点的序号是 i / 2;</p></li><li><p>结点(序号为i)的左孩子结点的序号是 2i， (若2i &lt;= n，否则没有左孩子);</p></li><li><p>结点(序号为i)的右孩子结点的序号是 2i+1， (若2i +1&lt;= n，否则没有右孩子);</p></li></ul></li><li><p>一般的二叉树也可以通过补足为完全二叉树后，使用顺序存储结构存储，但是会浪费空间。</p></li></ol><p><strong>二叉树的遍历</strong></p><ol><li><p>先序遍历：根、左子树、右子树</p></li><li><p>中序遍历：左子树、根、右子树</p></li><li><p>后序遍历：左子树、右子树、根</p></li><li><p>层次遍历：从上到下，从左到右</p></li></ol><p>使用<strong>递归</strong>可以方便的实现前三种遍历；</p><p>遍历的<strong>非递归</strong>遍历算法，使用<strong>堆栈</strong>，以中序遍历为例：</p><ol><li><em>遇到一个结点，就把它压栈，并去遍历它的左子树;</em></li><li><em>当左子树遍历结束后，从栈顶弹出这个结点并访问它;</em></li><li><em>然后按其右指针再去中序遍历该结点的右子树。</em></li></ol><p>二叉树的<strong>层次遍历</strong>可以通过<strong>队列</strong>实现：</p><p><em>遍历从根结点开始，首先将根结点入队，然后开始执行循环：结点出队、访问该结点、其左右儿子入队</em></p><p><strong>遍历二叉树的应用</strong></p><ol><li><p>输出二叉树中的叶子结点；</p></li><li><p>求二叉树的深度；</p></li><li><p>二元运算表达式树及其遍历：</p><ol><li>先序遍历得到前缀表达式；</li><li>中序遍历得到中缀表达式；</li><li>后序遍历得到后缀表达式；</li><li>中缀表达式会受到运算符优先级的影响，通过在中序遍历时，遇到左子树加左括号，右子树加右括号解决。</li></ol></li><li><p>由两种遍历序列确定二叉树：</p><p>注意：仅有先序遍历和后序遍历无法确定一颗二叉树，先序遍历和后序遍历只可以确定跟结点，中序遍历才可以确定左右子树的顺序；</p></li></ol><h4 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树" aria-hidden="true">#</a> 二叉搜索树</h4><blockquote><p>一棵二叉树，可以为空;如果不为空，满足以下性质:</p><ol><li>非空左子树的所有键值小于其根结点的键值；</li><li>非空右子树的所有键值大于其根结点的键值；</li><li>左、右子树都是二叉搜索树。</li></ol></blockquote><p>二叉查找树相比于其他数据结构的优势在于查找、插入的时间复杂度较低为 O ( log ⁡ n ) 。二叉查找树是基础性数据结构，用于构建更为抽象的数据结构，如集合、多重集、关联数组等。</p><p><strong>如何构建一个完全二叉搜索树</strong></p><h4 id="平衡二叉树-avl" tabindex="-1"><a class="header-anchor" href="#平衡二叉树-avl" aria-hidden="true">#</a> 平衡二叉树-AVL</h4><blockquote><p>含有相同节点的二叉查找树可以有不同的形态，而二叉查找树的平均查找长度与树的深度有关，所以需要找出一个查找平均长度最小的一棵，那就是平衡二叉树，具有以下性质：</p><ol><li><p>要么是棵空树，要么其根节点左右子树的深度之差的绝对值不超过1；</p></li><li><p>其左右子树也都是平衡二叉树；</p></li><li><p>二叉树节点的平衡因子定义为该节点的左子树的深度减去右子树的深度。则平衡二叉树的所有节点的平衡因子只可能是-1,0,1。</p></li></ol></blockquote><h4 id="哈夫曼树-huffman-tree" tabindex="-1"><a class="header-anchor" href="#哈夫曼树-huffman-tree" aria-hidden="true">#</a> 哈夫曼树（Huffman Tree）</h4><blockquote><p>给定N个权值作为N个<strong>叶子</strong>结点，构造一棵二叉树，若该树的带权路径长度达到最小，称这样的二叉树为最优二叉树，也称为哈夫曼树(Huffman Tree)。</p><p>哈夫曼树是带权路径长度最短的树，权值较大的结点离根较近。</p></blockquote><p><strong>构造哈夫曼树</strong></p><p><em>每次把权值最小的两棵二叉树合并</em></p><p><strong>哈夫曼树的特点</strong></p><ol><li>没有度为1的结点；</li><li>n个叶子结点的哈夫曼树共有2n-1个结点；</li><li>哈夫曼树的任意非叶节点的左右子树交换后仍是哈夫曼树；</li><li>对同一组权值，不同构造的两颗哈夫曼树WPL相等。</li></ol><p><strong>哈夫曼编码</strong></p><p>使用二叉树进行编码：</p><ol><li>左右分支：0、1</li><li>字符只在叶结点上（保证每个字符没有二义，即任何字符的编码都不是另一字符编码的前缀）</li></ol><p>当每个字符出现的频率不同时，使用哈夫曼树进行编码，出现频率越高的字母(也即权值越大)，其编码越短，可以保证在频率加权后的平均编码长度最短，称之为最佳编码，一般就叫做Huffman编码。</p><h4 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h4>',44);function a(g,h){return i(),o("div",null,[r,n(" more "),s])}const c=l(p,[["render",a],["__file","tree.html.vue"]]);export{c as default};
