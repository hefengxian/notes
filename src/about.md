---
editLink: false
sidebar: false
---


I'm 𝓕𝓻𝓪𝓷𝓴.𝓗, here is where i place my notes in daily life.

**Skills**

> Full-stack developer

- Javascript
- PHP
- Python
- Java

:heart: :heart: :heart:


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


### Badge

- default <Badge text="Hello" />
- type: warning, vertical: middle <Badge text="Hello" type="warning" vertical="middle" />
- type: error, vertical: middle <Badge text="Hello" type="error" vertical="middle" />


### Markdown Container

::: tip 小提示
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger STOP
这是一个错误！
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::


### 代码高亮

```html {3-4,6}
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

```php {13}
<?php

class Test {

    /**
     * Say hello for everyone.
     * 
     * @param string name name to say hello
     * @return string hello message
     */
    public function sayHi(name = 'Frank') 
    {
        return 'Hello World';
    }
}
```


### Task List

- [ ] TODO1
- [ ] TODO2
- [x] Done

