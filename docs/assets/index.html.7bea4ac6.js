import{_ as n,o as s,c as a,d as t}from"./app.c228fd6e.js";const p={},o=t(`<h2 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> <code>call</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">my_call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">thisArg <span class="token operator">=</span> window<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  thisArg <span class="token operator">=</span> <span class="token keyword">typeof</span> thisArg <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">?</span> thisArg <span class="token operator">:</span> <span class="token function">Object</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token constant">FN</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  thisArg<span class="token punctuation">[</span><span class="token constant">FN</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token constant">RESULT</span> <span class="token operator">=</span> thisArg<span class="token punctuation">[</span><span class="token constant">FN</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">delete</span> thisArg<span class="token punctuation">[</span><span class="token constant">FN</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token constant">RESULT</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> <code>apply</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">my_apply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">thisArg <span class="token operator">=</span> window<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  thisArg <span class="token operator">=</span> <span class="token keyword">typeof</span> thisArg <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">?</span> thisArg <span class="token operator">:</span> <span class="token function">Object</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token constant">FN</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  thisArg<span class="token punctuation">[</span><span class="token constant">FN</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token constant">RESULT</span> <span class="token operator">=</span> thisArg<span class="token punctuation">[</span><span class="token constant">FN</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">delete</span> thisArg<span class="token punctuation">[</span><span class="token constant">FN</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token constant">RESULT</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> <code>bind</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">my_bind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">thisArg <span class="token operator">=</span> window<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  thisArg <span class="token operator">=</span> <span class="token keyword">typeof</span> thisArg <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">?</span> thisArg <span class="token operator">:</span> <span class="token function">Object</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>myArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">FN</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    thisArg<span class="token punctuation">[</span><span class="token constant">FN</span><span class="token punctuation">]</span> <span class="token operator">=</span> foo<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token constant">RESULT</span> <span class="token operator">=</span> thisArg<span class="token punctuation">[</span><span class="token constant">FN</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>myArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> thisArg<span class="token punctuation">[</span><span class="token constant">FN</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token constant">RESULT</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
