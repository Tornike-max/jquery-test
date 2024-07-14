// $(document).ready(() => {
//   const page_url = window.location.href;
//   const page_id = page_url.slice(page_url.lastIndexOf("#") + 1);

//   if (page_id === "section3") {
//     $("html,body").animate({
//       scrollTop: $(`#scroll-${page_id}`).offset().top - 20,
//     });
//   }

//   if (page_id === "post") {
//     $("html,body").animate({
//       scrollTop: $(`#scroll-${page_id}`).offset().top,
//     });
//   }
// });

// let viewLogin = false;
// const changepwdtype = () => {
//   let getPwdType = $("#viewPwd");

//   if (viewLogin === false) {
//     getPwdType.attr("type", "text");
//     viewLogin = true;
//   } else if (viewLogin === true) {
//     getPwdType.attr("type", "password");
//     viewLogin = false;
//   }
// };

$(document).ready(() => {
  $("#container").after("<p>a new string</p>");
});
