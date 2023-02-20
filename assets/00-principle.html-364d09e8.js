import{_ as e,W as i,X as o,Y as r,Z as p,$ as a}from"./framework-3160f2a1.js";const t={},n=p("p",null,"设计模式基本原则",-1),l=a('<h3 id="单一职责原则srp" tabindex="-1"><a class="header-anchor" href="#单一职责原则srp" aria-hidden="true">#</a> 单一职责原则SRP</h3><blockquote><p>Single-Responsibility Principle，就一个类而言，应该仅有一个引起它变化的原因，通俗的说，就是一个类只负责一项职责。此原则的核心就是<strong>解耦</strong>和<strong>增强内聚性</strong>。</p><p>类的职责主要包括两个方面: 数据职责和行为职责，数据职责通过其属性来体现，而行为职责通过其方法来体现。</p><p>如果一个类承担的职责过多，就等于把这些职责耦合在一起，一个职责的变化可能会削弱或者抑制这个类完成其他职责的能力。这种耦合会导致脆弱的设计，可复用的可能性就越小。</p><p>一个类只有一个引起它变化的原因，否则就应当考虑重构，是否重构由引起变化的原因决定，而不由功能决定。虽然职责常常引起变化的轴线，但有时就未必，应该适当考虑；可以通过Facade模式或Proxy模式进行职责分离。</p></blockquote><p>优点：</p><ol><li><p>降低类的复杂度；</p></li><li><p>提高类的可读性，提高系统的可维护性；</p></li><li><p>降低变更引起的风险（降低对其他功能的影响）。</p></li></ol><p>例子：</p><p>SpringMVC 中Entity,DAO,Service,Controller, Util等的分离。</p><h3 id="开闭原则ocp" tabindex="-1"><a class="header-anchor" href="#开闭原则ocp" aria-hidden="true">#</a> 开闭原则OCP</h3><blockquote><p>Open Close Principle，开闭原则就是说<strong>对扩展开放，对修改关闭</strong>。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。所以一句话概括就是：为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用<strong>接口</strong>和<strong>抽象类</strong>。</p></blockquote><p>例子：</p><p>设计模式中模板方法模式和观察者模式。</p><h3 id="里氏代换原则lsp" tabindex="-1"><a class="header-anchor" href="#里氏代换原则lsp" aria-hidden="true">#</a> 里氏代换原则LSP</h3><blockquote><p>Liskov Substitution Principle，所有引用基类(父类)的地方必须能透明地使用其子类的对象，即子类能够必须能够替换基类能够从出现的地方，子类也能在基类的基础上新增行为。</p><p>LSP是继承复用的基石，是对“开-闭”原则的补充。实现“开-闭”原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。</p><p>里氏代换原则是实现开闭原则的重要方式之一，由于使用基类对象的地方都可以使用子类对象，<strong>因此在程序中尽量使用基类类型来对对象进行定义，而在运行时再确定其子类类型，用子类对象来替换父类对象</strong>。</p></blockquote><p>例子：</p><p>正方形是长方形。</p><h3 id="接口隔离原则isl" tabindex="-1"><a class="header-anchor" href="#接口隔离原则isl" aria-hidden="true">#</a> 接口隔离原则ISL</h3><blockquote><p>(Interface Segregation Principle，ISL): 客户端不应该依赖那些它不需要的接口。(这个法则与迪米特法则是相通的)。</p><p>一旦一个接口太大，则需要将它分割成一些更细小的接口，使用该接口的客户端仅需知道与之相关的方法即可。 注意，在该定义中的接口指的是所定义的方法。例如外面调用某个类的public方法。这个方法对外就是接口。</p></blockquote><h3 id="依赖倒转原则dip" tabindex="-1"><a class="header-anchor" href="#依赖倒转原则dip" aria-hidden="true">#</a> 依赖倒转原则DIP</h3><blockquote><p>Dependency-Inversion Principle 要依赖抽象，而不要依赖具体的实现，具体而言就是高层模块不依赖于底层模块，二者共同依赖于抽象。抽象不依赖于具体，具体依赖于抽象。</p><p>实现开闭原则的关键是抽象化，并且从抽象化导出具体化实现，如果说开闭原则是面向对象设计的目标的话，那么依赖倒转原则就是面向对象设计的主要手段。</p></blockquote><h3 id="其他原则-合成复用原则" tabindex="-1"><a class="header-anchor" href="#其他原则-合成复用原则" aria-hidden="true">#</a> 其他原则-合成复用原则</h3><blockquote><p>Composite Reuse Principle，合成复用原则就是指在一个新的对象里通过关联关系（包括组合关系和聚合关系）来使用一些已有的对象，使之成为新对象的一部分；新对象通过委派调用已有对象的方法达到复用其已有功能的目的。简言之：<strong>要尽量使用组合/聚合关系，少用继承</strong>。</p></blockquote><h3 id="其他原则-迪米特法则-最少知道原则" tabindex="-1"><a class="header-anchor" href="#其他原则-迪米特法则-最少知道原则" aria-hidden="true">#</a> 其他原则-迪米特法则（最少知道原则）</h3><blockquote><p>Demeter Principle，为什么叫最少知道原则，就是说：一个实体应当尽量少的与其他实体之间发生相互作用，使得系统功能模块相对独立，这样，当一个模块修改时，就会尽量少的影响其他的模块，扩展会相对容易，这是对软件实体之间通信的限制，它要求限制软件实体之间通信的宽度和深度。</p><p>在迪米特法则中，对于一个对象，其关联的实体包括以下几类:</p><ol><li>当前对象本身(this)；</li><li>以参数形式传入到当前对象方法中的对象；</li><li>当前对象的成员对象（包括集合中的元素）；</li><li>当前对象所创建的对象。</li></ol></blockquote><p>例子：</p><p>外观模式Facade(结构型)</p>',24);function c(s,d){return i(),o("div",null,[n,r(" more "),l])}const u=e(t,[["render",c],["__file","00-principle.html.vue"]]);export{u as default};
