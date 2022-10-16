//将价格输出函数封装
function addPrices1() {
  let priceNum = 0;
  let price;
  let arr;
  let num = 0;
  $(".checkItem").map(function (index, item) {
    arr = [];
    if (item.checked) {
      price = +$(".sum>em")[index].innerText.split("￥")[1];
      num++;
      arr.push(price);
    }
    for (const i of arr) {
      priceNum += i;
    }
  });
  priceNum = String(priceNum).includes(".") ? "￥" + priceNum + "0" : "￥" + priceNum + ".00";
  $(".sums>em")[0].innerText = priceNum;
  $(".nums>em")[0].innerText = num;
}
//全选复选框操作简化版
function checkboxAll() {
  //处理全选
  $(".checkAll").change(function () {
    $(":checkbox").not($(this)).prop("checked", this.checked);
    addPrices1();
  });

  //处理单个选中和取消
  $(".checkItem").change(function () {
    let checkAl = true;
    for (const item of $(".checkItem")) {
      if (!item.checked) {
        console.log("Check");
        checkAl = false;
      }
    }
    if (checkAl) {
      $(".checkAll").prop("checked", true);
    } else {
      $(".checkAll").prop("checked", false);
    }
    addPrices1();
  });

  // $(dom).on("click", function (e) {
  //   if (e.target.tagName === "INPUT") {
  //     let check = true;
  //     if ($(e.target).attr("class") == "checkAll") {
  //       for (const item of $(".checkAll")) {
  //         item.checked = !item.checked;
  //       }
  //       e.target.checked = !e.target.checked;
  //       $(".checkItem").map(function (index, item) {
  //         item.checked = e.target.checked;
  //         if (item.checked) {
  //           addPrices1();
  //         } else {
  //           addPrices1();
  //         }
  //       });
  //     } else {
  //       //处理单选框
  //       $(".checkItem").map(function (index, item) {
  //         if (!item.checked) {
  //           check = false;
  //           addPrices1();
  //         } else {
  //           addPrices1();
  //         }
  //       });
  //       if (check) {
  //         for (const item of $(".checkAll")) {
  //           item.checked = check;
  //         }
  //       } else {
  //         for (const item of $(".checkAll")) {
  //           item.checked = check;
  //         }
  //       }
  //     }
  //   } else {
  //     return;
  //   }
  // });
}
checkboxAll();

//增加数量
function addNum() {
  // if()
  $(".incr").map((index, item) => {
    $(item).on("click", function (e) {
      let arr1 = [];
      e.preventDefault();
      if ($(".txt")[index].value >= 5) {
        // console.log("限购5个");
        return;
      }
      $(".txt")[index].value++;
      const aa = +$(".price>em")[index].innerText.split("￥")[1];
      let priceNum = ($(".txt")[index].value * aa).toFixed(1);
      priceNum = String(priceNum).includes(".") ? "￥" + priceNum + "0" : "￥" + priceNum + ".00";
      $(".sum>em")[index].innerText = priceNum;
      addPrices1();
    });
  });
}
addNum();

//减数量
function subtractNum() {
  // if()
  $(".decr").map((index, item) => {
    $(item).on("click", function (e) {
      e.preventDefault();
      if ($(".txt")[index].value <= 1) {
        return;
      }
      $(".txt")[index].value--;
      const aa = +$(".price>em")[index].innerText.split("￥")[1];
      let priceNum = ($(".txt")[index].value * aa).toFixed(1);
      priceNum = String(priceNum).includes(".") ? "￥" + priceNum + "0" : "￥" + priceNum + ".00";
      $(".sum>em")[index].innerText = priceNum;
      addPrices1();
    });
  });
}
subtractNum();

//删除按钮功能
function delBtn() {
  $(".del>a").map(function (index, i) {
    $(i).on("click", function (e) {
      e.preventDefault();
      $(this).parent().parent().remove();
      //   $(".item")[index].remove();
      addPrices1();
    });
  });
}
delBtn();

//删除所有
function delAllBtn() {
  $(".delChecked").on("click", function (e) {
    e.preventDefault();
    $(".checkItem").map(function (index, i) {
      console.log(i);
      if (i.checked) {
        $(this).parent().parent().remove();
        addPrices1();
        //   $(i)[index].remove();
      }
    });
  });
}
delAllBtn();
//清空购物车
function delShoping() {
  $(".clearAll").on("click", function (e) {
    e.preventDefault();
    $(".checkItem").map(function (index, i) {
      $(this).parent().parent().remove();
      addPrices1();
      //   $(i)[index].remove();
    });
  });
}
delShoping();
