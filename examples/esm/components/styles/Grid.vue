<template>
  <div class="grid">
    <h2>EMFE 栅格系统</h2>
    <h3>概述 - 24栅格系统</h3>
    <emfe-row :gutter="12" :basin="12" type="flex" v-for="(text, m) in texts" :key="m" justify="center" align="middle" class-name="row1">
      <emfe-col className="col1" :span="24 / text.length" v-for="(t, n) in text" :key="n">
        <div class="blue">{{t}}</div>
      </emfe-col>
    </emfe-row>
    <p>在多数业务情况下，EMFE 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。</p>
    <p>划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。</p>
    <ul>
      <li>使用 row 在水平方向创建一行</li>
      <li>将一组 col 插入在 row 中</li>
      <li>在每个 col 中，键入自己的内容</li>
      <li>通过设置 col 的 span 参数，指定跨越的范围，其范围是 1 到 24</li>
      <li>每个 row 中的 col 总和应该为 24</li>
    </ul>
    <h3>代码示例</h3>
    1. 基本用法
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row className="row2">
          <emfe-col span="12">
            <div>col-12</div>
          </emfe-col>
          <emfe-col span="12">
            <div class="blue">col-12</div>
          </emfe-col>
        </emfe-row>
        <emfe-row className="row2">
          <emfe-col span="8">
            <div class="blue">col-8</div>
          </emfe-col>
          <emfe-col span="8">
            <div class="blue">col-8</div>
          </emfe-col>
          <emfe-col span="8">
            <div class="blue">col-8</div>
          </emfe-col>
        </emfe-row>
        <emfe-row className="row2">
          <emfe-col span="6">
            <div class="blue">col-6</div>
          </emfe-col>
          <emfe-col span="6">
            <div class="blue">col-6</div>
          </emfe-col>
          <emfe-col span="6">
            <div class="blue">col-6</div>
          </emfe-col>
          <emfe-col span="6">
            <div class="blue">col-6</div>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row className="row2"&gt;
  &lt;emfe-col span="12"&gt;
    &lt;div&gt;col-12&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="12"&gt;
    &lt;div class="blue"&gt;col-12&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
&lt;emfe-row className="row2"&gt;
  &lt;emfe-col span="8"&gt;
    &lt;div class="blue"&gt;col-8&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="8"&gt;
    &lt;div class="blue"&gt;col-8&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="8"&gt;
    &lt;div class="blue"&gt;col-8&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
&lt;emfe-row className="row2"&gt;
  &lt;emfe-col span="6"&gt;
    &lt;div class="blue"&gt;col-6&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6"&gt;
    &lt;div class="blue"&gt;col-6&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6"&gt;
    &lt;div class="blue"&gt;col-6&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6"&gt;
    &lt;div class="blue"&gt;col-6&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    2. 间隔用法
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row :gutter="16" className="row2">
          <emfe-col span="6">
            <div class="yellow">col-6</div>
          </emfe-col>
          <emfe-col span="6">
            <div class="yellow">col-6</div>
          </emfe-col>
          <emfe-col span="6">
            <div class="yellow">col-6</div>
          </emfe-col>
          <emfe-col span="6">
            <div class="yellow">col-6</div>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row :gutter="16" className="row2"&gt;
  &lt;emfe-col span="6"&gt;
    &lt;div class="yellow"&gt;col-6&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6"&gt;
    &lt;div class="yellow"&gt;col-6&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6"&gt;
    &lt;div class="yellow"&gt;col-6&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6"&gt;
    &lt;div class="yellow"&gt;col-6&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    3. 栅格顺序
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row class="row2" type="flex">
          <emfe-col span="6" order="4">
            <div class="yellow">1 | order-4</div>
          </emfe-col>
          <emfe-col span="6" order="3">
            <div class="yellow">1 | order-4</div>
          </emfe-col>
          <emfe-col span="6" order="2">
            <div class="yellow">1 | order-4</div>
          </emfe-col>
          <emfe-col span="6" order="1">
            <div class="yellow">1 | order-4</div>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row class="row2" type="flex"&gt;
  &lt;emfe-col span="6" order="4"&gt;
    &lt;div class="yellow"&gt;1 | order-4&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6" order="3"&gt;
    &lt;div class="yellow"&gt;1 | order-4&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6" order="2"&gt;
    &lt;div class="yellow"&gt;1 | order-4&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6" order="1"&gt;
    &lt;div class="yellow"&gt;1 | order-4&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    4. 栅格排序
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row className="row2">
          <emfe-col span="18" pull="6">
            <div class="yellow">col-18 | pull-6</div>
          </emfe-col>
          <emfe-col span="6" push="18">
            <div class="yellow">col-6 | push-18</div>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row className="row2"&gt;
  &lt;emfe-col span="18" pull="6"&gt;
    &lt;div class="yellow"&gt;col-18 | pull-6&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6" push="18"&gt;
    &lt;div class="yellow"&gt;col-6 | push-18&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    5. 栅格偏移
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row className="row2">
          <emfe-col span="8">
            <div class="yellow">col-8</div>
          </emfe-col>
          <emfe-col span="8" offset="8">
            <div class="yellow">col-8 | offset-8</div>
          </emfe-col>
        </emfe-row>
        <br>
        <emfe-row className="row2">
          <emfe-col span="6" offset="8">
            <div class="yellow">col-6 | offset-8</div>
          </emfe-col>
          <emfe-col span="6" offset="4">
            <div class="yellow">col-6 | offset-4</div>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row className="row2"&gt;
  &lt;emfe-col span="8"&gt;
    &lt;div class="yellow"&gt;col-8&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="8" offset="8"&gt;
    &lt;div class="yellow"&gt;col-8 | offset-8&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
&lt;br&gt;
&lt;emfe-row className="row2"&gt;
  &lt;emfe-col span="6" offset="8"&gt;
    &lt;div class="yellow"&gt;col-6 | offset-8&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="6" offset="4"&gt;
    &lt;div class="yellow"&gt;col-6 | offset-4&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    6. 栅格排列
    <br>
    a. 子元素向左排列
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row className="row2" type="flex" justify="start" align="top">
          <emfe-col span="4">
            <p class="yellow">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow">col-4</p>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row className="row2" type="flex" justify="start" align="top"&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    7. 栅格垂直对齐
    <br>
    a. 顶部对齐
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row className="row1" type="flex" justify="center" align="top">
          <emfe-col span="4">
            <p class="yellow" style="height: 80px">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow" style="height: 30px">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow" style="height: 100px">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow" style="height: 60px">col-4</p>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row className="row1" type="flex" justify="center" align="top"&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 80px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 30px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 100px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 60px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    b. 底部对齐
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row className="row1" type="flex" justify="center" align="bottom">
          <emfe-col span="4">
            <p class="yellow" style="height: 80px">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow" style="height: 30px">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow" style="height: 100px">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow" style="height: 60px">col-4</p>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row className="row1" type="flex" justify="center" align="top"&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 80px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 30px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 100px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 60px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    c. 居中对齐
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row className="row1" type="flex" justify="center" align="middle">
          <emfe-col span="4">
            <p class="yellow" style="height: 80px">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow" style="height: 30px">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow" style="height: 100px">col-4</p>
          </emfe-col>
          <emfe-col span="4">
            <p class="yellow" style="height: 60px">col-4</p>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row className="row1" type="flex" justify="center" align="top"&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 80px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 30px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 100px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col span="4"&gt;
    &lt;p class="yellow" style="height: 60px"&gt;col-4&lt;/p&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    8. 栅格响应式
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row className="row1">
          <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <div class="yellow">emfe-col</div>
          </emfe-col>
          <emfe-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <div class="yellow">emfe-col</div>
          </emfe-col>
          <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <div class="yellow">emfe-col</div>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row className="row1"&gt;
  &lt;emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"&gt;
    &lt;div class="yellow"&gt;emfe-col&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"&gt;
    &lt;div class="yellow"&gt;emfe-col&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"&gt;
    &lt;div class="yellow"&gt;emfe-col&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    10. 栅格其他属性
    <emfe-row type="flex">
      <emfe-col :span="12">
        <emfe-row className="row1">
          <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <div class="yellow">emfe-col</div>
          </emfe-col>
          <emfe-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <div class="yellow">emfe-col</div>
          </emfe-col>
          <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <div class="yellow">emfe-col</div>
          </emfe-col>
        </emfe-row>
      </emfe-col>
      <emfe-col :span="12">
        <pre>
          <code>
&lt;emfe-row className="row1"&gt;
  &lt;emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"&gt;
    &lt;div class="yellow"&gt;emfe-col&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"&gt;
    &lt;div class="yellow"&gt;emfe-col&lt;/div&gt;
  &lt;/emfe-col&gt;
  &lt;emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"&gt;
    &lt;div class="yellow"&gt;emfe-col&lt;/div&gt;
  &lt;/emfe-col&gt;
&lt;/emfe-row&gt;
          </code>
        </pre>
      </emfe-col>
    </emfe-row>
    <h3>API</h3>
    emfe-row 的 属性
    <table>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>gutter</td>
          <td>栅格间距，单位 px ，左右平分。范围： 0 ~ 48 。</td>
          <td>Number | String</td>
          <td><a href="http://www.uisdc.com/8-point-grid-system">8</a></td>
        </tr>
        <tr>
          <td>basin</td>
          <td>垂直栅格间距，单位 px ，上下平分。范围： 0 ~ 48 。</td>
          <td>Number | String</td>
          <td>0</td>
        </tr>
        <tr>
          <td>type</td>
          <td>布局模式，可选值为 flex 或不选。 flex 在现代浏览器下有效。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>align</td>
          <td>flex 布局下的垂直对齐方式，可选值为 top 、 middle 、 bottom 。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
        <td>justify</td>
          <td>flex 布局下的水平排列方式，可选值为 start 、 end、center 、 space-around、  space-between 。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    Cor 的 属性
    <table>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>span</td>
          <td>栅格的占位格数，可选值为 0 ~ 24 的整数，为 0 时，相当于 display: none。</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>tag</td>
          <td>自定义标签名字。</td>
          <td>String</td>
          <td>div</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>栅格左侧的间隔格数，间隔内不可以有栅格。</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>push</td>
          <td>栅格向右移动格数。</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>pull</td>
          <td>栅格向左移动格数。</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>xs</td>
          <td> &lt; 768px 响应式栅格，可为栅格数或一个包含其他属性的对象。</td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>xs</td>
          <td> ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象 。</td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>md</td>
          <td> ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象 。</td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>lg</td>
          <td> ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 。</td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>xl</td>
          <td> ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象 。</td>
          <td>Number | Object</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "grid",
  data() {
    return {
      texts: [
        ['100%'],
        ['50%', '50%'],
        ['33.33%', '33.33%', '33.33%'],
        ['25%', '25%', '25%', '25%'],
        ['16.66%', '16.66%', '16.66%', '16.66%', '16.66%', '16.66%'],
        ['12.5%', '12.5%', '12.5%', '12.5%', '12.5%', '12.5%', '12.5%', '12.5%'],
        ['8.33%', '8.33%', '8.33%', '8.33%', '8.33%', '8.33%', '8.33%', '8.33%', '8.33%', '8.33%', '8.33%', '8.33%'],
      ],
    };
  },
};
</script>
<style lang="scss">
.row1 {
  background-image: linear-gradient(90deg,
  #f5f5f5 4.16666667%,
  transparent 0,transparent 8.33333333%,#f5f5f5 0,#f5f5f5 12.5%,transparent 0,transparent 16.66666667%,#f5f5f5 0,#f5f5f5 20.83333333%,transparent 0,transparent 25%,#f5f5f5 0,#f5f5f5 29.16666667%,transparent 0,transparent 33.33333333%,#f5f5f5 0,#f5f5f5 37.5%,transparent 0,transparent 41.66666667%,#f5f5f5 0,#f5f5f5 45.83333333%,transparent 0,transparent 50%,#f5f5f5 0,#f5f5f5 54.16666667%,transparent 0,transparent 58.33333333%,#f5f5f5 0,#f5f5f5 62.5%,transparent 0,transparent 66.66666667%,#f5f5f5 0,#f5f5f5 70.83333333%,transparent 0,transparent 75%,#f5f5f5 0,#f5f5f5 79.16666667%,transparent 0,transparent 83.33333333%,#f5f5f5 0,#f5f5f5 87.5%,transparent 0,transparent 91.66666667%,#f5f5f5 0,#f5f5f5 95.83333333%,transparent 0);
}
.row2 {
  background: #eee;
  padding: 20px;
}
.emfe-col {

  .blue {
    padding: 30px 0;
    text-align: center;
  }

  &:nth-of-type(even) {
    .blue {
      background: rgba(255, 155, 0, 0.6);
    }
  }

  .yellow {
    padding: 30px 0;
    text-align: center;
    background: rgba(255, 100, 0, 0.8);
  }

  &:nth-of-type(even) {
    .yellow {
      background: rgba(255, 100, 0, 0.3);
    }
  }
}
</style>
