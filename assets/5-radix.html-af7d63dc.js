import{_ as n,W as s,X as a,a1 as p}from"./framework-ea95e8eb.js";const t={},o=p(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><strong>基数排序的基本思想</strong>：将整数按位数切割成不同的数字，然后按每个位数分别比较。</p><p><strong>具体做法</strong>：将所有待比较数值统一为同样的数位长度，数位较短的数前面补零。然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后，数列就变成一个有序序列。</p><h2 id="排序步骤" tabindex="-1"><a class="header-anchor" href="#排序步骤" aria-hidden="true">#</a> 排序步骤</h2><ol><li>将带排序数组，按照个数数值，放入长度为 10 的数组桶中；</li><li>按顺序取出桶中的元素，并放入原数组中；</li><li>按照十位数值放入对应的桶中；</li><li>按顺序取出桶中的元素，并放入原数组中，依次类推，直至没有更高位的元素，则原数组排序完毕。</li></ol><h2 id="演示动画" tabindex="-1"><a class="header-anchor" href="#演示动画" aria-hidden="true">#</a> 演示动画</h2><p><img src="https://cdn.staticaly.com/gh/AlexChen68/OSS@master/images/1686125901253.png" alt="基数排序动画" loading="lazy"></p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RadixSort</span> <span class="token punctuation">{</span>

    <span class="token comment">/*
     * 获取数组 a 中最大值
     *
     * 参数说明：
     *     a -- 数组
     *     n -- 数组长度
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> max<span class="token punctuation">;</span>

        max <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> max<span class="token punctuation">)</span>
                max <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * 对数组按照&quot;某个位数&quot;进行排序 (桶排序)
     *
     * 参数说明：
     *     a -- 数组
     *     exp -- 指数。对数组 a 按照该指数进行排序。
     *
     * 例如，对于数组 a={50, 3, 542, 745, 2014, 154, 63, 616}；
     *    (01) 当 exp=1 表示按照&quot;个位&quot;对数组 a 进行排序
     *    (02) 当 exp=10 表示按照&quot;十位&quot;对数组 a 进行排序
     *    (03) 当 exp=100 表示按照&quot;百位&quot;对数组 a 进行排序
     *    ...
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">countSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> exp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//int output[a.length];    // 存储&quot;被排序数据&quot;的临时数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> output <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>a<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// 存储&quot;被排序数据&quot;的临时数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buckets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 将数据出现的次数存储在 buckets[] 中</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            buckets<span class="token punctuation">[</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">/</span>exp<span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">10</span> <span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token comment">// 更改 buckets[i]。目的是让更改后的 buckets[i] 的值，是该数据在 output[] 中的位置。</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> buckets<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 将数据存储到临时数组 output[] 中</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            output<span class="token punctuation">[</span>buckets<span class="token punctuation">[</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">/</span>exp<span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">10</span> <span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            buckets<span class="token punctuation">[</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">/</span>exp<span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">10</span> <span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 将排序好的数据赋值给 a[]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> output<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

        output <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        buckets <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * 基数排序
     *
     * 参数说明：
     *     a -- 数组
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">radixSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> exp<span class="token punctuation">;</span>    <span class="token comment">// 指数。当对数组按各位进行排序时，exp=1；按十位进行排序时，exp=10；...</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token function">getMax</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 数组 a 中的最大值</span>

        <span class="token comment">// 从个位开始，对数组 a 按&quot;指数&quot;进行排序</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>exp <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> max<span class="token operator">/</span>exp <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> exp <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">)</span>
            <span class="token function">countSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> exp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i<span class="token punctuation">;</span>
        <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">542</span><span class="token punctuation">,</span> <span class="token number">748</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">214</span><span class="token punctuation">,</span> <span class="token number">154</span><span class="token punctuation">,</span> <span class="token number">63</span><span class="token punctuation">,</span> <span class="token number">616</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;before sort:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">radixSort</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 基数排序</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;after  sort:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h2><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul>`,11),e=[o];function c(i,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","5-radix.html.vue"]]);export{k as default};
