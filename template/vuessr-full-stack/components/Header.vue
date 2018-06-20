<template>
  <section class="header  clearfix">
    <div class="container">
      <div class="logo pull-left">
        <a href="index.html">
          <img v-lazy="'/img/logo.png'" alt="">
        </a>
      </div>
      <form class="search-bar pull-right">
        <div class="search pull-left">
          <input type="text" placeholder="搜索学生信息成绩">
          <button class="fa fa-search"></button>
        </div>
        <div class="sign-box pull-left">
          <input type="button" value="登 录">
          <input type="button" value="注册">
        </div>
      </form>
      <nav class="nav pull-left pb3   ">
        <ul>
          <li class="active">
            <a href="index.html">首页</a>
          </li>

          <li data-target="#zysz">
            <a href="#">专业设置</a>
          </li>
          <li>
            <a href="gstd.html">公司团队</a>
          </li>
          <li>
            <a href="html.html">
              <span class="fa fa-html5"></span>HTML5</a>
          </li>
          <li>
            <a href="jz.html">项目合作</a>
          </li>

          <!--<li><a href="ssfc.html">师生风采</a></li>-->
          <li>
            <a href="stuworks.html">毕业作品</a>
          </li>
          <!--<li><a href="#">就业明星</a></li>-->
          <li>
            <a href="ssap.html">食宿安排</a>
          </li>
          <li>
            <a href="gyys.html">关于优树</a>
          </li>
          <li>
            <a href="callus.html">联系我们</a>
          </li>
        </ul>
        <div class="dropdown-menu">
          <div class="dropdown-wrapper">
            <div class="dropdown-menu-item" id="zysz">
              <div class="list">
                <div class="list-item">
                  <img src="/img/nav/zysz1.jpg" alt="">
                  <h3>专业设置1</h3>
                </div>
                <div class="list-item">
                  <img src="/img/nav/zysz2.jpg" alt="">
                  <h3>专业设置2</h3>
                </div>
                <div class="list-item">
                  <img src="/img/nav/zysz3.jpg" alt="">
                  <h3>专业设置3</h3>
                </div>
                <div class="list-item">
                  <img src="/img/nav/zysz4.jpg" alt="">
                  <h3>专业设置4</h3>
                </div>
                <div class="list-item">
                  <img src="/img/nav/zysz5.jpg" alt="">
                  <h3>专业设置5</h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>

</template>
<script>
export default {
  name: 'Header'
}
</script>

