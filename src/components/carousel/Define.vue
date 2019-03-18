<template>
  <div id="f5">
    <div class="content-wrapper">
      <div class="content">
        <div class="homepage-wrapper">
          <div class="homepage-slider">
            <div id="aktuals_field" style="overflow:hidden; position:relative;width:1157px;">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div
                        class="homepage-slider-item"
                        id="aktuals1"
                      >
                        <a href="/jiuqibaobiao/index.jhtml" class="title" target="_blank"></a>
                      </div>
                    </td>
                    <td>
                      <div
                        class="homepage-slider-item"
                        id="aktuals2"
                      >
                        <a href="/gmc/index.jhtml" class="title" target="_blank"></a>
                      </div>
                    </td>
                    <td>
                      <div
                        class="homepage-slider-item"
                        id="aktuals3"
                      >
                        <a href="/bigdata/index.jhtml" class="title" target="_blank"></a>
                        <!-- END .homepage-slider-item -->
                      </div>
                    </td>
                    <td>
                      <!-- BEGIN .homepage-slider-item -->
                      <div
                        class="homepage-slider-item"
                        id="aktuals4"
                      >
                        <a href="/jqszcb/index.jhtml" class="title" target="_blank"></a>
                        <!-- END .homepage-slider-item -->
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- BEGIN .navigation -->
            <div class="navigation_1">
              <a href="#" id="aktuals1_btn" onclick="scrollToElem(1); return false;" class></a>
              <a href="#" id="aktuals2_btn" onclick="scrollToElem(2); return false;" class></a>
              <a href="#" id="aktuals3_btn" onclick="scrollToElem(3); return false;" class></a>
              <a href="#" id="aktuals4_btn" onclick="scrollToElem(4); return false;" class="active"></a>

              <!-- END .navigation -->
            </div>

            <!-- END .homepage-slider -->
          </div>
        </div>

        <!-- END .content -->
      </div>
    </div>
  </div>
</template>

<style>
#aktuals1 {
  background:url(../../assets/images/solution/pro_img1.jpg) 0 0 no-repeat;
}
#aktuals2 {
  background:url(../../assets/images/solution/pro_img2.jpg) 0 0 no-repeat;
}
#aktuals3 {
  background:url(../../assets/images/solution/pro_img3.jpg) 0 0 no-repeat;
}
#aktuals4 {
  background:url(../../assets/images/solution/pro_p4.jpg) 0 0 no-repeat;
}
</style>
