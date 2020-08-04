---
home: true
heroImage: /assets/img/logo.png
heroText: 𝓕𝓻𝓪𝓷𝓴.𝓗 𝓝𝓸𝓽𝓮𝓼
tagline: 记录日常生活
# actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 学习笔记
  details: 记录日常开发、工作中遇到的技术问题，技术思考、感悟。
- title: 生活感悟
  details: 生活中的感悟，自我反思，总结。
- title: 个人计划
  details: 记录个人计划的进度，日志。
---


## 功能测试


### MathJax 数学公式

假设 $y >= 0$ , 而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

显见， 当 $0 <= y <= 1$ 时， 有 $\Phi(y) = 0$. 对于所有 $y >= 0$, 则 $\Phi(y)$ 是一个非减函数.

当 $\log x>= 10^4$ 及 $y>= e^{2{(\log x)}^{-0.1}}$ 时， 则有:

$$1 - x^{- 0.1} <= \Phi (y) <= 1$$


### Flowchart 流程图

@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend

