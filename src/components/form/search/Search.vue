<template>
  <div id="search">
    <div
      style="float:right;margin-top:-20px; margin-right:70px;border:1px solid #e5e5e5;border-radius:15px;overflow: hidden;"
    >
      <form action="/search.jspx" target="_blank" style="overflow: hidden;">
        <input
          class="ss_input_index"
          name="q"
          value="全站搜索"
          type="text"
          id="txtKey"
          onfocus="if(this.value=='全站搜索')this.value=''"
          onblur="if(this.value=='')this.value='全站搜索'"
          maxlength="50"
          style="width:162px;height:25px;margin-top:1px; margin-left:10px;margin-right:5px; padding:0 3px;line-height:25px;float:left;border:none;outline:none;"
        >
        <input
          class="ss_button_index"
          type="image"
          src="../assets/images/index_search_r.jpg"
          style="height:28px; width:30px;float:left;cursor:pointer;outline:none;"
          value
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerSearch'
}
</script>
